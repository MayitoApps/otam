import { Experience } from '@/types';

export const WHATSAPP_PHONE = '525514615826';
export const WHATSAPP_DISPLAY = '+52 55 1461 5826';

export function getExperienceWhatsAppUrl(experienceTitle: string, category: string): string {
  let customText = '';
  if (category === 'empresariales') {
    customText = `Hola OTAM, me interesa cotizar la experiencia empresarial "${experienceTitle}" para nuestro equipo. ¿Podrían compartirme cotización y fechas disponibles?`;
  } else if (category === 'intimos') {
    customText = `Hola OTAM, deseo información y reservar la experiencia íntima "${experienceTitle}" para una ocasión especial.`;
  } else if (category === 'rebeldia') {
    customText = `Hola OTAM, me interesa reservar la aventura "${experienceTitle}". ¿Me podrían dar detalles y sedes disponibles?`;
  } else {
    customText = `Hola OTAM, me interesa reservar la experiencia "${experienceTitle}". ¿Tienen disponibilidad próxima?`;
  }
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(customText)}`;
}

export function getGeneralWhatsAppUrl(): string {
  const text = 'Hola OTAM, deseo información y asesoría personalizada para diseñar una experiencia inolvidable.';
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

export const EXPERIENCES: Experience[] = [
  // --- EMPRESARIALES ---
  {
    id: 'sommeliere-casino',
    slug: 'sommeliere-casino',
    title: 'Sommelière Casino',
    subtitle: 'El juego del vino, los sentidos y la estrategia',
    category: 'empresariales',
    categoryLabel: 'Team Building & Enología',
    objective: 'Explorar el universo del vino mediante dinámicas, retos sensoriales y juegos interactivos estilo casino, fomentando la toma de decisiones y el trabajo colaborativo.',
    description: 'Cata guiada de dos vinos de alta gama con maridaje sensorial selecto. Los participantes compiten en dinámicas a ciegas y ganan fichas en mesas temáticas conducidas por sommeliers expertos.',
    participants: '10 - 100 personas',
    duration: '1.5 horas',
    included: [
      'Botella de vino premium por equipo',
      'Copa de cristal por participante',
      'Fichas de casino y mesas temáticas',
      'Retos sensoriales y de maridaje',
      'Facilitador sommelier especializado',
      'Premiación simbólica para el equipo ganador'
    ],
    locations: ['OHB Ajusco', 'Centro Cultural Quinta Soledad', 'OHB Veracruz', 'OHB Tepoztlán', 'OHB Valle de Bravo', 'Roma Norte'],
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    corporateRoi: 'Estimula la intuición, agilidad mental bajo incertidumbre y la comunicación fluida en un ambiente distendido.'
  },
  {
    id: 'iron-chef',
    slug: 'iron-chef',
    title: 'Iron Chef',
    subtitle: 'Reto culinario de alta presión y creatividad',
    category: 'empresariales',
    categoryLabel: 'Competencia Gastronómica',
    objective: 'Desarrollar liderazgo ágil, comunicación transversal y planeación estratégica a través de un desafío gastronómico donde los equipos crean platillos gourmet bajo presión de tiempo con ingredientes sorpresa.',
    description: 'Una cocina profesional al aire libre o en salones coloniales. Cada brigada recibe un mandil, estación de trabajo e ingredientes limitados. Un chef ejecutivo califica sabor, presentación, técnica y espíritu de equipo.',
    participants: '10 - 150 personas',
    duration: '2 - 3 horas',
    included: [
      'Estación de cocina equipada por brigada',
      'Ingredientes frescos y despensa sorpresa',
      'Chef facilitador y jurado evaluador',
      'Mandiles oficiales bordados',
      'Dinámicas de integración y evaluación',
      'Trofeo y premiación al equipo vencedor'
    ],
    locations: ['OHB Ajusco', 'OHB Tepoztlán', 'OHB Valle de Bravo', 'Centro Cultural Quinta Soledad', 'Roma Norte'],
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    corporateRoi: 'Prueba de fuego para la delegación de roles, gestión de recursos escasos y resolución colectiva de imprevistos.'
  },
  {
    id: 'programa-reforestacion',
    slug: 'programa-reforestacion',
    title: 'Programa de Reforestación & ESG',
    subtitle: 'Sustentabilidad, huella verde y pertenencia',
    category: 'empresariales',
    categoryLabel: 'Impacto Social & Ecológico',
    objective: 'Fortalecer las habilidades de equipo, incrementar la cercanía y conectar profundamente con la naturaleza dejando un legado vivo para el planeta.',
    description: 'El equipo se traslada a zonas boscosas protegidas del Ajusco. Guiados por biólogos y guardabosques, adoptan, etiquetan y siembran árboles endémicos, aprendiendo sobre regeneración ecosistémica y huella de carbono.',
    participants: '10 - 100 personas',
    duration: '1.5 horas',
    included: [
      'Árboles endémicos y palas de trabajo ergonómicas',
      'Etiquetas biodegradables para bautizar los árboles',
      'Barras de hidratación y snack saludable',
      'Charla de conciencia ambiental por biólogo',
      'Certificado de impacto ecológico empresarial'
    ],
    locations: ['Orgánico Hotel Boutique Ajusco'],
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    corporateRoi: 'Alinea los valores corporativos con criterios ESG tangibles, elevando el orgullo de pertenencia al 100%.'
  },
  {
    id: 'circuito-samurai',
    slug: 'circuito-samurai',
    title: 'Circuito Samurai',
    subtitle: 'Disciplina, honor y estrategia milenaria',
    category: 'empresariales',
    categoryLabel: 'Team Building Táctico',
    objective: 'Desarrollar disciplina, concentración mental, liderazgo de servicio y trabajo coordinado inspirados en el código Bushido y la estrategia samurai.',
    description: 'Pruebas de estrategia, precisión en tiro, coordinación a ciegas, equilibrio y comunicación no verbal en escenarios naturales de alta concentración. Cada estación reta el temple y la sincronía del grupo.',
    participants: '15 - 200 personas',
    duration: '2 - 3 horas',
    included: [
      'Estaciones temáticas de habilidad y mente',
      'Materiales especializados para retos tácticos',
      'Facilitadores marciales y de coaching',
      'Sistema de puntuación y tablero en vivo',
      'Premiación y ritual de reconocimiento'
    ],
    locations: ['OHB Ajusco', 'OHB Tepoztlán', 'OHB Valle de Bravo', 'Centro Cultural Quinta Soledad', 'Roma Norte'],
    image: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    corporateRoi: 'Reconfigura la mentalidad hacia la excelencia sin fisuras y el respeto incondicional entre colegas.'
  },
  {
    id: 'tribu-de-fuego',
    slug: 'tribu-de-fuego',
    title: 'Tribu de Fuego',
    subtitle: 'Conexión elemental y reconexión profunda',
    category: 'empresariales',
    categoryLabel: 'Integración Humana Profunda',
    objective: 'Fortalecer la confianza íntima, derribar barreras jerárquicas y sellar el sentido de pertenencia a través de los cuatro elementos.',
    description: 'Los participantes forman tribus y recorren estaciones de Agua, Tierra, Aire y Fuego. La jornada culmina al caer la noche frente a una hoguera ancestral controlada, con música ambiental en vivo y un ritual simbólico de renovación de compromisos.',
    participants: '15 - 150 personas',
    duration: '2 horas',
    included: [
      'Fogata monumental controlada con seguridad total',
      'Facilitador especializado en dinámicas grupales',
      'Dinámicas de vulnerabilidad y confianza guiadas',
      'Música ambiental percusiva y ritual simbólico',
      'Brindis de cierre y malvaviscos gourmet'
    ],
    locations: ['OHB Ajusco', 'OHB Tepoztlán', 'OHB Valle de Bravo'],
    image: 'https://images.unsplash.com/photo-1475483768296-6163e08872a1?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    corporateRoi: 'Desbloquea la empatía profunda y disuelve tensiones acumuladas en periodos de alta demanda laboral.'
  },
  {
    id: 'taller-mixologia-empresarial',
    slug: 'taller-mixologia-empresarial',
    title: 'Taller de Mixología de Autor',
    subtitle: 'Creatividad líquida, storytelling y barra abierta',
    category: 'empresariales',
    categoryLabel: 'Innovación & Coctelería',
    objective: 'Promover la creatividad, el storytelling de marca y la integración informal mediante el diseño y elaboración de cocteles de autor.',
    description: 'Aprendizaje guiado de 3 a 4 cocteles clásicos y botánicos. Posteriormente, los equipos entran a un hackathon de bebidas donde inventan un trago original que represente la identidad o un logro de su empresa, le asignan nombre y presentan su pitch.',
    participants: '10 - 100 personas',
    duration: '1.5 - 2 horas',
    included: [
      'Barra móvil con cristalería y destilados de etiqueta',
      'Insumos frescos, jarabes botánicos y botánicos secos',
      'Bartender mixólogo facilitador',
      'Material para competencia y degustación',
      'Kit de mixología con shaker profesional para el equipo ganador'
    ],
    locations: ['OHB Ajusco', 'OHB Tepoztlán', 'OHB Valle de Bravo', 'Centro Cultural Quinta Soledad', 'Roma Norte'],
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    corporateRoi: 'Excelente dinamizador para romper el hielo en convenciones anuales o cierres de trimestre.'
  },
  {
    id: 'rally-de-despensas',
    slug: 'rally-de-despensas',
    title: 'Rally con Causa Social',
    subtitle: 'Competencia lúdica que nutre a comunidades vulnerables',
    category: 'empresariales',
    categoryLabel: 'Responsabilidad Social',
    objective: 'Generar impacto social medible mientras se refuerzan habilidades de colaboración y negociación bajo cronómetro.',
    description: 'Los equipos superan retos de destreza física e intelectual para ganar materiales e insumos de primera necesidad, empacando despensas integrales que posteriormente son donadas a fundaciones aliadas.',
    participants: '20 - 500 personas',
    duration: '2 - 3 horas',
    included: [
      'Materiales completos para retos de relevos y enigmas',
      'Insumos certificados para armado de despensas',
      'Equipo de facilitadores y logística de entrega benéfica',
      'Evidencia fotográfica y audiovisual del donativo',
      'Constancia oficial de impacto social'
    ],
    locations: ['OHB Ajusco', 'OHB Tepoztlán', 'OHB Valle de Bravo', 'OHB Veracruz', 'Centro Cultural Quinta Soledad', 'Roma Norte'],
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    corporateRoi: 'Inyecta un propósito trascendente a la jornada laboral, generando cohesión ética irremplazable.'
  },
  {
    id: 'taller-de-sushi',
    slug: 'taller-de-sushi',
    title: 'Taller de Sushi & Washoku',
    subtitle: 'Precisión nipona, balance y estética culinaria',
    category: 'empresariales',
    categoryLabel: 'Taller Culinario',
    objective: 'Desarrollar coordinación minuciosa, paciencia y trabajo en sincronía mediante el arte del sushi japonés.',
    description: 'Guiados por un itamae profesional, los participantes conocen los secretos del arroz shari, cortes de salmón y atún fresco, armando makis, nigiris y temakis en una justa de creatividad y precisión.',
    participants: '10 - 80 personas',
    duration: '2 horas',
    included: [
      'Ingredientes frescos grado sashimi',
      'Esterillas makisu y cuchillería japonesa adaptada',
      'Chef instructor con experiencia en alta cocina asiática',
      'Degustación final con maridaje de sake y cerveza nipona',
      'Premiación al rollo más innovador'
    ],
    locations: ['OHB Ajusco', 'OHB Tepoztlán', 'OHB Valle de Bravo', 'Centro Cultural Quinta Soledad'],
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80',
    featured: false
  },
  {
    id: 'taller-de-pizza',
    slug: 'taller-de-pizza',
    title: 'Pizza Napolitana & Horno de Leña',
    subtitle: 'Manos a la masa, fuego vivo y tradición rústica',
    category: 'empresariales',
    categoryLabel: 'Taller Culinario',
    objective: 'Fomentar la integración distendida y la camaradería a través de la elaboración artesanal de masas fermentadas y combinaciones gourmet.',
    description: 'Aprende el arte de amasar, bolear y estirar masas de larga fermentación. Elige quesos artesanales, embutidos y hierbas de huerto antes de hornear a 450°C en hornos a la leña.',
    participants: '10 - 100 personas',
    duration: '1.5 - 2 horas',
    included: [
      'Masa artesanal madre y amplia selección de toppings gourmet',
      'Horno para cocción a la leña en tiempo real',
      'Chef pizzaiolo instructor',
      'Mandiles conmemorativos',
      'Bebidas para maridar y concurso de la mejor pizza'
    ],
    locations: ['OHB Ajusco', 'OHB Tepoztlán', 'OHB Valle de Bravo', 'Centro Cultural Quinta Soledad', 'Roma Norte'],
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80',
    featured: false
  },
  {
    id: 'rally-mundialista',
    slug: 'rally-mundialista',
    title: 'Rally Deportivo de las Naciones',
    subtitle: 'Pasión, estrategia y energía competitiva al máximo',
    category: 'empresariales',
    categoryLabel: 'Team Building Deportivo',
    objective: 'Impulsar el espíritu ganador, la resiliencia y el pensamiento estratégico en un circuito de retos deportivos multinivel.',
    description: 'Cada equipo adopta los colores de una nación y compite en 5 estaciones de destreza física, velocidad de reacción, penales de precisión y pruebas de coordinación grupal.',
    participants: '20 - 300 personas',
    duration: '2 - 3 horas',
    included: [
      '5 estaciones temáticas con arbitraje profesional',
      'Cronometraje y registro de puntos en vivo',
      'Trofeo conmemorativo y medallas de honor',
      'Pistas musicales motivacionales y sonido profesional'
    ],
    locations: ['OHB Ajusco', 'OHB Tepoztlán', 'OHB Valle de Bravo', 'Centro Cultural Quinta Soledad'],
    image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1200&q=80',
    featured: false
  },
  {
    id: 'taller-pinta-prendas',
    slug: 'taller-pinta-prendas',
    title: 'Art Lab & Pinta de Prendas',
    subtitle: 'Customización textil, autoexpresión y arte compartido',
    category: 'empresariales',
    categoryLabel: 'Creatividad & Arte',
    objective: 'Liberar la creatividad reprimida y fortalecer la autoexpresión individual y la complicidad grupal a través del diseño textil.',
    description: 'Cada participante interviene una chamarra de mezclilla, hoodie o tote bag utilizando técnicas mixtas de acrílico textil, plantillas y sellos guiados por artistas plásticos reconocidos.',
    participants: '10 - 100 personas',
    duration: '1.5 - 2 horas',
    included: [
      'Prenda base premium de algodón o mezclilla por persona',
      'Pinturas textiles profesionales no tóxicas y pinceles',
      'Plantillas de diseño corporativo o libre',
      'Área de secado y curaduría para galería final'
    ],
    locations: ['OHB Ajusco', 'OHB Tepoztlán', 'OHB Valle de Bravo', 'Centro Cultural Quinta Soledad', 'Roma Norte'],
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80',
    featured: false
  },

  // --- MOMENTOS ÍNTIMOS ---
  {
    id: 'cena-romantica',
    slug: 'cena-romantica',
    title: 'Cena Romántica de Alta Gama',
    subtitle: 'El escenario ideal para proponer matrimonio o celebrar la complicidad',
    category: 'intimos',
    categoryLabel: 'Experiencias Íntimas',
    description: 'Diseñamos veladas inolvidables donde cada detalle habla por ti. Montaje privado con velas, camino de flores frescas, menú de autor en tres tiempos y atención personalizada con mayordomo exclusivo.',
    participants: '1 - 2 personas',
    duration: '1 hora (o extensión a sobremesa)',
    included: [
      'Montaje privado en terraza o rincón secreto de bosque',
      'Menú gourmet de 3 tiempos maridado',
      'Decoración con velas, candelabros y flores frescas',
      'Botella de vino espumoso o tinto de reserva',
      'Atención discreta de mesero privado'
    ],
    locations: ['OHB Ajusco', 'Centro Cultural Quinta Soledad', 'OHB Veracruz', 'OHB Tepoztlán', 'OHB Valle de Bravo', 'Roma Norte'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    featured: true
  },
  {
    id: 'fogatada-intima',
    slug: 'fogatada-intima',
    title: 'Fogatada Privada Bajo las Estrellas',
    subtitle: 'Misticismo, calidez y el susurro del bosque',
    category: 'intimos',
    categoryLabel: 'Experiencias Íntimas',
    description: 'Si algo es místico, mágico y sensual al mismo tiempo es el fuego. Recuéstate sobre mantas de lana suave a contemplar las constelaciones mientras el calor de la fogata, bombones artesanales y chocolate caliente despiertan la llama de la complicidad.',
    participants: '1 - 5 personas',
    duration: '1 hora',
    included: [
      'Madera aromática de pino y encino encendida previamente',
      'Kit de malvaviscos gourmet y galletas artesanales',
      'Termo con chocolate caliente de metate o infusión de hierbas',
      'Mantas de lana para intemperie',
      'Música ambiental relajante con bocina de alta fidelidad'
    ],
    locations: ['OHB Ajusco', 'OHB Veracruz', 'OHB Tepoztlán', 'OHB Valle de Bravo'],
    image: 'https://images.unsplash.com/photo-1475483768296-6163e08872a1?auto=format&fit=crop&w=1200&q=80',
    featured: true
  },
  {
    id: 'picnic-romantico',
    slug: 'picnic-romantico',
    title: 'Picnic Glamping & Maridaje',
    subtitle: 'Lujo relajado en escenarios naturales de ensueño',
    category: 'intimos',
    categoryLabel: 'Experiencias Íntimas',
    description: 'Un día soleado, la mejor compañía y el escenario perfecto en el bosque, jardines virreinales o frente al mar. Cojines mullidos, tabla de charcutería ibérica, quesos de granja y vino de autor para una tarde de confidencias.',
    participants: '1 - 2 personas',
    duration: '1.5 horas',
    included: [
      'Montaje estilo boho-chic con tapete persa y cojines',
      'Canasta con tabla de charcutería y quesos madurados',
      'Pan rústico recién horneado y frutos rojos frescos',
      'Botella de vino tinto o blanco frío',
      'Agua infusionada y sombrilla de protección'
    ],
    locations: ['OHB Ajusco', 'OHB Veracruz', 'OHB Tepoztlán', 'OHB Valle de Bravo'],
    image: 'https://images.unsplash.com/photo-1526401485004-46910ecc8e51?auto=format&fit=crop&w=1200&q=80',
    featured: false
  },

  // --- MOMENTOS DE REBELDÍA (Aventura) ---
  {
    id: 'tiro-con-arco',
    slug: 'tiro-con-arco',
    title: 'Tiro con Arco Tradicional',
    subtitle: 'Precisión milenaria, foco y control respiratorio',
    category: 'rebeldia',
    categoryLabel: 'Aventura & Precisión',
    description: 'Un deporte noble de concentración donde se desarrolla la agudeza visual y la calma interior. Aprende postura, tensado y disparo certero a diana en campos rodeados de vegetación.',
    participants: '1 - 2 personas (o grupos reducidos)',
    duration: '1 hora',
    included: [
      'Arco recurvo profesional y flechas de fibra de carbono',
      'Dianas reglamentarias a diferentes distancias',
      'Protector de brazo y dactilera ergonómica',
      'Instructor calificado con inducción de seguridad'
    ],
    locations: ['Orgánico Hotel Boutique Ajusco', 'Orgánico Hotel Boutique Valle de Bravo'],
    image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=1200&q=80',
    featured: false
  },
  {
    id: 'bicicletas-de-montana',
    slug: 'bicicletas-de-montana',
    title: 'Travesía en Bicicleta de Montaña',
    subtitle: 'Adrenalina, velocidad y aire puro entre pinos',
    category: 'rebeldia',
    categoryLabel: 'Aventura & Adrenalina',
    description: 'Recorre veredas secretas, descensos fluidos y senderos panorámicos en las montañas del Ajusco o los bosques de Valle de Bravo con bicicletas de suspensión delantera de alto rendimiento.',
    participants: '1 - 5 personas',
    duration: '1 hora',
    included: [
      'Bicicleta de montaña premium calibrada a tu estatura',
      'Casco certificado y guantes de protección',
      'Guía local experto en geografía del terreno',
      'Kit de primeros auxilios e hidratación'
    ],
    locations: ['Orgánico Hotel Boutique Ajusco', 'Orgánico Hotel Boutique Valle de Bravo'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
    featured: false
  },
  {
    id: 'tiro-con-rifle',
    slug: 'tiro-con-rifle',
    title: 'Tiro con Rifle de Precisión',
    subtitle: 'Calma mental y puntería en campo cerrado',
    category: 'rebeldia',
    categoryLabel: 'Aventura & Precisión',
    description: 'Practica el disparo táctico con rifles deportivos de aire comprimido de alta precisión. Retos de siluetas abatibles a diferentes metros bajo un riguroso estándar de seguridad.',
    participants: '1 - 2 personas',
    duration: '1.5 horas',
    included: [
      'Rifle deportivo con mira telescópica regulada',
      'Municiones reglamentarias y siluetas reactivas',
      'Gafas de protección balística',
      'Entrenador especializado'
    ],
    locations: ['Orgánico Hotel Boutique Ajusco', 'Orgánico Hotel Boutique Valle de Bravo'],
    image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=1200&q=80',
    featured: false
  },
  {
    id: 'cabalgata-bosque',
    slug: 'cabalgata-bosque',
    title: 'Cabalgata Guiada por la Sierra',
    subtitle: 'Paso firme, brisa fresca y comunión equina',
    category: 'rebeldia',
    categoryLabel: 'Naturaleza & Caballos',
    description: 'Monta ejemplares nobles y perfectamente entrenados a través de senderos rodeados de cascadas, miradores y cañadas. Una experiencia poética para conectar con la montaña a ritmo pausado.',
    participants: '1 - 2 personas',
    duration: '1 hora',
    included: [
      'Caballo adiestrado de temperamento dócil',
      'Montura de paseo y equipo ecuestre cómodo',
      'Guía arriero conocedor de la sierra',
      'Paradas fotográficas en miradores escénicos'
    ],
    locations: ['Orgánico Hotel Boutique Ajusco', 'Orgánico Hotel Boutique Valle de Bravo'],
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1200&q=80',
    featured: false
  },
  {
    id: 'rapel-aventura',
    slug: 'rapel-aventura',
    title: 'Rápel en Paredes Naturales',
    subtitle: 'Vence la gravedad y desciende por roca viva',
    category: 'rebeldia',
    categoryLabel: 'Aventura Vertical',
    description: 'Supera el vértigo y siente la descarga pura de adrenalina al descender paredes rocosas verticales con arneses y cuerdas dinámicas de última generación, siempre supervisado por guías de alta montaña.',
    participants: '1 - 2 personas',
    duration: '1.5 horas',
    included: [
      'Arnés de escalada certificado, casco y guantes de rápel',
      'Descensores ocho / tubular y líneas de anclaje de seguridad redundante',
      'Instructor de montaña certificado por la federación',
      'Briefing técnico previo y fotografías de acción'
    ],
    locations: ['Orgánico Hotel Boutique Ajusco', 'Orgánico Hotel Boutique Valle de Bravo'],
    image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=1200&q=80',
    featured: false
  },
  {
    id: 'trekking-senderismo',
    slug: 'trekking-senderismo',
    title: 'Trekking & Interpretación de Paisaje',
    subtitle: 'Caminata inmersiva hacia las cumbres',
    category: 'rebeldia',
    categoryLabel: 'Senderismo & Montaña',
    description: 'Exploración a pie por rutas ancestrales, volcanes extintos o valles boscosos. Respira ozono puro, aprende a identificar flora medicinal y culmina con vistas que dominan todo el valle.',
    participants: '1 - 2 personas',
    duration: '1 hora',
    included: [
      'Bastones de trekking ergonómicos',
      'Guía botánico y montañista certificado',
      'Mochila ligera con snack energético y agua de manantial',
      'Seguro de actividad al aire libre'
    ],
    locations: ['Orgánico Hotel Boutique Ajusco', 'Orgánico Hotel Boutique Valle de Bravo'],
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    featured: false
  },

  // --- MOMENTOS PARA COMPARTIR ---
  {
    id: 'cinema-organico',
    slug: 'cinema-organico',
    title: 'Cinema Orgánico al Aire Libre',
    subtitle: 'Pantalla monumental, cielo estrellado y palomitas gourmet',
    category: 'compartir',
    categoryLabel: 'Social & Entretenimiento',
    description: 'Transformamos un claro del bosque o un jardín colonial en una sala de cine VIP bajo el cielo nocturno. Disfruta tu película favorita en proyección 4K con mantas, audio envolvente y barra de dulcería artesanal.',
    participants: '1 - 5 personas (adaptable a grupos)',
    duration: '1.5 horas',
    included: [
      'Pantalla gigante de alta definición y proyector láser',
      'Sistema de sonido estéreo o audífonos inalámbricos silent-cinema',
      'Mobiliario lounge con mantas y almohadones',
      'Palomitas de mantequilla recién hechas y bocadillos gourmet',
      'Bebidas refrescantes y coctelería ligera'
    ],
    locations: ['OHB Ajusco', 'OHB Tepoztlán', 'OHB Valle de Bravo', 'Centro Cultural Quinta Soledad'],
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
    featured: true
  },
  {
    id: 'cena-maridaje-6-tiempos',
    slug: 'cena-maridaje-6-tiempos',
    title: 'Cena Maridaje Clandestina (6 Tiempos)',
    subtitle: 'Un viaje culinario que desafía las convenciones del paladar',
    category: 'compartir',
    categoryLabel: 'Alta Gastronomía',
    description: 'Una experiencia gastronómica de alta costura conducida por nuestro chef residente. Seis tiempos diseñados a partir de insumos locales orgánicos, cada uno perfectamente armonizado con vinos y destilados de colección.',
    participants: 'Mínimo 10 personas',
    duration: '2 horas',
    included: [
      'Menú degustación exclusivo de 6 tiempos de autor',
      'Maridaje de 6 etiquetas (vinos nacionales e importados y mezcales de origen)',
      'Explicación sensorial por el chef y sommelier en cada tiempo',
      'Montaje de gala con vajilla de cerámica artesanal',
      'Sobremesa privada y música en vivo (opcional)'
    ],
    locations: ['OHB Ajusco', 'Centro Cultural Quinta Soledad', 'OHB Veracruz', 'OHB Tepoztlán', 'OHB Valle de Bravo'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    featured: true
  },
  {
    id: 'maestro-parrillero',
    slug: 'maestro-parrillero',
    title: 'Maestro Parrillero & Asado al Humo',
    subtitle: 'Conviértete en el auténtico protagonista de las brasas',
    category: 'compartir',
    categoryLabel: 'Experiencia & Fuego',
    description: 'Aprende las técnicas ancestrales de cocción a fuego indirecto, ahumado con leñas de manzano y sellado perfecto de cortes finos (Tomahawk, Rib Eye añejado, costillares). Al terminar, compartan un festín rústico alrededor de la mesa comunal.',
    participants: 'Mínimo 10 personas',
    duration: '2 horas',
    included: [
      'Cortes de carne certificados Sterling Silver / Angus',
      'Parrilla profesional de carbón y ahumador de leña',
      'Chef parrillero instructor con secretos de marinados y sales',
      'Guarniciones gourmet (vegetales rústicos, chimichurri artesanal, tuétanos)',
      'Cervezas artesanales y mandil de cuero conmemorativo'
    ],
    locations: ['OHB Ajusco', 'OHB Veracruz', 'OHB Tepoztlán', 'OHB Valle de Bravo'],
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80',
    featured: false
  },
  {
    id: 'taller-mixologia-social',
    slug: 'taller-mixologia-social',
    title: 'Taller de Coctelería de Jardín',
    subtitle: 'Infusiones, botánicos y celebración con amigos',
    category: 'compartir',
    categoryLabel: 'Mixología & Celebración',
    description: 'Un espacio lúdico para grupos de amigos o familias donde aprenderán a balancear cítricos, macerar hierbas del huerto y elaborar cocteles sofisticados con ginebra, mezcal y tequila.',
    participants: '4 - 10 personas',
    duration: '2 horas',
    included: [
      'Estación individual con shaker, jigger y coladores',
      'Destilados premium y jarabes infusionados',
      'Botánicos frescos y sales prehispánicas de cortesía',
      'Recetario digital exclusivo de OTAM'
    ],
    locations: ['OHB Ajusco', 'OHB Veracruz', 'OHB Tepoztlán', 'OHB Valle de Bravo', 'Centro Cultural Quinta Soledad', 'Roma Norte'],
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80',
    featured: false
  }
];
