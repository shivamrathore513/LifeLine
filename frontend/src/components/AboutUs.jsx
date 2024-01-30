import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
              Welcome to LifeLine, where we're dedicated to revolutionizing healthcare access. Founded by a team passionate about healthcare, technology, and design, we're committed to empowering individuals on their health journey.

              Effortless Appointment Booking: Say goodbye to long waits and tedious calls. With LifeLine, schedule appointments with ease.

              Comprehensive Healthcare Solutions: Whether consulting a specialist or managing medical records, LifeLine has you covered.

              Secure and Confidential: Your privacy matters. LifeLine ensures your data is encrypted and protected.

              We're committed to improving our platform based on your feedback. Thank you for choosing LifeLine. Let's embark on your journey to better health.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
