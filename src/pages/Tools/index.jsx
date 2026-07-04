import { NavLink, Outlet } from "react-router-dom";
import styles from "./Tools.module.sass";
import { createActiveLinkClass } from "../../utils/activeLinkClass";

const activeLinkClass = createActiveLinkClass(styles);

function Tools() {
  return (
    <div>
      <ul className={styles.toolsContainer}>
        <li>
          <NavLink to="." end className={activeLinkClass}>
            Counter
          </NavLink>
        </li>
        <li>
          <NavLink to="stopwatch" className={activeLinkClass}>
            Stopwatch
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Tools;
