import React from "react";
import s from "./expert.module.scss";
import { AiOutlineCheckCircle } from "react-icons//ai";
const Expert = () => {
  return (
    <div className={s.expert}>
      <div className={s.expert__left}> </div>
      <div className={s.expert__right}>
        <p style={{ fontSize: "30px", color: "#2C2C2C" }}>
          The Largest Business Expert
        </p>
        <p style={{ color: "#727272" ,fontWeight:'200'}}>
          These cases are perfectly simple and easy to distinguish. In a free
          hour, when our power of choice is untrammelled and when nothing
          prevents our being able to do what we like best.
        </p>
        <div className={s.checks}>
          <p className={s.ptags}>
            <AiOutlineCheckCircle style={{ color: "#43B874" }} />
            Apartments frequently or motionless.
          </p>
          <p className={s.ptags}>
            {" "}
            <AiOutlineCheckCircle style={{ color: "#43B874" }} />
            Duis aute irure dolor in reprehenderit in voluptate.
          </p>
          <p className={s.ptags}>
            {" "}
            <AiOutlineCheckCircle style={{ color: "#43B874" }} />
            Voluptatem quia voluptas sit aspernatur.
          </p>
          <button>About Us</button>
        </div>
      </div>
    </div>
  );
};

export default Expert;
