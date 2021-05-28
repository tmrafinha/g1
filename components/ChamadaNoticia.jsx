import Link from 'next/link';
import Image from 'next/image';

const ChamadaNoticia = ({
  titulo,
  subtitulo,
  chamada,
  categoria,
  imagem,
  imagemLargura,
  imagemAltura,
  slug,
  dataCriacao,
  dataAtualizacao,
  posicao,
}) => {
  const topo = !!(posicao <= 2);

  return (
    <div className={`${topo ? 'w-full lg:w-1/2 lg:h-80' : ''}`}>
      <Link href={slug ? `/noticias/${slug}` : '#'} passHref>
        <a>
          <div
            className={`shadow-sm sm:shadow-none border-b py-4 sm:py-4 group transform transition-all hover:bg-white hover:border hover:shadow-lg ${
              topo ? 'lg:h-full flex items-end ' : 'sm:pl-4'
            }`}
            style={
              topo
                ? {
                    background: `url(${imagem}) no-repeat center`,
                    backgroundSize: 'cover',
                    textShadow: '2px 2px 2px #00000055',
                  }
                : {}
            }
          >
            <div className="flex flex-col sm:flex-row sm:justify-start space-y-2 sm:space-y-0">
              {imagem && (
                <div
                  className={`w-1/3 object-cover hidden ${
                    topo ? '' : 'sm:flex'
                  }`}
                >
                  <Image
                    src={imagem}
                    alt={titulo}
                    width={imagemLargura}
                    height={imagemAltura}
                    // layout="responsive"
                  />
                </div>
              )}

              <div className="flex-grow sm:w-2/3 overflow-ellipsis overflow-hidden space-y-4">
                <span
                  className={`font-bold px-4 ${!imagem ? ' sm:px-0' : ''} ${
                    topo ? 'text-white' : ''
                  }`}
                >
                  {subtitulo}
                </span>
                <p
                  className={` text-2xl sm:text-2xl lg:text-3xl font-bold px-4 ${
                    !imagem ? ' sm:px-0' : ''
                  } overflow-ellipsis overflow-hidden ${
                    topo
                      ? 'text-white'
                      : 'text-primary group-hover:text-primaryHover'
                  }`}
                >
                  {titulo}
                </p>
                <p
                  className={`px-4 ${
                    !imagem ? ' sm:px-0' : ''
                  } overflow-ellipsis overflow-hidden  ${
                    topo ? 'text-gray-100' : 'text-gray-400'
                  }`}
                >
                  {chamada}
                </p>

                {imagem && (
                  <div
                    className={`sm:w-1/3 object-cover ${
                      topo ? 'hidden' : 'sm:hidden'
                    }`}
                  >
                    <Image
                      src={imagem}
                      alt={titulo}
                      width={imagemLargura}
                      height={imagemAltura}
                      // layout="responsive"
                    />
                  </div>
                )}

                <div
                  className={`space-x-2 px-4 text-xs ${
                    topo ? 'text-gray-200' : 'text-gray-400'
                  }`}
                >
                  {dataCriacao !== dataAtualizacao ? (
                    <>
                      <span>Atualizado {dataAtualizacao}</span>
                      <span>-</span>
                    </>
                  ) : (
                    <span>
                      <span>Criado {dataCriacao}</span>
                      <span>-</span>
                    </span>
                  )}
                  <span>Categoria {categoria}</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ChamadaNoticia;
