import { Link } from "react-router-dom";
import styles from "./NotFound.module.sass";

function NotFound() {
  return (
    <div className={styles.errorContainer}>
      <p className={styles.errorCode}>404 </p>
      <p>The Page Cannot Be Found</p>
      <Link to="/" replace>
        Go back to Home Page
      </Link>
    </div>
  );
}

export default NotFound;
