import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Determine the structure and design of web pages</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Ensure user experience determines design choices</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Develope features to enhance the user experience</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Ensure web design is optimized for smartphones</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Optimize web pages for maximum speed and scalability</p>
            </li>
          </ul>
        </article>
        {/* END OF FRONTEND DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Build and maintain web applications</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Write high-quality code</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Troubleshoot and debug</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Keep on top of new technologies</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Manage hosting environments</p>
            </li>
          </ul>
        </article>
        {/* END OF BACKEND DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Project Management</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Plan and Develop the Project Idea</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Create and Lead Team</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Monitor Project Progress and Set Deadlines</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Solve Issues That Arise</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Manage the Money</p>
            </li>
          </ul>
        </article>
        {/* END OF PROJECT MANAGEMENT */}
      </div>
    </section>
  );
};

export default Services;