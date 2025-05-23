import React from "react";
import "./certificate.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


import { Pagination } from "swiper";
import "swiper/css/pagination";
import dae from "../../img/dae.jpg";
import da from "../../img/da.jpg";
import ml from "../../img/ml.jpg";
import udm from "../../img/udm.jpg";
import wquads from "../../img/wquads.jpg";
import wquailab from "../../img/wquailab.jpg";

const Certificate = () => {

  const clients = [

    {
      title:"Applied AI Lab – WorldQuant University",
      img: wquailab,
    
      review:
        "Completed WQU's Applied AI Lab, executing six real-world computer vision projects involving image classification, object detection, and generative AI. Gained hands-on experience with deep learning models and deployment techniques.",
    },
    
    {
      title:"Applied Data Science Lab – WorldQuant University",
      img: wquads,
    
      review:
        "Completed WQU's Applied Data Science Lab, executing eight real-world projects involving data extraction, cleaning, modeling, and visualization using Python, SQL, and machine learning techniques.",
    },
    
    {
      title:"Data Analytics Essentials",
      img: dae,
    
      review:
        "The Cisco Data Analytics course covers data analysis fundamentals, including tools, techniques, SQL, Excel, and visualization using Tableau.",
    },

    {
      title:"Python for Data Science & Machine Learning: Zero to Hero",
      img: udm,
    
      review:
        "Mastered Data Science & Machine Learning in Python: Numpy, Pandas, Matplotlib, Scikit-Learn, Machine Learning, and more!",
    },

    {
      title:"Data Analysis with Python",
      img: da,

      review:
        "freeCodeCamp's Data Analysis with Python course teaches data manipulation, visualization, and analysis using libraries like Pandas, Matplotlib, and NumPy.",
    },


    {
      title:"Machine Learning with Python",
      img: ml,

      review:
        "freeCodeCamp's Machine Learning with Python course covers key concepts, algorithms, and techniques using libraries like Scikit-Learn, TensorFlow, and Keras.",
    },
    // {
    //   title:"Book Sharing Application",
    //   img: mca_2,
    //   review:
    //     "Book Sharing is an Android Application that has been created to provide a solution to the students who want to borrow books from other students either from their batch or from a senior batch. The application allows students to post images along with the title of the book they are willing to lend and other students can comment to request the book.",
    // },
    // {
    //   title:"Placement Adda",
    //   img: mca_1,
    //   review:
    //     "A Placement Management System, which allows placement cell to add companies which are hiring and allows students to apply to those companies.",
    // },
    // {
    //   title:"Expressso E-Commerce Website",
    //   img: cs_6,
    //   review:
    //     "‘Expressso’ project is about doing the business of shopping over the internet which is an E-Commerce website. The objective of this project is to setup a virtual store on the internet  i.e an E-Commerce store where products like groceries, clothes, gadgets can be bought easily.",
    // },
    // {
    //   title:"Computerized Society",
    //   img: cs_5,
    //   review:
    //     "Computerized Society is a web-based application. Computerized Society tried to computerize several things that occur within the society and provides a user-friendly interface to all people who are residing in the society and also the Employees, Secretary who are working under a society. ",
    // },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="f-heading">
        <span>My </span>
        <span> Online Certification </span>
        <span>Courses</span>
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
                <span class= "percentage">{client.text}</span>
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>    
  );
};

export default Certificate;
