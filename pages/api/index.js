import dados from '../../dados.json';

const Api = (req, res) => {
  res.status(200).json(dados);
};

export default Api;
