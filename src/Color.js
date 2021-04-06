import React from "react";
import { Link } from "react-router-dom";

const Color = ({value, color, history}) => {
    const styles = {
        comp :{
            backgroundColor: value,
            width: "400px",
            height: "400px",
        }
    }
    return (
        <div style={ styles.comp }>
            <p>Here's your color</p>
            <Link to="/colors">Go back</Link>
        </div>
    )
};

export default Color;