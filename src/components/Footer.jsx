import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer py-10 px-32 items-center justify-around lg:items-start flex flex-col lg:flex-row bg-secondary text-white">
      <div className="flex flex-col items-center lg:items-start">
        <span className="footer-title">Servicios</span>

        <Link to={"/programs"} className="link link-hover">
          Programas
        </Link>
        <Link to={"/destinations"} className="link link-hover">
          Destinos
        </Link>
        <Link to={"/courses"} className="link link-hover">
          Cursos
        </Link>
        <Link to={"/accommodations"} className="link link-hover hidden">
          Alojamientos
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center lg:items-start">
        <span className="footer-title">Compañía</span>
        <Link to={"/about"} className="link link-hover text-center">Sobre nosotros</Link>
        <Link to={"/contact"} className="link link-hover">Contacto</Link>
      </div>
      <div className="flex flex-col justify-center items-center lg:items-start">
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-4">
          <Link target="blank" to={"https://www.instagram.com/gostudyargentina/"}>
            <img src="/assets/instagram.svg" alt="Instagram link" className="w-6" />
          </Link>
          <Link target="blank" to={"https://www.facebook.com/GoStudyArgentina/"}>
            <img src="/assets/facebook.svg" alt="Instagram link" className="w-6" />
          </Link>
        </div>
        <div className="grid grid-flow-col gap-4 mt-2">
        <span className="footer-title mt-3">Teléfonos</span>
        </div>
        <div className="grid grid-flow-col gap-4">
          <p>+54 9-11-5582-1218</p>
        </div>
        <div className="grid grid-flow-col gap-4">
          <p>+54 9-11-3594-1002</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
