import React from "react";
import "../Components/style.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function AddColor() {

  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const addToList = () => {
    let tempArr = list;
    tempArr.push(value);
    setList(tempArr);
    setValue("");
  };


  return (
    <div
      className="container" style={{ backgroundImage: "linear-gradient(#77A1D3, #79CBCA, #E684AE)" }}>

      <div className="form-container">
        <form>
          <div className="form-input">
            <label>Enter a Color</label>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />{" "}
          </div>

          <div className="form-color">
            <label>Select Color</label>
            <input type="color" name="color" />
          </div>
        </form>

        <div>
          <button className="btn-color" onClick={addToList}>Add Color</button>
        </div>

        <p>
          <Link to="/">Go back to Home</Link>
        </p>
      </div>
    </div>
  );
}

export default AddColor;
