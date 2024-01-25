/**
 * @param {string} name
 * @param {string} category
 * @param {number} price
 * @param {number} neutedPrice
 */
export default function ShowDinoPrice({ name, category, price, neutedPrice }) {
  return (
    <div className="text-center">
      <h2 className="display-6">{name}</h2>
      <ul className="list_group">
        <li className="list-group-item">{category}</li>
        <li className="list-group-item">{price}</li>
        <li className="list-group-item">{neutedPrice}</li>
      </ul>
    </div>
  );
}
