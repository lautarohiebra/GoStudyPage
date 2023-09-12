export const programas = [
  {
    id: "salidas_individuales",
    imagen: "/assets/salidas.jpg",
    titulo: "Salidas Individuales",
    edad: "+18 años",
    destinos:[
      {
        destino:'London',
        path:"/destinations/londres"
      },
      {
        destino:'Cambridge',
        path:"/destinations/cambridge"
      },
      {
        destino:'Canterbury',
        path:"/destinations/canterbury"
      },
    ],
    texto: "Viví una experiencia única como estudiante en un país extranjero mientras disfrutas de recorrer ciudades increíbles.",
    descripcion:"Mejorá tus habilidades lingüísticas para poder relacionarte con personas de distintos países y crea puentes para tu futuro profesional. Ofrecemos una gran variedad de cursos de inglés general desde elemental hasta proficiency que se amoldan fácilmente al presupuesto de cada uno. Además, nuestros cursos te dan la flexibilidad necesaria para que vos decidas de qué manera querés estudiar y con qué intensidad.",
    items: [
      { textoItem: "Entrega de certificado avalado por el British Council." },
      { textoItem: "Clases de lunes a viernes." },
      { textoItem: "Salidas todo el año." },
      { textoItem: "Alojamiento en residencia estudiantil." },
      { textoItem: "Habitación single con baño privado." },
      { textoItem: "Kitchenette, heladera y microondas compartido." },
      { textoItem: "Excursiones opcionales de medio y día completo." },
      { textoItem: "Actividades sociales y recreativas diarias." },
      { textoItem: "Viajes opcionales a Oxford, Bath y otras ciudades del Reino Unido."},
      { textoItem: "Viajes opcionales de fin de semana a Edimburgo y/o York." },
    ],
  },
  {
    id: "programa_de_verano",
    imagen: "/assets/summer.jpg",
    titulo: "Programa de verano",
    edad: "14 a 18 años",
    destinos:[
      {
        destino:'Londres',
        path:"/destinations/londres"
      },
      {
        destino:'Canterbury',
        path:"/destinations/canterbury"
      },
      {
        destino:'Cambridge CATS College',
        path:"/destinations/cambridge_college"
      },
      {
        destino:'Boston CATS College',
        path:"/destinations/boston_college"
      },
      {
        destino:'Uxbridge',
        path:"/destinations/uxbridge"
      },
    ],
    texto:"Si tenés entre 14 y 18 años viví la experiencia de capacitarte en una Universidad extranjera con la combinación perfecta entre diversión y estudio.",
    descripcion:"No vas a dejar de divertirte mientras aprendes inglés y te relacionas con jóvenes de distintas partes del mundo y de culturas diferentes. Además, podrás viajar y conocer los lugares íconos de dónde elijas estudiar. ",
    items: [
      { textoItem: "Entrega de certificado avalado por el British Council" },
      { textoItem: "Alojamiento en campus universitario" },
      { textoItem: "Habitación single con baño privado." },
      { textoItem: "Clases de lunes a viernes." },
      { textoItem: "Salidas: Todos los Julio durante las vacaciones de invierno."},
      { textoItem: "Group Leader acompañando al grupo en todo momento." },
      { textoItem: "Inscripción, materiales y gastos administrativos incluídos."},
      { textoItem: "Pensión completa todos los días y dietas especiales" },
      { textoItem: "Excursiones guiadas de medio y día completo." },
      { textoItem: "Servicio médico y seguridad las 24hs." },
      { textoItem: "Free Wifi." },
    ],
  },
  {
    id: "colegios_e_institutos",
    imagen: "/assets/institutes.jpg",
    titulo: "Colegios e institutos",
    edad: "Escolares",
    destinos:[
      {
        destino:'Londres',
        path:"/destinations/londres"
      },
      {
        destino:'Canterbury',
        path:"/destinations/canterbury"
      },
      {
        destino:'Cambridge CATS College',
        path:"/destinations/cambridge_college"
      },
      {
        destino:'Boston CATS College',
        path:"/destinations/boston_college"
      },
    ],
    texto: "Dale la oportunidad a tu alumnado de vivir una experiencia única dentro del marco pedagógico de tu institución.",
    descripcion: "Te ofrecemos una variedad de programas que se pueden ajustar a las necesidades de tus alumnos o personalizarlos en función a objetivos e intereses institucionales.",
    items: [
      { textoItem: "Entrega de certificado avalado por el British Council." },
      { textoItem: "Amplia variedad de programas." },
      { textoItem: "Hospedaje en campus universitario." },
      { textoItem: "Salidas todo el año." },
      { textoItem: "Planificación de todo el proceso del viaje." },
      { textoItem: "Excursiones opcionales de medio y día entero." },
      { textoItem: "Profesor liberado cada 10 o 15 alumnos dependiendo el destino."},
    ],
  },
  {
    id: "ingles_para_profesionales",
    imagen: "/assets/profesionals.jpg",
    titulo: "Ingles para profesionales",
    edad: "+18 años",
    destinos:[
      {
        destino:'Londres',
        path:"/destinations/cambridge_college"
      },
    ],
    texto: "Nuestra misión es mejorar tus habilidades lingüísticas para alcanzar tus objetivos profesionales.",
    descripcion: "Mediante actividades auténticas y orientadas por objetivos diseñadas para desarrollar las habilidades del idioma y fortalecer la confianza, los alumnos de Business English serán entrenados para llevar a cabo y sobresalir en una gran variedad de situaciones de negocios entre las que se encuentran: ventas, marketing, publicidad, RRHH, administración, finanzas y gestión.",
    items: [
      { textoItem: "Objetivo: Estos son cursos orientados a mejorar las herramientas y el vocabulario del idioma. Aprenderán por medio de casos de estudio reales, vocabulario específico, presentaciones eficaces, negociaciones y reuniones como así también, la escritura correcta de emails, CVs y resumenes." },
      { textoItem: "Características del curso: Intensivo y súper intensivo con módulos dictados por especialistas que introducen vocabulario empresarial funcional para ser aplicado en contexto. Además, desarrolla las cuatro habilidades básicas como conversación, lectura, escritura y escucha. Desarrolla, también, el vocabulario y mejora la gramática." },
    ],
  },
];

