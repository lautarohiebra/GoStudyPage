/* eslint-disable react/prop-types */
const HeroAlt = (props) => {
    const { title, backgroundImage } = props;
  
    return (
      <>
        <div className="h-20"></div>
        <div className="h-[350px] w-full bg-cover bg-center flex flex-col justify-center shadow-md z-40" style={{backgroundImage: `url(${backgroundImage})`}}>
          <div className="h-full flex align-middle items-center">
          <h2 className="text-3xl md:text-4xl mx-auto font-semibold backdrop-blur-md backdrop-brightness-95 border-2 border-base-100 text-white p-3 lg:px-9 text-center">
            {title}
          </h2>
          </div>
        </div>
      </>
    );
  };
  
  export default HeroAlt