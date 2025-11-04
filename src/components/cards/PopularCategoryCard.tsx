import { Swiper, SwiperSlide } from "swiper/react";
import { popularCategories } from "../../data";
import { Autoplay, FreeMode } from "swiper/modules";

const PopularCategoryCard = () => {
  return (
    <div className="popular-catagories">
      <div className="mt-4 d-flex align-items-center justify-content-between mb-3">
        <h5 className="mb-0 card-title">Popular Categories</h5>
        <a href="#" className="btn btn-sm btn-line">
          See all
        </a>
      </div>

      <Swiper
        className="catagories-slider"
        slidesPerView={7}
        spaceBetween={6}
        autoplay={{ delay: 5000 }}
        freeMode
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 3,
          },
          576: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 5,
          },
          1400: {
            slidesPerView: 7,
          },
        }}
        modules={[Autoplay, FreeMode]}
      >
        {popularCategories.map((item, index) => (
          <SwiperSlide key={index}>
            <a href="#">
              <item.icon />
              {item.category}
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default PopularCategoryCard;