/* Destinos */

export const destinos = [
  {
    id: "londres",
    imagen: "/assets/london.jpg",
    titulo: "Londres",
    cursos: [
     {curso:"Todos los programas"},
     {curso:"Todos los cursos"},
    ],
    texto:"Estudia dentro de una de las culturas más antiguas del mundo mientras recorres la ciudad y sus alrededores.",
    descripcion:[
      {
        parrafo:"Londres es un emocionante crisol de culturas y oportunidades, donde la historia y la modernidad convergen para crear un ambiente único para los estudiantes. Como uno de los destinos educativos más prestigiosos del mundo, esta metrópolis icónica alberga algunas de las mejores universidades y escuelas, ofreciendo una educación de clase mundial."
      },
      {
        parrafo:"Pero no solo es conocida por su excelencia académica, Londres también brinda una experiencia enriquecedora fuera del aula. Descubre una vida estudiantil animada con una mezcla de actividades culturales, vida nocturna vibrante, mercados eclécticos y espacios verdes serenos para relajarse."
      },
      {
        parrafo:"Sumérgete en la riqueza de la historia en cada esquina, desde los majestuosos palacios reales hasta los emblemáticos lugares turísticos. La diversidad de la ciudad te permitirá conocer personas de todo el mundo, ampliar tu perspectiva y crear conexiones globales duraderas."
      },
      {
        parrafo:"Con una escena artística y creativa bulliciosa, Londres te inspirará a explorar tus pasiones y talentos más allá de tus estudios. Desde galerías de arte hasta teatros de renombre mundial, siempre habrá algo nuevo por descubrir."
      },
      {
        parrafo:"Prepárate para embarcarte en una aventura única en Londres, donde cada día te presenta la oportunidad de aprender, crecer y vivir experiencias que transformarán tu vida para siempre. ¡La capital británica te espera con los brazos abiertos!"
      },
  ],
    items: [
      {textoItem: "Amplia variedad de cursos."},
      {textoItem: "Alojamientos en campus universitario o residencias estudiantiles."},
      {textoItem: "Fácil acceso a medios de transporte que te llevarán a una gran variedad de lugares históricos, puntos de interés y lugares de entretenimiento."},
      {textoItem: "Excursiones y viajes optativos."}
    ]
  },
  {
    id: "canterbury",
    imagen: "/assets/canterbury.jpg",
    titulo: "Canterbury",
    cursos: [
      {curso:"Programas de verano"},
      {curso:"Ingles general"},
     ],
    texto:"Canterbury es una ciudad universitaria histórica cerca de las playas de la costa sur y de fácil acceso a la ciudad de Londres.",
    descripcion:[
      {
        parrafo:"Canterbury es una joya histórica con una rica herencia académica. Hogar de una de las universidades más antiguas y prestigiosas del mundo, esta ciudad ofrece una educación de calidad que perdura a lo largo de los siglos."
      },
      {
        parrafo:"La ciudad tiene una atmósfera animada y acogedora, gracias en gran parte a su población estudiantil. La Universidad de Canterbury, fundada en 1965, es una de las principales instituciones académicas del Reino Unido y aporta una vibrante comunidad estudiantil a la ciudad. Los campus universitarios se mezclan con las calles adoquinadas y los edificios históricos, creando un ambiente único y lleno de energía."
      },
      {
        parrafo:"Las bibliotecas y espacios verdes brindan un ambiente perfecto para estudiar y relajarse, mientras que los cafés y restaurantes locales te deleitarán con su gastronomía única y variada."
      },
      {
        parrafo:"Canterbury es el escenario ideal para una experiencia académica inolvidable. Aquí, el aprendizaje se convierte en una aventura histórica y cultural, y cada día te ofrece la oportunidad de crecer intelectualmente mientras te sumerges en la belleza y el encanto de esta ciudad cautivadora. ¡Ven y descubre la magia de Canterbury mientras trasciendes las barreras del tiempo y te empapas de conocimiento y cultura!"
      },
  ],
    items: []
  },
  {
    id: "cambridge_college",
    imagen: "/assets/cambridgeCats.webp",
    titulo: "Cambridge CATS College",
    cursos: [
      {curso:"Programas de verano"},
     ],
    texto:"CATS college Cambridge es una universidad ubicada en nuevas y modernas instalaciones en la ciudad de Cambridge. Las famosas Colleges of Kings y Trinity están a corta distancia a pie de las costas del río Cam.",
    descripcion:[
      {
      parrafo:"CATS Cambridge es una prestigiosa escuela internacional de internado para estudiantes mayores de 14 años, ubicada en el corazón de Cambridge, con más de 35 años de experiencia en ayudar a los estudiantes a progresar hacia las mejores universidades."
      },
      {
      parrafo:"La atmósfera segura y acogedora de Cambridge asegura que sus hijos estén en un ambiente propicio para el aprendizaje y el desarrollo."
      },
      {
      parrafo:"Fuera de las aulas, sus hijos se deleitarán con la riqueza histórica y cultural de Cambridge. Desde las majestuosas universidades hasta las calles empedradas y los pintorescos parques, cada rincón de la ciudad les brindará una experiencia educativa que va más allá de las palabras."
      },
      {
      parrafo:"Cambridge es el lugar perfecto para que sus hijos se sumerjan en el idioma inglés mientras exploran una ciudad llena de historia y encanto. No solo mejorarán sus habilidades lingüísticas, sino que también crearán recuerdos inolvidables que durarán toda la vida."
      },
  ],
    items: [
      {textoItem:"2 semanas de curso general para estudiantes entre 12 y 18 años en Boston Cats College. (15hs semanales)"},
      {textoItem:"Alojamiento en dormitorio individual con baño privado en Campus Boston Cats."},
      {textoItem:"Pensión completa en el campus."},
      {textoItem:"Material de estudio."},
      {textoItem:"Test de nivelación y progreso."},
      {textoItem:"Diploma de validez internacional."},
      {textoItem:"Actividades deportivas, recreativas y excursiones todos los días."},
      {textoItem:"Fin de semana completo en NYC (2 noches, 3 días) con traslados y desayuno incluidos."},
    ]
  },
  {
    id: "cambridge",
    imagen: "/assets/cambridge.jpg",
    titulo: "Cambridge",
    cursos: [
      {curso:"Ingles General"},
     ],
    texto:"Cambridge cuenta con todo cuando se trata de belleza, historia y cultura.",
    descripcion:[
      {
        parrafo:"¡Bienvenido a Cambridge, una ciudad histórica y cautivadora que cautiva a estudiantes y amantes del conocimiento por igual!"
      },
      {
        parrafo:"Cambridge es una encantadora ciudad inglesa con un ambiente único y estimulante. Sus calles empedradas y arquitectura medieval te transportarán a una época pasada mientras te brindan un escenario moderno para una vida estudiantil emocionante."
      },
      {
        parrafo:"El corazón de la ciudad es su río Cam, donde podrás disfrutar de relajantes paseos en bote puntual por los famosos 'punts'. Además, los verdes prados y los parques te invitan a disfrutar del aire libre mientras estudias o socializas con amigos."
      },
      {
        parrafo:"La cultura en Cambridge es próspera y diversa. Desde los acogedores cafés y restaurantes hasta los animados eventos y festivales, siempre habrá algo nuevo y emocionante para experimentar."
      },
      {
        parrafo:"Con una comunidad estudiantil internacional, Cambridge ofrece una experiencia intercultural que enriquecerá tu perspectiva y te permitirá establecer conexiones globales duraderas."
      },
      {
        parrafo:"Descubre una ciudad que equilibra perfectamente lo antiguo y lo moderno, lo académico y lo cultural. En Cambridge, cada rincón cuenta una historia y cada día es una oportunidad para crecer intelectualmente y disfrutar de una experiencia estudiantil única e inolvidable. ¡Te esperamos en Cambridge para que formes parte de esta enriquecedora aventura!"
      },
    ],
    items: [
      {textoItem:"Lecciones: 3hs diarias."},
      {textoItem:"Habitación con baño privado."},
      {textoItem:"Pension completa."},
      {textoItem:"Excursiones."},
      {textoItem:"Wifi Gratis"},
    ]
  },
  {
    id: "boston_college",
    imagen: "/assets/bostonCats.webp",
    titulo: "Boston CATS College",
    cursos: [
      {curso:"Programas de verano"},
     ],
    texto:"Boston CATS es una prestigiosa escuela ubicada en un campus moderno en los suburbios de Braintree, a 10 millas del centro de Boston y a 10 millas de la playa!",
    descripcion:[
      {
        parrafo:"Boston es una emocionante y enérgica metrópolis que respira educación e innovación. Conocida como 'La Ciudad de los Estudiantes', alberga algunas de las instituciones académicas más prestigiosas del mundo, incluyendo Harvard y el MIT, ofreciendo una educación de primera clase."
      },
      {
        parrafo:"Sumérgete en la rica historia de Estados Unidos mientras caminas por calles empedradas y sitios emblemáticos, como la Freedom Trail. Además de su patrimonio histórico, la ciudad está impregnada de una escena cultural vibrante, con teatros, museos y galerías de arte que te inspirarán y enriquecerán tus experiencias."
      },
      {
        parrafo:"Boston también ofrece un ambiente amigable para los estudiantes, con diversos vecindarios que se sienten como en casa y una mezcla emocionante de culturas. Desde mercados y restaurantes étnicos hasta parques pintorescos, siempre encontrarás algo nuevo para explorar."
      },
      {
        parrafo:"En Boston, cada esquina es una oportunidad para aprender, crecer y descubrir nuevas pasiones. Prepárate para una experiencia estudiantil inolvidable mientras te sumerges en una ciudad que combina la tradición académica con una mentalidad moderna y creativa."
      },
    ],
    items:[
      {textoItem:"2 semanas de curso general para estudiantes entre 12 y 18 años en Boston Cats College. (15hs semanales)"},
      {textoItem:"Alojamiento en dormitorio individual con baño privado en Campus Boston Cats."},
      {textoItem:"Pensión completa en el campus."},
      {textoItem:"Material de estudio."},
      {textoItem:"Test de nivelación y progreso."},
      {textoItem:"Diploma de validez internacional."},
      {textoItem:"Actividades deportivas, recreativas y excursiones todos los días."},
      {textoItem:"Fin de semana completo en NYC (2 noches, 3 días) con traslados y desayuno incluidos."},
    ]
  },
  {
    id: "uxbridge",
    imagen: "/assets/uxbridge.jpg",
    titulo: "Uxbridge",
    cursos: [
      {curso:"Todos los programas"},
     ],
    texto:"Ubicada a las afueras de Londres, Uxbridge es un destino vibrante y emocionante que atrae a estudiantes de todo el mundo.",
    descripcion:[
      {parrafo:"Conocida por su atmósfera acogedora y multicultural, esta encantadora ciudad ofrece una combinación perfecta de cultura, historia y modernidad. Más allá de las aulas, encontrarás una escena estudiantil animada que ofrece una amplia gama de actividades sociales, desde animados locales y restaurantes hasta emocionantes eventos culturales y deportivos. Nunca te faltarán oportunidades para hacer nuevos amigos y crear recuerdos inolvidables."},
      {parrafo:"Descubre los hermosos parques, tiendas modernas y fascinantes museos que la ciudad tiene para ofrecer. Además, estar cerca de Londres te permitirá acceder a todas las emocionantes oportunidades que la capital británica tiene reservadas para ti. En Uxbridge, la vida estudiantil está llena de energía y oportunidades. ¡Prepárate para una experiencia inolvidable mientras te sumerges en una ciudad que celebra la educación, la diversidad y la emoción de ser estudiante!"},
      {parrafo:"¡Prepárate para una experiencia inolvidable mientras te sumerges en una ciudad que celebra la educación, la diversidad y la emoción de ser estudiante!"},
      {parrafo:"El programa se dicta en el moderno y espacioso campus de la Universidad de Brunel"},
      {parrafo:"Brunel University está ubicada en un campus modern y espacioso a 15 minutos de caminata de la bulliciosa ciudad de Uxbridge"},
    ],
    items:[
      {textoItem:"15hs de lecciones de Ingles semanales."},
      {textoItem:"Una excursión de dia completo por semana."},
      {textoItem:"Dos excursiones de mitad de dia por semana."},
      {textoItem:"Actividades nocturnas diarias."},
      {textoItem:"Alojamiento individual."},
      {textoItem:"Cocina para Group Leaders."},
      {textoItem:"Cafetería"},
      {textoItem:"Dietas especiales"},
      {textoItem:"Acceso Wifi"},
      {textoItem:"Nivelación y entrega de certificación."},

    ]
  },
]

