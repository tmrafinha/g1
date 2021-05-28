import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import formataData from './formataData';

const separaDadosNoticia = (noticia) => {
  const { titulo, subtitulo, chamada, categoria, slug } = noticia.fields;
  const imagem = noticia.fields?.imagem?.fields?.file?.url;
  const imagemLargura =
    noticia.fields?.imagem?.fields?.file?.details?.image?.width;
  const imagemAltura =
    noticia.fields?.imagem?.fields?.file?.details?.image?.height;
  const corpo = documentToHtmlString(noticia.fields.corpo);

  const dataCriacao = noticia.sys.createdAt;
  const dataAtualizacao = noticia.sys.updatedAt;
  const dataCriacaoAmigavel = formataData.amigavel(dataCriacao);
  const dataCriacaoPadrao = formataData.padrao(dataCriacao);
  const dataAtualizacaoAmigavel = formataData.amigavel(dataAtualizacao);
  const dataAtualizacaoPadrao = formataData.padrao(dataAtualizacao);

  return {
    titulo,
    subtitulo,
    chamada,
    categoria,
    slug,
    imagem,
    imagemLargura,
    imagemAltura,
    corpo,
    dataCriacao,
    dataCriacaoAmigavel,
    dataCriacaoPadrao,
    dataAtualizacao,
    dataAtualizacaoAmigavel,
    dataAtualizacaoPadrao,
  };
};

export default separaDadosNoticia;
