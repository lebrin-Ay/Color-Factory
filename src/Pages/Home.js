// import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import '../Components/style.css';

function Home() {


  return (
    <>
      <div className="main-container">
        <header className="heading">
          <h1>Welcome to the color Factory</h1>
          <h2>
            <Link to="/AddColor">Add a Color</Link>
          </h2>
        </header>

        <main className="select-container">
          <h3>Please select a Color</h3>
          <ul className="color-list">
            <li>
              <Link to="/Red">Red</Link>
            </li>
            <li>
              <Link to="/Green">Green</Link>
            </li>
            <li>
              <Link to="/Blue">Blue</Link>
            </li>
          </ul>
        </main>
      </div>
    </>
  );
}

export default Home;
