import BarraTitulo from '../components/BarraTitulo';
import CardLateral from '../components/CardLateral';
import ChamadaNoticia from '../components/ChamadaNoticia';
import Rodape from '../components/Rodape';
import BarraGloboCom from './../components/BarraGloboCom';
import dados from '../dados.json';
import { fetchEntries } from '../libs/contentful';
import formataData from './../utils/formataData';

const Home = ({ noticias }) => {
  const { menus } = dados;

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50">
        <BarraGloboCom />
        <BarraTitulo />
      </header>

      <main className="flex-grow justify-center">
        <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-4 lg:px-4">
          <div className="w-full lg:w-9/12">
            {noticias &&
              noticias.map((noticia) => {
                const { titulo, subtitulo, chamada, categoria, slug } =
                  noticia.fields;
                const imagem = noticia.fields?.imagem?.fields?.file?.url;

                const dataCriacao = noticia.sys.createdAt;
                const dataAtualizacao = noticia.sys.updatedAt;
                const dataCriacaoFormatada = formataData.amigavel(dataCriacao);
                const dataAtualizacaoFormatada =
                  formataData.amigavel(dataAtualizacao);

                return (
                  <ChamadaNoticia
                    key={`${titulo}__${slug}`}
                    titulo={titulo}
                    subtitulo={subtitulo}
                    chamada={chamada}
                    categoria={categoria}
                    imagem={imagem}
                    slug={slug}
                    dataCriacao={dataCriacaoFormatada}
                    dataAtualizacao={dataAtualizacaoFormatada}
                  />
                );
              })}
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

export default Home;

export const getStaticProps = async () => {
  const noticias = await fetchEntries();

  return {
    props: {
      noticias,
    },
  };
};
