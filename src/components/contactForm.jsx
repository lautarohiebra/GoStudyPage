import { useState } from "react";

const ContactForm = () => {
  const initialFormData = {
    nombre: "",
    apellido: "",
    mail: "",
    telefono: "",
    comentarios: "",
  };

  // Estado para rastrear los datos del formulario
  const [formData, setFormData] = useState(initialFormData);

  /* Estado para rastrear errores de validación */
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    /* Limpiamos el mensaje de error cuando se edita el campo */
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    /* Validación de campos obligatorios */
    if (
      !value &&
      (name === "nombre" || name === "apellido" || name === "mail")
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "Este campo es obligatorio.",
      }));
    }

    /* Validación de Nombre y Apellido usando expresiones regulares, regex */
    const nameRegex = /^[A-Za-z]+$/;
    if (
      value &&
      (name === "nombre" || name === "apellido") &&
      !nameRegex.test(value)
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "El Nombre y Apellido no deben contener números.",
      }));
    }

    /* Validación de correo electrónico, regex */
    if (value && name === "mail") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]:
            "Por favor, ingresa una dirección de correo electrónico válida.",
        }));
      }
    }

    /* Validación de número de teléfono, regex*/
    if (value && name === "telefono") {
      const phoneRegex = /^\d{10}$/; // Asume que el número de teléfono debe tener 10 dígitos
      if (!phoneRegex.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]:
            "Por favor, ingresa un número de teléfono válido (10 dígitos).",
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /* Validación de campos obligatorios */
    if (!formData.nombre || !formData.apellido || !formData.mail) {
      setErrors({
        nombre: !formData.nombre ? "Este campo es obligatorio." : "",
        apellido: !formData.apellido ? "Este campo es obligatorio." : "",
        mail: !formData.mail ? "Este campo es obligatorio." : "",
      });
      return;
    }

    /* Validación de correo electrónico al enviar formulario.*/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.mail)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        mail: "Por favor, ingresa una dirección de correo electrónico válida.",
      }));
      return;
    }

    /* Validación de número de teléfono al enviar formulario.*/
    if (formData.telefono && !/^\d{10}$/.test(formData.telefono)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        telefono:
          "Por favor, ingresa un número de teléfono válido (10 dígitos).",
      }));
      return;
    }

    console.log("Datos enviados:", formData);
    /* Manejar datos */
  };

  return (
    <div className="bg-gray-100 flex items-start w-full xl:w-auto justify-center mt-3 xl:mt-0">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-[480px] xl:w-[480px]">
        <h1 className="text-2xl font-bold mb-6">Dejanos tu consulta</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nombre" className="block font-medium">
              Nombre *
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className="border border-gray-300 rounded w-full p-2"
            />
            {/* Mensaje de error */}
            {errors.nombre && (
              <span className="text-red-500 text-sm">{errors.nombre}</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="apellido" className="block font-medium">
              Apellido *
            </label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className="border border-gray-300 rounded w-full p-2"
            />
            {/* Mensaje de error */}
            {errors.apellido && (
              <span className="text-red-500 text-sm">{errors.apellido}</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="mail" className="block font-medium">
              Correo Electrónico *
            </label>
            <input
              type="email"
              id="mail"
              name="mail"
              placeholder="ejemplo@gmail.com"
              value={formData.mail}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className="border border-gray-300 rounded w-full p-2"
            />
            {/* Mensaje de error */}
            {errors.mail && (
              <span className="text-red-500 text-sm">{errors.mail}</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="telefono" className="block font-medium">
              Teléfono
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border border-gray-300 rounded w-full p-2"
            />
            {/* Mensaje de error */}
            {errors.telefono && (
              <span className="text-red-500 text-sm">{errors.telefono}</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="comentarios" className="block font-medium">
              ¿En qué podemos ayudarte?
            </label>
            <textarea
              id="comentarios"
              name="comentarios"
              value={formData.comentarios}
              onChange={handleChange}
              className="border border-gray-300 rounded w-full p-2 h-24 resize-none"
            />
          </div>
          <div className="flex justify-around">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
            >
              Enviar
            </button>
            <button
              type="reset"
              onClick={handleReset}
              className="bg-gray-400 hover:bg-gray-500 text-white font-medium py-2 px-4 rounded"
            >
              Limpiar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
