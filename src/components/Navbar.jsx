import { Link } from "react-router-dom";

const programasMenores = [
  {
    name: "Programa de verano",
    path: "/programs/programa_de_verano",
  },
  {
    name: "Colegio e institutos",
    path: "/programs/colegios_e_institutos",
  },
];

const programasMayores = [
  {
    name: "Salidas individuales",
    path: "/programs/salidas_individuales",
  },
  {
    name: "Ingles para profesionales",
    path: "/programs/ingles_para_profesionales",
  },
];

const destinos = [
  {
    name: "Londres",
    path: "/destinations/londres",
  },
  {
    name: "Canterbury",
    path: "/destinations/canterbury",
  },
  {
    name: "Cambridge",
    path: "/destinations/cambridge",
  },
  {
    name: "Cambridge CATS College",
    path: "/destinations/cambridge_college",
  },
  {
    name: "Boston CATS College",
    path: "/destinations/boston_college",
  },
  {
    name: "Uxbridge",
    path: "/destinations/uxbridge",
  },
];

const cursos = [
  {
    name: "Ingles general",
    path: "/courses/ingles_general",
  },
  {
    name: "Mercado Financiero",
    path: "/courses/conceptos_mercado_financiero",
  },
  {
    name: "Gestión de negocios",
    path: "/courses/gestion_de_negocios",
  },
  {
    name: "Gestion de proyectos",
    path: "/courses/gestion_de_proyectos",
  },
  {
    name: "Marketing",
    path: "/courses/marketing",
  },
];

