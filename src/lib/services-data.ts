import { Activity, Users, Shield, FileText, Award } from "lucide-react";

export const servicesData = {
  "salud-ocupacional": {
    title: "Salud Ocupacional",
    icon: Activity,
    description: "Evaluaciones médicas integrales para garantizar la aptitud y bienestar de tus colaboradores.",
    details: [
      "Exámenes médicos ocupacionales de ingreso, periódicos y egreso con énfasis osteomuscular.",
      "Exámenes con énfasis especializados: manipulación de alimentos, alturas, espacios confinados, conductores.",
      "Exámenes paraclínicos: Optometría, Audiometría, Espirometría, Laboratorio Clínico, Psicología.",
      "Electrocardiografía para mayores de 40 años."
    ],
    benefits: [
      "Cumplimiento de la normatividad vigente.",
      "Prevención de enfermedades laborales.",
      "Mejora en la productividad y reducción del ausentismo."
    ]
  },
  "recursos-humanos": {
    title: "Recursos Humanos",
    icon: Users,
    description: "Gestión estratégica del talento humano para potenciar el crecimiento de tu organización.",
    details: [
      "Headhunting, reclutamiento y selección de personal.",
      "Visitas domiciliarias y verificación de referencias.",
      "Elaboración de manuales de funciones y procedimientos.",
      "Medición de clima laboral y evaluación de desempeño.",
      "Diseño de estructuras organizacionales."
    ],
    benefits: [
      "Selección del candidato idóneo.",
      "Optimización de procesos internos.",
      "Mejora del ambiente laboral."
    ]
  },
  "higiene-seguridad": {
    title: "Higiene y Seguridad Industrial",
    icon: Shield,
    description: "Prevención de riesgos y creación de entornos de trabajo seguros y saludables.",
    details: [
      "Diseño e implementación del SG-SST.",
      "Plan Estratégico de Seguridad Vial (PESV).",
      "Medición de riesgo psicosocial (Batería).",
      "Inspecciones de seguridad y ergonómicas.",
      "Planes de emergencia y evacuación.",
      "Investigación de accidentes de trabajo."
    ],
    benefits: [
      "Reducción de la accidentalidad.",
      "Evitar sanciones legales.",
      "Cultura de prevención en la empresa."
    ]
  },
  "medicina-laboral": {
    title: "Medicina Laboral",
    icon: FileText,
    description: "Asesoría experta en casos de enfermedad laboral y accidentes de trabajo.",
    details: [
      "Calificación de origen de enfermedad/accidente.",
      "Seguimiento a casos de reubicación laboral.",
      "Cálculo de Pérdida de Capacidad Laboral (PCL).",
      "Peritaje Médico Laboral.",
      "Acompañamiento ante Juntas de Calificación."
    ],
    benefits: [
      "Manejo adecuado de casos complejos.",
      "Respaldo jurídico y técnico.",
      "Reintegro laboral efectivo."
    ]
  },
  "actividades-complementarias": {
    title: "Actividades Complementarias",
    icon: Award,
    description: "Servicios adicionales para fortalecer el bienestar y la salud en tu empresa.",
    details: [
      "Profesiogramas y perfiles de cargo.",
      "Programas de vigilancia epidemiológica.",
      "Jornadas de vacunación empresarial.",
      "Semana de la salud.",
      "Capacitaciones y talleres de bienestar."
    ],
    benefits: [
      "Bienestar integral para los empleados.",
      "Fortalecimiento de la imagen corporativa.",
      "Entorno laboral saludable."
    ]
  }
};
