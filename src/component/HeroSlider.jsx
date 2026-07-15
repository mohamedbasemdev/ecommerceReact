// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

import banner1 from "../img/banner_Hero1.jpg"
import banner2 from "../img/banner_Hero2.jpg"
import banner3 from "../img/banner_Hero3.jpg"

function HeroSlider() {
  return (
    <div className="hero_slider">
      <div className="container">
        <Swiper
        loop={true}
         pagination={true} 
         modules={[Pagination, Autoplay]} 
         className="mySwiper"
         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}>
          <SwiperSlide>
            <div className="content">
              <h4>intrducing the new</h4>
              <h1>microsoft xbox <br/> 360 controller</h1>
              <p>windows xp/10/7.8/ ps3, n8n</p>
              <button className="btn">Shop Now</button>
            </div>
            <img src={banner1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="content">
              <h4>intrducing the new</h4>
              <h1>microsoft xbox <br/> 360 controller</h1>
              <p>windows xp/10/7.8/ ps3, n8n</p>
              <button className="btn">Shop Now</button>
            </div>
            <img src={banner2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="content">
              <h4>intrducing the new</h4>
              <h1>microsoft xbox <br/> 360 controller</h1>
              <p>windows xp/10/7.8/ ps3, n8n</p>
              <button className="btn">Shop Now</button>
            </div>
            <img src={banner3} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default HeroSlider;
