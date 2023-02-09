import React from "react";
import HeroImg from "../../assets/images/hero1.jpg";
const LoginItem = () => {
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__wrapper">
          <div className="login__left">
            <div className="login__left__img">
              <img src={HeroImg} alt="" />
            </div>
          </div>
          <div className="login__right">
            <div className="login__right__title">
              <h2>Sign in to Shopping</h2>
            </div>
            <form className="form">
              <div className="form__input">
                <input type="email" placeholder="Email" />
              </div>
              <div className="form__input">
                <input type="password" placeholder="Password" />
              </div>
              <div className="form__footer">
                <p>
                  Don't have any account? <span>Sign Up</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginItem;
