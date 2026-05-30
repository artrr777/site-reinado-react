const tabs = [
  ["dashboard", "Painel"],
  ["festividade", "Festividade"],
  ["edicoes", "Edicoes"],
  ["participantes", "Participantes"],
  ["locais", "Locais"],
  ["cultura", "Cultura"],
  ["processo", "Projeto"]
];

export default function Header({ activeView, onViewChange }) {
  return (
    <header className="app-header">
      <div className="hero-media">
        <img src="./reinado-colonia-santa-isabel.jpg" alt="Guarda de Congado durante celebracao do Reinado de Nossa Senhora do Rosario" />
      </div>
      <div className="rhythm-field" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <nav className="topbar" aria-label="Navegacao principal">
        <strong>Reinado Santa Isabel</strong>
        <div className="nav-actions">
          {tabs.map(([id, label]) => (
            <button
              key={id}
              className={`tab-button ${activeView === id ? "active" : ""}`}
              type="button"
              onClick={() => onViewChange(id)}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>
      <section className="hero">
        <div>
          <p className="eyebrow">Patrimonio imaterial de Betim desde 2020</p>
          <h1>Memoria viva do Reinado de Nossa Senhora do Rosario da Colonia Santa Isabel</h1>
          <p>Sistema comunitario para registrar edicoes, participantes, locais, informacoes culturais e proximas celebracoes da festa.</p>
        </div>
        <div className="hero-panel" aria-label="Resumo da festa" data-tilt>
          <span>Festa tradicional</span>
          <strong>Primeiro domingo de maio</strong>
          <small>Colonia Santa Isabel, Betim-MG</small>
        </div>
      </section>
    </header>
  );
}
