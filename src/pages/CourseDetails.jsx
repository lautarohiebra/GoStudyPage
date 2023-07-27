import { useParams } from "react-router-dom";
import HeroAlt from "../shared/heroAlt";
import { cursos } from "../data/servicios";

const CourseDetails = () => {
  const { id } = useParams();

  // Buscar el programa correspondiente al ID en los datos
  const curso = cursos.find((p) => p.id === id);

  if (!curso) {
    return <div>curso no encontrado</div>;
  }
  return (
    <>
      <HeroAlt title={curso.titulo} backgroundImage={curso.imagen} />
      <div className="p-5 flex flex-col xl:flex-row xl:justify-center">
        <div className="rounded-md bg-base-100 p-5 shadow-md mb-4 xl:mr-4 max-w-6xl">
          <p className="text-gray-700 font-semibold">{curso.texto}</p>
          <div className="divider"></div>
          {curso.descripcion.map((parrafo, index) => (
            <div key={`parrafo_${index}`}>
              <h3 className="font-semibold">{parrafo.tituloParrafo}</h3>
              <p className="mb-4">{parrafo.parrafo}</p>
            </div>
          ))}
          {curso.modulos ? (
            <div>
              <div className="divider"></div>
              <h3 className="font-semibold">Modulos</h3>
              <p>
                Todos los alumnos a partir del modelo intensive de cursos puede
                elegir un módulo extra en el caso de flexibilidad intensive y
                dos módulos extras en el caso de flexibilidad super intensive.
                Los cursos pueden ser personalizados para poder aprender
                mediante clases adicionales específicas, Esto permite a los
                alumnos estudiar temas que mejor beneficien sus objetivos de
                aprendizaje.
              </p>
              <ul className="list-disc px-5 mt-3">
                {curso.modulos.map((modulo, index) => (
                  <li key={`modulo_${index}`} className="mt-2">
                    <h4 className="font-semibold text-gray-500">
                      {modulo.nombreModulo}
                    </h4>
                    <p>{modulo.textoModulo}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {/* Chart */}

          <div className="max-w-4xl mx-auto overflow-auto lg:overflow-visible rounded-lg shadow-md m-3">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  {curso.tabla.headers.map((header, index) => (
                    <th className="text-center" key={`header_${index}`}>{header.column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* rows */}
                {curso.tabla.rows.map((row, index) => (
                  <tr key={`row_${index}`}>
                    <th>{row.programa}</th>
                    <td className="text-center">{row.dato1}</td>
                    <td className="text-center">{row.dato2}</td>
                    <td className="text-center">{row.dato3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className=" w-full xl:w-5/12 h-72 bg-slate-500 rounded-md shadow-md"></div>
      </div>
    </>
  );
};

export default CourseDetails;
