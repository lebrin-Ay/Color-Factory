import React from "react";
import "./style.css";
import {useNavigate} from 'react-router-dom';

function Button() {

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <>
      
    </>
  );
}

export default Button;
