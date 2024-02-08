/**
 * @param {string} id
 * @param {string} placeholder
 * @param {number} value
 * @param {(n: number) => void} onChange
 * @param {string} label
 */
export default function Input({ id, placeholder, value, onChange, label }) {
  return (
    <div className="grid grid-flow-col auto-cols-max place-items-center place-content-center gap-4 bg-secondary rounded">
      <label className="w-20 text-right text-primary">{label}</label>
      <input
        id={id}
        type="number"
        className="text-secondary rounded w-20 h-8 text-center m-1 text-xl"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
