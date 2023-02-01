import React from "react";
import hero from "../../assets/images/hero.jpg";
const Info = () => {
  return (
    <div className="info">
      <div className="info__container">
        <div className="info__content">
          <div className="info__title">
            <h2>What We Do</h2>
          </div>
          <div className="info__text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              sapiente quisquam iste maiores asperiores alias, tenetur
              consequatur ex, voluptate repellendus fugit minus facilis harum
              mollitia, dicta ut labore rem aspernatur.
            </p>
          </div>
          <div className="info__btn">
            <button>Learn More</button>
          </div>
        </div>
        <div className="info__img">
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Info;
