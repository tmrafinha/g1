import React from 'react';

const LinkBarraGloboCom = ({
  texto = 'Template',
  cor = '#666',
  link = '#',
  botao = false,
}) => {
  return (
    <div
      className={`${
        botao
          ? 'bg-white border rounded px-2 shadow-sm transform transition-all hover:shadow-md'
          : ''
      }`}
    >
      <a href={link} style={{ color: cor }}>
        {texto}
      </a>
    </div>
  );
};

export default LinkBarraGloboCom;
