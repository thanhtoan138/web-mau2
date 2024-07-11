import { Container } from "react-bootstrap"
import React, { Component, useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import * as actionType from "../../../redux/actions/type";
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";

export default function Promotion(){
    
      const [ImgPromos,setImgPromos] = useState([]);
      const ImgPromo = () => {
        const URL = actionType.BASE_URL_API + 'Balotour/SlideMain/slideImageList';
        axios.get(URL, {
            headers: {
                "x-api-key": "api_key",
                "Content-Type": "application/x-www-form-urlencoded",
            }
        })
        .then(function(res){
            console.log(res.data.data.slide_endow_img);
            setImgPromos(res.data.data.slide_endow_img);
        })
        .catch(function(err){
            console.log(err);
        })
      }

      useEffect(() => {
        ImgPromo();
      }, []);
      return (

        <Container className="promotion mt-4">
          <h4>Ưu đãi</h4>
          <Swiper 
          cssMode={true}
          navigation={true}

          breakpoints={{
              425: {
                  slidesPerView: 2,
                  spaceBetween: 16,
              },
              768: {
              slidesPerView: 2,
              spaceBetween: 16,
              },

              992: {
                  slidesPerView: 3,
                  spaceBetween: 20,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Navigation,Autoplay]}
          className="mt-4">
            {ImgPromos.map((item,index) => (
              <SwiperSlide key={index}>
                <Link href="/Category">
                  <img src={item.image} className="img_promo w-100"/>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      );
    }
