import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import no1 from "../../img/no1.png";
import no2 from "../../img/no2.png";
import no3 from "../../img/no3.png";
import no4 from "../../img/no4.png";
import no5 from "../../img/no5.png";
import no6 from "../../img/no6.png";
import no8 from "../../img/no8.png";



const Testimonial = () => {
  const clients = [
    {
      title:"Park Auto Dealer Management System",
      img: no1,
      review:
        "Park Auto Dealer Management System is a comprehensive web-based solution designed specifically for used auto or car dealerships. ",
    },
    {
      title:"Image Tagging CNN Model",
      img: no6,
      review:
        "Image tagging CNN model that classifies images from the CIFAR-10 dataset into different categories. The model processes images and assigns labels based on visual features.",
    },
    {
      title:"'DATCON-Search Engine and Document Manager",
      img: no2,
      review:
        " 'DATCON-Search Engine and Document Manager' designed for efficiently managing Contractors and Consultants profiles and documents. ",
    },
    {
      title:"MERN Ecommerce Platform",
      img: no3,
      review:
        "A complete Functional and Deployable Ecommerce Platform built with the MERN Stack.",
    },
    {
      title:"Book Recommendation KNN Model",
      img: no8,
      review:
        "Book recommendation model using KNN. It identifies similar books based on user preferences and suggests relevant ones for recommendations.",
    },
    {
      title:"Restaurant Food Ordering System",
      img: no4,
      review:
        "PHP-based web app for customers to order food and admins to manage menus.",
    },
    {
      title:"MERN Food Ordering Webapp",
      img: no5,
      review:
        "A Full Stack Food Ordering Website using React JS, MongoDB, Express, Node JS & Stripe. ",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Here are few of the </span>
        <span> Projects </span>
        <span>I have worked on...</span>
      <div className="blur t-blur1" style={{ background: "var(--blue)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <span>{client.title}</span>
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>    
  );
};

export default Testimonial;