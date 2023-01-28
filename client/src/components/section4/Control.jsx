import React from "react";
import s from "./control.module.scss";

import { GiPuzzle } from "react-icons//gi";
const Control = () => {
  return (
    <div className={s.backgroundImg}>
      <div className={s.container}>
        <div>
          <GiPuzzle style={{ color: "white", fontSize: "40px" }} />
          <p style={{ fontSize: "25px", color: "white" }}>Unlimited Control</p>
          <p style={{ color: "#D5D5D5" }}>
            These cases are perfectly simple and easy to
          </p>
        </div>
        <div>
          <GiPuzzle style={{ color: "white", fontSize: "40px" }} />
          <p style={{ fontSize: "25px", color: "white" }}>Unlimited Control</p>
          <p style={{ color: "#D5D5D5" }}>
            These cases are perfectly simple and easy to
          </p>
        </div>
        <div>
          <GiPuzzle style={{ color: "white", fontSize: "40px" }} />
          <p style={{ fontSize: "25px", color: "white" }}>Unlimited Control</p>
          <p style={{ color: "#D5D5D5" }}>
            These cases are perfectly simple and easy to
          </p>
        </div>
      </div>
    </div>
  );
};

export default Control;
