import ContactForm from "../components/contactForm";
import HeroAlt from "../shared/HeroAlt";

const Contact = () => {
  return (
    <section>
      <HeroAlt title="Contacto" backgroundImage="assets/contact.jpg" />
      <div className="flex flex-col lg:flex-row bg-base-100 items-center justify-between">
        <div className="flex flex-col max-w-2xl gap-3 p-5 lg:p-0 lg:pl-8 lg:pr-2  h-full">
          <h3 className="text-2xl font-semibold mt-5 text-center lg:text-left">
            ¿Tienes preguntas o comentarios?
          </h3>
          <h4 className="text-xl font-semibold text-secondary text-center lg:text-left">
          ¡Estamos aquí para ayudarte!
          </h4>
          <p className="max-w-xl lg:text-lg text-gray-800">
            En <span className="font-semibold">GoStudy</span>, valoramos tus inquietudes y estamos listos para
            brindarte toda la información que necesitas. No dudes en comunicarte
            con nosotros a través de los siguientes medios:
          </p>
          <ul>
            <li>Teléfono:</li>
            <li>Horarios de atención:</li>
            <li>Email:</li>
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
