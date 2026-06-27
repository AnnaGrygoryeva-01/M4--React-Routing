import { NavLink } from "react-router-dom";

const activeLinkStyle = ({ isActive }) => ({
  color: isActive ? "blue" : "inherit",
});

function Header() {
  return (
    <header>
      <h1>My App</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" style={activeLinkStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={activeLinkStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/tools" style={activeLinkStyle}>
              Tools
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
