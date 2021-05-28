import BarraGloboCom from './../../components/BarraGloboCom';
import BarraTitulo from './../../components/BarraTitulo';
import CardLateral from './../../components/CardLateral';
import Rodape from './../../components/Rodape';
import dados from '../../dados.json';
import { NextSeo } from 'next-seo';
import { fetchEntries } from '../../libs/contentful';
import { useRouter } from 'next/router';
import Image from 'next/image';
import separaDadosNoticia from '../../utils/separaDadosNoticia';

const PaginaNoticia = ({ noticia }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Carregando...</div>;
  }

  const {
    titulo,
    subtitulo,
    categoria,
    imagem,
    imagemLargura,
    imagemAltura,
    corpo,
    dataCriacao,
    dataCriacaoPadrao,
    dataAtualizacao,
    dataAtualizacaoAmigavel,
  } = separaDadosNoticia(noticia);

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

                  <div className="flex flex-col">
                    <div className="flex space-x-2">
                      {dataCriacao !== dataAtualizacao && (
                        <>
                          <span className="text-xs">
                            Atualizado {dataAtualizacaoAmigavel}
                          </span>
                          <span className="text-xs"> - </span>
                        </>
                      )}
                      <span className="text-xs">
                        Criado em {dataCriacaoPadrao}
                      </span>
                    </div>
                    <p className="text-xs">Categoria {categoria}</p>
                  </div>
                </div>
                {imagem && (
                  <Image
                    src={imagem}
                    alt={titulo}
                    width={imagemLargura}
                    height={imagemAltura}
                    layout="responsive"
                  />
                )}
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

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;

  const noticias = await fetchEntries({
    content_type: 'noticia',
    limit: 1,
    'fields.slug': slug,
  });
  const noticia = noticias[0];

  return {
    props: {
      noticia,
      revalidate: 60 * 60 * 2,
    },
  };
};
