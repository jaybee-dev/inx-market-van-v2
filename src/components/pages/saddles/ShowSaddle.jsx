export default function ShowSaddle(props) {
    return (
      <div className="text-center">
        <h2 className="text-xl uppercase">{props.name}</h2>
        <ul className="list-none">
          <li className="list-group-item">{props.details}</li>
          <li className="list-group-item">{props.price}</li>
        </ul>
      </div>
    );
  }