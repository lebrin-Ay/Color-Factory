import React from "react";
import { Link } from "react-router-dom";
import '../Components/style.css';

function Green() {
    return (
        <>
            <div className="green-page" style={{backgroundColor: "green"}}>
            <h1>This is Color Green with Hex #00FF00</h1>

            <h2><Link to="/">Go back</Link></h2>
        </div>
        </>
    );
}

export default Green;