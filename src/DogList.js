import React from "react";
import { Link } from "react-router-dom";

const DogList = ({ dogs }) => {
  return (
    <div className="DogList">
      {dogs.map(({ name, age, src, facts }, idx) => {
        return (
          <div key={idx} className="dogs">
            <Link to={`/dogs/${name.toLowerCase()}`}><h1>{name}</h1></Link>
            <img src={src} alt={name} />
            <p>{age}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DogList;
