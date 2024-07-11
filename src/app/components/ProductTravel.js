import { Container } from "react-bootstrap"
import React, { Component, useEffect, useState } from "react";
import * as actionType from "../../../redux/actions/type";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";
import Link from "next/link";

export default function ProductTravel(){
  const [ImgPromos,setImgPromos] = useState([]);
  const ImgPromo = () => {
    const URL = actionType.BASE_URL_API + 'Balotour/Tour/tourList?off=&limit=&keyword=&city_id=&tour_type=&typedate=&date_start=&date_end=&lang=';
    axios.get(URL, {
        headers: {
            "x-api-key": "api_key",
            "Content-Type": "application/x-www-form-urlencoded",
        }
    })
    .then(function(res){
        console.log(res.data.data.tour_list);
        setImgPromos(res.data.data.tour_list);
    })
    .catch(function(err){
        console.log(err);
    })
  }

  useEffect(() => {
    ImgPromo();
  }, []);
      return (
        <Container className="mt-4">
          <h4>Khám phá sản phẩm Nhanhtravel</h4>
          <Swiper className="mt-4"
          cssMode={true}
          navigation={true}

          breakpoints={{
              425: {
              slidesPerView: 2,
              spaceBetween: 10,
              },
              576: {
              slidesPerView: 3,
              spaceBetween: 20,
              },

              768: {
              slidesPerView: 3,
              spaceBetween: 20,
              },
              992: {
              slidesPerView: 4,
              spaceBetween: 20,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Navigation,Autoplay]}
          >
            {ImgPromos.map((item,index) => 
              <SwiperSlide key = {index}>
                <div className="explore-tour__item__image">
                    <Link href="/Category">
                      <img src={item.img} className="card-img w-100" alt="⭐ Chùm Tour dịp Lễ 2/9" loading="lazy"/>
                    </Link>
                    <h5>⭐ {item.name}</h5>
                    <span className="overlay"></span>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </Container>
      );
    }