import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import BarraGloboCom from './../../components/BarraGloboCom';
import BarraTitulo from './../../components/BarraTitulo';
import CardLateral from './../../components/CardLateral';
import Rodape from './../../components/Rodape';
import dados from '../../dados.json';
import { NextSeo } from 'next-seo';
import { fetchEntries } from '../../libs/contentful';
import { useRouter } from 'next/router';
import formataData from './../../utils/formataData';

const PaginaNoticia = ({ noticia }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Carregando...</div>;
  }

  const { titulo, subtitulo, data, categoria } = noticia[0].fields;
  const dataFormatada = formataData.padrao(data);
  const imagem = noticia[0].fields.imagem?.fields.file.url;
  const corpo = documentToHtmlString(noticia[0].fields.corpo);

  const { menus } = dados;
  return (
    <div className="flex flex-col min-h-screen">
      <NextSeo title={titulo} />
      <header className="sticky top-0 z-50">
        <BarraGloboCom />
        <BarraTitulo titulo={categoria} />
      </header>

      <main className="flex-grow justify-center">
        <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-4 lg:px-4">
          <div className="w-full lg:w-9/12">
            {noticia && (
              <>
                <div className="p-4 space-y-4">
                  <p className="font-bold text-4xl mb-4">{titulo}</p>
                  <p className="text-lg">{subtitulo}</p>
                  <p className="text-xs">{dataFormatada}</p>
                </div>
                <img src={imagem} alt={titulo} />
                <div
                  className="p-4 pb-0"
                  dangerouslySetInnerHTML={{ __html: corpo }}
                />
              </>
            )}
          </div>

          <div className="lg:w-96">
            {menus &&
              menus.map((menu) => (
                <CardLateral
                  key={menu.nome}
                  cabecalho={menu.nome}
                  itens={menu.itens}
                />
              ))}
          </div>
        </div>
      </main>

      <footer>
        <Rodape />
      </footer>
    </div>
  );
};

export default PaginaNoticia;

export const getStaticPaths = async () => ({
  paths: [],
  fallback: true,
});

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;

  const noticia = await fetchEntries({
    content_type: 'noticia',
    limit: 1,
    'fields.slug': slug,
  });

  return {
    props: {
      noticia,
    },
  };
};
