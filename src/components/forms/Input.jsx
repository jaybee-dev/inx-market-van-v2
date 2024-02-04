/**
 * @param {string} id
 * @param {string} placeholder
 * @param {number} value
 * @param {(n: number) => void} onChange
 * @param {string} label
 */
export default function Input({ id, placeholder, value, onChange, label }) {
  return (
    <div className="grid grid-flow-col auto-cols-max place-items-center place-content-center gap-2">
      <label className="w-20 text-right">{label}</label>
      <input
        id={id}
        type="number"
        className="rounded w-20 h-8 text-center m-1 text-zinc-800 text-xl"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
