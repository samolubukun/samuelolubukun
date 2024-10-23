import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import no1 from "../../img/no1.png";
import no2 from "../../img/no2.png";
import no3 from "../../img/no3.png";
import no4 from "../../img/no4.png";
import no5 from "../../img/no5.png";
import no6 from "../../img/no6.png";
import no7 from "../../img/no7.png";
import no8 from "../../img/no8.png";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={no1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={no6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={no2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={no7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={no3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={no4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={no8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={no5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;