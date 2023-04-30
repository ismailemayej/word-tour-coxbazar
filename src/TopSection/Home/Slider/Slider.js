import React from "react";
import "./Slider.css";
import f from "../../../images/Sajek.png";
import s from "../../../images/Sreemongol.png";
import t from "../../../images/sundorbon.png";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className="">
      <Link to="/tour1">
        <div className="item" style={{ backgroundImage: `url(${f})` }}></div>
      </Link>
      <Link to="/tour2">
        <div className="item" style={{ backgroundImage: `url(${s})` }}></div>
      </Link>
      <Link to="/tour2">
        <div className="item" style={{ backgroundImage: `url(${t})` }}></div>
      </Link>
      <Link to="/tour2">
        <div className="item" style={{ backgroundImage: `url(${s})` }}></div>
      </Link>
    </div>
  );
};

export default Slider;
