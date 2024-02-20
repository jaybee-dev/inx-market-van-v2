import { useTranslation } from "react-i18next";

/**
 * @param {string} activeName
 * @returns {Component}
 */
export default function Select(props) {
  const { t } = useTranslation()

  const names = props.data.reduce(
    (acc, i) => (acc.includes(i.name) ? acc : acc.concat(i.name)),
    []
  );

  return (
    <div className="text-center m-2">
      <select
        className="rounded text-center w-72 h-8 bg-background border uppercase"
        value={props.activeName}
        onChange={props.onChange}
      >
        <option value="">{props.selectName}</option>
        {names.map((cat) => (
          <option key={cat} value={cat}>
            {t(cat)}
          </option>
        ))}
      </select>
    </div>
  );
}