const Navbar = () => {
  const uncheckCheckbox = () => {
    const checkbox = document.getElementById("my-drawer");
    if (checkbox) {
      checkbox.checked = false;
    }
  };

  return (
    <div className="navbar bg-base-100 text-neutral px-1 lg:px-8 fixed z-50 shadow-md h-20">
      <div className="navbar-start">
        <div className="drawer visible xl:hidden w-16">
          <input
            id="my-drawer"
            type="checkbox"
            className="drawer-toggle relative"
          />
          <div className="drawer-content w-3">
            <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>

            {/* Contenido del drawer */}

            <ul className="menu bg-base-100 w-72 max-w-96 min-h-full rounded-none overflow-hidden z-50">
              <div className="w-full flex justify-center align-middle">
                <img
                  src="/assets/logo.svg"
                  alt="Logo Go Study"
                  className="w-32 my-5"
                />
              </div>

              {/* Links Programas */}

              <li>
                <details>
                  <summary className="bg-primary text-white mb-1 font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                      />
                    </svg>
                    Programas
                  </summary>
                  <ul className="transition-all">
                    <div className="mt-3 h-8 flex align-middle text-accent text-sm items-center w-full">
                      <span>Programas para menores (-18)</span>
                    </div>{" "}
                    {programasMenores.map((programa, index) => (
                      <Link key={index} to={programa.path} onClick={uncheckCheckbox}>
                        <li className="mb-1 py-1 px-3 rounded-md transition-all btn-ghost underline">
                          {programa.name}
                        </li>
                      </Link>
                    ))}
                    <div className="mt-3 h-8 flex align-middle text-accent text-sm items-center w-full">
                      <span>Programas para mayores (+18)</span>
                    </div>{" "}
                    {programasMayores.map((programa, index) => (
                      <Link key={index} to={programa.path} onClick={uncheckCheckbox}>
                        <li className="mb-1 py-1 px-3 rounded-md transition-all btn-ghost underline">
                          {programa.name}
                        </li>
                      </Link>
                    ))}
                    <div className="divider m-0"></div>
                    <Link to={"/programs"} onClick={uncheckCheckbox}>
                      <li className="btn btn-secondary btn-xs btn-block font-semibold text-center text-white transition-all hover:shadow-md hover:-translate-y-1 mb-2">
                        Todos los programas
                      </li>
                    </Link>
                  </ul>
                </details>
              </li>

              {/* Links Destinos */}

              <li>
                <details>
                  <summary className="bg-primary text-white mb-1 font-semibold ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
                      />
                    </svg>
                    Destinos
                  </summary>
                  <ul className="transition-all">
                    {" "}
                    {destinos.map((destino, index) => (
                      <Link key={index} to={destino.path} onClick={uncheckCheckbox}>
                        <li className="mb-1 py-1 px-3 rounded-md transition-all btn-ghost underline">
                          {destino.name}
                        </li>
                      </Link>
                    ))}
                    <div className="divider m-0"></div>
                    <Link to={"/destinations"} onClick={uncheckCheckbox}>
                      <li className="btn btn-secondary btn-xs btn-block font-semibold text-center text-white transition-all hover:shadow-md hover:-translate-y-1 mb-2">
                        Todos los destinos
                      </li>
                    </Link>
                  </ul>
                </details>
              </li>

              {/* Links Cursos */}

              <li>
                <details>
                  <summary className="bg-primary text-white mb-1 font-semibold ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                      />
                    </svg>
                    Cursos
                  </summary>
                  <ul className="transition-all">
                    {" "}
                    {cursos.map((curso, index) => (
                      <Link key={index} to={curso.path} onClick={uncheckCheckbox}>
                        <li className="mb-1 py-1 px-3 rounded-md transition-all btn-ghost underline">
                          {curso.name}
                        </li>
                      </Link>
                    ))}
                    <div className="divider m-0"></div>
                    <Link to={"/courses"} onClick={uncheckCheckbox}>
                      <li className="btn btn-secondary btn-xs btn-block font-semibold text-center text-white transition-all hover:shadow-md hover:-translate-y-1 mb-2">
                        Todos los cursos
                      </li>
                    </Link>
                  </ul>
                </details>
              </li>

              {/* Link alojamientos */}

              <li>
                <details>
                  <summary className="bg-primary hidden mb-1 font-semibold hover:bg-primary-focus">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                      />
                    </svg>
                    Alojamientos
                  </summary>
                </details>
              </li>
              <div className="divider"></div>
              <div className="w-full">
                <Link to={"/about"} onClick={uncheckCheckbox}>
                  <button className="btn btn-accent btn-block montserrat">
                    Sobre Go Study
                  </button>
                </Link>
                <Link to={"/contact"} onClick={uncheckCheckbox}>
                  <button className="btn btn-outline mt-3 btn-block montserrat">
                    Contacto
                  </button>
                </Link>
              </div>
            </ul>
          </div>
        </div>

        {/* Navbar Desktop */}

        <Link to={"/"}>
          <img
            src="/assets/logo.svg"
            alt="Logo Go study"
            className="w-28 p-2 z-20"
          />
        </Link>
      </div>
      <div className="navbar-center hidden xl:flex">
        <div className="menu menu-horizontal px-1 items-center">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-sm btn-ghost m-1 font-normal capitalize"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                />
              </svg>
              Programas
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-72"
            >
              <span className="p-3 text-accent font-semibold">
                Programas para menores (-18)
              </span>
              {programasMenores.map((programa, index) => (
                <Link key={index} to={programa.path}>
                  <li className="btn-sm mb-1 btn-ghost py-1 px-3 rounded-md transition-all">
                    {programa.name}
                  </li>
                </Link>
              ))}
              <div className="divider"></div>
              <span className="p-3 text-accent font-semibold">
                Programas para mayores (+18)
              </span>
              {programasMayores.map((programa, index) => (
                <Link key={index} to={programa.path}>
                  <li className="btn-sm mb-1 btn-ghost py-1 px-3 rounded-md transition-all">
                    {programa.name}
                  </li>
                </Link>
              ))}
              <div className="divider m-0"></div>
              <Link to={"/programs"}>
                <li className="btn btn-primary btn-block btn-sm font-semibold text-center text-white transition-all hover:shadow-md hover:-translate-y-1">
                  Todos los programas
                </li>
              </Link>
            </ul>
          </div>
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-sm btn-ghost m-1 font-normal capitalize"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
                />
              </svg>
              Destinos
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-72"
            >
              {destinos.map((destino, index) => (
                <Link key={index} to={destino.path}>
                  <li className="btn-sm mb-1 btn-ghost py-1 px-3 rounded-md transition-all">
                    {destino.name}
                  </li>
                </Link>
              ))}

              <div className="divider m-0"></div>
              <Link to={"/destinations"}>
                <li className="btn btn-primary btn-block btn-sm font-semibold text-center text-white transition-all hover:shadow-md hover:-translate-y-1">
                  Todos los destinos
                </li>
              </Link>
            </ul>
          </div>
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-sm btn-ghost m-1 font-normal capitalize"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
              Cursos
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-72"
            >
              {cursos.map((curso, index) => (
                <Link key={index} to={curso.path}>
                  <li className="btn-sm mb-1 btn-ghost py-1 px-3 rounded-md transition-all">
                    {curso.name}
                  </li>
                </Link>
              ))}

              <div className="divider m-0"></div>
              <Link to={"/courses"}>
                <li className="btn btn-primary btn-block btn-sm font-semibold text-center text-white transition-all hover:shadow-md hover:-translate-y-1">
                  Todos los cursos
                </li>
              </Link>
            </ul>
          </div>

          <Link
            to={"/accommodations"}
            className="hidden btn btn-ghost btn-sm hover:text-primary align-middle capitalize font-normal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
              />
            </svg>
            Alojamientos
          </Link>

          <Link
            to={"/about"}
            className="btn btn-ghost btn-sm hover:text-primary align-middle capitalize font-normal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
            Sobre Go Study
          </Link>
        </div>
      </div>
      <div className="navbar-end">
        <Link to={"/contact"}>
          <button className="btn btn-primary btn-outline montserrat">
            Contactanos
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
