/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { cursos } from "../../data/servicios";
import HeroAlt from "../../shared/HeroAlt";

const CoursesCatalog = () => {
  return (
    <>
      <HeroAlt
        backgroundImage="/assets/courses.jpg"
        title="Nuestros cursos"
      />
      <p className="p-2 sm:p-8 bg-secondary text-white font-medium mx-8 lg:mx-auto max-w-2xl min-w-[288px] mt-[-30px] mb-3 text-sm md:text-base z-50">
        Tenemos una variedad de cursos y programas para distintos alumnos y
        situaciones. Deja que te ayudemos a encontrar el curso que es mejor para
        vos!
      </p>

      {/* Card Container */}
      <div className="bg-none flex flex-col md:flex-row flex-wrap py-5 px-auto lg:p-16 justify-center align-middle items-center gap-6">
        {/* Card */}
        {cursos.map((curso, index) => (
          <div
            key={curso.id}
            className="card card-compact w-72 h-[800px] sm:w-80 lg:w-96 bg-base-100 shadow-xl hover:-translate-y-2 transition-all"
          >
            <figure className="min-h-[40%] h-[40%] overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={curso.imagen}
                alt={curso.titulo}
              />
            </figure>
            <div className="card-body h-[60%]">
              <div className="h-[55%]">
                <h2 className="card-title">{curso.titulo}</h2>
                <div className="flex flex-col gap-1">
                  <div className="badge badge-accent text-base-100">
                    {curso.edad}
                  </div>
                  <div className="flex flex-col justify-start">
                    <p className="font-semibold">
                      Nivel requerido:{" "}
                      <span className="rounded-lg text-gray-600 px-1 font-normal">
                        {curso.nivel}
                      </span>
                    </p>
                    <p className="font-semibold">
                      Duración:{" "}
                      <span className="rounded-lg text-gray-600 px-1 font-normal">
                        {curso.duracion}
                      </span>
                    </p>
                  </div>
                </div>
                <p className="h-[100px] mt-4">{curso.texto}</p>
              </div>

              <div className="divider" />

              <div className="h-[40%] flex flex-col justify-start">
                <h3 className="font-semibold mb-2">Destinos disponibles:</h3>
                <div className="flex flex-col flex-wrap gap-2 justify-start">
                  {curso.destinos &&
                    curso.destinos.map((destino) => (
                      <Link key={destino.destino} to={destino.path}>
                        <button className="btn btn-outline btn-xs">
                          {destino.destino}
                        </button>
                      </Link>
                    ))}
                </div>
              </div>
              <div className="card-actions justify-end">
                <Link to={`/courses/${curso.id}`}>
                  <button className="btn btn-primary text-base-100 montserrat">
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

export default CoursesCatalog;
