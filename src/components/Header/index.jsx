import { NavLink } from "react-router-dom";
import styles from "./Header.module.sass";

const activeLinkStyle = ({ isActive }) => ({
  color: isActive ? "blue" : "inherit",
});

function Header() {
  return (
    <header>
      <div className={styles.headerContainer}>
        <h1>My App</h1>
        <nav>
          <ul className={styles.NavWrapper}>
            <li>
              <NavLink to="/" style={activeLinkStyle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/tools" style={activeLinkStyle}>
                Tools
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" style={activeLinkStyle}>
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
