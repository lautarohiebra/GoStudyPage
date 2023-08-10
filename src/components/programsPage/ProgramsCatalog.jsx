/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { programas } from "../../data/servicios";
import HeroAlt from "../../shared/HeroAlt";

const ProgramsCatalog = () => {
  return (
    <>
      <HeroAlt
        backgroundImage="/assets/programas.jpg"
        title="Nuestros programas"
      />
      <p className="p-2 sm:p-8 bg-secondary text-white font-medium mx-8 lg:mx-auto  max-w-2xl min-w-[288px] mt-[-30px] mb-3 text-sm md:text-base">
        Tenemos una variedad de cursos y programas para distintos alumnos y
        situaciones. Deja que te ayudemos a encontrar el curso que es mejor para
        vos!
      </p>

      {/* Card Container */}
      <div className="flex flex-col md:flex-row flex-wrap py-5 px-auto lg:p-16 justify-center align-middle items-center gap-6">
        {/* Card */}
        {programas.map((programa, index) => (
          <div
            key={programa.id}
            className="card card-compact w-72 md:h-[800px] sm:w-80 lg:w-96 bg-base-100 shadow-xl hover:-translate-y-1 transition-all"
          >
            <figure className="max-h-[230px] md:min-h-[40%] md:h-[40%] overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={programa.imagen}
                alt={programa.titulo}
              />
            </figure>
            <div className="card-body h-[60%]">
              <div className="h-[40%]">
                <h2 className="card-title">{programa.titulo}</h2>
                <div className="badge badge-accent text-base-100">
                  {programa.edad}
                </div>
                <p className="h-[100px] mt-4">{programa.texto}</p>
              </div>

              <div className="divider" />

              <div className="h-[40%] flex flex-col justify-start">
                <h3 className="font-semibold mb-2">Destinos disponibles:</h3>
                <div className="flex flex-col flex-wrap gap-2 justify-start">
                  {programa.destinos &&
                    programa.destinos.map((destino) => (
                      <Link key={destino.destino} to={destino.path} className="inline">
                        <button className="btn btn-outline btn-xs inline">
                          {destino.destino}
                        </button>
                      </Link>
                    ))}
                </div>
              </div>
              {programa.id === "colegios_e_institutos" ? (
                <div className="card-actions justify-between flex">
                  <Link to={"/contact"}>
                    <button className="btn btn-link text-neutral btn-sm xl:btn-md montserrat">
                      Más destinos
                    </button>
                  </Link>
                  <Link to={`/programs/${programa.id}`}>
                    <button className="btn btn-primary text-base-100 btn-sm xl:btn-md montserrat">
                      Saber mas
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="card-actions justify-end">
                  <Link to={`/programs/${programa.id}`}>
                    <button className="btn btn-primary text-base-100 btn-sm xl:btn-md montserrat">
                      Saber mas
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProgramsCatalog;
