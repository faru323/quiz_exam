import React from "react";
import s from "./navbar.module.scss";
import { FaGooglePlusG, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { MdLocalPostOffice } from "react-icons//md";
import { BsFillTelephoneFill } from "react-icons//bs";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={s.nav}>
      <div className={s.nav__top}>
        <div className={s.nav__top__left}>
          <FaLinkedinIn className={s.icons} />{" "}
          <FaFacebookF className={s.icons} />{" "}
          <FaGooglePlusG className={s.icons} />
        </div>
        <div className={s.nav__top__right}>
          <div className={s.nav__top__right__left}>
            <MdLocalPostOffice style={{ color: "#28AE60" }} />
            <p style={{ color: "white" }}> info@docmed.com</p>
          </div>
          <div className={s.nav__top__right__right}>
            <BsFillTelephoneFill style={{ color: "#28AE60" }} />
            <p style={{ color: "white" }}>1601-609 6780</p>
          </div>
        </div>
      </div>
      <div className={s.nav__bottom}>
        <div className={s.nav__bottom__left}>
          <img src={logo} alt="alt" />
        </div>
        <div className={s.nav__bottom__middle}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add</Link>
            </li>
          
          </ul>
        </div>
        <div className={s.nav__bottom__right}></div>
      </div>
    </div>
  );
};

export default Navbar;
