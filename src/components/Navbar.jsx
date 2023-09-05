import "../assets/Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="logo">NC News</div>
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
