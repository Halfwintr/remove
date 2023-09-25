"use client";

import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";
import Image from "next/image";
import Ilustration from "../../../public/images/main-illustration.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export const Blogpost = (props: any) => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <Image
            src={Ilustration}
            alt="main page illustration"
            width={280}
            height={280}
          />
          <h3 className="font-black text-[20px] text-black mt-4">
            Theres a Lot
          </h3>
          <span className="font-black text-[40px] text-[#C09D44]">
            on the Line!
          </span>
          <p className="text-center mt-6">
            As the captain of your project, you shouldnt have to do all the
            work. But decisive
            <br /> action can mean the difference between a successful product,
            and a missed <br />
            opportunity.
          </p>
        </div>
      </div>
      <div className="mt-11 mb-11">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={styles._swiper}
        >
          <SwiperSlide className={styles._swiper_slide}>Slide 1</SwiperSlide>
          <SwiperSlide className={styles._swiper_slide}>Slide 1</SwiperSlide>
          <SwiperSlide className={styles._swiper_slide}>Slide 1</SwiperSlide>
          <SwiperSlide className={styles._swiper_slide}>Slide 1</SwiperSlide>
          <SwiperSlide className={styles._swiper_slide}>Slide 1</SwiperSlide>
          <SwiperSlide className={styles._swiper_slide}>Slide 1</SwiperSlide>
          <SwiperSlide className={styles._swiper_slide}>Slide 1</SwiperSlide>
          <SwiperSlide className={styles._swiper_slide}>Slide 1</SwiperSlide>
          <SwiperSlide className={styles._swiper_slide}>Slide 1</SwiperSlide>
        </Swiper>
      </div>
      <div className="divide-y-[3px] h-5 bg-[#C09D44]"></div>
    </>
  );
};
