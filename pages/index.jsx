import React from 'react';
import BarraTitulo from '../components/BarraTitulo';
import CardLateral from '../components/CardLateral';
import ChamadaNoticia from '../components/ChamadaNoticia';
import Rodape from '../components/Rodape';
import BarraGloboCom from './../components/BarraGloboCom';
import useDados from './../hooks/useDados';

const Home = () => {
  const enderecoApi = '/api';
  const { carregando, erro, dados } = useDados(enderecoApi);

  if (carregando) {
    return (
      <div>
        <p>Carregando...</p>
      </div>
    );
  }

  if (erro) {
    return (
      <div>
        <p>Ocorreu um erro ao carregar. Tente em instantes.</p>
      </div>
    );
  }

  const { noticias, menus } = dados;

  return (
    <div>
      <header className="sticky top-0">
        <BarraGloboCom />
        <BarraTitulo />
      </header>

      <main className="flex flex-col lg:flex-row lg:space-x-4 lg:px-4">
        <div className="w-full">
          {noticias &&
            noticias.map((noticia) => (
              <ChamadaNoticia key={noticia.titulo} noticia={noticia} />
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
