import BarraTitulo from '../components/BarraTitulo';
import CardLateral from '../components/CardLateral';
import Rodape from '../components/Rodape';
import BarraGloboCom from './../components/BarraGloboCom';
import dados from '../dados.json';

const Home = () => {
  const { menus } = dados;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50">
        <BarraGloboCom />
        <BarraTitulo />
      </header>

      <main className="flex-grow justify-center max-w-4xl mx-auto px-4 py-8 space-y-10">
        {/* 📰 HEADLINE */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
            Governo confirma liberação dos lucros do FGTS; milhões de trabalhadores já podem consultar valores
          </h1>
          <p className="text-lg text-gray-600">
            Medida beneficia brasileiros com carteira assinada e libera saque imediato através do site oficial da Caixa.
          </p>
        </div>

        {/* 🎬 VÍDEO */}
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://player.vimeo.com/video/1032190578?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full h-full"
            title="Notícia FGTS"
          ></iframe>
        </div>

        {/* CTA LOGO ABAIXO DO VÍDEO */}
        <div className="text-center">
          <a
            href="https://rendimento.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold text-lg px-8 py-3 rounded-lg shadow transition duration-200 hover:shadow-lg"
          >
            Consultar saldo no site oficial
          </a>
          <p className="text-sm text-gray-500 mt-2">
            Link direto para consulta no portal do FGTS.
          </p>
        </div>

        {/* TEXTO + CTA FINAL */}
        <article className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 space-y-6">
          <p className="text-lg text-gray-800 leading-relaxed">
            A decisão de liberar os lucros do Fundo de Garantia do Tempo de Serviço (FGTS) já está em vigor. 
            Trabalhadores de diferentes setores poderão ter acesso a valores que estavam retidos e 
            poderão consultar rapidamente pela internet.  
          </p>

          <p className="text-lg text-gray-800 leading-relaxed">
            O processo é simples: a verificação pode ser feita online em poucos minutos. 
            Especialistas orientam que o trabalhador não perca tempo, já que o prazo é limitado.  
          </p>

          <div className="text-center pt-2">
            <a
              href="https://rendimento.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold text-lg px-8 py-3 rounded-lg shadow transition duration-200 hover:shadow-lg"
            >
              Acessar site oficial da Caixa
            </a>
            <p className="text-sm text-gray-500 mt-2">
              Verifique diretamente no site da Caixa Econômica Federal.
            </p>
          </div>
        </article>

        {/* 📑 COLUNA LATERAL */}
        <div className="mt-12 lg:w-96">
          {menus &&
            menus.map((menu) => (
              <CardLateral
                key={menu.nome}
                cabecalho={menu.nome}
                itens={menu.itens}
              />
            ))}
        </div>
      </main>

      <footer>
        <Rodape />
      </footer>
    </div>
  );
};

export default Home;
