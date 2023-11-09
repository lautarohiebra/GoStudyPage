import ContactForm from "../components/contactForm";
import FixedBg from "../shared/FixedBg";
import HeroAlt from "../shared/HeroAlt";

const Contact = () => {
  return (
    <section>
      <FixedBg img="/assets/backgroundDesign.png" />
      <HeroAlt title="Contacto" backgroundImage="assets/contact.jpg" />
      <div className="flex flex-col gap-5 lg:flex-row items-center justify-between max-w-6xl mx-auto p-5">
        <div className="flex flex-col max-w-2xl gap-3 p-5 lg:p-0 lg:pl-8 lg:pr-2 lg:py-4 h-full bg-base-100 rounded-md shadow-md">
          <h3 className="text-2xl font-semibold mt-5 lg:mt-0 lg:text-left">
            ¿Tienes preguntas o comentarios?
          </h3>
          <h4 className="text-xl font-semibold text-accent lg:text-left">
            ¡Estamos aquí para ayudarte!
          </h4>
          <p className="max-w-xl lg:text-lg">
            En <span className="font-semibold text-accent">GoStudy</span>,
            valoramos tus inquietudes y estamos listos para brindarte toda la
            información que necesitas.
          </p>
          <p className="max-w-xl lg:text-lg">
            No dudes en comunicarte con nosotros a través de los siguientes
            medios:
          </p>
          <ul className=" rounded-md">
            <li className="mt-2 bg-base-200 p-2 rounded-md">
              <span className="font-semibold">Teléfonos:</span>
              <ul className="list-disc mt-2">
                <li className="ml-8">+54 9-11-5582-1218</li>
                <li className="ml-8">+54 9-11-3594-1002</li>
              </ul>
            </li>
            <li className="mt-2 bg-base-200 p-2 rounded-md">
              <span className="font-semibold">Email:</span> <p className="inline">info@gostudy.com.ar</p>
            </li>
            <li className="mt-2 bg-base-200 p-2 rounded-md">
              <span className="font-semibold">Redes sociales:</span>
              <div className="flex flex-col align-middle justify-center items-center gap-3 ml-2 mt-2">
                <div className="flex flex-row">
                  <a
                    href="https://wa.me/5491155821218"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm montserrat w-52 shadow-md bg-green-400 rounded-md p-2 hover:-translate-y-1 transition-all  text-white"
                  >
                    <img
                      src="/assets/whatsapp2.svg"
                      alt="Instagram link"
                      className="w-6 h-full inline  mr-2"
                    />
                    Habla con nosotros!
                  </a>
                </div>
                <div className="flex flex-row">
                  <a
                    href="https://www.instagram.com/gostudyargentina/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm montserrat w-52 shadow-md bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-md p-2 hover:-translate-y-1 transition-all  text-white"
                  >
                    <img
                      src="/assets/instagram.svg"
                      alt="Instagram link"
                      className="w-6 h-full inline  mr-2"
                    />
                    @gostudyargentina
                  </a>
                </div>
                <div className="flex flex-row">
                  <a
                    href="https://www.facebook.com/GoStudyArgentina/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm montserrat w-52 shadow-md bg-blue-500 rounded-md p-2 hover:-translate-y-1 transition-all text-white"
                  >
                    <img
                      src="/assets/facebook.svg"
                      alt="Facebook link"
                      className="w-6 h-full inline mr-2"
                    />
                    @GoStudyArgentina
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
