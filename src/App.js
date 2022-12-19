import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddColor from "./Pages/AddColor";
import Red from "./Pages/Red";
import Green from "./Pages/Green";
import Blue from "./Pages/Blue";



function App() {
  // const [color, changeColor] = useState("#FF0000");


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddColor" element={<AddColor />} />
          <Route path="/Red" element={<Red />} />
          <Route path="/Green" element={<Green />} />
          <Route path="/Blue" element={<Blue />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
