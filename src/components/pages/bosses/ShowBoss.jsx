export default function ShowBoss(props) {
    return (
      <div className="text-center mt-4 bg-primary-tr rounded">
        <h2 className="text-xl uppercase">{props.name}</h2>
        <ul className="list-none ">
          <li className="list-group-item">MAP: {props.map}</li>
          <li className="text-success">GAMMA: {props.priceGamma}</li>
          <li className="text-info">BETA: {props.priceBeta}</li>
          <li className="text-warning">ALPHA: {props.priceAlpha}</li>
        </ul>
      </div>
    );
  }