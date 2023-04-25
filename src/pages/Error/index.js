import React from "react";
import ErrorImg from "../../assets/images/error.jpg";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <section>
      <div className="error">
        <div className="error__container">
          <Link to="/">Go to homepage</Link>
          <img src={ErrorImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Error;
