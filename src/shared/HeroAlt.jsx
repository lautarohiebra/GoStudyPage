/* eslint-disable react/prop-types */
const HeroAlt = (props) => {
    const { title, backgroundImage } = props;
  
    return (
      <>
        <div className="h-20"></div>
        <div className="h-[250px] w-full bg-cover bg-center flex flex-col justify-center" style={{backgroundImage: `url(${backgroundImage})`}}>
          <div className="backdrop-brightness-90 h-full flex align-middle items-center">
          <h2 className="text-4xl md:text-5xl mx-auto font-normal text-white p-5 lg:px-9 text-center">
            {title}
          </h2>
          </div>
        </div>
      </>
    );
  };
  
  export default HeroAlt