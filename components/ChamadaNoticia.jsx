import React from 'react';
import Link from 'next/link';

const ChamadaNoticia = ({
  titulo,
  subtitulo,
  chamada,
  data,
  categoria,
  imagem,
  slug,
}) => {
  return (
    <Link href={slug ? `/noticias/${slug}` : '#'} passHref>
      <a>
        <div className="shadow-sm sm:shadow-none border-b py-6 sm:p-6 group transform transition-all hover:bg-white hover:border hover:shadow-md">
          <div className="flex flex-col sm:flex-row-reverse sm:justify-end space-y-2 sm:space-y-0">
            <div className="overflow-ellipsis overflow-hidden">
              <span className={`font-bold px-6 ${!imagem ? ' sm:px-0' : ''}`}>
                {subtitulo}
              </span>
              <p
                className={`text-primary group-hover:text-primaryHover text-2xl sm:text-4xl font-bold px-6 ${
                  !imagem ? ' sm:px-0' : ''
                } overflow-ellipsis overflow-hidden`}
              >
                {titulo}
              </p>
              <p
                className={`text-gray-600 px-6 ${
                  !imagem ? ' sm:px-0' : ''
                } overflow-ellipsis overflow-hidden`}
              >
                {chamada}
              </p>
            </div>

            {imagem && (
              <img
                src={imagem}
                alt={titulo}
                className="sm:w-1/3 object-cover"
              />
            )}

            <div className="flex space-x-2 text-gray-600 px-6 text-xs sm:hidden">
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
