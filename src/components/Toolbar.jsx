export default function Toolbar({ search, year, years, onSearch, onYear, onAddNextEdition, onExport, onReset }) {
  return (
    <section className="toolbar" aria-label="Busca e acoes">
      <label className="search-field">
        <span>Buscar</span>
        <input value={search} onChange={(event) => onSearch(event.target.value)} type="search" placeholder="Nome, local, rito, guarda..." />
      </label>
      <label>
        <span>Ano</span>
        <select value={year} onChange={(event) => onYear(event.target.value)}>
          <option value="todos">Todos</option>
          {years.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </label>
      <button type="button" onClick={onAddNextEdition}>Adicionar proxima edicao</button>
      <button type="button" onClick={onExport}>Exportar dados</button>
      <button className="ghost" type="button" onClick={onReset}>Restaurar base</button>
    </section>
  );
}
