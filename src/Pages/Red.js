import React from "react";
import { Link } from "react-router-dom";
import '../Components/style.css';
// import { useState, useEffect } from "react";



function Red () {
    
    return (
        <>
        <div className="red-page" style={{backgroundColor: "red"}}>
            <h1>This is Color red with Hex #FF0000</h1>

            <h2><Link to="/">Go back</Link></h2>
        </div>
        </>
    );
}

export default Red;