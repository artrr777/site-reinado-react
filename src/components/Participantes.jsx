import { useState } from "react";
import { EmptyState } from "./Dashboard.jsx";

const blank = { id: "", name: "", role: "", editionYear: "", contact: "", notes: "" };
const roles = ["Visitante", "Morador", "Capitao", "Guarda/Terno", "Organizador", "Convidado", "Devoto"];

export default function Participantes({ participants, years, onSave, onDelete }) {
  const [form, setForm] = useState({ ...blank, editionYear: years[0] || "" });

  function submit(event) {
    event.preventDefault();
    onSave({ ...form, editionYear: Number(form.editionYear) });
    setForm({ ...blank, editionYear: years[0] || "" });
  }

  return (
    <section className="view active-view">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Cadastro comunitario</p>
          <h2>Participantes da festa</h2>
        </div>
      </div>
      <form className="form-grid" onSubmit={submit}>
        <label>Nome<input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} type="text" required /></label>
        <label>Funcao<input value={form.role} onChange={(event) => setForm({ ...form, role: event.target.value })} list="roleSuggestions" type="text" required /></label>
        <label>Ano
          <select value={form.editionYear} onChange={(event) => setForm({ ...form, editionYear: event.target.value })} required>
            {years.map((year) => <option key={year} value={year}>{year}</option>)}
          </select>
        </label>
        <label>Contato<input value={form.contact} onChange={(event) => setForm({ ...form, contact: event.target.value })} type="text" placeholder="Telefone ou email" /></label>
        <label className="full-row">Observacoes<textarea value={form.notes} onChange={(event) => setForm({ ...form, notes: event.target.value })} rows="3" /></label>
        <button type="submit">Salvar participante</button>
      </form>
      <datalist id="roleSuggestions">
        {roles.map((role) => <option key={role} value={role} />)}
      </datalist>
      <div className="table-wrap">
        {participants.length ? (
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Funcao</th>
                <th>Ano</th>
                <th>Contato</th>
                <th>Observacoes</th>
                <th>Acoes</th>
              </tr>
            </thead>
            <tbody>
              {participants.map((participant) => (
                <tr key={participant.id}>
                  <td><strong>{participant.name}</strong></td>
                  <td>{participant.role}</td>
                  <td>{participant.editionYear}</td>
                  <td>{participant.contact || "-"}</td>
                  <td>{participant.notes || "-"}</td>
                  <td className="card-actions">
                    <button type="button" onClick={() => setForm({ ...blank, ...participant })}>Editar</button>
                    <button className="ghost" type="button" onClick={() => onDelete(participant.id)}>Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : <EmptyState />}
      </div>
    </section>
  );
}
