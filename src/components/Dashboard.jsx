import { formatDate } from "../utils.js";

export default function Dashboard({ data, quickResults }) {
  const featured = data.editions.find((edition) => edition.year === 2026) || [...data.editions].sort((a, b) => b.year - a.year)[0];

  return (
    <section className="view active-view">
      <div className="metrics" aria-label="Indicadores">
        <Metric label="Edicoes" value={data.editions.length} />
        <Metric label="Participantes" value={data.participants.length} />
        <Metric label="Locais" value={data.places.length} />
        <Metric label="Registros culturais" value={data.culture.length} />
      </div>
      <div className="split-layout">
        <section className="panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Programacao de referencia</p>
              <h2>Edicao {featured?.year || ""}</h2>
            </div>
          </div>
          <div className="timeline">
            {featured?.schedule?.length ? featured.schedule.map((item) => (
              <article key={`${item.date}-${item.time}-${item.name}`} data-tilt>
                <div>
                  <strong>{item.time}</strong>
                  <span>{formatDate(item.date)}</span>
                </div>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.place}</span>
                </div>
              </article>
            )) : <EmptyState />}
          </div>
        </section>
        <section className="panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Consulta rapida</p>
              <h2>Dados cadastrados</h2>
            </div>
          </div>
          <div className="compact-list">
            {quickResults.length ? quickResults.map((item) => (
              <article key={`${item.type}-${item.title}`} data-tilt>
                <span>{item.type}</span>
                <strong>{item.title}</strong>
                <span>{item.detail}</span>
              </article>
            )) : <EmptyState />}
          </div>
        </section>
      </div>
    </section>
  );
}

function Metric({ label, value }) {
  return (
    <article data-tilt>
      <span>{label}</span>
      <strong>{value}</strong>
    </article>
  );
}

export function EmptyState() {
  return <div className="empty-state">Nenhum registro encontrado.</div>;
}
