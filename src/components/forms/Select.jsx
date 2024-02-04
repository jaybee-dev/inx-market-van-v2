/**
 * @param {string} activeName
 * @param {*} onChange
 * @returns {Component}
 */
export default function Select(props) {
  const names = props.data.reduce(
    (acc, i) => (acc.includes(i.name) ? acc : acc.concat(i.name)),
    []
  );

  return (
    <div className="text-center mt-2">
      <select
        className="text-zinc-800 rounded text-center h-8"
        value={props.activeName}
        onChange={props.onChange}
      >
        <option value="">{props.selectName}</option>
        {names.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}
