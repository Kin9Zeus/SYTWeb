export const SITE_CONFIG = {
  name: "Salud y Trabajo Soluciones Empresariales S.A.S.",
  shortName: "S&T Soluciones",
  description: "Protegemos la salud de tu equipo, blindamos tu empresa. Expertos en Salud Ocupacional, Seguridad Industrial y Medicina Laboral.",
  url: "https://www.saludytrabajosst.com",
  logo: "/images/branding/Logo_SYT.png",
  contact: {
    phone: "323-231-7338",
    mobile: "323-231-7338",
    commercial: "310 3162201",
    email: "grospina@saludytrabajosst.com",
    address: "Carrera 49 No. 93-41, Piso 1, La Castellana, Bogotá D.C."
  },
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#"
  }
};

export const getLogoUrl = () => `${SITE_CONFIG.url}${SITE_CONFIG.logo}`;
