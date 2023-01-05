import React from "react";
import { Link } from 'react-router-dom';

function NotFoundList() {
  return <div>
    <p style={{textAlign:"center"}}>
      <h1>Oops! This list items were not found.</h1>
      <Link to="/">Go to Homepage </Link>
    </p>
  </div>
}

export default NotFoundList;