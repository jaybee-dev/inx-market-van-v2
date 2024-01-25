export default function Switch() {
  return (
    <div className="form-check form-switch">
      <input
        type="checkbox"
        className="form-check-input"
        id="theme-switch"
        role="switch"
      />
      <label className="form-check-label text-dark" htmlFor="theme-switch">
        DARK MODE
      </label>
    </div>
  );
}
