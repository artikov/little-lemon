import React from "react";
import Special from "./Special";

const Specials = () => {
  return (
    <div className="specials__container">
      <div className="specials__order">
        <p className="main__subtitle">Specials</p>
        <button className="order__button">Order Online</button>
      </div>
      <div className="specials-food__container">
        <Special />
        <Special />
        <Special />
      </div>
    </div>
  );
};

export default Specials;
