export interface ProcessStep {
  step: string;
  title: string;
  detail: string;
}

export interface ProcedureItem {
  id: string;
  name: string;
  shortName: string;
  categorySlug: 'armonizacion' | 'regeneracion' | 'aparatologia' | 'corporal' | 'especializados';
  categoryName: string;
  summary: string;
  clinicalDetail: string;
  zones: string;
  duration: string;
  recovery: string;
  specialist: string;
  image: string;
  featured?: boolean;
  includes: string[];
  processSteps: ProcessStep[];
  benefits: string[];
  postCare: string;
}

export interface CategoryInfo {
  slug: 'armonizacion' | 'regeneracion' | 'aparatologia' | 'corporal' | 'especializados';
  shortLabel: string;
  title: string;
  subtitle: string;
  description: string;
  specialistNote: string;
  image: string;
  count: number;
}

export const CLINIC_INFO = {
  name: 'REJUVENESS CENTER',
  displayTitle: 'Rejuveness Center',
  tagline: 'Clínica de Rejuvenecimiento Facial y Moldeo Corporal',
  foundedYear: 2012,
  director: 'Dra. Ingrid Gómez',
  directorTitle: 'Directora Médica · Especialista en Medicina Estética y Armonización Orofacial',
  certifications: [
    {
      institution: 'Centro Estetique',
      location: 'Miami, EE. UU.',
      focus: 'Protocolos Avanzados de Rejuvenecimiento y Estética Médica No Quirúrgica',
    },
    {
      institution: 'Innoaesthetics',
      location: 'Barcelona, España',
      focus: 'Dermoestética Clínica, Peelings Médicos y Regeneración Epidérmica',
    },
    {
      institution: 'Global Skin Academy',
      location: 'Internacional',
      focus: 'Bioestimulación Celular y Terapias Regenerativas Cutáneas',
    },
    {
      institution: 'Merz Aesthetics',
      location: 'Certificación Internacional',
      focus: 'Armonización Orofacial Progresiva y Bioestimuladores de Colágeno (Radiesse)',
    },
  ],
  address: 'Calle La Mascota #722, Colonia Maquilishuat, San Salvador, El Salvador.',
  zone: 'Colonia Maquilishuat · San Salvador',
  phoneDisplay: '+503 2264-7018',
  phoneTel: '+50322647018',
  whatsappPrimaryDisplay: '+503 7930-0623',
  whatsappPrimaryNumber: '50379300623',
  whatsappSecondaryDisplay: '+503 7938-2008',
  whatsappSecondaryNumber: '50379382008',
  facebookUrl: 'https://www.facebook.com/rejuvenesscenter/',
  facebookHandle: 'REJUVENESS CENTER | San Salvador',
  instagramUrl: 'https://www.instagram.com/rejuvenesscenter/',
  instagramHandle: '@rejuvenesscenter',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Calle+La+Mascota+722+Colonia+Maquilishuat+San+Salvador',
};

export const CATEGORIES: CategoryInfo[] = [
  {
    slug: 'armonizacion',
    shortLabel: 'ARMONIZACIÓN',
    title: 'Armonización Orofacial y Antienvejecimiento',
    subtitle: 'Proporción, soporte y expresión natural',
    description:
      'Protocolos médicos inyectables aplicados directamente por la Dra. Ingrid Gómez y médicos certificados para suavizar líneas dinámicas y redefinir el contorno facial sin rasgos artificiales.',
    specialistNote: 'Aplicación exclusiva por personal médico certificado',
    image: '/images/pexels/cat-orofacial.jpg',
    count: 5,
  },
  {
    slug: 'regeneracion',
    shortLabel: 'REGENERACIÓN',
    title: 'Terapias de Regeneración Celular Avanzada',
    subtitle: 'Biotecnología dérmica y luminosidad profunda',
    description:
      'Bioestimulación celular de última generación que repara la barrera cutánea desde el interior mediante polinucleótidos, exosomas y factores de crecimiento.',
    specialistNote: 'Biotecnología regenerativa de grado médico',
    image: '/images/pexels/cat-regeneracion.jpg',
    count: 3,
  },
  {
    slug: 'aparatologia',
    shortLabel: 'APARATOLOGÍA',
    title: 'Aparatología Facial de Alta Gama',
    subtitle: 'Tecnología americana de punta sin tiempo de incapacidad',
    description:
      'Sistemas no invasivos de ultrasonido focalizado, radiofrecuencia fraccionada en oro y luz pulsada intensa para tensar el óvalo facial y renovar la textura cutánea.',
    specialistNote: 'Tecnología americana aprobada bajo supervisión médica',
    image: '/images/pexels/cat-aparatologia.jpg',
    count: 4,
  },
  {
    slug: 'corporal',
    shortLabel: 'CORPORAL',
    title: 'Moldeo Corporal y Control de Peso',
    subtitle: 'Definición de silueta, firmeza y drenaje especializado',
    description:
      'Combinación sinérgica de biotecnología enzimática (PB Serum), radiofrecuencia corporal y masajes clínicos especializados para reducir grasa localizada y combatir flacidez.',
    specialistNote: 'Evaluación corporal personalizada previa',
    image: '/images/pexels/cat-corporal.jpg',
    count: 3,
  },
  {
    slug: 'especializados',
    shortLabel: 'ESPECIALIZADOS',
    title: 'Tratamientos Especializados Adicionales',
    subtitle: 'Regeneración capilar y dermoaclarado médico',
    description:
      'Protocolos clínicos específicos de terapia celular con exosomas para fortalecer el folículo capilar (ExoHair) y despigmentación médica delicada en zonas íntimas.',
    specialistNote: 'Atención en cabina privada con absoluta discreción',
    image: '/images/pexels/proc-exohair.jpg',
    count: 2,
  },
];

