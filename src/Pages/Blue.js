import React from "react";
import { Link } from "react-router-dom";
import '../Components/style.css';

function Blue() {
    return (
        <>
            <div className="blue-page" style={{backgroundColor: "blue"}}>
            <h1>This is Color blue with Hex #0000FF</h1>

            <h2><Link to="/">Go back</Link></h2>
        </div>
        </>
    );
}

export default Blue;