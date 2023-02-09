import GithubIcon from "assets/icons/GıthubIcon";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <p>© 2023 Shopping</p>
        </div>
        <div className="footer__icon">
          <a
            href="https://github.com/cihandundar/react-redux-add-to-cart"
            target={"_blank"}
          >
            <GithubIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
