import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpeg'
import AVTR2 from '../../assets/avatar2.jpeg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpeg'
// import Swiper core and required modules
import {  Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar:AVTR1,
    name:'Internship - Varcon Technololgy Pvt Ltd.',
    review:'Interned as a Fullstack developer in Bengaluru for 4 weeks'
  },
  {
    avatar:AVTR2,
    name:'Internship - Emerxte Pvt Ltd.',
    review:'Worked as a intern on a project based on Internet Of Things(IOT) in Bengaluru for 4 weeks'
  },
  {
    avatar:AVTR3,
    name:'Seminars - Problem Solving and Entrepreneurship ',
    review:'Attended seminar on problem solving and entrepreneur ship held at CMRIT'
  },
  {
    avatar:AVTR4,
    name:'Seminars - Patent and Drafting',
    review:'Attended seminar on patent and drafting held at CMRIT'
  }
]
const Testimonials = () => {
  return (
    <section id='testimonial'>
      <h5>Other Activities</h5>
      <h2>Internship And Seminars</h2>

      <Swiper className="container testimonials__container"
            // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
      {
        data.map(({avatar,name,review} , index) => {
          return (
            <SwiperSlide  key = {index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt=""/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials