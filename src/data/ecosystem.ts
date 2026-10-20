import { HotelLocation } from '@/types';

export const GRUPO_ORGANICO_INFO = {
  name: 'Grupo Orgánico Hoteles Boutique',
  tagline: 'Descubre el Universo de Grupo Orgánico Hoteles Boutique',
  website: 'https://www.gohb.com.mx/',
  videoUrl: 'https://youtu.be/r2tnnrp-G6Y?si=Zn68OM2EAHuK_rXt',
  videoId: 'r2tnnrp-G6Y',
  salesPitch: {
    headline: 'TUS EVENTOS Y EXPERIENCIAS EN CUALQUIERA DE NUESTRAS 6 PROPIEDADES EXCLUSIVAS',
    subheadline: 'Desde retiros corporativos de alta dirección y team building hasta bodas íntimas y celebraciones privadas: OTAM produce tu vivencia llave en mano con acceso total y prioritario a las 6 sedes de Grupo Orgánico.',
    highlights: [
      {
        title: 'Bloqueo Exclusivo (Private Buyout)',
        desc: 'Posibilidad de reservar la propiedad completa para tu empresa o grupo, garantizando 100% de confidencialidad y privacidad.',
        icon: 'Crown'
      },
      {
        title: 'Infraestructura Versátil',
        desc: 'Auditorios para 150 personas, más de 20 salones ejecutivos, rooftops, hectáreas de bosque y playas privadas.',
        icon: 'Building2'
      },
      {
        title: 'Producción Llave en Mano',
        desc: 'Nos encargamos de todo: transporte, hospedaje boutique, banquetería de autor, dinámicas de integración y equipo audiovisual.',
        icon: 'Sparkles'
      }
    ],
    destinationsSummary: [
      {
        name: 'Ajusco, CDMX',
        badge: 'Alta Montaña · 3,000 MSNM',
        desc: 'Salón Victoria (150 pax), Auditorio Isaura (60 pax), helipuerto, cabañas con chimenea y jardines panorámicos de 200 pax a 45 min del sur de CDMX.'
      },
      {
        name: 'Valle de Bravo, Edo. Méx.',
        badge: 'Bosque & Lago · 6+ Hectáreas',
        desc: '40 suites de lujo, Salón Porvenir (80 pax), Jardín Casa Nueva (100 pax), Casa Club con billar, alberca y bosque infinito para rallys masivos a 2h de CDMX.'
      },
      {
        name: 'Tlalpan Centro, CDMX',
        badge: 'Quinta Soledad · Casona 1870',
        desc: 'Auditorio Pierre Damian (100 pax), más de 12 salones patrimoniales, Capilla consagrada, Bar Alpestre Speakeasy y jardines de cantera rosa en Calle Moneda 15.'
      },
      {
        name: 'Roma Norte, CDMX',
        badge: 'Frontera 49 · Rooftop & Arte',
        desc: 'Rooftop atardeceres (80 pax), Foro Cultural (70 pax), coworking con fibra óptica, cine privado y 23 habitaciones en el corazón cultural de la Roma.'
      },
      {
        name: 'Tepoztlán, Morelos',
        badge: 'Energía Mística · Tepozteco',
        desc: 'Jardín Equilibrio (150 pax) frente a la montaña, Salón Imperfecto (80 pax), alberca y clima templado subtropical para retiros de liderazgo consciente.'
      },
      {
        name: 'Costa Esmeralda, Veracruz',
        badge: 'Mikipi · Frente de Playa',
        desc: 'Frente de playa privado para 150+ pax, parrilladas en arena bajo las estrellas, terraza marina y retiros de desconexión frente al Golfo de México.'
      }
    ]
  }
};

