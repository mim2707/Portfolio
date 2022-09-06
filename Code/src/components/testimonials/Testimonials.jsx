import React from "react";
import "./testimonials.css";
import AVTR1 from "../../images/avatar1.jpg";
import AVTR2 from "../../images/avatar2.jpg";
import AVTR3 from "../../images/avatar3.jpg";
import AVTR4 from "../../images/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Mr. A'zam",
    review: "Islombek and I worked together and during this time he showed himself only on the good side. Once I needed a website for my project and I asked him to make it and he did it quickly and efficiently. Then I was once again convinced of his punctuality.",
  },
  {
    avatar: AVTR2,
    name: "Mr. Abror",
    review: "I work as a manager in advertising company and our client needed a website for his company. Then I asked Islombek and he talked to the owner of company in order to know what he wants. After that Islombek started to create a website and finished on time. Client was happy!",
  },
  {
    avatar: AVTR3,
    name: "Mr. Bobur",
    review: "I am interested in tourism and wanted to open my own company. But I did not have any idea about the website. I found Islombek through the friends and asked him to create a functional website. He did good job.",
  },
  {
    avatar: AVTR4,
    name: "Mr. Abbos",
    review: "I wanted to open educational platform in order to make it easy to learn foreign languages for our citizens. Islombek helped me on this project. Thanks!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;