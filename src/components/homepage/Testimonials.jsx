/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import 'swiper/css/pagination'

import { EffectCards, EffectCoverflow, Pagination } from "swiper/modules";

import { testimonialsData } from "../../data/testimonials";

export function Testimonials() {
  return (
    <div className="bg-[url('/assets/testimonialsBg.png')] bg-cover py-16">
      <h2 className="text-center font-semibold text-2xl lg:text-4xl text-black">
        ¡Nuestra <span className="text-accent">comunidad</span> habla por nosotros!
      </h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mt-8 h-96 w-full py-2"
      >
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide
            key={`testimonial_${index}`}
            className="bg-[url('/assets/feedbackCard.png')] flex flex-col border-2 border-primary p-8 justify-center align-middle items-center text-center gap-2 w-80 bg-center shadow-md rounded-md"
          >

            <p className="text-black bg-base-100 p-2 font-semibold text-sm italic lg:text-base rounded-md border-primary border-2">
              {testimonial.testimonial}
            </p>
            <span className="text-primary font-semibold text-base">
              {testimonial.name}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default Testimonials;
