import React from 'react';
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import img from '../../images/695ef9b9-5920-49c2-bf38-29f3a60ef391.jpg'
import img1 from '../../images/332a4398717237.5ef6363bea295.png'
import img2 from '../../images/fBKgC4L1cSXWxQgUlYIuEkwQshQHQHqZuDpY4Huu.jpg'

const Home = () => {
  return (
    <div className="  mx-28">
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gray-300 p-2 cursor-pointer ">
          <h2>Category Items</h2>
          <h4 className="hover:underline">Electronic Devices</h4>
            <h4 className="hover:underline">Electronic Accessories</h4>
            <h4 className="hover:underline">TV & Home Appliances</h4>
            <h4 className="hover:underline">Health & Beauty</h4>
            <h4 className="hover:underline">Babies & Toys</h4>
            <h4 className="hover:underline">Groceries & Pets</h4>
            <h4 className="hover:underline">Home & Lifestyle</h4>
            <h4 className="hover:underline">Women's Fashion</h4>
            <h4 className="hover:underline">Men's Fashion</h4>
            <h4 className="hover:underline">Watches & Accessories</h4>
           <h4 className="hover:underline"> Sports & Outdoor</h4>
            <h4 className="hover:underline">Automotive & Motorbike</h4>
          

        </div>
        <div className="col-span-3">
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
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={img} alt="" className="h-[22rem]" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} alt="" className="h-[22rem] " />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="" className="h-[22rem]" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home;