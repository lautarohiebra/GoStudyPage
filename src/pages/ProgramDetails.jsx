import { useParams } from "react-router-dom";
import HeroAlt from "../shared/heroAlt";
import { programas } from "../data/servicios";

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
      <div className="p-5 flex flex-col xl:flex-row">
        <div className="rounded-md bg-base-100 p-5 shadow-md mb-4 xl:mr-4">
          <p className="text-gray-700 font-semibold">{programa.texto}</p>
          <div className="divider"></div>
          <p className="text-gray-700">{programa.descripcion}</p>
          <ul className="list-disc list-inside mt-4 bg-base-200 rounded-md">
            {programa.items.map((item, index) => (
              <li key={index} className="text-gray-700 font-normal text-sm p-1 ml-2">
                {item.textoItem}
              </li>
            ))}
          </ul>
        </div>
        <div className=" w-full xl:w-5/12 h-72 bg-slate-500 rounded-md shadow-md"></div>
      </div>
    </div>
  );
};

export default ProgramDetails;