export const PROCEDURES: ProcedureItem[] = [
  // 1. Armonización Orofacial y Antienvejecimiento
  {
    id: 'botox',
    name: 'Toxina Botulínica (Bótox)',
    shortName: 'Toxina Botulínica · Bótox',
    categorySlug: 'armonizacion',
    categoryName: 'Armonización Orofacial',
    summary: 'Eliminación y prevención de líneas de expresión en frente, entrecejo y patas de gallo.',
    clinicalDetail:
      'La aplicación médica de Toxina Botulínica relaja de forma selectiva y controlada la musculatura responsable de los pliegues dinámicos del tercio superior facial, logrando una mirada descansada, fresca y luminosa sin perder tu expresividad natural.',
    zones: 'Frente, entrecejo y contorno ocular (patas de gallo)',
    duration: '30 – 40 min',
    recovery: 'Inmediata · Sin incapacidad',
    specialist: 'Dra. Ingrid Gómez / Médico Certificado',
    image: '/images/pexels/proc-botox.jpg',
    featured: true,
    includes: [
      'Evaluación médica personalizada de la fuerza y mímica muscular facial',
      'Asepsia clínica y preparación tópica de la piel en cabina privada',
      'Mapeo anatómico milimétrico de los puntos de infiltración en frente, entrecejo y patas de gallo',
      'Aplicación de Toxina Botulínica de marca internacional aprobada con microaguja indolora',
      'Cita de control y valoración de resultados a los 12–15 días',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Diagnóstico de Expresión Dinámica',
        detail:
          'La Dra. Ingrid Gómez o el médico especialista analiza tus gestos naturales para determinar las unidades exactas que suavizarán las líneas sin congelar tus facciones.',
      },
      {
        step: '02',
        title: 'Diseño y Marcación Anatómica',
        detail:
          'Se higieniza la piel y se trazan los puntos estratégicos sobre los músculos frontal, corrugador y orbicular de los ojos.',
      },
      {
        step: '03',
        title: 'Microinfiltración de Precisión',
        detail:
          'Mediante agujas ultrafinas se depositan microdosis indoloros en cuestión de minutos, permitiendo retomar tus actividades al salir de la clínica.',
      },
    ],
    benefits: [
      'Suaviza arrugas de expresión en frente, entrecejo y contorno de ojos',
      'Previene la formación de surcos estáticos profundos a largo plazo',
      'Aporta un efecto de mirada descansada y cejas sutilmente despejadas',
      'Resultados visibles a partir del día 3 al 5, con máximo efecto a los 14 días',
    ],
    postCare:
      'No frotar la zona tratada, mantener posición erguida durante las primeras 4 horas y evitar ejercicio físico intenso o saunas durante las primeras 24 horas.',
  },
  {
    id: 'acido-hialuronico',
    name: 'Ácido Hialurónico Reticulado',
    shortName: 'Ácido Hialurónico Reticulado',
    categorySlug: 'armonizacion',
    categoryName: 'Armonización Orofacial',
    summary: 'Relleno de ojeras, surcos nasogenianos, aumento/perfilado de labios y proyección de mentón.',
    clinicalDetail:
      'Reposición anatómica de volumen, soporte estructural e hidratación profunda mediante geles de ácido hialurónico reticulado biocompatible de alta gama, adaptando la densidad exacta a cada zona del rostro.',
    zones: 'Ojeras, surcos nasogenianos, labios y mentón',
    duration: '45 – 60 min',
    recovery: 'Inmediata · Cuidados básicos',
    specialist: 'Dra. Ingrid Gómez / Médico Certificado',
    image: '/images/pexels/proc-hialuronico.jpg',
    featured: true,
    includes: [
      'Evaluación tridimensional de proporciones faciales y soporte dérmico',
      'Aplicación de anestesia tópica o local para máximo confort durante la sesión',
      'Infiltración con microcánula atraumática o aguja de precisión según el plano anatómico',
      'Ácido Hialurónico Reticulado de marca internacional certificada',
      'Guía médica de cuidados post-aplicación y seguimiento clínico',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Valoración de Armonía y Proporción',
        detail:
          'Definimos junto a ti las áreas prioritarias (ojeras hundidas, labios, surcos nasogenianos o mentón) seleccionando la reología ideal del ácido hialurónico.',
      },
      {
        step: '02',
        title: 'Preparación y Confort Anestésico',
        detail:
          'Desinfectamos el área y aplicamos anestesia para que el procedimiento sea sumamente cómodo y seguro.',
      },
      {
        step: '03',
        title: 'Reposición Estructural Progresiva',
        detail:
          'El médico deposita el gel de ácido hialurónico en el plano exacto para restaurar soporte e hidratación con resultado inmediato y natural.',
      },
    ],
    benefits: [
      'Atenúa el hundimiento y aspecto cansado en el valle lagrimal (ojeras)',
      'Perfila e hidrata los labios respetando su proporción armónica',
      'Suaviza los surcos nasogenianos y mejora la proyección del mentón',
      'Biocompatible, reabsorbible y con estimulación secundaria de hidratación',
    ],
    postCare:
      'Evitar exposición a calor extremo, saunas o presión directa sobre la zona tratada durante las primeras 48 horas; mantener buena hidratación oral y uso de protector solar.',
  },
  {
    id: 'rinomodelacion',
    name: 'Rinomodelación no Quirúrgica',
    shortName: 'Rinomodelación no Quirúrgica',
    categorySlug: 'armonizacion',
    categoryName: 'Armonización Orofacial',
    summary: 'Perfilado del tabique y levantamiento de la punta de la nariz empleando rellenos dérmicos.',
    clinicalDetail:
      'Procedimiento médico ambulatorio que estiliza el perfil nasal mediante puntos de soporte con rellenos dérmicos de alta cohesividad, corrigiendo asimetrías del dorso y proyectando la punta nasal sin cirugía.',
    zones: 'Dorso nasal (tabique), ángulo nasofrontal y punta nasal',
    duration: '40 min',
    recovery: 'Inmediata · Sin reposo',
    specialist: 'Dra. Ingrid Gómez / Médico Certificado',
    image: '/images/pexels/cat-orofacial.jpg',
    includes: [
      'Estudio profilométrico de ángulos nasofaciales y nasolabiales',
      'Preparación antiséptica y anestesia local confortable',
      'Aplicación médica de relleno dérmico estructural de alta seguridad',
      'Moldeo anatómico de dorso y proyección de punta nasal',
      'Revisión médica de control y recomendaciones personalizadas',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Estudio del Perfil Facial',
        detail:
          'Evaluamos la anatomía vascular y cartilaginosa de tu nariz en relación con tu frente, labios y mentón.',
      },
      {
        step: '02',
        title: 'Anestesia y Asepsia Clínica',
        detail:
          'Aplicamos anestesia específica en los puntos de entrada para garantizar una sesión libre de molestias.',
      },
      {
        step: '03',
        title: 'Esculpido Nasal en Tres Puntos',
        detail:
          'Se rectifica visualmente el dorso nasal y se eleva sutilmente la punta en menos de 40 minutos, sin férulas ni incapacidad quirúrgica.',
      },
    ],
    benefits: [
      'Rectifica visualmente la giba o curvatura del tabique nasal',
      'Eleva y define la punta nasal caída al sonreír o en reposo',
      'Resultados inmediatos en una sola sesión sin anestesia general',
      'Retorno inmediato a tu rutina laboral y social',
    ],
    postCare:
      'No utilizar lentes pesados apoyados sobre el tabique durante los primeros 7 días y evitar dormir boca abajo las primeras 48 horas.',
  },
  {
    id: 'hilos-tensores',
    name: 'Hilos Tensores (PDO)',
    shortName: 'Hilos Tensores PDO',
    categorySlug: 'armonizacion',
    categoryName: 'Armonización Orofacial',
    summary: 'Efecto lifting inmediato y estimulación a largo plazo de colágeno.',
    clinicalDetail:
      'Los hilos de polidioxanona (PDO) son suturas médicas 100% biocompatibles y reabsorbibles que crean una red de soporte subdérmico, reposicionando los tejidos con flacidez leve a moderada mientras inducen colágeno autólogo.',
    zones: 'Óvalo facial, mejillas, línea mandibular, cejas y cuello',
    duration: '45 – 60 min',
    recovery: 'Retorno cotidiano inmediato',
    specialist: 'Dra. Ingrid Gómez / Médico Certificado',
    image: '/images/pexels/skin-needs-portrait.jpg',
    includes: [
      'Evaluación médica de vectores de tensión y grado de flacidez cutánea',
      'Asepsia quirúrgica e infiltración anestésica local en puntos de entrada',
      'Colocación de Hilos Tensores de Polidioxanona (PDO) espiculados o monofilamento según diagnóstico',
      'Sellado clínico y pauta de cuidados domiciliarios',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Trazado de Vectores de Tracción',
        detail:
          'El médico diseña sobre la piel las líneas de soporte que devolverán firmeza al tercio medio e inferior del rostro.',
      },
      {
        step: '02',
        title: 'Implantación Subdérmica con Cánula',
        detail:
          'Con anestesia local se insertan los hilos PDO en el tejido subcutáneo sin realizar cortes ni dejar cicatrices.',
      },
      {
        step: '03',
        title: 'Tensado Mecánico y Bioestimulación',
        detail:
          'Se obtiene un efecto lifting inmediato que se consolida durante los siguientes 2 a 3 meses gracias a la formación de colágeno propio.',
      },
    ],
    benefits: [
      'Redefine el arco mandibular y atenúa el surco de marioneta',
      'Doble acción: tracción inmediata y formación progresiva de colágeno tipo I y III',
      'Material 100% reabsorbible utilizado con total seguridad en medicina',
      'Sin cicatrices ni tiempos de hospitalización',
    ],
    postCare:
      'Evitar gesticulación exagerada, tratamientos dentales prolongados y masajes faciales intensos durante las primeras 2 semanas.',
  },
  {
    id: 'bioestimuladores',
    name: 'Bioestimuladores de Colágeno (Radiesse)',
    shortName: 'Bioestimuladores · Radiesse',
    categorySlug: 'armonizacion',
    categoryName: 'Armonización Orofacial',
    summary: 'Tratamientos avanzados para recuperar la densidad de la piel (como Radiesse).',
    clinicalDetail:
      'Protocolo médico con hidroxiapatita cálcica (Radiesse de Merz Aesthetics) y inductores de colágeno que reactivan los fibroblastos dérmicos para engrosar la piel fina, combatir la flacidez y redefinir contornos.',
    zones: 'Rostro completo, contorno mandibular, cuello, escote y manos',
    duration: '45 min',
    recovery: 'Inmediata · Sin incapacidad',
    specialist: 'Dra. Ingrid Gómez / Médico Certificado',
    image: '/images/pexels/dra-clinica.jpg',
    includes: [
      'Diagnóstico médico de densidad dérmica y pérdida de colágeno',
      'Preparación clínica y confort anestésico local',
      'Aplicación de Bioestimulador original certificado (como Radiesse · Merz) mediante técnica de vectores con microcánula',
      'Masaje médico de distribución uniforme y protocolo de seguimiento',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Evaluación de Calidad y Firmeza Cutánea',
        detail:
          'Identificamos las áreas donde la piel ha perdido grosor, elasticidad y soporte estructural.',
      },
      {
        step: '02',
        title: 'Aplicación en Abanico con Microcánula',
        detail:
          'La Dra. Ingrid Gómez distribuye el bioestimulador en el plano subdérmico creando una malla regenerativa uniforme.',
      },
      {
        step: '03',
        title: 'Neocolagénesis Progresiva',
        detail:
          'Tus propias células comienzan a producir nuevo colágeno y elastina, alcanzando una piel más firme y densa semana tras semana.',
      },
    ],
    benefits: [
      'Recupera la densidad y firmeza de la piel sin añadir volumen excesivo',
      'Efecto lifting biológico duradero (hasta 12–18 meses)',
      'Excelente para reafirmar cuello, línea mandibular y dorso de manos',
      'Respaldo de certificación internacional con Merz Aesthetics',
    ],
    postCare:
      'Evitar calor intenso o ejercicio vigoroso durante 24 horas y usar protector solar diariamente.',
  },

  // 2. Terapias de Regeneración Celular Avanzada
  {
    id: 'adn-salmon-pdrn',
    name: 'ADN de Salmón (PDRN)',
    shortName: 'ADN de Salmón · PDRN',
    categorySlug: 'regeneracion',
    categoryName: 'Regeneración Celular',
    summary: 'Microinyecciones regenerativas que devuelven la elasticidad, hidratación profunda y luminosidad natural.',
    clinicalDetail:
      'Los polinucleótidos purificados de ADN de Salmón (PDRN) poseen una extraordinaria compatibilidad con el ADN humano, estimulando la reparación celular profunda, la microcirculación y la síntesis de ácido hialurónico endógeno.',
    zones: 'Rostro completo, contorno de ojos, cuello y escote',
    duration: '45 min',
    recovery: 'Inmediata · Uso de fotoprotector',
    specialist: 'Dra. Ingrid Gómez / Médico Certificado',
    image: '/images/pexels/proc-pdrn.jpg',
    featured: true,
    includes: [
      'Evaluación médica del estado de hidratación y daño fotoinducido',
      'Limpieza clínica preparatoria y aplicación de crema anestésica tópica',
      'Microinfiltración intradérmica de complejo puro de ADN de Salmón (PDRN)',
      'Aplicación de máscara o suero calmante post-procedimiento y fotoprotección clínica',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Preparación y Anestesia Tópica',
        detail:
          'Higienizamos profundamente el rostro y aplicamos anestesia tópica durante 20 minutos para tu total comodidad.',
      },
      {
        step: '02',
        title: 'Bioestimulación con Polinucleótidos (PDRN)',
        detail:
          'Se aplican microdepósitos de ADN de Salmón en las capas superficiales y medias de la dermis, incluyendo el delicado contorno ocular.',
      },
      {
        step: '03',
        title: 'Sellado Calmante y Luminosidad',
        detail:
          'Finalizamos con activos descongestivos y protector solar médico; en pocos días notarás una piel más elástica, jugosa y radiante.',
      },
    ],
    benefits: [
      'Hidratación profunda y efecto "glass skin" luminoso y saludable',
      'Mejora la elasticidad, líneas finas y textura de los poros',
      'Acelera la regeneración de pieles apagadas, sensibles o con daño solar',
      'Ideal como tratamiento preventivo y restaurador a cualquier edad adulta',
    ],
    postCare:
      'Mantener la piel hidratada, evitar maquillaje durante las primeras 12 horas y aplicar protector solar cada 3 a 4 horas.',
  },
  {
    id: 'exosomas',
    name: 'Terapia Celular con Exosomas',
    shortName: 'Exosomas Regenerativos',
    categorySlug: 'regeneracion',
    categoryName: 'Regeneración Celular',
    summary: 'Terapia celular de vanguardia para reparar la barrera cutánea y revertir el daño cronológico.',
    clinicalDetail:
      'Los exosomas son nanovesículas extracelulares cargadas de factores de crecimiento, péptidos, aminoácidos y coenzimas que actúan como mensajeros directos para reprogramar las células cutáneas envejecidas o inflamadas.',
    zones: 'Rostro completo, cuello, escote y pieles con secuelas o rojeces',
    duration: '50 min',
    recovery: 'Inmediata · Sin incapacidad',
    specialist: 'Dra. Ingrid Gómez / Equipo Médico',
    image: '/images/pexels/proc-exosomas.jpg',
    includes: [
      'Valoración dermoestética de la barrera cutánea y porosidad',
      'Preparación clínica e inducción de microcanales dérmicos estériles',
      'Aplicación de concentrado biotecnológico de Exosomas de alta pureza',
      'Sellado regenerativo y protocolo domiciliario de cuidado',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Diagnóstico de Barrera Epidérmica',
        detail:
          'Evaluamos el nivel de envejecimiento cronológico, manchas, sensibilidad o poros dilatados de tu piel.',
      },
      {
        step: '02',
        title: 'Vehiculización Dérmica de Exosomas',
        detail:
          'Mediante microinyecciones o sistemas de microinducción médica depositamos millones de exosomas directamente en la dermis.',
      },
      {
        step: '03',
        title: 'Renovación Celular Acelerada',
        detail:
          'Los exosomas triplican la producción de colágeno y reducen la inflamación tisular, revelando una piel notablemente más uniforme y joven.',
      },
    ],
    benefits: [
      'Repara la barrera cutánea dañada y calma rojeces o inflamación',
      'Rejuvenecimiento celular integral con mejora visible en firmeza y poros',
      'Potencia y acelera los resultados al combinarse con láser o radiofrecuencia',
      'Fórmula biotecnológica hipoalergénica y libre de incapacidad',
    ],
    postCare:
      'No lavar el rostro durante las primeras 6 horas para permitir la absorción total de los exosomas y utilizar filtro solar de amplio espectro.',
  },
  {
    id: 'prp',
    name: 'Plasma Rico en Plaquetas (PRP)',
    shortName: 'Plasma Rico en Plaquetas',
    categorySlug: 'regeneracion',
    categoryName: 'Regeneración Celular',
    summary: 'Bioestimulación autóloga utilizando los factores de crecimiento del propio paciente.',
    clinicalDetail:
      'Tratamiento regenerativo 100% autólogo y natural que concentra las plaquetas y factores de crecimiento de tu propia sangre para estimular la formación de nuevos vasos sanguíneos, colágeno y elastina.',
    zones: 'Rostro, cuello, escote y dorso de manos',
    duration: '60 min',
    recovery: 'Inmediata · Cuidado solar',
    specialist: 'Dra. Ingrid Gómez / Equipo Médico',
    image: '/images/pexels/cat-regeneracion.jpg',
    includes: [
      'Extracción sanguínea mínima con insumos estériles desechables',
      'Centrifugado médico certificado y activación de la fracción rica en factores de crecimiento',
      'Anestesia tópica previa en rostro y cuello',
      'Microinfiltración intradérmica del Plasma Rico en Plaquetas y mascarilla calmante final',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Obtención y Centrifugado Clínico',
        detail:
          'Tomamos una pequeña muestra sanguínea del brazo y la procesamos en centrífuga médica para aislar el plasma concentrado en plaquetas.',
      },
      {
        step: '02',
        title: 'Preparación Cutánea con Anestesia',
        detail:
          'Mientras se procesa la muestra, tu piel se prepara con limpieza profunda y crema anestésica.',
      },
      {
        step: '03',
        title: 'Bioestimulación Autóloga',
        detail:
          'Aplicamos los factores de crecimiento en rostro, cuello o escote para activar la regeneración tisular desde adentro.',
      },
    ],
    benefits: [
      'Cero riesgo de alergias o rechazo al provenir del propio paciente',
      'Devuelve vitalidad, frescura y tono saludable a pieles fatigadas',
      'Estimula la microcirculación y síntesis natural de elastina',
      'Excelente complemento periódico para mantener la juventud cutánea',
    ],
    postCare:
      'Evitar exposición solar directa, piscinas o ejercicio intenso durante las primeras 24 horas; aplicar protector solar cada mañana.',
  },

  // 3. Aparatología Facial de Alta Gama
  {
    id: 'hifu',
    name: 'HIFU (Ultrasonido Focalizado de Alta Intensidad)',
    shortName: 'HIFU · Lifting Ultrasónico',
    categorySlug: 'aparatologia',
    categoryName: 'Aparatología Facial',
    summary: 'Tensado cutáneo profundo que combate la flacidez del óvalo facial y cuello.',
    clinicalDetail:
      'Tecnología americana de ultrasonido focalizado de alta intensidad que deposita puntos térmicos de coagulación directamente en la capa muscular superficial (SMAS) y dermis profunda, logrando un efecto lifting sin cirugía ni agujas.',
    zones: 'Óvalo facial, arco mandibular, papada, mejillas y cuello',
    duration: '60 – 75 min',
    recovery: 'Inmediata · 0 días de reposo',
    specialist: 'Especialista Dérmica bajo Supervisión Médica',
    image: '/images/pexels/proc-hifu.jpg',
    featured: true,
    includes: [
      'Evaluación médica del grado de flacidez y diseño de vectores ultrasónicos',
      'Limpieza facial preparatoria y aplicación de gel conductor clínico',
      'Aplicación de cartuchos multi-profundidad (1.5 mm, 3.0 mm y 4.5 mm SMAS) según la zona anatómica',
      'Hidratación final calmante y fotoprotección médica',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Mapeo de Zonas de Flacidez',
        detail:
          'Delimitamos las áreas del contorno mandibular, mejillas, papada y cuello que requieren retracción profunda.',
      },
      {
        step: '02',
        title: 'Pulsos de Ultrasonido Focalizado en 3 Planos',
        detail:
          'Trabajamos desde el plano muscular SMAS (4.5 mm) hasta la dermis superficial (1.5 mm) sin alterar ni dañar la epidermis.',
      },
      {
        step: '03',
        title: 'Contracción Inmediata y Tensado Progresivo',
        detail:
          'Al finalizar la sesión percibes un efecto tensor inicial que se intensifica continuamente durante los siguientes 60 a 90 días.',
      },
    ],
    benefits: [
      'Única tecnología no invasiva que actúa sobre la fascia muscular SMAS',
      'Redefine el óvalo facial y disminuye la flacidez en cuello y papada',
      'No utiliza agujas ni deja marcas superficiales en la piel',
      'Resultados progresivos y naturales en pocas sesiones al año',
    ],
    postCare:
      'Retorno inmediato a tus actividades normales; evitar aplicar hielo sobre la zona tratada y mantener hidratación y filtro solar diario.',
  },
  {
    id: 'radiofrecuencia-gold',
    name: 'Radiofrecuencia Fraccionada Gold',
    shortName: 'Radiofrecuencia Fraccionada Gold',
    categorySlug: 'aparatologia',
    categoryName: 'Aparatología Facial',
    summary: 'Renovación de las capas de la piel, excelente para difuminar poros abiertos y secuelas de acné.',
    clinicalDetail:
      'Sistema avanzado que combina energía térmica de radiofrecuencia bipolar fraccionada con cabezales bañados en oro para remodelar las fibras de colágeno en profundidad, alisar cicatrices de acné y cerrar poros dilatados.',
    zones: 'Rostro completo, mejillas, zona T y cuello',
    duration: '60 min',
    recovery: 'Rápida · Fotoprotección estricta',
    specialist: 'Especialista Dérmica bajo Supervisión Médica',
    image: '/images/pexels/cat-aparatologia.jpg',
    includes: [
      'Diagnóstico de textura epidérmica, poros y cicatrices post-acné',
      'Asepsia clínica y preparación anestésica tópica confortable',
      'Sesión completa con cabezal estéril de Radiofrecuencia Fraccionada Gold calibrado a tu fototipo',
      'Aplicación de activos regenerativos post-sesión y protector solar mineral',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Preparación y Calibración de Energía',
        detail:
          'Ajustamos la profundidad y potencia térmica de acuerdo con el grosor de la piel en frente, mejillas o cuello.',
      },
      {
        step: '02',
        title: 'Remodelación Térmica Fraccionada',
        detail:
          'La energía de radiofrecuencia penetra de forma uniforme estimulando la renovación de las capas dérmicas.',
      },
      {
        step: '03',
        title: 'Recuperación de Textura Lisa',
        detail:
          'La piel se regenera mostrando poros visiblemente más finos, mayor firmeza y atenuación de marcas de acné.',
      },
    ],
    benefits: [
      'Difumina poros abiertos e irregularidades en la textura cutánea',
      'Mejora notablemente las secuelas y cicatrices atróficas de acné',
      'Aporta firmeza y efecto tensor sobre mejillas y cuello',
      'Seguro para fototipos de piel latinos bajo protocolo médico',
    ],
    postCare:
      'Utilizar crema reparadora hidratante y protector solar FPS 50+ rigurosamente; evitar exposición solar directa durante los primeros 5 días.',
  },
  {
    id: 'ipl',
    name: 'IPL (Luz Pulsada Intensa)',
    shortName: 'IPL · Luz Pulsada Intensa',
    categorySlug: 'aparatologia',
    categoryName: 'Aparatología Facial',
    summary: 'Tratamiento para eliminar manchas solares, rojeces y mejorar el tono de la piel.',
    clinicalDetail:
      'Fotarrejuvenecimiento facial mediante pulsos de luz policromática de alta precisión que actúan selectivamente sobre la melanina acumulada (manchas solares) y la hemoglobina (rojeces o capilares dilatados), devolviendo un tono uniforme.',
    zones: 'Rostro, cuello, escote y dorso de manos',
    duration: '45 min',
    recovery: 'Inmediata · Uso de filtro solar',
    specialist: 'Especialista Dérmica bajo Supervisión Médica',
    image: '/images/pexels/banner-harmony.jpg',
    includes: [
      'Evaluación médica de fototipo cutáneo y tipo de pigmentación o rojez',
      'Limpieza facial, colocación de gafas protectoras y gel frío conductor',
      'Aplicación de pulsos selectivos de Luz Pulsada Intensa (IPL) con enfriamiento integrado',
      'Mascarilla descongestiva e hidratante más fotoprotección clínica',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Análisis de Manchas y Vascularización',
        detail:
          'Determinamos los filtros de longitud de onda exactos para tratar léntigos solares, daño actínico o rosácea.',
      },
      {
        step: '02',
        title: 'Fototermólisis Selectiva Confortable',
        detail:
          'Emitimos pulsos suaves de luz sobre el área tratada; la energía fragmenta el pigmento oscuro sin lesionar la piel sana.',
      },
      {
        step: '03',
        title: 'Aclarado y Luminosidad Progresiva',
        detail:
          'Las manchas tratadas se atenúan gradualmente revelando una tez homogénea, luminosa y rejuvenecida.',
      },
    ],
    benefits: [
      'Elimina y atenúa manchas solares en rostro, escote y manos',
      'Disminuye rojeces difusas, cuperosis y secuelas eritematosas',
      'Unifica el tono cutáneo y aporta luminosidad desde la primera sesión',
      'Estimula colágeno superficial mejorando la suavidad de la piel',
    ],
    postCare:
      'Uso indispensable de protector solar FPS 50+ cada 3 horas y evitar bronceado o exposición solar intensa antes y después de la sesión.',
  },
  {
    id: 'limpieza-profunda',
    name: 'Limpiezas Faciales Profundas Clínicas',
    shortName: 'Limpieza Facial Profunda',
    categorySlug: 'aparatologia',
    categoryName: 'Aparatología Facial',
    summary:
      'Incluyen hidrodermabrasión, peeling glicólico, altafrecuencia, vaporización con ozono y mascarillas de colágeno/ácido hialurónico.',
    clinicalDetail:
      'Protocolo dermoestético integral diseñado para desintoxicar, oxigenar y nutrir la piel a profundidad, combinando aparatología clínica y principios activos dermatológicos bajo supervisión médica.',
    zones: 'Rostro completo y cuello',
    duration: '60 – 75 min',
    recovery: 'Inmediata · Piel fresca y limpia',
    specialist: 'Terapista de la Piel bajo Supervisión Médica',
    image: '/images/pexels/proc-limpieza.jpg',
    includes: [
      'Hidrodermabrasión profunda para succión suave de impurezas e hidratación simultánea',
      'Vaporización con ozono para oxigenar tejidos y abrir poros sin irritar',
      'Peeling glicólico suave para renovación celular y luminosidad',
      'Extracción aséptica de comedones y aplicación de Altafrecuencia bactericida y descongestiva',
      'Mascarilla intensiva de Colágeno o Ácido Hialurónico + Fotoprotección médica',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Higienización, Vapor con Ozono y Peeling Glicólico',
        detail:
          'Preparamos la epidermis eliminando células muertas mediante peeling glicólico suave y vaporización oxigenante con ozono.',
      },
      {
        step: '02',
        title: 'Hidrodermabrasión y Altafrecuencia Clínica',
        detail:
          'Limpiamos los poros a profundidad con puntas de hidrodermabrasión y sellamos con altafrecuencia para calmar y desinfectar el tejido.',
      },
      {
        step: '03',
        title: 'Nutrición con Colágeno / Ácido Hialurónico',
        detail:
          'Aplicamos una mascarilla concentrada de colágeno o ácido hialurónico que deja la piel tersa, hidratada y radiante al instante.',
      },
    ],
    benefits: [
      'Piel libre de impurezas, puntos negros y exceso de sebo',
      'Renovación epidérmica suave gracias al peeling glicólico incluido',
      'Efecto bactericida y calmante mediante vapor de ozono y altafrecuencia',
      'Hidratación inmediata con mascarillas de colágeno y ácido hialurónico',
    ],
    postCare:
      'Mantener tu rutina diaria de hidratación y aplicar protector solar; ideal realizarla cada 4 semanas como mantenimiento de salud cutánea.',
  },

  // 4. Moldeo Corporal y Control de Peso
  {
    id: 'enzimas-pb-serum',
    name: 'Enzimas Lipolíticas (PB Serum)',
    shortName: 'Enzimas Lipolíticas · PB Serum',
    categorySlug: 'corporal',
    categoryName: 'Moldeo Corporal',
    summary: 'Cocteles enzimáticos avanzados para degradar grasa localizada y reducir papada o abdomen.',
    clinicalDetail:
      'Biotecnología española de enzimas recombinantes liofilizadas (Lipasa, Colagenasa y Liasa) de PB Serum que actúan selectivamente sobre el tejido adiposo localizado, la flacidez y la fibrosis sin dañar tejidos adyacentes.',
    zones: 'Papada (doble mentón), abdomen, flancos, brazos, espalda y celulitis',
    duration: '45 min',
    recovery: 'Inmediata · Actividades normales',
    specialist: 'Dra. Ingrid Gómez / Médico Certificado',
    image: '/images/pexels/proc-corporal-enzimas.jpg',
    includes: [
      'Evaluación médica antropométrica de la zona corporal o submentoniana (papada)',
      'Selección del coctel enzimático específico PB Serum (High, Medium o Low según necesidad)',
      'Asepsia clínica, anestesia local confortable y aplicación médica en el panículo adiposo',
      'Seguimiento médico y recomendaciones para potenciar el drenaje metabólico',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Diagnóstico del Tejido Adiposo o Fibrosis',
        detail:
          'El médico evalúa si predomina grasa localizada (como en papada o abdomen), flacidez dérmica o celulitis fibrosa.',
      },
      {
        step: '02',
        title: 'Reconstitución y Aplicación de Enzimas PB Serum',
        detail:
          'Se reconstituyen las enzimas liofilizadas al momento de tu cita para conservar el 100% de su actividad biológica y se infiltran con microaguja.',
      },
      {
        step: '03',
        title: 'Degradación Lipolítica y Retracción Cutánea',
        detail:
          'La lipasa disuelve los triglicéridos intracelulares mientras la colagenasa estimula fibras nuevas para que la piel se adhiera con firmeza.',
      },
    ],
    benefits: [
      'Reduce eficazmente la papada y depósitos rebeldes en abdomen o flancos',
      'Combate la flacidez simultáneamente evitando que la piel quede suelta',
      'Excelente para alisar celulitis y fibrosis post-quirúrgica',
      'Enzimas recombinantes de máxima pureza y seguridad biológica',
    ],
    postCare:
      'Mantener abundante ingesta de agua durante la semana posterior y evitar carbohidratos simples las primeras 48 horas para optimizar la metabolización.',
  },
  {
    id: 'lipomax-rf',
    name: 'Lipomax RF & Corpomoldeador',
    shortName: 'Lipomax RF & Corpomoldeador',
    categorySlug: 'corporal',
    categoryName: 'Moldeo Corporal',
    summary: 'Aparatología combinada para combatir la celulitis, flacidez corporal y moldear la figura.',
    clinicalDetail:
      'Protocolo corporal no invasivo que integra energía térmica de Radiofrecuencia Corporal (Lipomax RF) con tecnología corpomoldeadora para compactar el tejido subcutáneo, mejorar la circulación linfática y esculpir la silueta.',
    zones: 'Abdomen, cintura, flancos, glúteos, muslos y brazos',
    duration: '60 min',
    recovery: 'Inmediata · Sin incapacidad',
    specialist: 'Especialista Corporal bajo Supervisión Médica',
    image: '/images/pexels/cat-corporal.jpg',
    includes: [
      'Valoración corporal inicial y toma de medidas de referencia',
      'Sesión combinada de Radiofrecuencia Corporal Lipomax RF para tensado dérmico',
      'Aplicación de aparatología Corpomoldeadora para movilización adiposa y celulitis',
      'Maniobras finales de activación circulatoria con activos reafirmantes',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Evaluación de Contorno y Celulitis',
        detail:
          'Definimos las zonas corporales prioritarias (abdomen, cintura, muslos o brazos) y programamos los parámetros térmicos.',
      },
      {
        step: '02',
        title: 'Termoterapia Profunda con Lipomax RF',
        detail:
          'El calor controlado en la dermis profunda contrae las fibras de colágeno existentes y estimula la lipólisis local.',
      },
      {
        step: '03',
        title: 'Modelado Corporal Sinérgico',
        detail:
          'El sistema corpomoldeador alisa el aspecto de piel de naranja y estiliza los contornos de manera cómoda e indolora.',
      },
    ],
    benefits: [
      'Disminuye visiblemente la celulitis (piel de naranja) y mejora la textura',
      'Reafirma la piel corporal tras pérdidas de peso o post-parto',
      'Moldea cintura, abdomen y muslos sin dolor ni tiempo de reposo',
      'Sesiones relajantes que estimulan la oxigenación y el drenaje tisular',
    ],
    postCare:
      'Acompañar con hidratación constante y hábitos saludables; puede combinarse con Enzimas PB Serum o masajes reductivos para acelerar resultados.',
  },
  {
    id: 'masajes-especializados',
    name: 'Masajes Clínicos Especializados',
    shortName: 'Masajes Pre/Post y Drenaje',
    categorySlug: 'corporal',
    categoryName: 'Moldeo Corporal',
    summary: 'Tratamientos pre y post liposucción, drenajes linfáticos y masajes reductivos.',
    clinicalDetail:
      'Terapias manuales y asistidas ejecutadas por personal capacitado bajo supervisión médica para preparar los tejidos antes de una cirugía, acelerar la desinflamación post-liposucción previniendo fibrosis, o moldear mediante masajes reductivos.',
    zones: 'Abdomen, espalda, flancos, piernas, brazos o áreas post-operatorias',
    duration: '60 min',
    recovery: 'Alivio inmediato y descongestión',
    specialist: 'Terapista Corporal bajo Supervisión Médica',
    image: '/images/pexels/results-body-before.jpg',
    includes: [
      'Valoración del estado del tejido (retención hídrica, etapa post-operatoria o adiposidad)',
      'Drenaje Linfático Manual clínico para evacuación de edema y toxinas',
      'Protocolo específico Pre o Post Liposucción para prevención y manejo de fibrosis',
      'Masaje reductivo y moldeador con principios activos dermoestéticos',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Valoración de la Etapa Corporal',
        detail:
          'Adaptamos la presión y técnica según busques moldeo reductivo, drenaje linfático o recuperación post-quirúrgica.',
      },
      {
        step: '02',
        title: 'Activación de Ganglios y Drenaje Linfático',
        detail:
          'Mediante maniobras suaves y direccionales favorecemos la eliminación de líquidos retenidos y reducimos la inflamación.',
      },
      {
        step: '03',
        title: 'Moldeo o Manejo Anti-Fibrosis',
        detail:
          'En pacientes post-liposucción cuidamos la adherencia uniforme de la piel; en protocolos reductivos trabajamos el contorno de cintura y abdomen.',
      },
    ],
    benefits: [
      'Acelera la recuperación post-liposucción y previene irregularidades o fibrosis',
      'Disminuye la retención de líquidos, pesadez de piernas e inflamación',
      'Coadyuvante ideal en planes de control de peso y moldeo de silueta',
      'Atención en cabina privada climatizada con estricta higiene clínica',
    ],
    postCare:
      'En pacientes post-quirúrgicos, mantener el uso de la faja compresiva según indicación médica e ingerir abundante agua.',
  },

  // 5. Tratamientos Especializados Adicionales
  {
    id: 'exohair',
    name: 'ExoHair · Regeneración Capilar',
    shortName: 'ExoHair · Terapia Capilar',
    categorySlug: 'especializados',
    categoryName: 'Especializados',
    summary: 'Terapia celular regenerativa enfocada en detener la caída del cabello y estimular el folículo capilar.',
    clinicalDetail:
      'Protocolo médico capilar de última generación que utiliza exosomas y factores regenerativos aplicados directamente en el cuero cabelludo para reactivar los folículos pilosos debilitados, frenar la caída y aumentar la densidad del cabello.',
    zones: 'Cuero cabelludo (femenino y masculino)',
    duration: '45 min',
    recovery: 'Inmediata · Sin incapacidad',
    specialist: 'Dra. Ingrid Gómez / Equipo Médico',
    image: '/images/pexels/proc-exohair.jpg',
    includes: [
      'Evaluación médica tricológica del cuero cabelludo y patrón de caída capilar',
      'Asepsia capilar y preparación anestésica local confortable',
      'Microinfiltración folicular de terapia celular ExoHair rica en exosomas y péptidos capilares',
      'Pauta médica de seguimiento y recomendaciones de cuidado en casa',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Diagnóstico Folicular Personalizado',
        detail:
          'Evaluamos las zonas de adelgazamiento capilar o caída activa (efluvio telógeno, alopecia androgénica femenina o masculina).',
      },
      {
        step: '02',
        title: 'Estimulación Directa en la Raíz Capilar',
        detail:
          'Depositamos la fórmula regenerativa ExoHair a nivel del bulbo piloso para nutrir y despertar los folículos en fase de reposo.',
      },
      {
        step: '03',
        title: 'Fortalecimiento y Engrosamiento Progresivo',
        detail:
          'Disminuye la caída diaria y se estimula el crecimiento de cabello más grueso, brillante y resistente.',
      },
    ],
    benefits: [
      'Frena la caída excesiva del cabello por estrés, cambios hormonales o genética',
      'Estimula el folículo capilar mejorando el grosor y densidad de la hebra',
      'Revitaliza la microcirculación y salud del cuero cabelludo',
      'Procedimiento ambulatorio rápido y sin tiempo de recuperación',
    ],
    postCare:
      'No lavar el cabello ni aplicar productos fijadores durante las primeras 12 a 24 horas posteriores a la sesión.',
  },
  {
    id: 'despigmentacion-intima',
    name: 'Despigmentación Íntima Médica',
    shortName: 'Despigmentación Íntima',
    categorySlug: 'especializados',
    categoryName: 'Especializados',
    summary: 'Protocolos médicos para aclarar zonas corporales delicadas.',
    clinicalDetail:
      'Tratamiento médico dermoestético formulado específicamente para atenuar la hiperpigmentación en áreas sensibles e íntimas ocasionada por roce, cambios hormonales, embarazos o depilación tradicional, devolviendo un tono más claro y uniforme.',
    zones: 'Zona íntima externa, área inguinal, entrepierna y axilas',
    duration: '45 min',
    recovery: 'Inmediata · Cuidado suave en casa',
    specialist: 'Personal Médico Femenino Certificado',
    image: '/images/pexels/footer-serene.jpg',
    includes: [
      'Valoración médica en cabina privada por personal femenino certificado',
      'Higienización delicada y preparación de la barrera cutánea',
      'Aplicación de protocolo médico despigmentante específico para zonas sensibles',
      'Sellado calmante e indicaciones de mantenimiento domiciliario',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Evaluación en Absoluta Privacidad',
        detail:
          'Determinamos el grado de pigmentación y la sensibilidad de la piel en un ambiente de total confianza y discreción.',
      },
      {
        step: '02',
        title: 'Aplicación de Activos Despigmentantes Médicos',
        detail:
          'Empleamos fórmulas dermoestéticas seguras que regulan la producción de melanina sin irritar ni agredir la zona delicada.',
      },
      {
        step: '03',
        title: 'Renovación y Tono Homogéneo',
        detail:
          'De forma progresiva la piel recupera un aspecto más claro, hidratado, suave y rejuvenecido.',
      },
    ],
    benefits: [
      'Aclara y unifica el tono en zona íntima, ingles y axilas',
      'Mejora la suavidad e hidratación de la piel en áreas de fricción',
      'Protocolo seguro libre de hidroquinona agresiva o irritación severa',
      'Atención 100% femenina con total ética y discreción médica',
    ],
    postCare:
      'Usar ropa interior de algodón holgada durante las primeras 48 horas, evitar rasurado con navaja y aplicar la crema hidratante recomendada.',
  },
];

