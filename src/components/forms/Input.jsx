/**
 * @param {string} id
 * @param {string} placeholder
 * @param {number} value
 * @param {(v: value) => void} onChange
 * @param {string} label
 */
export default function Input({ id, placeholder, value, onChange, label }) {
  return (
    <div className="input-group-sm">
      <label className="floatingInput text-warning">{label}</label>
      <input
        id={id}
        type="text"
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
