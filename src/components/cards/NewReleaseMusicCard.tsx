import { Swiper, SwiperSlide } from "swiper/react";
import { newReleaseMusic } from "../../data";
import { Autoplay } from "swiper/modules";

const NewReleaseMusicCard = () => {
  return (
    <div className="new-realese-music mb-4">
      <div className="d-flex g-4 mb-4 flex-wrap align-items-center justify-content-between">
        <h4 className="mb-0">
          New Releases{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
          >
            <path
              d="M15.2621 27.9768C8.24191 27.9691 2.55288 22.2801 2.54517 15.2599V15.0056C2.68496 8.01702 8.43892 2.45137 15.4282 2.54411C22.4176 2.63685 28.0218 8.3532 27.9762 15.343C27.9305 22.3328 22.252 27.9754 15.2621 27.9768ZM12.7187 9.53729V20.9825L20.3488 15.2599L12.7187 9.53729Z"
              fill="#EE4950"
            />
          </svg>
        </h4>
        <a href="#" className="btn text-danger p-0">
          See all
        </a>
      </div>

      <Swiper
        className="new-realese-slider"
        loop
        slidesPerView={6}
        spaceBetween={24}
        autoplay={{
          delay: 3500,
        }}
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
        modules={[Autoplay]}
      >
        {newReleaseMusic.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="new-release-card">
              <img src={item.img} alt="" />
              <h6 className="mb-0">{item.title}</h6>
              <p className="mb-0">{item.artist}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default NewReleaseMusicCard;