export const HOTEL_LOCATIONS: HotelLocation[] = [
  {
    id: 'ajusco',
    name: 'Orgánico Hotel Boutique Ajusco',
    slug: 'ajusco',
    region: 'Ajusco, CDMX',
    environment: 'Bosque de Alta Montaña (3,000 msnm)',
    tagline: 'Refugio alpino, helipuerto y privacidad total en las alturas del Ajusco',
    description: 'Cabañas de arquitectura geométrica contemporánea inmersas en densos bosques de pino y oyamel. A solo 45 minutos del sur de la CDMX, ofrece auditorio, salón para 150 asistentes, helipuerto y jardines espectaculares para retiros ejecutivos de alto impacto.',
    capacityTotal: 'Hasta 350 personas en áreas combinadas',
    features: [
      'Salón Victoria para 150 personas con chimenea',
      'Auditorio Isaura equipado para 60 asistentes',
      'Jardín Loma Linda con capacidad de 200 personas',
      'Helipuerto privado y seguridad 24 horas',
      'Restaurante Don Petro y Bar Miel Sobre Limón',
      'Cabañas térmicas de lujo con leña y chimenea'
    ],
    eventSpaces: [
      { name: 'Salón Victoria', capacity: '150 personas', type: 'Salón Principal', description: 'Salón insignia con chimenea de leña, acabados en madera noble y montaje para cenas de gala o plenarias corporativas.' },
      { name: 'Auditorio Isaura', capacity: '60 personas', type: 'Auditorio', description: 'Diseñado acústicamente para conferencias, proyecciones de resultados, capacitaciones y asambleas.' },
      { name: 'Jardín Loma Linda', capacity: '200 personas', type: 'Jardín Panorámico', description: 'El espacio abierto más grande con vista privilegiada a las coníferas y cielo despejado.' },
      { name: 'Jardín Chula Vista', capacity: '120 personas', type: 'Jardín Boscoso', description: 'Ideal para banquetes al aire libre, asados campestres y dinámicas de team building en montaña.' },
      { name: 'Restaurante Don Petro', capacity: '100 personas', type: 'Restaurante & Brasas', description: 'Cocina mexicana contemporánea de montaña y cortes selectos a las brasas.' },
      { name: 'Bar Miel Sobre Limón', capacity: '50 personas', type: 'Bar & Fogateros', description: 'Mixología botánica artesanal rodeada de fogateros exteriores.' },
      { name: 'Casa Club Directiva', capacity: '20 personas', type: 'Sala de Consejo', description: 'Espacio de alta confidencialidad para reuniones de comités directivos y juntas de socios.' }
    ],
    idealFor: ['Retiros de Alta Dirección', 'Iron Chef & Master Cooking', 'Convenciones Corporativas', 'Bodas de Bosque Alpino'],
    url: 'https://www.organicohotelboutique.com/',
    image: '/images/sedes/ajusco.jpg',
  },
  {
    id: 'valle-de-bravo',
    name: 'Orgánico Hotel Boutique Valle de Bravo',
    slug: 'valle-de-bravo',
    region: 'Valle de Bravo, Edo. Méx.',
    environment: 'Bosque Privado & Lago (6+ Hectáreas)',
    tagline: 'Santuario natural de 40 suites, salones y hectáreas de bosque a 2h de CDMX',
    description: 'Más de seis hectáreas de naturaleza virgen a 5 minutos del centro de Valle de Bravo. Con 40 suites de lujo, salón de eventos, alberca climatizada, canchas de tenis y áreas boscosas infinitas, es la sede definitiva para convenciones de empresa y rallys masivos.',
    capacityTotal: 'Hasta 250 personas en áreas integradas',
    features: [
      '40 suites de lujo rústico con capacidad para grupos grandes',
      'Salón Porvenir para 80 personas con vista al bosque',
      'Jardín Casa Nueva para 100 personas',
      'Casa Club con billar, bar y lounge de integración',
      'Alberca climatizada con asadores y camastros',
      '6+ hectáreas para rallys, tirolesas y deportes'
    ],
    eventSpaces: [
      { name: 'Salón Porvenir', capacity: '80 personas', type: 'Salón de Eventos', description: 'Salón climatizado y cerrado con vista panorámica al bosque para conferencias, cursos y comidas corporativas.' },
      { name: 'Jardín Casa Nueva', capacity: '100 personas', type: 'Jardín Plano', description: 'Área empastada ideal para instalación de carpas de gala, banquetes formales y cócteles.' },
      { name: 'Restaurante Milagro', capacity: '100 personas', type: 'Restaurante de Autor', description: 'Gastronomía de autor con ingredientes locales y cava para catas maridaje exclusivas.' },
      { name: 'Bar Bienaventurado', capacity: '50 personas', type: 'Bar de Autor', description: 'Espacio bohemio con coctelería botánica y atmósfera relajada de fogatas.' },
      { name: 'Casa Club con Billar', capacity: '40 personas', type: 'Lounge & Juegos', description: 'Zona de esparcimiento con mesa de billar, chimenea y barra privada para networking nocturno.' },
      { name: 'Jardín Recepción & Fogatero', capacity: '50 personas', type: 'Área de Fuego', description: 'Escenario ideal para dinámicas de Tribu de Fuego, bombones asados y círculos de confianza.' },
      { name: 'Cancha de Tenis & Alberca', capacity: '80 personas', type: 'Área Recreativa', description: 'Alberca rodeada de vegetación y canchas deportivas para torneos de integración.' }
    ],
    idealFor: ['Rallys y Team Building Masivo', 'Convenciones Anuales con Hospedaje', 'Catas Sommelière Casino', 'Workshops de Innovación'],
    url: 'https://www.organicohotelboutiquevalle.com/',
    image: '/images/sedes/valle.jpg',
  },
  {
    id: 'quinta-soledad',
    name: 'Centro Cultural Quinta Soledad',
    slug: 'tlalpan',
    region: 'Tlalpan Centro, CDMX',
    environment: 'Patrimonio Histórico Porfiriano (1870)',
    tagline: 'Casona centenaria con más de 12 salones patrimoniales y jardines virreinales',
    description: 'La casona más emblemática del sur de la Ciudad de México, con historia desde 1870 atribuida al arquitecto Antonio Rivas Mercado. Alberga el Auditorio Pierre Damian para 100 personas, Capilla consagrada, el speakeasy Bar Alpestre y dos conceptos de hotel boutique (Utopía y Hermitage).',
    capacityTotal: 'Hasta 300 personas en claustros y salones',
    features: [
      'Auditorio Pierre Damian (100 pax) con acústica privilegiada',
      'Más de 12 salones patrimoniales independientes',
      'Bar Alpestre Speakeasy subterráneo para 100 personas',
      'Restaurante Capitular y panadería artesanal',
      'Capilla histórica consagrada para 60 personas',
      'Ubicación céntrica en Calle Moneda 15, Tlalpan'
    ],
    eventSpaces: [
      { name: 'Auditorio Pierre Damian', capacity: '100 personas', type: 'Auditorio Insignia', description: 'Gran auditorio con techos altos de viga original, acústica de primer nivel y versatilidad de montaje.' },
      { name: 'Bar Alpestre Speakeasy', capacity: '100 personas', type: 'Bar Clandestino', description: 'Atmósfera clandestina entre muros centenarios de cantera para cócteles VIP y lanzamientos.' },
      { name: 'Restaurante Capitular', capacity: '100 personas', type: 'Salón de Banquetes', description: 'Salón señorial porfiriano para banquetes de gala, desayunos corporativos y comidas de premiación.' },
      { name: 'Capilla Consagrada', capacity: '60 personas', type: 'Capilla Histórica', description: 'Espacio de valor arquitectónico incalculable para ceremonias y conciertos acústicos.' },
      { name: 'Salón Guadalupe', capacity: '50 personas', type: 'Salón Jardín', description: 'Bañado de luz natural y vistas directas a los jardines de cantera y fuentes históricas.' },
      { name: 'Salón Concilio', capacity: '45 personas', type: 'Salón de Conferencias', description: 'Equipado para talleres, conferencias magistrales, ruedas de prensa y sesiones de trabajo.' },
      { name: 'Salón Ministerio', capacity: '40 personas', type: 'Salón Ejecutivo', description: 'Ambiente sobrio y tecnológico ideal para capacitaciones y juntas de negocios.' },
      { name: 'Salón Oval', capacity: '35 personas', type: 'Salón Contemporáneo', description: 'Fusión de arquitectura histórica con diseño moderno para presentaciones exclusivas.' },
      { name: 'Salón La Valla & Basilio', capacity: '12 a 16 personas', type: 'Salas de Consejo VIP', description: 'Espacios privados de máxima confidencialidad para sesiones de socios y directores.' }
    ],
    idealFor: ['Lanzamientos de Producto VIP', 'Bodas y Celebraciones Patrimoniales', 'Cenas Clandestinas y Maridajes', 'Asambleas Corporativas'],
    url: 'https://www.centroculturalquintasoledad.com/',
    image: '/images/sedes/quinta.jpg',
  },
  {
    id: 'frontera-49',
    name: 'Frontera 49 Roma Norte',
    slug: 'roma-norte',
    region: 'Roma Norte, CDMX',
    environment: 'Urbano Vanguardista, Arte & Rooftop',
    tagline: 'Rooftop panorámico, foro cultural y coworking en el epicentro creativo',
    description: 'En el corazón de la colonia Roma Norte, Frontera 49 es el hub de innovación y comunidad de Grupo Orgánico. Con 23 habitaciones, rooftop panorámico con vista a los atardeceres de la ciudad, foro cultural y sala de cine privada para activaciones de marca y pop-ups cosmopolitas.',
    capacityTotal: 'Hasta 120 personas en simultáneo',
    features: [
      'Rooftop panorámico con barra para 80 personas',
      'Foro Cultural y galería de arte para 70 asistentes',
      'Coworking de alta velocidad con fibra óptica (40 pax)',
      'Restaurante y barra Garnachería Única para 50 pax',
      'Sala de cine y proyecciones privadas',
      '23 habitaciones boutique para hospedaje ejecutivo'
    ],
    eventSpaces: [
      { name: 'Rooftop Atardeceres', capacity: '80 personas', type: 'Rooftop Panorámico', description: 'Terraza al aire libre con vista a la arquitectura de la Roma, barra de mixología y sonido envolvente.' },
      { name: 'Foro Cultural & Galería', capacity: '70 personas', type: 'Foro Creativo', description: 'Espacio multidisciplinario para pop-up stores, exposiciones de arte, desfiles y conferencias.' },
      { name: 'Restaurante Garnachería Única', capacity: '50 personas', type: 'Barra Gastronómica', description: 'Concepto culinario de barrio contemporáneo para desayunos creativos y comidas de integración.' },
      { name: 'Coworking Creativo', capacity: '40 personas', type: 'Espacio Colaborativo', description: 'Mesas modulares, pantallas 4K y fibra óptica para hackathones, workshops y design thinking.' },
      { name: 'Sala de Cine Privada', capacity: '20 personas', type: 'Microcine', description: 'Sala acústica con proyección HD para presentaciones ejecutivas, premiers y masterclasses.' }
    ],
    idealFor: ['Cócteles y Fiestas en Rooftop', 'Pop-Ups y Activaciones de Marca', 'Workshops y Hackathones', 'Cenas Clandestinas de Autor'],
    url: 'https://www.frontera49.com/',
    image: '/images/sedes/roma-norte.jpg',
  },
  {
    id: 'tepoztlan',
    name: 'Orgánico Hotel Boutique Tepoztlán',
    slug: 'tepoztlan',
    region: 'Tepoztlán, Morelos',
    environment: 'Energía Mística, Valle de Atongo & Tepozteco',
    tagline: 'Vistas al cerro sagrado, clima privilegiado y energía ancestral',
    description: 'Situado en el místico Valle de Atongo, al pie de los riscos del Tepozteco. Una propiedad pensada para la desconexión total, ceremonias de fuego bajo las estrellas, liderazgo consciente, alberca con solárium y gastronomía sensorial.',
    capacityTotal: 'Hasta 180 personas en jardines y terrazas',
    features: [
      'Jardín Equilibrio frente a las montañas para 150 pax',
      'Salón Imperfecto de diseño orgánico para 80 pax',
      'Alberca climatizada y terraza solárium para 100 pax',
      'Restaurante Infinito con maridaje de autor (60 pax)',
      'Casa Club para retiros íntimos y sesiones holísticas',
      'Cancha de squash y áreas de bienestar'
    ],
    eventSpaces: [
      { name: 'Jardín Equilibrio', capacity: '150 personas', type: 'Jardín Escénico', description: 'Enmarcado por la pared rocosa del Tepozteco, el escenario supremo para ceremonias y bodas mágicas.' },
      { name: 'Salón Imperfecto', capacity: '80 personas', type: 'Salón Bioclimático', description: 'Espacio cerrado con arquitectura integrada a la piedra volcánica para talleres y sesiones de alineación.' },
      { name: 'Área de Alberca & Solárium', capacity: '100 personas', type: 'Terraza Solárium', description: 'Espacio abierto para cócteles de bienvenida, parrilladas y celebraciones diurnas bajo el sol de Morelos.' },
      { name: 'Restaurante Infinito', capacity: '60 personas', type: 'Comedor Gourmet', description: 'Menú inspirado en ingredientes de la tierra con maridaje de mixología botánica.' },
      { name: 'Casa Club Tepoztlán', capacity: '30 personas', type: 'Salón de Retiro', description: 'Refugio cálido para círculos de liderazgo consciente, coaching y sesiones directivas.' }
    ],
    idealFor: ['Retiros de Liderazgo Consciente', 'Ceremonias de Fuego y Bienestar', 'Bodas Místicas y Espirituales', 'Dinámicas de Conexión de Equipo'],
    url: 'https://www.organicohotelboutiquevalle.com/',
    image: '/images/sedes/tepoz.jpg',
  },
  {
    id: 'veracruz',
    name: 'Mikipi Hotel Boutique',
    slug: 'veracruz',
    region: 'Costa Esmeralda, Veracruz',
    environment: 'Océano, Brisa Marina & Frente de Playa Privado',
    tagline: 'Frente al Golfo de México: lujo descalzo, mariscos frescos y arena privada',
    description: 'El refugio costero de Grupo Orgánico en Costa Esmeralda, Veracruz. Una propiedad paradisíaca frente al mar donde las empresas y grupos viven parrilladas de mariscos en la arena, fogatas a la orilla del oleaje y retiros de desconexión absoluta con calidez jarocha.',
    capacityTotal: 'Hasta 180 personas en playa y terrazas',
    features: [
      'Frente de playa privado para eventos masivos en arena',
      'Terraza marina con vista panorámica al Golfo de México',
      'Alberca tropical con palapas y asadores',
      'Banquetería jarocha de mariscos frescos y pesca del día',
      'Retiros corporativos de integración y bienestar playero',
      'Clima cálido todo el año a la orilla del mar'
    ],
    eventSpaces: [
      { name: 'Frente de Playa Privado', capacity: '150+ personas', type: 'Playa Privada', description: 'Amplia franja de arena virgen para cenas bajo las constelaciones, fogatas y ralleys de playa.' },
      { name: 'Terraza Marina Panorámica', capacity: '80 personas', type: 'Terraza con Vista al Mar', description: 'Espacio elevado frente a las olas para cócteles al atardecer, brindis y presentaciones.' },
      { name: 'Alberca Tropical & Palapas', capacity: '70 personas', type: 'Área de Alberca', description: 'Zona relajada con servicio de bebidas refrescantes y asados de mariscos al carbón.' },
      { name: 'Comedor del Mar', capacity: '50 personas', type: 'Restaurante Costero', description: 'Cocina de pescadores con los mejores mariscos y recetas tradicionales jarochas.' }
    ],
    idealFor: ['Retiros Costeros de Integración', 'Parrilladas y Fiestas en la Playa', 'Celebraciones Familiares y Aniversarios', 'Rallys de Supervivencia Playera'],
    url: 'https://mikipihotelboutique.com/lander',
    image: '/images/sedes/veracruz.jpg',
  },
];
