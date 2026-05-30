import { useState } from "react";
import { EmptyState } from "./Dashboard.jsx";
import { formatDate } from "../utils.js";

const blank = { id: "", year: "", title: "", startDate: "", endDate: "", status: "Planejada", notes: "" };

export default function Edicoes({ editions, onSave, onDelete }) {
  const [form, setForm] = useState(blank);

  function submit(event) {
    event.preventDefault();
    onSave({
      ...form,
      year: Number(form.year),
      schedule: editions.find((edition) => edition.id === form.id)?.schedule || []
    });
    setForm(blank);
  }

  return (
    <section className="view active-view">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Registro por ano</p>
          <h2>Edicoes da festividade</h2>
        </div>
      </div>
      <form className="form-grid" onSubmit={submit}>
        <label>Ano<input value={form.year} onChange={(event) => setForm({ ...form, year: event.target.value })} type="number" min="2010" required /></label>
        <label>Titulo<input value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} type="text" required /></label>
        <label>Inicio<input value={form.startDate} onChange={(event) => setForm({ ...form, startDate: event.target.value })} type="date" required /></label>
        <label>Encerramento<input value={form.endDate} onChange={(event) => setForm({ ...form, endDate: event.target.value })} type="date" required /></label>
        <label>Status
          <select value={form.status} onChange={(event) => setForm({ ...form, status: event.target.value })}>
            <option>Planejada</option>
            <option>Em organizacao</option>
            <option>Realizada</option>
          </select>
        </label>
        <label className="full-row">Observacoes<textarea value={form.notes} onChange={(event) => setForm({ ...form, notes: event.target.value })} rows="3" /></label>
        <button type="submit">Salvar edicao</button>
      </form>
      <div className="card-grid">
        {editions.length ? editions.map((edition) => (
          <article className="data-card" key={edition.id} data-tilt>
            <header>
              <div>
                <span>{formatDate(edition.startDate)} a {formatDate(edition.endDate)}</span>
                <strong>{edition.year} - {edition.title}</strong>
              </div>
              <em className="tag">{edition.status}</em>
            </header>
            <p>{edition.notes || "Sem observacoes."}</p>
            <div className="card-actions">
              <button type="button" onClick={() => setForm({ ...blank, ...edition })}>Editar</button>
              <button className="ghost" type="button" onClick={() => onDelete(edition.id)}>Excluir</button>
            </div>
          </article>
        )) : <EmptyState />}
      </div>
    </section>
  );
}
