import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      404 Page Cannot Be Found
      <div>
        {" "}
        <Link to="/">Go back to Home Page</Link>
      </div>
    </div>
  );
}

export default NotFound;
