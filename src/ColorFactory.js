import React from "react";
import { Link } from "react-router-dom";

const ColorFactory = ({ colors }) => {
  const colorLinks = Object.keys(colors).map(c => (
    <li key={c}>
      <Link to={`/colors/${c}`}>{c}</Link>
    </li>
  ))
    return (
      <div className="ColorFactory">
          <h2>Welcome to the color factory</h2>
          <Link to="/colors/new"><h2>Add a Color</h2></Link>

          <p>Please select a color:</p>
          <ul>{colorLinks}</ul>

      </div>
    );
  };
  
  export default ColorFactory;