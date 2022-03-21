import React from 'react';
import './Testmonials.css';
import AVTR1 from '../../assets/AVTR1.jpeg';
import AVTR2 from '../../assets/AVTR2.jpeg';
import AVTR3 from '../../assets/AVTR3.jpeg';
import AVTR4 from '../../assets/AVTR4.jpeg';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


const data=[
  {
    avatar:AVTR1,
    name:'ShabeebAli',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus esse accusantium quasi, nihil dolor asperiores sed quod adipisci saepe inventore illo magni amet ab cupiditate harum rem, porro et est.'
  },
  {
    avatar:AVTR2,
    name:'Jaseel',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus esse accusantium quasi, nihil dolor asperiores sed quod adipisci saepe inventore illo magni amet ab cupiditate harum rem, porro et est.'
  },
  {
    avatar:AVTR3,
    name:'Jithin',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus esse accusantium quasi, nihil dolor asperiores sed quod adipisci saepe inventore illo magni amet ab cupiditate harum rem, porro et est.'
  },
  {
    avatar:AVTR4,
    name:'Bujair',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus esse accusantium quasi, nihil dolor asperiores sed quod adipisci saepe inventore illo magni amet ab cupiditate harum rem, porro et est.'
  },
]

const Testmonials = () => {
  return (
    <section id='testmonials'>        
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testmonials__conatiner"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{clickable:true}}
      >
      { 
        data.map(({avatar,name,review},index)=>{
           return(
            <SwiperSlide key={index} className='testmonial'>
              <div className="client__avatar">
                <img src={avatar} alt="Avatar" />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className="client__review">{review} </small>
          </SwiperSlide>
          )
        })
       }
      </Swiper>  
    </section>
  )
}

export default Testmonials