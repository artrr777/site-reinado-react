import { useState } from "react";
import { EmptyState } from "./Dashboard.jsx";

const blank = { id: "", title: "", category: "Historia", description: "" };
const categories = ["Historia", "Rito", "Patrimonio", "Personagem", "Documento"];

export default function Cultura({ records, onSave, onDelete }) {
  const [form, setForm] = useState(blank);

  function submit(event) {
    event.preventDefault();
    onSave(form);
    setForm(blank);
  }

  return (
    <section className="view active-view">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Memoria cultural</p>
          <h2>Informacoes da comunidade</h2>
        </div>
      </div>
      <form className="form-grid" onSubmit={submit}>
        <label>Titulo<input value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} type="text" required /></label>
        <label>Categoria
          <select value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })}>
            {categories.map((category) => <option key={category}>{category}</option>)}
          </select>
        </label>
        <label className="full-row">Descricao<textarea value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} rows="4" required /></label>
        <button type="submit">Salvar registro cultural</button>
      </form>
      <div className="card-grid">
        {records.length ? records.map((record) => (
          <article className="data-card" key={record.id}>
            <header>
              <div>
                <span>{record.category}</span>
                <strong>{record.title}</strong>
              </div>
            </header>
            <p>{record.description}</p>
            <div className="card-actions">
              <button type="button" onClick={() => setForm({ ...blank, ...record })}>Editar</button>
              <button className="ghost" type="button" onClick={() => onDelete(record.id)}>Excluir</button>
            </div>
          </article>
        )) : <EmptyState />}
      </div>
    </section>
  );
}
