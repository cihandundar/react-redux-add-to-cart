import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const links = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Product",
      path: "/product",
    },
    {
      id: 3,
      name: "Login / Register",
      path: "/login",
    },
    {
      id: 4,
      name: "Cart",
      path: "/cart",
    },
  ];
  return (
    <div className="nav__mobile">
      <div className="nav__logo mobile">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <nav ref={navRef} className="nav">
        <div className="nav__logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <ul className="nav__list">
          {links?.map((link) => (
            <li onClick={showNavbar} key={link?.id} className="nav__link">
              <Link to={link?.path}>{link?.name}</Link>
            </li>
          ))}
        </ul>
        <button className="nav__btn nav__closebtn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav__btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  );
};

export default Navbar;
