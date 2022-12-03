import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import LogoGarena from "../images/garena-logo.png";
import { GiDiamondHard } from "react-icons/gi";


const Navbar = () => {
  return (
    <header className="nav__container">
      <div className="link__container">
        <Link to="/" className="link__logo">
          <img src={LogoGarena} alt="logo garena" className="logo__garena" />
        </Link>
        <div className="icons"> <GiDiamondHard className="icon" /> </div>
      </div>
    </header>
  );
};

export default Navbar;
