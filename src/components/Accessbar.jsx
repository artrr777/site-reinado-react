export default function Accessbar({ accessibility, onToggle }) {
  return (
    <div className="accessbar" aria-label="Preferencias de acessibilidade">
      <div>
        <button
          className="text-button"
          type="button"
          aria-pressed={accessibility.highContrast}
          onClick={() => onToggle("highContrast")}
        >
          Alto contraste
        </button>
        <button
          className="text-button"
          type="button"
          aria-pressed={accessibility.fontLarge}
          onClick={() => onToggle("fontLarge")}
        >
          Fonte ampliada
        </button>
      </div>
      <div className="social-links" aria-label="Links institucionais">
        <a href="https://www.instagram.com/prefeiturabetim/">Instagram</a>
        <a href="https://www.facebook.com/prefeituradebetim/">Facebook</a>
        <a href="https://www.youtube.com/user/PrefeituradeBetim">YouTube</a>
      </div>
    </div>
  );
}
