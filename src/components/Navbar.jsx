import "../assets/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">NC News</Link>
      </div>
      <div className="navbar-links">
        <ul className="navigation-links">
          <li>
            <a href="#">Topics</a>
          </li>
          <li>
            <a href="#">Users</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
