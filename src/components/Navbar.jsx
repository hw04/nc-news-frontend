import "../assets/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="logo">
        <Link to="/">NC News</Link>
      </div>
      <div class="navbar-links">
        <ul class="navigation-links">
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
