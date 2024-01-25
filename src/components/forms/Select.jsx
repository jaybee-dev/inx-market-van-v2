import { DINOS } from "../../datas/DINOS.js";

/**
 * @param {string} activeName
 * @param {} onChange
 * @returns
 */
export default function Select({ activeName, onChange }) {
  const names = DINOS.reduce(
    (acc, dino) => (acc.includes(dino.name) ? acc : acc.concat(dino.name)),
    []
  );

  return (
    <div className="text-center">
      <select
        className="form-select-sm"
        value={activeName}
        onChange={onChange}
      >
        <option value="">Choose dino</option>
        {names.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}
