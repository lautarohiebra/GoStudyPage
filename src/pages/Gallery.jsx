import { gallery } from "../data/galleryData";
import HeroAlt from "../shared/HeroAlt";

const Gallery = () => {
  return (
    <section>
      <HeroAlt backgroundImage="" title="Galería" />
      <div className="fixed top-0 left-0 w-full h-screen z-[-10] bg-right bg-contain lg:bg-center bg-[url('/assets/galleryBg.jpg')]" />
      <div className="min-h-screen flex flex-col lg:flex-row flex-wrap gap-4 items-center justify-center p-3">
        {gallery.map((item, index) => (
          <div
            key={`gallery_item_${index}`}
            className="card rounded-lg w-full md:w-[80%] lg:[65%] xl:w-[45%] bg-base-200 shadow-xl transition-all"
          >
            <div className="card w-full shadow-xl">
              <figure className="rounded-t-lg ">
                <img src={item.image} alt={item.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p className="">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
