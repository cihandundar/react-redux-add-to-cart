import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo1.png";
const Navbar = () => {
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
      name: "About Us",
      path: "/about",
    },
    {
      id: 4,
      name: "Contact Us",
      path: "/contact",
    },
    {
      id: 5,
      name: "Login / Register",
      path: "/login",
    },
  ];
  return (
    <nav className="nav">
      <div className="nav__logo">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <ul className="nav__list">
        {links?.map((link) => (
          <li key={link?.id} className="nav__link">
            <Link to={link?.path}>{link?.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
