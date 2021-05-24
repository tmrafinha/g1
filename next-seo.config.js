const site = `https://${process.env.VERCEL_URL}`;
const siteName = 'G1';
const description = 'Clone do G1 usando TailwindCSS.';
const keywords = 'g1, clone, tailwind, css';

export default {
  defaultTitle: siteName,
  titleTemplate: `%s | ${siteName}`,
  description,
  keywords,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    site_name: siteName,
    description,
  },
};
