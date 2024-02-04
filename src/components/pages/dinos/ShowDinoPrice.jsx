/**
 * @param {string} name
 * @param {string} category
 * @param {number} price
 * @param {number} neutedPrice
 */
export default function ShowDinoPrice(props) {
  return (
    <div className="text-center">
      <h2 className="text-xl uppercase">{props.name}</h2>
      <ul className="list-none">
        <li className="">{props.category}</li>
        <li className="">Non castré: {props.price}</li>
        <li className="">Castré: {props.neutedPrice}</li>
      </ul>
    </div>
  );
}
