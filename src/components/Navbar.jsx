import { Link } from "react-router-dom";

/**
 *
 * @returns
 */
export default function Navbar() {
  return (
    <div>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-link text-warning"><Link to="/dinos">DINOS</Link></li>
        <li className="nav-link text-warning"><Link to="/stuff">STUFF</Link></li>
        <li className="nav-link text-warning">PAGE 3</li>
        <li className="nav-link text-warning">PAGE 4</li>
      </ul>
    </div>
  );
}
