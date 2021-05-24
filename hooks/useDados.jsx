import React, { useEffect, useState } from 'react';

const useDados = (caminhoApi) => {
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [dados, setDados] = useState(null);

  useEffect(() => {
    const pegarDados = async () => {
      try {
        const res = await fetch(caminhoApi);
        const json = await res.json();
        setDados(json);
      } catch (error) {
        console.error(error);
        setErro(error);
      }
      setCarregando(false);
    };
    pegarDados();
  }, [caminhoApi]);

  return { carregando, erro, dados };
};

export default useDados;
