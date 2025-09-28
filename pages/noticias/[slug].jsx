import BarraGloboCom from './../../components/BarraGloboCom';
import BarraTitulo from './../../components/BarraTitulo';
import CardLateral from './../../components/CardLateral';
import Rodape from './../../components/Rodape';
import dados from '../../dados.json';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

const PaginaNoticia = ({ noticia }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Carregando...</div>;
  }

  if (!noticia) {
    return <div>Notícia não encontrada</div>;
  }

  const { titulo, subtitulo, categoria, corpo } = noticia;
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
            <div className="p-4 space-y-4">
              <p className="font-bold text-4xl mb-4">{titulo}</p>
              <p className="text-lg">{subtitulo}</p>
              <div
                className="p-4 pb-0"
                dangerouslySetInnerHTML={{ __html: corpo }}
              />
            </div>
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
  const { menus } = dados;

  // Cria os slugs a partir do campo "texto" dos itens
  const paths =
    menus
      .flatMap((menu) => menu.itens)
      .map((item) => ({
        params: {
          slug: item.texto.toLowerCase().replace(/\s+/g, '-'),
        },
      })) || [];

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { menus } = dados;

  // Procura a notícia correspondente no JSON
  const noticia =
    menus
      .flatMap((menu) => menu.itens)
      .find(
        (item) =>
          item.texto.toLowerCase().replace(/\s+/g, '-') === params.slug
      ) || null;

  return {
    props: {
      noticia,
    },
    revalidate: 60 * 60 * 2, // 2 horas
  };
};
