const verificaImagem = (imagemRecebida) => {
  if (!imagemRecebida) {
    false, null, null;
  }

  const imagem = `https:${imagemRecebida.fields.file.url}`;
  const imagemLargura = imagemRecebida.fields.file.details.image.width;
  const imagemAltura = imagemRecebida.fields.file.details.image.height;

  return { imagem, imagemLargura, imagemAltura };
};

export default verificaImagem;
