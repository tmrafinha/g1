import React from 'react';
import BarraTitulo from '../components/BarraTitulo';
import CardLateral from '../components/CardLateral';
import ChamadaNoticia from '../components/ChamadaNoticia';
import Rodape from '../components/Rodape';
import BarraGloboCom from './../components/BarraGloboCom';

const Home = () => {
  return (
    <div>
      <BarraGloboCom />
      <BarraTitulo />
      <ChamadaNoticia />
      <ChamadaNoticia />
      <CardLateral />
      <CardLateral cabecalho="Mais Lidas" />
      <Rodape />
    </div>
  );
};

export default Home;