export const SKIN_NEEDS = [
  {
    id: 'need-armonizacion',
    title: 'Líneas de expresión, ojeras y armonía facial',
    subtitle: 'Toxina Botulínica, Ácido Hialurónico, Rinomodelación e Hilos PDO',
    description:
      'Suaviza arrugas de expresión y restaura volúmenes estratégicos manteniendo la naturalidad de tus facciones.',
    href: '/procedimientos/botox',
    image: '/images/pexels/cat-orofacial.jpg',
    tag: 'ARMONIZACIÓN OROFACIAL',
  },
  {
    id: 'need-luminosidad',
    title: 'Falta de luminosidad, deshidratación y daño celular',
    subtitle: 'ADN de Salmón (PDRN), Exosomas y Plasma Rico en Plaquetas',
    description:
      'Repara la barrera cutánea a nivel celular para devolver elasticidad, hidratación profunda y efecto glow natural.',
    href: '/procedimientos/adn-salmon-pdrn',
    image: '/images/pexels/proc-pdrn.jpg',
    tag: 'REGENERACIÓN CELULAR',
  },
  {
    id: 'need-flacidez',
    title: 'Flacidez del óvalo facial, manchas solares y poros abiertos',
    subtitle: 'HIFU Ultrasónico, Radiofrecuencia Fraccionada Gold, IPL y Limpieza Profunda',
    description:
      'Tecnología americana de alta gama para tensar el rostro sin cirugía, cerrar poros y eliminar manchas.',
    href: '/procedimientos/hifu',
    image: '/images/pexels/proc-hifu.jpg',
    tag: 'APARATOLOGÍA DE ALTA GAMA',
  },
  {
    id: 'need-corporal',
    title: 'Grasa localizada en papada o abdomen, celulitis y post-operatorio',
    subtitle: 'Enzimas Lipolíticas (PB Serum), Lipomax RF y Drenajes Linfáticos',
    description:
      'Degrada adiposidad localizada y reafirma el contorno corporal con protocolos combinados.',
    href: '/procedimientos/enzimas-pb-serum',
    image: '/images/pexels/cat-corporal.jpg',
    tag: 'MOLDEO CORPORAL',
  },
  {
    id: 'need-especializados',
    title: 'Caída capilar y pigmentación en zonas delicadas',
    subtitle: 'ExoHair Regeneración Capilar y Despigmentación Íntima Médica',
    description:
      'Terapias celulares focalizadas para revitalizar el folículo capilar o aclarar áreas sensibles con discreción.',
    href: '/procedimientos/exohair',
    image: '/images/pexels/proc-exohair.jpg',
    tag: 'PROTOCOLOS ESPECIALIZADOS',
  },
];

export const FAQS = [
  {
    question: '¿Quién realiza las aplicaciones de inyectables (Bótox, Ácido Hialurónico)?',
    answer:
      'Absolutamente todos los procedimientos médicos inyectables y de armonización orofacial son aplicados directamente por la Dra. Ingrid Gómez u otros médicos del equipo debidamente certificados. Las esteticistas/terapistas de la piel se encargan exclusivamente de la aparatología y las limpiezas profundas bajo supervisión médica.',
  },
  {
    question: '¿Los tratamientos requieren tiempo de recuperación o incapacidad?',
    answer:
      'No. Al ser procedimientos estéticos no quirúrgicos, el paciente puede retomar sus actividades cotidianas (trabajo, actividades sociales) de manera casi inmediata, siguiendo cuidados básicos como el uso riguroso de protector solar.',
  },
  {
    question: '¿Atienden a personas que viajan desde fuera de El Salvador?',
    answer:
      'Sí, Rejuveness Center cuenta con personal bilingüe y es una clínica muy activa en el sector del Turismo Médico. Se recomienda a los pacientes internacionales coordinar su cita vía WhatsApp con al menos 2 o 3 semanas de anticipación para garantizar disponibilidad de agenda.',
  },
  {
    question: '¿Es necesario pasar por una evaluación antes del tratamiento?',
    answer:
      'Sí. Dado que diseñamos planes médicos personalizados, el primer paso obligatorio es una evaluación profesional de la piel o del área corporal para dictaminar si el paciente es apto y cuántas sesiones requerirá.',
  },
  {
    question: '¿Qué marcas y tecnología utilizan?',
    answer:
      'Empleamos exclusivamente marcas de renombre internacional aprobadas por organismos de salud (como Merz, Innoaesthetics y PB Serum) y tecnología americana de punta para garantizar la total seguridad y evitar reacciones adversas.',
  },
];

