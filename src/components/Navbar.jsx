import { Link } from "react-router-dom";

const liClass = "hover:text-accent uppercase ease-in-out duration-300 text-xl max-sm:text-base w-20 rounded text-center text-secondary"

/**
 *
 * @returns
 */
export default function Navbar() {
  return (
    <div>
      <ul className="grid grid-cols-5 p-2 justify-items-center bg-primary">
        <li className={liClass}><Link to="/dinos">DINOS</Link></li>
        <li className={liClass}><Link to="/items">ITEMS</Link></li>
        <li className={liClass}><Link to="/saddles">SELLES</Link></li>
        <li className={liClass}><Link to="/tek">TEK</Link></li>
        <li className={liClass}><Link to="/bosses">BOSS</Link></li>
      </ul>
    </div>
  );
}
