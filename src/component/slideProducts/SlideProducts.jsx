// css file
import Products from "./Products";
import "./products.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
function SlideProducts({ item, data }) {
  return (
    <div className="slide_products">
      <div className="container">
        <div className="top_slide">
          <h2 style={{ textTransform: "capitalize" }}>
            {item.replace("-", " ")}
          </h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
            reprehenderit rerum nostrum ipsam incidunt eaque!
          </p>
        </div>
        <Swiper
          loop={true}
          centeredSlides={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
          navigation={true}
          modules={[Autoplay, Navigation]}
          slidesPerView={5}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <Products item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SlideProducts;
