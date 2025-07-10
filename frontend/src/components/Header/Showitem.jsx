// Importing necessary modules and libraries
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from 'react-router-dom';

function Showitem() {
  return (
    <div className='SwiperSlide-gap '>
       <section className="py-5 overflow-hidden container mx-auto bag">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold container-1 place-selfe">Our collection</h2>
        <div className="flex items-center">
          <div className="swiper-buttons-1">
            <div className="swiper-buttons main-button">
              <button className="swiper-prev category-carousel-prev bg-yellow-500 px-3 py-1 rounded main-button-1">
                ❮
              </button>
              <button className="swiper-next category-carousel-next bg-yellow-500 px-3 py-1 rounded ml-2">
                ❯
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Removed extra Swiper */}
      <Swiper
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={10}
        navigation={{
          nextEl: ".category-carousel-next",
          prevEl: ".category-carousel-prev",
        }}
        breakpoints={{
          0: { slidesPerView: 2 },
          400: { slidesPerView: 2 },
          580: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          991: { slidesPerView: 3 },
          1500: { slidesPerView: 3 },
        }}
      >
          <SwiperSlide>
               <div >
                <div>
                  
                <img className='show-img final-swiper-1' src='/show-1.webp' alt=''/>
                </div>
                <div className='show-pad'> <Link to="/watches">
                 <button className="learn-more show-but">
                     <span className="circle" aria-hidden="true">
                     <span className="icon arrow"></span>
                     </span>
                     <span className="button-text">Explore More</span>
                </button></Link></div>
               </div>
          </SwiperSlide>
          <SwiperSlide>
          <div>
                <div>


                 <img className=' show-img final-swiper-1' src='/show-2.webp' alt=''/> 
                </div>
                <div className='show-pad'> <Link to="/dress">
                 <button className="learn-more show-but">
                     <span className="circle" aria-hidden="true">
                     <span className="icon arrow"></span>
                     </span>
                     <span className="button-text">Explore More</span>
                </button></Link>
                </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
            <div>
{/*                   <div className=' category-img-44 show-img final-swiper-3'> </div> */}
                <div>

                <img className='category-img-44 show-img' src='/show-3.webp' alt=''/>
                </div>
                <div className='show-pad'>
                     <Link to="/shop"> 
                 <button className="learn-more show-but">
                     <span className="circle" aria-hidden="true">
                     <span className="icon arrow"></span>
                     </span>
                     <span className="button-text">Explore More</span>
                </button></Link></div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
            <div>
                <div>
{/*                   <div className='show-img final-swiper-4'> </div> */}

                <img className=' show-img' src='/ss.webp' alt=''/>
                </div>
                <div className='show-pad'>
                    <Link to="/shoes"> 
                 <button className="learn-more show-but">
                     <span className="circle" aria-hidden="true">
                     <span className="icon arrow"></span>
                     </span>
                     <span className="button-text">Explore More</span>
                </button></Link></div>
               </div>
            </SwiperSlide>
      </Swiper>
    </section>
    </div>
  )
}

export default Showitem
