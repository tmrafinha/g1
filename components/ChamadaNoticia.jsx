import React from 'react';

const ChamadaNoticia = ({ noticia }) => {
  const { titulo, subtitulo, corpo, data, categoria, imagem } = noticia;

  return (
    <div className="bg-white border shadow-sm mt-4 py-6">
      <div className="flex flex-col space-y-2">
        <span className="font-bold px-6">{subtitulo}</span>
        <a
          href="#"
          className="text-primary text-2xl sm:text-4xl font-bold px-6 sm:pt-28"
        >
          {titulo}
        </a>
        <p className="text-gray-600 px-6 sm:pb-28">{corpo}</p>

        {imagem && <img src={imagem} alt={titulo} className="" />}
        <div className="flex space-x-2 text-gray-600 px-6 text-xs sm:invisible">
          <span>{data}</span>
          <span>-</span>
          <span>Em {categoria}</span>
        </div>
      </div>
    </div>
  );
};

export default ChamadaNoticia;
