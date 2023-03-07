import React from "react";

const About = () => {
  return (
    <section id="about" className="about__container">
      <div className="about__info">
        <p className="main__subtitle">Little Lemon</p>
        <p>Chicago</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          mollitia architecto aliquam tenetur veritatis accusamus voluptatum
          reiciendis error recusandae ut.
        </p>
      </div>
      <div className="about__img">
        <img src="/icons_assets/Mario_and_Adrian_A.jpg" alt="" />
        <img src="/icons_assets/Mario_and_Adrian_b.jpg" alt="" />
      </div>
    </section>
  );
};

export default About;
