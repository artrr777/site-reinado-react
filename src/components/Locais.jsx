import { useState } from "react";
import { EmptyState } from "./Dashboard.jsx";

const blank = { id: "", name: "", type: "", address: "", usage: "" };

export default function Locais({ places, onSave, onDelete }) {
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
          <p className="eyebrow">Territorio da celebracao</p>
          <h2>Locais das atividades</h2>
        </div>
      </div>
      <form className="form-grid" onSubmit={submit}>
        <label>Nome<input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} type="text" required /></label>
        <label>Tipo<input value={form.type} onChange={(event) => setForm({ ...form, type: event.target.value })} type="text" required /></label>
        <label className="full-row">Endereco ou referencia<input value={form.address} onChange={(event) => setForm({ ...form, address: event.target.value })} type="text" required /></label>
        <label className="full-row">Uso na festa<textarea value={form.usage} onChange={(event) => setForm({ ...form, usage: event.target.value })} rows="3" /></label>
        <button type="submit">Salvar local</button>
      </form>
      <div className="card-grid">
        {places.length ? places.map((place) => (
          <article className="data-card" key={place.id}>
            <header>
              <div>
                <span>{place.type}</span>
                <strong>{place.name}</strong>
              </div>
            </header>
            <p>{place.address}</p>
            <p>{place.usage || "Sem uso registrado."}</p>
            <div className="card-actions">
              <button type="button" onClick={() => setForm({ ...blank, ...place })}>Editar</button>
              <button className="ghost" type="button" onClick={() => onDelete(place.id)}>Excluir</button>
            </div>
          </article>
        )) : <EmptyState />}
      </div>
    </section>
  );
}
