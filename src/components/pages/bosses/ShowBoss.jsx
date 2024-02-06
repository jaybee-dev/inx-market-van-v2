export default function ShowBoss(props) {
    return (
      <div className="text-center">
        <h2 className="text-xl uppercase">{props.name}</h2>
        <ul className="list-none">
          <li className="list-group-item">MAP: {props.map}</li>
          <li className="text-green-400">GAMMA: {props.priceGamma}</li>
          <li className="text-blue-400">BETA: {props.priceBeta}</li>
          <li className="text-red-400">ALPHA: {props.priceAlpha}</li>
        </ul>
      </div>
    );
  }