/* eslint-disable react/prop-types */
const FixedBg = (props) => {
    return (
      <div className="fixed top-0 left-0 w-full h-screen z-[-10] bg-right lg:bg-center" style={{ backgroundImage: `url(${props.img})`, backgroundSize: 'cover' }}></div>
    );
  };
  
  export default FixedBg;