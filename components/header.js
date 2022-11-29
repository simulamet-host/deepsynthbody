import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Card from './carouselCards'

export default function Header ({sliderData}){
  var array = [{ category: 'Cardiovascular', thumbnail: '/deepsynthbody/imagesOfCategories/Cardiovascular.svg' },
{ category: 'Endocrine', thumbnail: '/deepsynthbody/imagesOfCategories/Endocrine.jpeg' },
{ category: 'Integumentary', thumbnail: '/deepsynthbody/imagesOfCategories/Integumentary.svg' },
{ category: 'Lymphatic', thumbnail: '/deepsynthbody/imagesOfCategories/Lymphatic.jpeg' },
{ category: 'Muscular', thumbnail: '/deepsynthbody/imagesOfCategories/Muscular.jpeg' },
{ category: 'Nervous', thumbnail: '/deepsynthbody/imagesOfCategories/Nervous.jpeg' },
{ category: 'Urinary', thumbnail: '/deepsynthbody/imagesOfCategories/Urinary.jpeg' }]

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      // autoHeight= {true}
      navigation
      autoplay={{
        delay: 2000, 
        // pauseOnMouseEnter: true,
      }}
      pagination={{ clickable: true }}
      style={{width:"97%",height:"%"}}
      
    // breakpoints={{
    //   // when window width is >= 640px
    //   640: {
    //     slidesPerView: 1,
    //   },
    //   // when window width is >= 768px
    //   768: {
    //     slidesPerView: 1,
    //   },
    //   1024: {
    //     slidesPerView: 1,
    //   }
    // }}
    >
      {
       sliderData.filter(item => item.frontmatter.show == true)
        .
          map(props => {
            return (
              <SwiperSlide key={props.frontmatter.link}>

                <Card
                  key={props.frontmatter.link}
                  buttonName={props.frontmatter.buttonName}
                  thumbnail={props.frontmatter.thumbnail}
                  description={props.frontmatter.description}
                  link={props.frontmatter.link}
                  class="swiper-slide"
                />
              </SwiperSlide>
            )
          })}
    </Swiper>
  );
};