import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <React.Fragment>
      Page not found. Go to <Link to="/dashboard">Home page</Link>
    </React.Fragment>
  );
};

export default NotFound;
