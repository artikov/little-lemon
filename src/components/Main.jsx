import React from "react";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";

const Main = () => {
  return (
    <>
      <main className="main__container">
        <div className="main__info">
          <p className="main__title">Little Lemon</p>
          <p className="main__subtitle">Chicago</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            magnam perspiciatis, praesentium facilis veritatis optio veniam
            expedita id voluptas, fugiat similique perferendis asperiores labore
            accusantium ipsum sapiente porro aliquid aut hic commodi. Quo
            eveniet, dolores ad reprehenderit pariatur exercitationem vero
            aperiam nihil dolore quibusdam eum, id, optio delectus cumque
            suscipit!
          </p>
          <button className="main__button">Reserve a table</button>
        </div>
        <div className="main__img">
          <img src="/icons_assets/restauranfood.jpg" alt="logo" />
        </div>
      </main>
      <Specials />
      <About />
      <Testimonials />
    </>
  );
};

export default Main;
