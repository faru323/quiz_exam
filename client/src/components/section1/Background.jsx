import React from "react";
import s from "./bckg.module.scss";
import { IoIosArrowForward } from "react-icons//io";
const Background = () => {
  return (
    <div className={s.background}>
      <div className={s.container}>
        <p style={{ color: "white", fontSize: "60px" }}>
          {" "}
          Grow big with musicol business
        </p>
        <p style={{ color: "gray" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <div className={s.buttons}>
          {" "}
          <button className={s.button1}>Our services </button>
          <button className={s.button2}>
            {" "}
            <IoIosArrowForward />See how it work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Background;
