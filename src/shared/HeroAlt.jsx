/* eslint-disable react/prop-types */
const HeroAlt = (props) => {
    const { title, backgroundImage } = props;
  
    return (
      <>
        <div className="h-20"></div>
        <div className="w-full h-56 overflow-hidden bg-cover bg-center flex flex-col justify-center" style={{backgroundImage: `url(${backgroundImage})`}}>
          <h2 className="text-2xl lg:text-4xl mx-auto font-semibold text-base-100 p-5 lg:px-9 rounded-full text-center backdrop-blur-lg backdrop-brightness-75">
            {title}
          </h2>
        </div>
      </>
    );
  };
  
  export default HeroAlt