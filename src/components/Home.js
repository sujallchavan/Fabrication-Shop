import React from "react";
import Navbar from "./Navbar";

const Home = ({ scrollToSection, refs }) => {
  return (
    <div className="home">
      <Navbar scrollToSection={scrollToSection} refs={refs} />
      <div className="background-img">
        {/* <img src="/img/bg1.webp" alt="" /> */}
        <div className="content">
          <h1>Welcome to our Fabrication Shop</h1>
          <p>We create high-quality iron gates, windows, and more.</p>
          <button className="button">Enquire Now</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
