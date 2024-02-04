import { Link } from "react-router-dom";

const liClass = "hover:text-orange-400 uppercase ease-in-out duration-300 text-lg max-sm:text-base hover:bg-orange-800/30 w-20 rounded text-center"

/**
 *
 * @returns
 */
export default function Navbar() {
  return (
    <div>
      <ul className="flex my-1 place-content-center">
        <li className={liClass}><Link to="/dinos">DINOS</Link></li>
        <li className={liClass}><Link to="/items">ITEMS</Link></li>
        <li className={liClass}><Link to="/saddles">SELLES</Link></li>
        <li className={liClass}><Link to="/tek">TEK</Link></li>
        <li className={liClass}><Link to="/bosses">BOSS</Link></li>
      </ul>
    </div>
  );
}
