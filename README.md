# Salud y Trabajo Soluciones Empresariales S.A.S. - Sitio Web Corporativo

Este proyecto es un sitio web corporativo desarrollado con **Next.js 14+ (App Router)**, **TypeScript**, **Tailwind CSS** y **Framer Motion**, diseñado para ofrecer una experiencia de usuario moderna, accesible y optimizada para SEO.

## 🚀 Tecnologías Principales

-   **Frontend Framework:** [Next.js](https://nextjs.org/) (App Router)
-   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
-   **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
-   **Animaciones:** [Framer Motion](https://www.framer.com/motion/)
-   **Iconos:** [Lucide React](https://lucide.dev/)
-   **Formularios:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) (Validación)

## 🎨 Sistema de Diseño

El sitio utiliza la paleta de colores corporativa definida:

-   **Primario 1:** `#00a585` (Verde Esmeralda)
-   **Primario 2:** `#fdfeff` (Blanco Nieve)
-   **Secundario:** `#1d7646` (Verde Oscuro)
-   **Acento:** `#e9c684` (Dorado Champagne)
-   **Fondo Claro:** `#f4f7f6`

Tipografía: **Inter** (Cuerpo) y **Montserrat** (Títulos).

## 📂 Estructura del Proyecto

```
src/
├── app/                    # Rutas y páginas (App Router)
│   ├── blog/               # Página de Blog
│   ├── contacto/           # Página de Contacto con formulario
│   ├── normatividad/       # Página de Normatividad
│   ├── nosotros/           # Página Sobre Nosotros
│   ├── servicios/          # Página de Servicios (Overview)
│   │   └── [slug]/         # Páginas dinámicas de servicios individuales
│   ├── layout.tsx          # Layout principal (Header + Footer)
│   └── page.tsx            # Página de Inicio (Home)
├── components/
│   ├── layout/             # Componentes estructurales (Header, Footer)
│   └── ui/                 # Componentes UI reutilizables (Button, Container, Input, etc.)
├── lib/                    # Utilidades y datos estáticos
│   ├── services-data.ts    # Datos de los servicios
│   └── utils.ts            # Utilidades de clases (cn)
```

## 🛠️ Instalación y Ejecución

1.  **Instalar dependencias:**

    ```bash
    npm install
    ```

2.  **Ejecutar servidor de desarrollo:**

    ```bash
    npm run dev
    ```

    Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

3.  **Construir para producción:**

    ```bash
    npm run build
    npm start
    ```

## ✅ Características Implementadas

-   **Diseño Responsivo:** Adaptado a móviles, tablets y escritorio.
-   **SEO Friendly:** Metadatos configurados y estructura semántica.
-   **Performance:** Optimización de fuentes e imágenes (Next.js Image).
-   **Accesibilidad:** Contraste de colores y navegación clara.
-   **Formulario de Contacto:** Con validación de campos en tiempo real.
-   **Navegación:** Menú sticky con megamenú de servicios y menú móvil animado.

---

Desarrollado para **Salud y Trabajo Soluciones Empresariales S.A.S.**
