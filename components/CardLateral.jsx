import React from 'react';
import ItemCardLateral from './ItemCardLateral';

const CardLateral = ({ cabecalho = 'ahsjkdhasjkhdkjas asd sad', rodape }) => {
  return (
    <div className="bg-white border mt-4">
      <div className="flex flex-col divide-y">
        <div className="">
          <p className="p-4 font-bold">{cabecalho}</p>
        </div>

        <div className="px-4 divide-y">
          <ItemCardLateral />
          <ItemCardLateral />
          <ItemCardLateral />
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
