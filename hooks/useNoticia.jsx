import { useEffect, useState } from 'react';
import { fetchEntries } from '../util/contentfulPosts';

const useNoticia = (slug) => {
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [noticia, setNoticia] = useState(null);

  useEffect(() => {
    const getNoticia = async () => {
      try {
        const res = await fetchEntries({
          content_type: 'noticia',
          limit: 1,
          'fields.slug': slug,
        });
        setNoticia(res);
      } catch (error) {
        console.error(error);
        setErro(error);
      }
      setCarregando(false);
    };

    if (slug) {
      getNoticia();
    }
  }, [slug]);

  return { carregando, erro, noticia };
};

export default useNoticia;
