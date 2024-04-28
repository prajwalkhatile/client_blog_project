import React from "react";
import "./AboutUs.css";

const About = () => {
  return (
    <div className="container-about">
      <div className="header">
        <h1 className="text-center font-bold ">About Us</h1>
      </div>

      <div className="main_cont">
        <div className="left"></div>
        <div className="right">
          <p className="p1">
            Our Blogging Website, we believe in the power of words to inspire,
            inform, and entertain. Founded in [Year], our platform is a labor of
            love, born out of a passion for sharing stories, ideas, and
            experiences with the world.
          </p>
          <p className="p2">
            Our team is dedicated to curating diverse and engaging content
            across a wide range of topics, from technology and travel to food
            and fashion. We believe in the importance of authenticity,
            integrity, and creativity, and we're committed to providing our
            readers with content that informs, inspires, and entertains.
          </p>
          <p className="p3">
            Join us on this journey as we explore the endless possibilities of
            the written word. Whether you're here to learn, share, or simply
            find inspiration, we're excited to have you as part of
            our community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
