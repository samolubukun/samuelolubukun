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
import no9 from "../../img/no9.png";
import no10 from "../../img/no10.png";
import no11 from "../../img/no11.png";
import no12 from "../../img/no12.png";
import no13 from "../../img/no13.png";
import no14 from "../../img/no14.png";  
import no15 from "../../img/no15.png";  
import no16 from "../../img/no16.png";  
import no17 from "../../img/no17.png";  
import no18 from "../../img/no18.png"; 
import no19 from "../../img/no19.png";  


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
          <img src={no14} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={no15} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={no1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={no16} alt="" />
        </SwiperSlide>
        <SwiperSlide> 
          <img src={no19} alt="" /> 
        </SwiperSlide>
        <SwiperSlide>
          <img src={no6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={no17} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={no18} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={no13} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={no2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={no7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={no12} alt="" />
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
        <SwiperSlide>
          <img src={no9} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={no11} alt="" />
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Portfolio;
