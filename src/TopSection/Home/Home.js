import React from "react";
import { Link } from "react-router-dom";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div className="lg:flex pt-3 text-white">
      <div className="m-1 p-5 lg:flex-auto lg:w-32 p-3">
        <h2 className=" text-4xl">COXBAZAR</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
          excepturi delectus necessitatibus ea, harum consectetur voluptas
          aliquam id voluptate neque reprehenderit sint impedit laudantium nobis
          facilis itaque ex illo vitae.
          <Link to="/booking">
            <button className="ms-3 bg-lime-300 rounded font-semibold px-8 py-1 text-black mt-2">
              BOOKING
            </button>
          </Link>
        </p>
      </div>

      <div className="ms-1 lg:flex-auto lg:w-64 m-1 p-1">
        <Slider></Slider>
      </div>
    </div>
  );
};

export default Home;
