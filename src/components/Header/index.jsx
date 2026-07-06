import { NavLink } from "react-router-dom";
import styles from "./Header.module.sass";
import { createActiveLinkClass } from "../../utils/activeLinkClass";

const activeLinkClass = createActiveLinkClass(styles);

function Header() {
  return (
    <header>
      <nav className={styles.headerContainer}>
        <NavLink to="/" className={styles.logo}>
          My App
        </NavLink>
        <ul className={styles.navWrapper}>
          <li>
            <NavLink to="/" className={activeLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/tools" className={activeLinkClass}>
              Tools
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={activeLinkClass}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
