import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.sass";
import { createActiveLinkClass } from "../../utils/activeLinkClass";

const activeLinkClass = createActiveLinkClass(styles);

function Header() {
  return (
    <header>
      <div className={styles.loginContainer}>
        <NavLink to="/login" className={activeLinkClass} title="Sign in">
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
      </div>
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