export const CLINICAL_CASES = [
  {
    id: 'case-armonizacion-mirada',
    category: 'Armonización Orofacial',
    title: 'Armonización de Tercio Superior & Contorno de Ojeras',
    protocol: 'Toxina Botulínica (Bótox) + Ácido Hialurónico',
    sessions: 'Evaluación + 1 Sesión Médica',
    specialist: 'Dra. Ingrid Gómez · Certificación Merz',
    outcome: 'Descanso inmediato en la mirada, suavizado de líneas de expresión en frente y entrecejo conservando la naturalidad.',
    metric: '100% Expresión Natural',
    beforeImage: '/images/results/case-1-before.jpg',
    afterImage: '/images/results/case-1-after.jpg',
  },
  {
    id: 'case-armonizacion-perfil',
    category: 'Armonización Orofacial',
    title: 'Hidratación Labial, Surcos & Rinomodelación',
    protocol: 'Ácido Hialurónico Reticulado + Perfilado Nasal',
    sessions: '1 Sesión Médica (45 min)',
    specialist: 'Dra. Ingrid Gómez · Miami & Barcelona',
    outcome: 'Reposición sutil de soporte en surcos nasogenianos y definición delicada del perfil sin cirugía ni incapacidad.',
    metric: 'Proporción Áurea Progresiva',
    beforeImage: '/images/results/case-2-before.jpg',
    afterImage: '/images/results/case-2-after.jpg',
  },
  {
    id: 'case-regeneracion',
    category: 'Regeneración Celular',
    title: 'Bioestimulación con ADN de Salmón (PDRN) & Exosomas',
    protocol: 'Polinucleótidos PDRN + Terapia Celular Exosomas',
    sessions: 'Protocolo de 3 Sesiones',
    specialist: 'Dra. Ingrid Gómez · Global Skin Academy',
    outcome: 'Reparación profunda de la barrera cutánea, atenuación de rojeces, cierre de poros e hidratación luminosa.',
    metric: '+94% Luminosidad e Hidratación',
    beforeImage: '/images/results/case-3-before.jpg',
    afterImage: '/images/results/case-3-after.jpg',
  },
  {
    id: 'case-aparatologia-hifu',
    category: 'Aparatología Facial',
    title: 'Lifting No Quirúrgico de Óvalo Facial & Cuello',
    protocol: 'HIFU Ultrasónico + Bioestimulador Radiesse',
    sessions: 'Protocolo sin Incapacidad',
    specialist: 'Supervisión Médica Rejuveness Center',
    outcome: 'Tensado profundo del arco mandibular, reducción de flacidez submentoniana y estimulación de colágeno propio.',
    metric: 'Tensado SMAS Progresivo',
    beforeImage: '/images/results/case-4-before.jpg',
    afterImage: '/images/results/case-4-after.jpg',
  },
  {
    id: 'case-aparatologia-ipl',
    category: 'Aparatología Facial',
    title: 'Unificación de Tono, Manchas Solares & Textura',
    protocol: 'IPL Luz Pulsada Intensa + Radiofrecuencia Gold',
    sessions: '3 Sesiones Clínicas',
    specialist: 'Supervisión Médica Rejuveness Center',
    outcome: 'Difuminación progresiva de manchas solares, reducción de poros dilatados y renovación uniforme de la epidermis.',
    metric: 'Tono Cutáneo Homogéneo',
    beforeImage: '/images/results/case-5-before.jpg',
    afterImage: '/images/results/case-5-after.jpg',
  },
  {
    id: 'case-corporal',
    category: 'Moldeo Corporal',
    title: 'Definición de Silueta & Firmeza Corporal',
    protocol: 'Enzimas Lipolíticas PB Serum + Lipomax RF',
    sessions: '4 Sesiones Combinadas',
    specialist: 'Equipo Médico & Corporal Rejuveness',
    outcome: 'Degradación localizada de tejido adiposo rebelde, mejora visible de la celulitis y compactación cutánea.',
    metric: 'Moldeo y Firmeza Dérmica',
    beforeImage: '/images/results/case-6-before.jpg',
    afterImage: '/images/results/case-6-after.jpg',
  },
];
