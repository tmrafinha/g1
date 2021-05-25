import React from 'react';
import Link from 'next/link';

const ChamadaNoticia = ({ noticia }) => {
  const { titulo, subtitulo, chamada, data, categoria, imagem, slug } =
    noticia.fields;
  // const imagem = noticia.fields.imagem.file.url;

  return (
    <Link href={slug ? `/noticias/${slug}` : '#'} passHref>
      <a>
        <div className="bg-white border shadow-sm mt-4 py-6 group transform transition-all hover:shadow-md">
          <div className="flex flex-col space-y-2">
            <span className="font-bold px-6">{subtitulo}</span>
            <p className="text-primary group-hover:text-primaryHover text-2xl sm:text-4xl font-bold px-6 sm:pt-28">
              {titulo}
            </p>
            <p className="text-gray-600 px-6 sm:pb-28">{chamada}</p>

            {imagem && (
              <img src={imagem.fields.file.url} alt={titulo} className="" />
            )}
            <div className="flex space-x-2 text-gray-600 px-6 text-xs sm:invisible">
              <span>{data}</span>
              <span>-</span>
              <span>Em {categoria}</span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ChamadaNoticia;
