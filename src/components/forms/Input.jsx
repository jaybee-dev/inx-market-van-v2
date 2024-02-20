/**
 * @param {string} id
 * @param {string} placeholder
 * @param {number} value
 * @param {(n: number) => void} onChange
 * @param {string} label
 */
export default function Input({ id, placeholder, value, onChange, label }) {
  return (
    <div className="grid grid-flow-col col-start-3 col-end-9 auto-cols-max place-items-center place-content-center gap-4 bg-secondary rounded-sm">
      <label className="w-24 text-center text-text uppercase text-xl">{label}</label>
      <input
        id={id}
        type="number"
        className="dark:text-background rounded-sm w-20 h-8 text-center m-1 text-xl"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
