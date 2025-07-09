// Importing necessary modules and libraries
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import EffectFade module
import 'swiper/css';
import Button from '@mui/material/Button';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Link } from 'react-router-dom';

function Reviews() {
  
    return (
<div className='my-Swiper' >
<Swiper
  spaceBetween={30}
//   loop={true}
  breakpoints={{
    0: { slidesPerView: 1 },
    860: { slidesPerView: 1 },
    1000: { slidesPerView: 2 },
  }}
  autoplay={{
    delay: 2000, // 5 seconds
    disableOnInteraction: false, // Keeps autoplay running even when user interacts

  }}
 
  modules={[EffectFade, Navigation, Pagination, Autoplay]}
  className="mySwiper-2"
>
  <SwiperSlide >
    <div className='swiper-reviews' >
  <p>"I absolutely love my new tote bag from this store! It's spacious, stylish, and perfect for my everyday needs. The quality is amazing, and the leather feels so soft. I get compliments on it all the time! Shipping was fast, and customer service was very helpful when I had a question. Highly recommend!"</p>
        <p>Sarah M. - ⭐⭐⭐⭐⭐</p>
    </div>
  </SwiperSlide>
  <SwiperSlide>
  <div className='swiper-reviews'>
        <p>"I recently bought a watch from this site, and I couldn't be happier. The design is sleek and elegant, exactly what I was looking for. It's perfect for both casual and formal wear. The checkout process was easy, and the package arrived on time. I'll definitely be back for more!"</p>
        <p> John D. - ⭐⭐⭐⭐⭐</p>
    </div>
  </SwiperSlide>
  <SwiperSlide >
  <div className='swiper-reviews'>
        <p>"I’ve been on the hunt for the perfect pair of shoes for months, and I finally found them here! These heels are not only stylish but also comfortable, which is rare. They fit perfectly and the material feels premium. I’m so excited to wear them on my next night out!"</p>
        <p> Emily R. - ⭐⭐⭐⭐⭐</p>
    </div>
  </SwiperSlide>
  <SwiperSlide >
  <div className='swiper-reviews'>
        <p>"Bought a dress for my wife’s birthday, and she absolutely loved it! The fit was perfect, and the fabric is so soft and high quality. Plus, the delivery was super quick. I’m very impressed with the service and the selection. I’ll definitely be shopping here again for gifts!"</p>
        <p>Michael S. - ⭐⭐⭐⭐⭐</p>
    </div>
  </SwiperSlide>
  <SwiperSlide >
  <div className='swiper-reviews'>
        <p>"I can’t get enough of the bags from this website! I’ve ordered two already, and they’ve both been exactly what I wanted—stylish and durable. The colors are vibrant, and the stitching is perfect. I’m a loyal customer now and will continue to buy more. Great experience!"</p>
        <p>Olivia T. - ⭐⭐⭐⭐⭐</p>
    </div>
  </SwiperSlide>
  
</Swiper>

</div>
  )
}

export default Reviews
