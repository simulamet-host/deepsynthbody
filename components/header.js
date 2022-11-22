import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Card from './carouselCards'

var array = [{ category: 'Cardiovascular', thumbnail: '/deepsynthbody/imagesOfCategories/Cardiovascular.jpeg' },
{ category: 'Endocrine', thumbnail: '/deepsynthbody/imagesOfCategories/Endocrine.jpeg' },
{ category: 'Integumentary', thumbnail: '/deepsynthbody/imagesOfCategories/Integumentary.jpeg' },
{ category: 'Lymphatic', thumbnail: '/deepsynthbody/imagesOfCategories/Lymphatic.jpeg' },
{ category: 'Muscular', thumbnail: '/deepsynthbody/imagesOfCategories/Muscular.jpeg' },
{ category: 'Nervous', thumbnail: '/deepsynthbody/imagesOfCategories/Nervous.jpeg' },
{ category: 'Urinary', thumbnail: '/deepsynthbody/imagesOfCategories/Urinary.jpeg' }]

const Header = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 2000 }}
      pagination={{ clickable: true }}
      // style={{ width: "50%"}}
    >
      {
        array.
          map(props => {
            return (
              <SwiperSlide key={props.category}>

                <Card
                  key={props.category}
                  category={props.category}
                  thumbnail={props.thumbnail}
                />
              </SwiperSlide>
            )
          })}
    </Swiper>
  );
};

export default Header;


    // <div className="container mx-auto px-20 mt-10">
    //   <div className="grid grid-cols-2 gap-6">
    //     <div className="ml-9 shadow-lg bg-[#f5f5f5] max-w-md max-h-52">
    //       <div className="mt-9 flex justify-center ">
    //         <header className="text-[#07849F] text-xl font-bold inline-block px-7 py-3">
    //           DeepSynthBody: the beginning of the end for data deficiency in
    //           medicine
    //         </header>
    //       </div>
    //       <br />
    //       <div className="flex justify-center">
    //         <button
    //           type="button"
    //           className="inline-block px-7 py-3 bg-[#15CEF9] text-white font-medium text-sm leading-snug rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
    //         >
    //           <Link href="/docs">Documentation</Link>
    //         </button>
    //       </div>
    //     </div>
    //     <div className="ml-20">
    //       <Image src={img5} alt="body image"
    //        width={400} height={350}
    //        />
    //     </div>
    //   </div>
    // </div>