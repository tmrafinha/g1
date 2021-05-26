import React from 'react';
import Link from 'next/link';

const ChamadaNoticia = ({
  titulo,
  subtitulo,
  chamada,
  categoria,
  imagem,
  slug,
  dataCriacao,
  dataAtualizacao,
}) => {
  return (
    <Link href={slug ? `/noticias/${slug}` : '#'} passHref>
      <a>
        <div className="shadow-sm sm:shadow-none border-b py-4 sm:p-6 group transform transition-all hover:bg-white hover:border hover:shadow-md">
          <div className="flex flex-col sm:flex-row sm:justify-start space-y-2 sm:space-y-0">
            {imagem && (
              <img
                src={imagem}
                alt={titulo}
                className="sm:w-1/3 object-cover hidden sm:flex"
              />
            )}

            <div className="overflow-ellipsis overflow-hidden space-y-4">
              <span className={`font-bold px-6 ${!imagem ? ' sm:px-0' : ''}`}>
                {subtitulo}
              </span>
              <p
                className={`text-primary group-hover:text-primaryHover text-2xl sm:text-2xl lg:text-3xl font-bold px-6 ${
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

              {imagem && (
                <img
                  src={imagem}
                  alt={titulo}
                  className="sm:w-1/3 object-cover sm:hidden"
                />
              )}

              <div className="space-x-2 text-gray-600 px-6 text-xs">
                {dataCriacao !== dataAtualizacao ? (
                  <>
                    <span>Atualizado {dataCriacao}</span>
                    <span>-</span>
                  </>
                ) : (
                  <>
                    <span>Criado {dataCriacao}</span>
                    <span>-</span>
                  </>
                )}
                <span>Categoria {categoria}</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ChamadaNoticia;
