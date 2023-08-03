import { Link } from "react-router-dom";
import { items } from "../../data/homeExpo";

/* eslint-disable react/prop-types */
const Expo = () => {
  return (
    <>
      {items.map((item,index) => (
        <div
          key={`expo_${index}`}
          className={`hero min-h-[400px] lg:min-h-screen bg-cover lg:bg-fixed bg-center ${item.image}`}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h2 className="mb-5 text-3xl lg:text-5xl font-bold">{item.title}</h2>
              <p className="mb-5">{item.text}</p>
              <Link to={item.path}>
                <button className="btn border-none hover:translate-x-1 gradientCTA">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Expo;
