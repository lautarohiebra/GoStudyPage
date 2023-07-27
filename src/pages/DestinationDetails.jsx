import { useParams } from "react-router-dom";
import HeroAlt from "../shared/heroAlt";
import { destinos } from "../data/servicios";

const DestinationDetails = () => {
  const { id } = useParams();

  // Buscar el programa correspondiente al ID en los datos
  const destino = destinos.find((p) => p.id === id);

  if (!destino) {
    return <div>destino no encontrado</div>;
  }
  return (
    <div>
      <HeroAlt title={destino.titulo} backgroundImage={destino.imagen} />
      <div className="p-5 flex flex-col xl:flex-row xl:justify-center">
        <div className="rounded-md bg-base-100 p-5 shadow-md mb-4 xl:mr-4 max-w-6xl">
          <p className="text-gray-700 font-semibold">{destino.texto}</p>
          <div className="divider"></div>
          {destino.descripcion.map((parrafo, index) =>(
            <p key={`parrafo_${index}`} className="mb-3">{parrafo.parrafo}</p>
          ))}
          <ul className="list-disc list-inside mt-4 bg-base-200 rounded-md">
            {destino.items &&
              destino.items.length > 0 &&
              destino.items.map((item, index) => (
                <li
                  key={index}
                  className="text-gray-700 font-normal text-sm p-1 ml-2"
                >
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

export default DestinationDetails;
