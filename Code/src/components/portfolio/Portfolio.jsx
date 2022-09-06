import React from "react";
import "./portfolio.css";
import IMG1 from "../../images/portfolio1.png";
import IMG2 from "../../images/portfolio2.png";
import IMG3 from "../../images/portfolio3.png";
// import IMG4 from "../../images/portfolio4.jpg";
// import IMG5 from "../../images/portfolio5.png";
// import IMG6 from "../../images/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "TripTourism",
    github: "https://github.com/mim2707/TripTourism.git",
    demo: "https://google.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Fanatic",
    github: "https://github.com/mim2707/Fanatic.git",
    demo: "https://google.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "MartaUp",
    github: "https://github.com/mim2707/MartaUp.git",
    demo: "https://google.com",
  },
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: "Title",
  //   github: "https://github.com",
  //   demo: "https://google.com",
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: "Title",
  //   github: "https://github.com",
  //   demo: "https://google.com",
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: "Title",
  //   github: "https://github.com",
  //   demo: "https://google.com",
  // },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Website
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;