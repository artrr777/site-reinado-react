export function formatDate(value) {
  return new Intl.DateTimeFormat("pt-BR", { timeZone: "UTC" }).format(new Date(`${value}T00:00:00Z`));
}

export function normalize(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export function firstSundayOfMay(year) {
  const date = new Date(Date.UTC(year, 4, 1));
  const offset = (7 - date.getUTCDay()) % 7;
  date.setUTCDate(1 + offset);
  return date;
}

export function isoDate(date) {
  return date.toISOString().slice(0, 10);
}

export function createId(prefix) {
  if (crypto.randomUUID) return `${prefix}-${crypto.randomUUID()}`;
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
