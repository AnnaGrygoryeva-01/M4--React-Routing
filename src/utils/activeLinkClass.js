import cn from "classnames";

export const createActiveLinkClass =
  (styles) =>
  ({ isActive }) =>
    cn(styles.navLink, { [styles.active]: isActive });
