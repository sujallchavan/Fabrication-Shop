// src/ContactUs.js
import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h1 className="h">Contact Us</h1>
      <div className="contact-details">
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <h3>Our Office Address</h3>
          <p>
            Palm Court Bldg M, 501/B, 5th Floor, New Link Road, Beside Goregaon
            Sports Complex, Malad West, Mumbai, Maharashtra 400064
          </p>
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <h3>General Enquiries</h3>
          <p>websupport@justdial.com</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone-alt"></i>
          <h3>Call Us</h3>
          <p>+91-8888888888</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-clock"></i>
          <h3>Our Timings</h3>
          <p>Mon - Sun : 10:00 AM - 07:00 PM</p>
        </div>
      </div>
      <div className="form-container">
        <div className="form-block">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email ID" />
          <input type="tel" placeholder="Mobile Number" />
        </div>
        <div className="form-block">
          <input type="text" placeholder="Location" />
          <textarea placeholder="Message"></textarea>
        </div>
      </div>
      <button className="submit-button" type="submit">
        Submit
      </button>
      <div className="map-container">
        <iframe
          title="office-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.3589290070917!2d72.8424619149024!3d19.16925728702802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b61b0b3f3243%3A0x8fbf90d827d0748a!2sPalm%20Court%20Building%20M%2C%20New%20Link%20Rd%2C%20Malad%20West%2C%20Mumbai%2C%20Maharashtra%20400064%2C%20India!5e0!3m2!1sen!2sus!4v1620999256878!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen="true"
          loading="lazy"
          className="mp"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
