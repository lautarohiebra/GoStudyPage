import HeroAlt from "../shared/HeroAlt";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { gallery } from "../data/galleryData";

const Gallery = () => {
  return (
    <section>
      <HeroAlt title="Galería" />
      <div className="fixed top-0 left-0 w-full h-screen z-[-10] bg-right bg-contain lg:bg-center bg-[url('/assets/galleryBg.jpg')]" />

      <div className="flex flex-col items-center justify-center p-5 gap-5">
        {gallery.map((item, index) => (
          <div
            key={`gallery_item_${index}`}
            className="w-full max-w-2xl shadow-md rounded-3xl lg:hover:z-40 transition-all cursor-grab"
          >
            <h3 className="bg-base-200 text-primary p-5 h-14 rounded-t-3xl">
              {item.title}
            </h3>
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper bg-secondary w-full h-full rounded-b-2xl"
            >
              {item.images.map((image, imageIndex) => (
                <SwiperSlide
                  className="w-full h-full"
                  key={`gallery_item_${index}_image_${imageIndex}`}
                >
                  <div className="w-full h-full flex items-center justify-center align-middle">
                    <img
                      src={image}
                      alt={item.title}
                      className="max-h-[600px]"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
