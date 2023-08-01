import { useParams } from "react-router-dom";
import HeroAlt from "../shared/HeroAlt";
import { programas } from "../data/servicios";
import ContactForm from "../components/contactForm";

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
        </div>
          <ContactForm/>
      </div>
    </div>
  );
};

export default ProgramDetails;
