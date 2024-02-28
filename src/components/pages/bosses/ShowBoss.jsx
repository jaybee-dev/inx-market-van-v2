import { getImgBossesURL } from "../../../functions/getImgBosses";

export default function ShowBoss(props) {
    return (
      <div className="text-center mt-4 rounded">
        <img className="relative opacity-75 left-0 right-0 m-auto" alt={props.name} src={ props.image ? getImgBossesURL(props.image) : null} />
        <ul className="list-none ">
          <li className="list-group-item text-lg">MAP : {props.map}</li>
          <li className="text-success text-lg">GAMMA : {props.priceGamma}</li>
          <li className="text-info text-lg">BETA : {props.priceBeta}</li>
          <li className="text-warning text-lg">ALPHA : {props.priceAlpha}</li>
        </ul>
      </div>
    );
  }