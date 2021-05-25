import { useEffect, useState } from 'react';
import { fetchEntries } from '../util/contentfulPosts';

const useNoticias = () => {
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [noticias, setNoticias] = useState(null);

  useEffect(() => {
    const getNoticias = async () => {
      try {
        const res = await fetchEntries();
        setNoticias(res);
      } catch (error) {
        console.error(error);
        setErro(error);
      }
      setCarregando(false);
    };
    getNoticias();
  }, []);

  return { carregando, erro, noticias };
};

export default useNoticias;
