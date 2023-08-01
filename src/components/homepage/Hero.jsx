import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-[url('/assets/homeHero2.jpg')] xl:bg-[url('/assets/homeHero3.jpg')] bg-fixed">
      <div className="hero-overlay bg-opacity-40 bg-black xl:bg-opacity-25"></div>
      <div className="text-neutral-content">
        <div className="max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-start">
          <h1 className="mb-3 text-5xl lg:text-6xl text-base-100 font-bold">
            Rompe las barreras del lenguaje
          </h1>
          <p className="mb-5 text-xl text-base-100">
            ¡Aprende inglés y comunícate sin límites!
          </p>
          <Link
            to={"#"}
            className="btn border-none w-auto hover:-translate-y-1 text-white shadow-md gradientCTA"
          >
            Comienza ahora
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
