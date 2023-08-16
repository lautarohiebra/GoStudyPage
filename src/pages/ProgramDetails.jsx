import { Link, useParams } from "react-router-dom";
import HeroAlt from "../shared/HeroAlt";
import { programas } from "../data/servicios";
import ContactForm from "../components/contactForm";
import FixedBg from "../shared/FixedBg";

const ProgramDetails = () => {
  const { id } = useParams();

  // Buscar el programa correspondiente al ID en los datos
  const programa = programas.find((p) => p.id === id);

  if (!programa) {
    return <div>Programa no encontrado</div>;
  }
  return (
    <div>
      <HeroAlt title={programa.titulo} backgroundImage={programa.imagen} />
      <FixedBg img="/assets/backgroundDesign.png" />
      <div className="p-5 flex flex-col xl:flex-row xl:justify-center gap-3">
        <div className="rounded-md bg-base-100 p-5 shadow-md xl:mr-4 max-w-6xl">
          <p className="text-gray-700 font-semibold">{programa.texto}</p>
          <div className="divider"></div>
          <p className="text-gray-700">{programa.descripcion}</p>
          <ul className="list-disc list-inside mt-4 bg-base-200 p-3 rounded-md">
            {programa.items.map((item, index) => (
              <li key={index} className="text-gray-700 font-normal text-sm p-1 ml-2">
                {item.textoItem}
              </li>
            ))}
          </ul>

          {id === "ingles_para_profesionales" && (
            <>
            <div className="divider"></div>
          <div className="">
            <p className="font-semibold mb-2">Certificaciones Disponibles para cursar:</p>
            <ul className="list-disc list-inside ml-6">
              <li>
                Ingles General
                <Link to="/courses/ingles_general" className="ml-2 hover:underline transition-all text-info">
                  Saber más
                </Link>
              </li>
              <li>
                Gestion de negocios
                <Link to="/courses/gestion_de_negocios" className="ml-2 hover:underline transition-all text-info">
                  Saber más
                </Link>
              </li>
              <li>
                Gestion de proyectos
                <Link to="/courses/gestion_de_proyectos" className="ml-2 hover:underline transition-all text-info">
                  Saber más
                </Link>
              </li>
              <li>
                Marketing
                <Link to="/courses/marketing" className="ml-2 hover:underline transition-all text-info">
                  Saber más
                </Link>
              </li>
              <li>
                Conceptos de mercado financiero (Bloomberg)
                <Link to="/courses/conceptos_mercado_financiero" className="ml-2 hover:underline transition-all text-info">
                  Saber más
                </Link>
              </li>
            </ul>
          </div>
          </>
        )}
        </div>
          <ContactForm/>
      </div>
    </div>
  );
};

export default ProgramDetails;
