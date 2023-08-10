const Info = () => {
  return (
    <section className="bg-none flex flex-col align-middle items-center justify-center ">
      <div className="flex flex-col items-center justify-center h-[50%] bg-base-100 w-full p-4">
        <div className="px-5 py-10 flex flex-col items-center">
          <h2 className="font-bold text-xl lg:text-4xl mb-3 text-primary text-center">
            Desarrolla y perfecciona tu comunicación
          </h2>
          <p className="text-base lg:text-lg text-center max-w-xl mb-1">
            El inglés es el{" "}
            <span className="text-accent">idioma universal</span> que te
            permite{" "}
            <span className="text-accent">comunicarte sin barreras</span> y{" "}
            <span className="text-accent">aprovechar al máximo </span> las
            oportunidades del siglo XXI.
          </p>
          <p className="text-base lg:text-lg text-center max-w-xl mb-1">
            Dominarlo es clave para el éxito en un mundo globalizado, ofreciendo
            mejores oportunidades laborales y conectividad internacional.
          </p>
        </div>
      </div>
      <div className="px-5 py-10 flex flex-col items-center justify-center h-[50%] bg-primary w-full">
        <h2 className="font-semibold text-xl lg:text-4xl mb-3 text-base-100 text-center">
          Experimenta el aprendizaje al estilo <span className="text-accent">Go Study</span>
        </h2>
        <p className="text-base-100 font-normal text-lg text-center max-w-xl">
          Experiencias dinámicas que van mas allá de aprender un nuevo lenguaje.
        </p>
        <div className="bg-base-100 p-5 shadow-md mt-5 max-w-lg">
          <h2 className="font-semibold text-accent">¡Sin importar tu edad, disponemos de un programa de estudio para vos!</h2>
          <p className="mt-2">
            Ofrecemos soluciones educativas integrales tanto para el joven en formación como para el adulto que desea expandir sus horizontes en el ámbito laboral.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Info;
