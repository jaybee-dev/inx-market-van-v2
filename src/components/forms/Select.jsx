/**
 * @param {string} activeName
 * @returns {Component}
 */
export default function Select(props) {
  const names = props.data.reduce(
    (acc, i) => (acc.includes(i.name) ? acc : acc.concat(i.name)),
    []
  );

  return (
    <div className="text-center mt-2 ">
      <select
        className="rounded text-center w-40 h-6 bg-background border"
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
