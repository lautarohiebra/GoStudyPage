import FixedBg from "../shared/FixedBg";
import HeroAlt from "../shared/HeroAlt";

const AboutUs = () => {
  return (
    <section>
      <FixedBg img="/assets/backgroundDesign.png" />
      <HeroAlt title="¿Quienes somos?" backgroundImage="/assets/about.jpg" />
      <div className="items-center justify-center flex flex-col-reverse lg:flex-row lg:gap-6 lg:px-16 lg:py-7">
        <div className="max-w-4xl shadow-md rounded-md p-5 bg-base-100">
          <h2 className="text-xl lg:text-2xl font-semibold my-4">
            En Gostudy, creemos en el poder transformador de la educación del
            idioma inglés para el futuro profesional.
          </h2>
          <p className="lg:text-lg mb-4">
            Sumergimos a nuestros alumnos en <span className="text-accent ">experiencias variadas y emocionantes</span> tanto <span className="text-accent ">dentro </span> como <span className="text-accent ">fuera</span> del aula. Aprenden inglés y practican habilidades de conversación en entornos cotidianos, mientras combinan clases con <span className="text-accent ">emocionantes paseos turísticos</span> y <span className="text-accent ">enriquecedoras experiencias culturales</span>.
          </p>
          <p className="lg:text-lg mb-4">
            Para nosotros, la educación del idioma inglés es <span className="text-accent">más que gramática y vocabulario</span>; es una herramienta para <span className="text-accent">construir conexiones</span>, <span className="text-accent">forjar oportunidades</span> y <span className="text-accent">enriquecer vidas</span>. Trabajamos con valores de <span className="text-accent">contención</span>, <span className="text-accent">respeto</span>, <span className="text-accent">honestidad</span>, y <span className="text-accent">profesionalismo</span>, Nada está librado al azar, cada detalle está planificando cada detalle para que tengan la mejor experiencia.
          </p>
          <p className="lg:text-lg mb-4">
            En Gostudy, somos apasionados y dedicados a ayudar a nuestros alumnos a alcanzar sus metas educativas y profesionales. Formamos una comunidad que se preocupa profundamente por su crecimiento y éxito.
          </p>
          <p className="lg:text-lg mb-4 font-semibold text-secondary">
            ¡Únete a nosotros en este emocionante viaje de aprender inglés a partir de experiencias innolvidables! ¡Somos GoStudy!
          </p>
        </div>
      </div>

      {/* Seccion Equipo */}

      <div className="w-full h-screen backdrop-invert py-10 flex flex-col align-middle items-center justify-center">
        <h2 className="text-base-100 text-3xl font-semibold text-center">
          El equipo <span className="text-accent">Go Study</span> 
        </h2>
      </div>
    </section>
  );
};

export default AboutUs;
