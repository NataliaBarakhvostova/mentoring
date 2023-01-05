import React from "react";
import { Link } from 'react-router-dom';

function NotFound() {
  return <div>
    <p style={{textAlign:"center"}}>
      <h1>Oops! Page was not found.</h1>
      <Link to="/">Go to Homepage </Link>
    </p>
  </div>
}

export default NotFound;