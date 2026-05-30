import { useEffect, useMemo, useState } from "react";
import { seedData } from "./data/seedData.js";
import { createId, firstSundayOfMay, isoDate, normalize } from "./utils.js";
import Accessbar from "./components/Accessbar.jsx";
import Header from "./components/Header.jsx";
import Toolbar from "./components/Toolbar.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Festividade from "./components/Festividade.jsx";
import Edicoes from "./components/Edicoes.jsx";
import Participantes from "./components/Participantes.jsx";
import Locais from "./components/Locais.jsx";
import Cultura from "./components/Cultura.jsx";
import Projeto from "./components/Projeto.jsx";

const STORAGE_KEY = "reinadoSantaIsabelReactDataV1";
const ACCESSIBILITY_KEY = "reinadoSantaIsabelReactAccessibilityV1";

function storedJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function matchesSearch(record, search) {
  return !search || normalize(JSON.stringify(record)).includes(normalize(search));
}

function matchesYear(record, year) {
  if (year === "todos") return true;
  return String(record.year ?? record.editionYear ?? "") === String(year);
}

export default function App() {
  const [data, setData] = useState(() => storedJson(STORAGE_KEY, seedData));
  const [accessibility, setAccessibility] = useState(() => storedJson(ACCESSIBILITY_KEY, { highContrast: false, fontLarge: false }));
  const [activeView, setActiveView] = useState("dashboard");
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("todos");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    localStorage.setItem(ACCESSIBILITY_KEY, JSON.stringify(accessibility));
    document.body.classList.toggle("high-contrast", accessibility.highContrast);
    document.body.classList.toggle("font-large", accessibility.fontLarge);
  }, [accessibility]);

  useEffect(() => {
    const root = document.documentElement;
    const updatePointer = (event) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", updatePointer);
    return () => window.removeEventListener("pointermove", updatePointer);
  }, []);

  useEffect(() => {
    const cards = [...document.querySelectorAll("[data-tilt]")];
    const cleanups = cards.map((card) => {
      const move = (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        card.style.setProperty("--tilt-y", `${(x - 0.5) * 12}deg`);
        card.style.setProperty("--tilt-x", `${(0.5 - y) * 12}deg`);
        card.style.setProperty("--shine-x", `${x * 100}%`);
        card.style.setProperty("--shine-y", `${y * 100}%`);
      };
      const leave = () => {
        card.style.setProperty("--tilt-y", "0deg");
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--shine-x", "50%");
        card.style.setProperty("--shine-y", "0%");
      };

      card.addEventListener("pointermove", move);
      card.addEventListener("pointerleave", leave);
      return () => {
        card.removeEventListener("pointermove", move);
        card.removeEventListener("pointerleave", leave);
      };
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  });

  const years = useMemo(
    () => [...new Set(data.editions.map((edition) => edition.year))].sort((a, b) => b - a),
    [data.editions]
  );

  const filtered = useMemo(() => ({
    editions: data.editions.filter((item) => matchesSearch(item, search)).filter((item) => matchesYear(item, year)).sort((a, b) => b.year - a.year),
    participants: data.participants.filter((item) => matchesSearch(item, search)).filter((item) => matchesYear(item, year)).sort((a, b) => b.editionYear - a.editionYear || a.name.localeCompare(b.name)),
    places: data.places.filter((item) => matchesSearch(item, search)),
    culture: data.culture.filter((item) => matchesSearch(item, search))
  }), [data, search, year]);

  const quickResults = useMemo(() => [
    ...data.editions.map((item) => ({ type: "Edicao", title: `${item.year} - ${item.title}`, detail: item.status, raw: item })),
    ...data.participants.map((item) => ({ type: "Participante", title: item.name, detail: `${item.role} - ${item.editionYear}`, raw: item })),
    ...data.places.map((item) => ({ type: "Local", title: item.name, detail: item.address, raw: item })),
    ...data.culture.map((item) => ({ type: "Cultura", title: item.title, detail: item.category, raw: item }))
  ].filter((item) => matchesSearch(item.raw, search)).filter((item) => matchesYear(item.raw, year)).slice(0, 8), [data, search, year]);

  function upsert(collection, record, prefix) {
    setData((current) => {
      const nextRecord = record.id ? record : { ...record, id: createId(prefix) };
      return {
        ...current,
        [collection]: record.id
          ? current[collection].map((item) => (item.id === record.id ? { ...item, ...nextRecord } : item))
          : [...current[collection], nextRecord]
      };
    });
  }

  function remove(collection, id) {
    if (!confirm("Excluir este registro?")) return;
    setData((current) => ({ ...current, [collection]: current[collection].filter((item) => item.id !== id) }));
  }

  function addNextEdition() {
    const nextYear = Math.max(...years) + 1;
    const sunday = firstSundayOfMay(nextYear);
    const friday = new Date(sunday);
    friday.setUTCDate(sunday.getUTCDate() - 2);
    const saturday = new Date(sunday);
    saturday.setUTCDate(sunday.getUTCDate() - 1);

    const nextEdition = {
      id: createId("edition"),
      year: nextYear,
      title: "Reinado de Nossa Senhora do Rosario da Colonia Santa Isabel",
      startDate: isoDate(friday),
      endDate: isoDate(sunday),
      status: "Planejada",
      notes: "Edicao futura criada para planejamento comunitario, cadastro de participantes e organizacao da programacao.",
      schedule: [
        { date: isoDate(friday), time: "19h", name: "Reza do Terco e atividade cultural", place: "Sede da Irmandade" },
        { date: isoDate(saturday), time: "19h", name: "Hasteamento da Bandeira", place: "Sede da Irmandade" },
        { date: isoDate(sunday), time: "10h", name: "Chegada da imagem pelo Rio Paraopeba", place: "Barca da Colonia Santa Isabel" },
        { date: isoDate(sunday), time: "16h", name: "Missa Conga e encerramento", place: "Sede da Irmandade" }
      ]
    };

    setData((current) => ({ ...current, editions: [...current.editions, nextEdition] }));
    setYear(String(nextYear));
    setActiveView("edicoes");
  }

  function exportData() {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "dados-reinado-santa-isabel.json";
    link.click();
    URL.revokeObjectURL(url);
  }

  function resetData() {
    if (!confirm("Restaurar a base inicial e remover cadastros feitos neste navegador?")) return;
    setData(seedData);
    setSearch("");
    setYear("todos");
  }

  return (
    <>
      <Accessbar
        accessibility={accessibility}
        onToggle={(key) => setAccessibility((current) => ({ ...current, [key]: !current[key] }))}
      />
      <Header activeView={activeView} onViewChange={setActiveView} />
      <main>
        <Toolbar
          search={search}
          year={year}
          years={years}
          onSearch={setSearch}
          onYear={setYear}
          onAddNextEdition={addNextEdition}
          onExport={exportData}
          onReset={resetData}
        />
        <div className="view-shell" key={activeView}>
          {activeView === "dashboard" && <Dashboard data={data} quickResults={quickResults} />}
          {activeView === "festividade" && <Festividade />}
          {activeView === "edicoes" && <Edicoes editions={filtered.editions} onSave={(record) => upsert("editions", record, "edition")} onDelete={(id) => remove("editions", id)} />}
          {activeView === "participantes" && <Participantes participants={filtered.participants} years={years} onSave={(record) => upsert("participants", record, "participant")} onDelete={(id) => remove("participants", id)} />}
          {activeView === "locais" && <Locais places={filtered.places} onSave={(record) => upsert("places", record, "place")} onDelete={(id) => remove("places", id)} />}
          {activeView === "cultura" && <Cultura records={filtered.culture} onSave={(record) => upsert("culture", record, "culture")} onDelete={(id) => remove("culture", id)} />}
          {activeView === "processo" && <Projeto />}
        </div>
      </main>
      <footer>
        <p>
          Dados iniciais baseados na noticia da Prefeitura de Betim:
          <a href="https://www.betim.mg.gov.br/portal/noticias/0/3/15107/cultura-e-devocao-fim-de-semana-marca-celebracao-de-reinado-de-nossa-senhora-do-rosario-da-colonia-santa-isabel"> Cultura e devocao: Reinado de Nossa Senhora do Rosario da Colonia Santa Isabel</a>.
        </p>
        <p>
          Links uteis: <a href="https://www.betim.mg.gov.br">Prefeitura de Betim</a>, <a href="https://www.betim.mg.gov.br/portal/secretarias/2/secretaria-municipal-de-cultura-secult">Secretaria Municipal de Arte e Cultura</a> e <a href="https://brasil.un.org/pt-br/sdgs/11/key-activities">ODS 11</a>.
        </p>
        <p>Os dados novos ficam salvos no navegador deste computador por armazenamento local.</p>
      </footer>
    </>
  );
}
