import React from 'react';
import LinkBarraGloboCom from './LinkBarraGloboCom';

const BarraGloboCom = () => {
  return (
    <div className="p-2 bg-bg">
      <div className="flex items-center justify-between">
        <div className="flex space-x-4">
          <LinkBarraGloboCom
            texto="globo.com"
            link="https://www.globo.com"
            cor="blue"
          />
          <LinkBarraGloboCom
            texto="g1"
            link="https://g1.globo.com/"
            cor="#a80000"
          />
          <LinkBarraGloboCom
            texto="ge"
            link="https://globoesporte.globo.com/"
            cor="#06aa48"
          />
          <LinkBarraGloboCom
            texto="gshow"
            link="https://gshow.globo.com/"
            cor="#ff7f00"
          />
          <LinkBarraGloboCom
            texto="videos"
            link="https://globoplay.globo.com/"
            cor="#005cef"
          />
        </div>

        <div className="flex">
          <LinkBarraGloboCom texto="Entre" link="#" cor="#1063e0" botao />
        </div>
      </div>
    </div>
  );
};

export default BarraGloboCom;
