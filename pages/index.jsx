import BarraTitulo from '../components/BarraTitulo';
import CardLateral from '../components/CardLateral';
import ChamadaNoticia from '../components/ChamadaNoticia';
import Rodape from '../components/Rodape';
import BarraGloboCom from './../components/BarraGloboCom';
import dados from '../dados.json';
import { fetchEntries } from './../util/contentfulPosts';

const Home = ({ noticias }) => {
  const { menus } = dados;

  return (
    <div>
      <header className="sticky top-0 z-50">
        <BarraGloboCom />
        <BarraTitulo />
      </header>

      <main className="flex flex-col lg:flex-row lg:space-x-4 lg:px-4">
        <div className="w-full">
          {noticias &&
            noticias.map((noticia) => (
              <ChamadaNoticia key={noticia.fields.titulo} noticia={noticia} />
            ))}
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
