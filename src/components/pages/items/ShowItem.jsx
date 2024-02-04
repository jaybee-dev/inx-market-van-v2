export default function ShowItem({ name, type, amount, details, price }) {
    return (
      <div className="text-center">
        <h2 className="text-xl uppercase">{name}</h2>
        <ul className="list-none">
          <li className="list-group-item">{type}</li>
          <li className="list-group-item">{amount}</li>
          <li className="list-group-item">{details}</li>
          <li className="list-group-item">{price}</li>
        </ul>
      </div>
    );
  }