const items = [
  ["Processo de software", "Planejamento, prototipacao, implementacao web, teste de cadastros e validacao com necessidades da comunidade."],
  ["Engenharia de requisitos", "Necessidades levantadas: guardar memoria, cadastrar participantes, registrar edicoes, mapear locais e consultar dados."],
  ["Analise e projeto", "Estrutura baseada nas entidades Edicao, Participante, Local, Registro Cultural e Programacao."],
  ["Interacao humano-computador", "Navegacao por abas, formularios curtos, busca unica, filtros por ano e leitura clara em celular ou computador."],
  ["Gerencia de projetos", "Etapas organizadas em levantamento, modelagem, desenvolvimento, testes, entrega e manutencao das proximas edicoes."],
  ["Processos de negocio", "O fluxo considera preparacao, novenas, hasteamento, chegada da imagem pelo rio, cortejos, Missa Conga e encerramento."]
];

export default function Projeto() {
  return (
    <section className="view active-view">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Base academica aplicada</p>
          <h2>Processo, requisitos e negocio</h2>
        </div>
      </div>
      <div className="process-grid">
        {items.map(([title, text]) => (
          <article key={title}>
            <strong>{title}</strong>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
