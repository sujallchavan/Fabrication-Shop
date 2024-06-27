// src/Services.js
import React from "react";
import "./Services.css";
// import migWeldingImage from "./img/mig-welding.png";
// import studWeldingImage from "./images/stud-welding.png";
// import spotWeldingImage from "./images/spot-welding.png";
// import waterJetCuttingImage from "./images/water-jet-cutting.png";

const services = [
  {
    title: "Mig Welding",
    description:
      "We use the latest technology in mig welding to give clients the best service as per their requirement.",
    imgSrc: "/img/mig-welding.webp",
  },
  {
    title: "Stud Welding",
    description:
      "Our highly trained staff will ensure that all your stud welding works are completed before time with quality.",
    imgSrc: "/img/spot-welding.webp",
  },
  {
    title: "Projection / Spot Welding",
    description:
      "Spot welding helps to join two metals by the heat obtained from resistance to electric current.",
    imgSrc: "/img/stud-welding.webp",
  },
  {
    title: "Water Jet Cutting",
    description:
      "We provide water jet cutting services with the latest technology as per the requirements of our clients.",
    imgSrc: "/img/water-jet-cutting.jpg",
  },
];

const Services = () => {
  return (
    <div className="services">
      <h2>Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img
              src={service.imgSrc}
              alt={service.title}
              className="service-image"
            />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button>Enquire Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
