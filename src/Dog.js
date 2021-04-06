import React from "react";
import { Link, useParams } from "react-router-dom";


const Dog = ({dogs}) => {
    const { name } = useParams();
    let currentDog;
    if (name) {
        currentDog = dogs.find(
            dog => dog.name.toLowerCase() === name.toLowerCase()
        );
    }
    return (
        <div className="Dog">
        <Link to="dogs/whiskey">
        <h1>{currentDog.name}</h1>
        </Link>
        <img src={currentDog.src} alt="dog" />
        <p>{currentDog.age}</p>
        <h3>Facts: </h3>
        {currentDog.facts.map((f, idx) => <p key={`${idx}}`}>{f}</p>)}
      </div>
    )
};

export default Dog;