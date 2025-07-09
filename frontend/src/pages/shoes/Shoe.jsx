import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { shoeslist } from "../../assets/assets";
import Button from "@mui/material/Button";

const Shoe = ({ setCategory }) => {
  if (!setCategory) {
    console.error("❌ setCategory is not provided to Shoes component!");
    return null; // Prevent crash if `setCategory` is undefined
  }

  return (
    <section className="py-5 overflow-hidden container mx-auto bag">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold container-1">Featured Themes</h2>
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
          400: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          991: { slidesPerView: 5 },
          1500: { slidesPerView: 8 },
        }}
      >
        {shoeslist.map((item, index) => (
          <SwiperSlide
            key={item._id || index}  // Ensure unique key
            onClick={() => setCategory(prev => (prev === item.name ? "All" : item.name))}
          >
            <Button>{item.name}</Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Shoe;
