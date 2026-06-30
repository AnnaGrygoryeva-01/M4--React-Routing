import { NavLink, Outlet } from "react-router-dom";
import styles from "./Tools.module.sass";

const activeLinkStyle = ({ isActive }) => ({
  color: isActive ? "#cafd00ff" : "inherit",
});

function Tools() {
  return (
    <div>
      <ul className={styles.toolsContainer}>
        <li>
          <NavLink to="counter" style={activeLinkStyle}>
            Counter
          </NavLink>
        </li>
        <li>
          <NavLink to="stopwatch" style={activeLinkStyle}>
            Stopwatch
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Tools;
