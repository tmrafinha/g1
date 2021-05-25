import React from 'react';
import ItemCardLateral from './ItemCardLateral';

const CardLateral = ({ cabecalho = 'cabecalho', itens = [], rodape }) => {
  return (
    <div className="bg-white border mt-4">
      <div className="flex flex-col divide-y">
        <div className="">
          <p className="p-4 font-bold">{cabecalho}</p>
        </div>

        <div className="px-4 divide-y">
          {itens.map((item) => (
            <ItemCardLateral
              key={item.texto}
              texto={item.texto}
              link={item.link}
            />
          ))}
        </div>
        {rodape && (
          <div className="">
            <p className="p-4 text-primary">{rodape}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardLateral;
