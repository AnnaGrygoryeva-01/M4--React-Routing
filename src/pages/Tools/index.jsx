import { NavLink, Outlet } from "react-router-dom";

const activeLinkStyle = ({ isActive }) => ({
  color: isActive ? "blue" : "inherit",
});

function Tools() {
  return (
    <div>
      <ul>
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