/* Cursos */

export const cursos = [
  {
    id: "ingles_general",
    imagen: "/assets/generalEnglish.jpg",
    titulo: "Ingles General",
    edad: "+18 años",
    nivel: "Todos los niveles",
    duracion: "A elección (Mínimo 1 semana)",
    destinos:[
      {
        destino:'London',
        path:"/destinations/londres"
      },
      {
        destino:'Cambridge',
        path:"/destinations/cambridge"
      },
      {
        destino:'Canterbury',
        path:"/destinations/canterbury"
      },
    ],
    texto: "Completamente inmerso en un ambiente de habla inglesa, aprovecha las situaciones diarias para usar el idioma fuera del aula.",
    descripcion:[
      { 
        tituloParrafo:"Objetivo",
        parrafo:"Nuestros cursos trabajan todas las áreas de aprendizaje integradas: Lectura, Escritura, conversación, escucha, gramática y vocabulario. Es este tipo de curso podrás mejorar tu precisión (si utilizas correctamente tu inglés) y tu fluidez (con qué elocuencia lo utilizas). Las clases son diarias y tienen objetivos semanales. Utilizamos el método de aprendizaje en contexto por lo que no serán solo clases gramaticales y de ejercicios sino que tendrás la posibilidad de aprender inglés y practicar tus habilidades de conversación fuera de ésta, en entornos de la vida real combinando tus clases con paseos turísticos y nuevas experiencias culturales."
      },
      {
        tituloParrafo:"Flexibilidad",
        parrafo:"Podes elegir con qué intensidad querés realizar tu curso para llegar al objetivo que te propongas. Desde Standard a Intensivo o Super intensivo, te ofrecemos cursos que van entre 20 a 30 clases semanales en un Super Intensive. Además, podes personalizarlo eligiendo módulos de estudio de tu interés."
      },
      {
        tituloParrafo:"Examen de nivelación",
        parrafo:"En el primer día de tu llegada, realizarás actividades de nivelación para evaluar tu nivel de comprensión, vocabulario, gramática y conversación. Esto nos ayudará a entender en qué nivel y clase te sentirás mejor para así tener más éxito en el aprendizaje."
      },
    ],
    tabla: {
      headers: [
        {
          column: "Programa"
        },
        {
          column: "Horas de clase por semana"
        },
        {
          column: "Horas de clase por nivel"
        },
        {
          column: "Número de clases por semana"
        }
      ],
      rows: [
        {
          programa: "Estándar",
          dato1: "15",
          dato2: "15",
          dato3: "20"
        },
        {
          programa: "Intensivo",
          dato1: "19",
          dato2: "12",
          dato3: "25"
        },
        {
          programa: "Súper intensivo",
          dato1: "23",
          dato2: "12",
          dato3: "30"
        },
        {
          programa: "Súper intensivo Plus",
          dato1: "27",
          dato2: "12",
          dato3: "35"
        },
      ]
    },
    modulos:[
      {
        nombreModulo:"Inglés academico",
        textoModulo:"Ganá herramientas para ser exitoso en un ambiente académico en inglés. Aprendé a tomar notas, escuchar clases, discutir sobre temas relacionados a tus estudios, realizá presentaciones eficaces y escribí ensayos."
      },
      {
        nombreModulo:"Herramientas IELTS: Lectura y escritura",
        textoModulo:"Para alumnos desde un nivel intermedio en adelante que quieran realizar IELRS path. Una mirada por los exámenes de Lectura y Escritura. Las estrategias necesarias para contestar y resolver las preguntas, ejercicios y vocabulario del examen."
      },
      {
        nombreModulo: "Cambridge Clinic",
        textoModulo: "Dirigido a alumnos estudiando los exámenes de Cambridge. Es un módulo práctico lleno de tips para los exámenes, prácticas, revisión de vocabulario, conversación que aumentará tu eficiencia al rendir las certificaciones."
      },
      {
        nombreModulo: "Speaking Fluency",
        textoModulo: "El propósito de éste módulo es que los alumnos desarrollen habilidades de comunicación oral efectivas en una variedad de contextos funcionales tales como expresar quejas y disculpas, sociabilizar, persuadir, entre otros. Vocabulario a travez de la escucha de audios Escuchar diferentes textos de relevancia y extraer de los mismos vocabulario interesante y útil para luego utilizarlo en contexto. Además, dicho vocabulario se utilizará en estrategias nuevas para aprender a utilizarlo."
      },
      {
        nombreModulo: "Masterclass en pronunciación",
        textoModulo: "Esta clase está focalizada en sonidos, en la conección de los mismos en el discurso y en la variación de acentos y dialectos. Las personas podrán entenderte mejor y también, podrás entender a los demás más rápidamente."
      },
      {
        nombreModulo: "Expresiones idiomáticas",
        textoModulo: "Aprendé y practicá expresiones idiomáticas y utilizá mejor el vocabulario para que tu inglés suene más natural. Excelente para todos aquellos que quieran rendir las certificaciones de Cambridge."
      },
      {
        nombreModulo: "Gramática esencial",
        textoModulo: "Una oportunidad para que los alumnos de menor nivel puedan ampliar y desarrollar sus conocimientos de gramática para mejorar o bien, para sentirse más cómodos al momento de utilizar el idioma."
      },
      {
        nombreModulo: "Desafío gramatical",
        textoModulo: "Dirigido a alumnos con un mayor nivel de inglés. En este módulo experimentarán con estructuras gramaticales más complejas y aprenderán a expresarse de distintas maneras engrosando su nivel de vocabulario y estructuras."
      },
      {
        nombreModulo: "Herramientas de presentaciones eficaces",
        textoModulo: "Aprendé a crear presentaciones exitosas y a adquirir confianza para hablar ante una audiencia. Desde el lenguaje corporal y entonación, este módulo les dará a todos los estudiantes las herramientas para convertirse en presentadores master."
      },
      {
        nombreModulo: "Redes sociales",
        textoModulo: "Los alumnos aprenderán a mejorar sus habilidades en lo que respecta a redes sociales para promocionarse correctamente a ellos mismos y a sus emprendimientos. Aprenderán a postear eficazmente y a generar vínculos con la audiencia. También, aprenderás cómo la gente utiliza las redes sociales en sus vidas profesionales."
      },
      {
        nombreModulo: "Cultura empresarial",
        textoModulo: "Explorá direferentes culturas corporativas y tradiciones dentro de diferentes nacionalidades. Focalizate en la diversidad cultural de los negocios, compará y contrastá diferentes corporaciones en distintos países. Compartí tus propias experiencias y aprendé de otros."
      }
    ],
  },

  {
    id: "gestion_de_negocios",
    imagen: "/assets/businessManagement.jpg",
    titulo: "Gestion de negocios",
    edad: "+18 años",
    nivel: "Intermediate",
    duracion: "2 o 4 semanas",
    destinos:[
      {
        destino:'London',
        path:"/destinations/londres"
      },
    ],
    texto: "Explora lo que te apasiona. Un programa diseñado para equiparte con las habilidades y confianza para comunicarte en un ambiente internacional y profesional.",
    descripcion:[
        {
          tituloParrafo: "Objetivos",
          parrafo: "Aprender las prácticas de gestión actuales dentro del mundo corporativo. Los alumnos se basarán en conocimientos previos y la experiencia laboral y se familiarizarán con las estratégicas de éxito para administrar no solo un negocio sino también personas."
        },
        {
          tituloParrafo: "Aprenderás",
          parrafo: "El papel de la dirección y el liderazgo dentro de una organización, el desarrollo de tu propio liderazgo y las relaciones profesionales."
        },
        {
          tituloParrafo: "Cómo aprenderás",
          parrafo: "Obteniendo una visión general e integral de la gestión empresarial mediante el trabajo en el aula, estudio de casos y un proyecto en equipo."
        },
        {
          tituloParrafo: "Casos de estudio",
          parrafo: "Trader Joe's, HP, Microsoft, State Farm Bank, Starbucks, GE entre otros."
        },
        {
          tituloParrafo: "Características del curso",
          parrafo: "El curso consta de dos módulos de 2 semanas cada uno (ej. Negocios 1 y Negocios 2). Los cuales pueden ser tomados juntos o separados extendiendo tu estadía entre 2 a 4 semanas."
        }
    ],
    tabla: {
      headers: [
        {
          column: "Programa"
        },
        {
          column: "Horas de clase por semana"
        },
        {
          column: "Números de semanas"
        },
        {
          column: "Número de clases por semana"
        }
      ],
      rows: [
        {
          programa: "Estándar",
          dato1: "15",
          dato2: "2 o 4",
          dato3: "20"
        },
        {
          programa: "Intensivo",
          dato1: "15",
          dato2: "2 o 4",
          dato3: "25"
        },
        {
          programa: "Súper intensivo",
          dato1: "23",
          dato2: "2 o 4",
          dato3: "30"
        },
        {
          programa: "Súper intensivo Plus",
          dato1: "27",
          dato2: "2 o 4",
          dato3: "35"
        },
      ]
    },
  },

  {
    id: "gestion_de_proyectos",
    imagen: "/assets/proyectManagement.jpg",
    titulo: "Gestion de proyectos",
    edad: "+18 años",
    nivel: "Upper Intermediate",
    duracion: "2 o 4 semanas",
    destinos:[
      {
        destino:'London',
        path:"/destinations/londres"
      },
    ],
    texto: "Desarrolla tus habilidades para planificar, presupuestar y medir riesgos. Podrás analizar nuevos proyectos y hacer un seguimiento del progreso.",
    descripcion:[
        {
          tituloParrafo: "Objetivos",
          parrafo: "Obtener una descripción general de las habilidades de gestión general de proyectos y todos los pasos necesarios desde iniciar un plan hasta ejecutar un proyecto."
        },
        {
          tituloParrafo: "Aprenderás",
          parrafo: "Manejos de cronogramas, presupuestos y riesgos. Además, cómo construir un caso de negocios. Trabajarás sobre cómo analizar nuevos proyectos, realizar el correcto seguimiento y comunicación del progreso, planificar y ejecutar el mismo."
        },
        {
          tituloParrafo: "Cómo aprenderás",
          parrafo: "Aprenderás mediante el trabajo en el aula, estudios de casos y un proyecto en equipo."
        },
        {
          tituloParrafo: "Casos de estudio",
          parrafo: "Obras hidráulicas Baldwin, Colorado Parade, Parque eólico de Nueva Zelanda, China Telecom. Marriott Bedding entre otros."
        },
        {
          tituloParrafo: "Características del curso",
          parrafo: "EL curso consta de dos módulos de 2 semanas cada uno (ej. Proyectos 1 y Proyectos 2). Los cuales pueden ser tomados juntos o separados extendiendo tu estadía entre 2 a 4 semanas."
        }
    ],
    tabla: {
      headers: [
        {
          column: "Programa"
        },
        {
          column: "Horas de clase por semana"
        },
        {
          column: "Números de semanas"
        },
        {
          column: "Número de clases por semana"
        }
      ],
      rows: [
        {
          programa: "Estándar",
          dato1: "15",
          dato2: "2 o 4",
          dato3: "20"
        },
        {
          programa: "Intensivo",
          dato1: "15",
          dato2: "2 o 4",
          dato3: "25"
        },
        {
          programa: "Súper intensivo",
          dato1: "23",
          dato2: "2 o 4",
          dato3: "30"
        },
        {
          programa: "Súper intensivo Plus",
          dato1: "27",
          dato2: "2 o 4",
          dato3: "35"
        },
      ]
    },
  },

  {
    id: "marketing",
    imagen: "/assets/marketing.jpg",
    titulo: "Marketing",
    edad: "+18 años",
    nivel: "Upper Intermediate",
    duracion: "2 o 4 semanas",
    destinos:[
      {
        destino:'London',
        path:"/destinations/londres"
      },
    ],
    texto: "Seas un profesional experimentado o un estudiante podrás trabajar sobre estrategias de marketing orientadas al cliente, desarrollo de productos, planificación y toma de decisiones.",
    descripcion:[
        {
          tituloParrafo: "Objetivos",
          parrafo: "Aprender estrategias necesarias para ser exitoso en el mundo global e interactivo con el que nos enfrentamos. Los alumnos recibirán herramientas para evaluar, desarrollar, y proveer un plan de marketing, haciendo énfasis en la resolución de problemas y el impacto del marketing global/digital, redes sociales y e-business."
        },
        {
          tituloParrafo: "Aprenderás",
          parrafo: "Las partes esenciales de las estrategias de marketing orientadas al cliente, la selección de mercado, el desarrollo de productos, el ciclo de vida, la planificación y la fijación de precios, así como también, la toma de decisiones en cuanto a promociones."
        },
        {
          tituloParrafo: "Cómo aprenderás",
          parrafo: "Los alumnos aprenderán conceptos actualizados de marketing mediante el trabajo en el aula, un proyecto en equipo y visitas a empresas."
        },
        {
          tituloParrafo: "Casos de estudio",
          parrafo: "Oreos, Procter&Gamble, Walgreens, Pepsico, Samsung, Chobani Greek Yogurt, Costco entre otros."
        },
        {
          tituloParrafo: "Características del curso",
          parrafo: "EL curso consta de dos módulos de 2 semanas cada uno (ej. Marketing 1 y Marketing 2). Los cuales pueden ser tomados juntos o separados extendiendo tu estadía entre 2 a 4 semanas."
        }
    ],
    tabla: {
      headers: [
        {
          column: "Programa"
        },
        {
          column: "Horas de clase por semana"
        },
        {
          column: "Números de semanas"
        },
        {
          column: "Número de clases por semana"
        }
      ],
      rows: [
        {
          programa: "Estándar",
          dato1: "15",
          dato2: "2 o 4",
          dato3: "20"
        },
        {
          programa: "Intensivo",
          dato1: "15",
          dato2: "2 o 4",
          dato3: "25"
        },
        {
          programa: "Súper intensivo",
          dato1: "23",
          dato2: "2 o 4",
          dato3: "30"
        },
        {
          programa: "Súper intensivo Plus",
          dato1: "27",
          dato2: "2 o 4",
          dato3: "35"
        },
      ]
    },
  },

  {
    id: "conceptos_mercado_financiero",
    imagen: "/assets/finances.jpg",
    titulo: "Conceptos del mercado financiero",
    edad: "+18 años",
    nivel: "Upper intermediate",
    duracion: "4 semanas",
    destinos:[
      {
        destino:'London',
        path:"/destinations/londres"
      },
    ],
    texto: "Eligiendo este curso maximizarás el potencial de tu carrera. Negocios, finanzas , economía. Una combinación que desarrollará tus conocimientos de negocios haciendo uso de Bloomberg Market Concepts",
    descripcion:[
        {
          tituloParrafo: "Objetivos",
          parrafo: "En este desafiante curso, alcanzarás la certificación de conceptos de mercado Bloomberg (BMC), un programa que te brindará una base sólida en torno a BMC utilizada por bancos e inversores de todo el mundo."
        },
        {
          tituloParrafo: "Aprenderás",
          parrafo: "A utilizar el software de la terminal Bloomberg diseñado para profesionales del sector financiero para monitorear y analizar datos del mercado financiero en tiempo real: este curso es una oportunidad fantástica para trabajar con este sistema de renombre mundial. Los participantes explorarán una variedad de diferentes elementos de los negocios, incluidos el marketing, la gestión, el liderazgo y la ética. También, obtendrás la calificación BMC (Bloomberg Market Concepts)."
        },
        {
          tituloParrafo: "Qué resultados obtendrás",
          parrafo: "Completarás la certificación de conceptos de mercado de Bloomberg, aumentarás tu conocimiento de las terminales de Bloomberg y sus funciones además de comprender cómo funcionan los mercados conectando las teorías económicas con las aplicaciones prácticas de inversión."
        },
        {
          tituloParrafo: "Características del curso",
          parrafo: "EL curso consta de dos módulos de 2 semanas cada uno (ej. Finanzas 1 y Finanzas 2). Los cuales pueden ser tomados juntos o separados extendiendo tu estadía entre 2 a 4 semanas."
        }
    ],
    tabla: {
      headers: [
        {
          column: "Programa"
        },
        {
          column: "Horas de clase por semana"
        },
        {
          column: "Números de semanas"
        },
        {
          column: "Número de clases por semana"
        }
      ],
      rows: [
        {
          programa: "Estándar",
          dato1: "15",
          dato2: "4",
          dato3: "20"
        },
        {
          programa: "Intensivo",
          dato1: "15",
          dato2: "4",
          dato3: "25"
        },
        {
          programa: "Súper intensivo",
          dato1: "23",
          dato2: "4",
          dato3: "30"
        },
        {
          programa: "Súper intensivo Plus",
          dato1: "27",
          dato2: "4",
          dato3: "35"
        },
      ]
    },
  },
]