import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../../assets/images/hero2.jpg";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__img">
          <img src={HeroImg} alt="" />
        </div>
        <div className="hero__text">
          <h4>black friday early access</h4>
          <h3>up to 50% off orjinal price select styles only</h3>
          <button>
            <Link to="/product">Shop Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
