import ContactForm from "../components/contactForm";
import FixedBg from "../shared/FixedBg";
import HeroAlt from "../shared/HeroAlt";

const Contact = () => {
  return (
    <section>
      <FixedBg img="/assets/backgroundDesign.png" />
      <HeroAlt title="Contacto" backgroundImage="assets/contact.jpg" />
      <div className="flex flex-col lg:flex-row glass items-center justify-between max-w-6xl mx-auto shadow-md">
        <div className="flex flex-col max-w-2xl gap-3 p-5 lg:p-0 lg:pl-8 lg:pr-2  h-full">
          <h3 className="text-2xl font-semibold mt-5 lg:mt-0 text-center lg:text-left">
            ¿Tienes preguntas o comentarios?
          </h3>
          <h4 className="text-xl font-semibold text-accent text-center lg:text-left">
          ¡Estamos aquí para ayudarte!
          </h4>
          <p className="max-w-xl lg:text-lg text-gray-800">
            En <span className="font-semibold text-accent">GoStudy</span>, valoramos tus inquietudes y estamos listos para
            brindarte toda la información que necesitas. No dudes en comunicarte
            con nosotros a través de los siguientes medios:
          </p>
          <ul>
            <li><span className="font-semibold">Teléfono:</span> +54 9-11-5582-1218 | +54 9-11-3594-1002</li>
            <li><span className="font-semibold">Horarios:</span></li>
            <li><span className="font-semibold">Email:</span></li>
          </ul>
        </div>
        <div className="w-full py- lg:w-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
