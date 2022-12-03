import React from "react";
import "./slide.css";
import { Swiper, SwiperSlide } from "swiper/react";

import { slide } from "../data";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const Slide = () => {
  return (
    <div className="game__image__container">
      <div
        style={{
          height: "18px",
          display: "flex",
          width: "70%",
          marginInline: "auto",
        }}
      ></div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
				{
					slide.map(({imagen, id}) => {
						return(
							<>
							
								<SwiperSlide key={id} className='slide'>
								<img src={imagen} alt= {`imagen ${id}`} />
								</SwiperSlide>
							</>
						)
					})
				}
			</Swiper>
    </div>
  );
};

export default Slide;
