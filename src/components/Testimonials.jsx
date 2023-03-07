import React from "react";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <div className="testimonials__container">
      <p className="main__subtitle">Testimonials</p>
      <div className="testimonial-cards__container">
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
    </div>
  );
};

export default Testimonials;
