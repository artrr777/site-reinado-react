export default function Festividade() {
  return (
    <section className="view active-view">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Portal cultural</p>
          <h2>A festividade e seus saberes</h2>
        </div>
      </div>
      <div className="quick-card-grid">
        <article>
          <span>Calendario oficial</span>
          <strong>Edicoes por ano</strong>
          <p>Datas de novenas, levantamento de bandeira, cortejos, Missa Conga e encerramento ficam ligadas a cada edicao cadastrada.</p>
        </article>
        <article>
          <span>Rotas e locais</span>
          <strong>Mapa comunitario</strong>
          <p>O sistema organiza a Sede da Irmandade, o Rio Paraopeba, a barca e demais pontos usados pela comunidade.</p>
        </article>
        <article>
          <span>Acervo e memoria</span>
          <strong>Historia viva</strong>
          <p>Registros culturais reunem narrativas, personagens, ritos, documentos e informacoes para moradores, visitantes e pesquisadores.</p>
        </article>
      </div>
      <div className="story-layout">
        <section className="panel">
          <p className="eyebrow">Tradicao de Betim</p>
          <h3>Cultura viva que atravessa geracoes</h3>
          <p>A Festa do Reinado reune a comunidade em torno da devocao a Nossa Senhora do Rosario, preservando cantos, tambores, cortejos e memorias ancestrais.</p>
          <p>Este espaco digital transforma essa pratica comunitaria em um sistema de consulta, cadastro e continuidade historica para as proximas edicoes.</p>
        </section>
        <section className="panel guard-panel">
          <p className="eyebrow">Guardas e ternos</p>
          <h3>Funcoes culturais no cortejo</h3>
          <div className="guard-grid">
            <Guard title="Congo" text="Dancas, cantos e roupas vibrantes que anunciam a alegria do cortejo." />
            <Guard title="Mocambique" text="Ritmo cadenciado, gungas e guarda da coroa e dos altares." />
            <Guard title="Catupe" text="Musicalidade propria que amplia a harmonia da celebracao." />
            <Guard title="Marujada" text="Cantos ligados as jornadas pelas aguas e a chegada da imagem pelo rio." />
          </div>
        </section>
      </div>
    </section>
  );
}

function Guard({ title, text }) {
  return (
    <article>
      <strong>{title}</strong>
      <p>{text}</p>
    </article>
  );
}
