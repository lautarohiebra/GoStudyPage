/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { destinos } from "../../data/servicios";
import HeroAlt from "../../shared/heroAlt";

const DestinationsCatalog = () => {
  return (
    <>
      <HeroAlt
        backgroundImage="/assets/programas.jpg"
        title="Nuestros programas"
      />
      <p className="p-2 sm:p-8 bg-primary text-base-100 font-medium mx-8 lg:mx-auto rounded-md shadow-md max-w-xl min-w-[288px] mt-[-30px] mb-3 text-sm md:text-base">
        Según tu edad, necesidad y programa que elijas, tenemos para ofrecerte
        una variedad de destinos tanto en UK como en USA.
      </p>
      <div className="flex flex-col md:flex-row flex-wrap py-5 px-auto lg:p-16 justify-center align-middle items-center gap-6">
        {destinos.map((destino, index) => (
          <div
            key={index}
            className="card card-compact w-72 h-[550px] sm:w-80 lg:w-96 bg-base-100 shadow-xl hover:-translate-y-2 transition-all"
          >
            <figure className="h-[250px] overflow-hidden">
              <img
                className="h-full w-full object-fill"
                src={destino.imagen}
                alt={destino.titulo}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{destino.titulo}</h2>
              <p>{destino.texto}</p>
              <div className="flex gap-2 py-2 flex-wrap">
                {destino.cursos.map((curso, index) => (
                  <div key={curso.curso} className="badge badge-accent text-base-100">
                    {curso.curso}
                  </div>
                ))}
              </div>
              <div className="card-actions justify-end">
                <Link to={`/destinations/${destino.id}`}>
                  <button className="btn btn-primary text-base-100">
                    Saber mas
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DestinationsCatalog;
