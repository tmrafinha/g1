import React from 'react';

const ChamadaNoticia = ({
  titulo = 'Titulo',
  subtitulo = 'Subtitulo',
  texto = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac leo ac ante gravida venenatis. Praesent vel blandit quam.',
  data = 'hoje',
  categoria = 'Diversos',
  imagem = false,
}) => {
  return (
    <div className="bg-white border shadow-sm mt-4 p-6">
      <div className="flex flex-col space-y-2">
        <span className="font-bold">{subtitulo}</span>
        <a href="#" className="text-primary text-2xl font-bold">
          {titulo}
        </a>
        <p className="text-gray-600">{texto}</p>

        <div className="flex space-x-2 text-gray-600">
          <span>{data}</span>
          <span>-</span>
          <span>Em {categoria}</span>
          {imagem && <img src={imagem} alt={titulo} />}
        </div>
      </div>
    </div>
  );
};

export default ChamadaNoticia;
