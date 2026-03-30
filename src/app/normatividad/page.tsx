import { Container } from "@/components/ui/container";
import { FileText, Download } from "lucide-react";

const normas = [
  { title: "Ley 1562 de 2012", desc: "Por la cual se modifica el Sistema de Riesgos Laborales y se dictan otras disposiciones en materia de Salud Ocupacional." },
  { title: "Decreto 1072 de 2015", desc: "Decreto Único Reglamentario del Sector Trabajo." },
  { title: "Resolución 0312 de 2019", desc: "Por la cual se definen los Estándares Mínimos del Sistema de Gestión de la Seguridad y Salud en el Trabajo SG-SST." },
  { title: "GTC 45", desc: "Guía para la identificación de los peligros y la valoración de los riesgos en seguridad y salud ocupacional." },
];

export default function NormatividadPage() {
  return (
    <>
      <section className="hero-overlay relative overflow-hidden py-20 text-white">
        <div className="grid-fine absolute inset-0 opacity-30" />
        <Container>
          <h1 className="relative z-10 mb-6 text-center text-4xl font-bold font-heading md:text-5xl">Normatividad Vigente</h1>
          <p className="relative z-10 mx-auto max-w-3xl text-center text-xl text-gray-100">
            Conoce el marco legal que respalda la Seguridad y Salud en el Trabajo en Colombia.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="space-y-6">
            {normas.map((norma, idx) => (
              <div key={idx} className="card-premium flex flex-col justify-between gap-4 p-6 md:flex-row md:items-center">
                <div className="flex items-start gap-4">
                  <FileText className="text-[var(--color-primary-1)] shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold font-heading text-[var(--color-secondary)]">{norma.title}</h3>
                    <p className="text-gray-600 mt-2">{norma.desc}</p>
                  </div>
                </div>
                <button className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--color-primary-1)]/35 px-4 py-2 text-[var(--color-primary-1)] font-semibold transition-colors hover:bg-[var(--color-primary-1)] hover:text-white">
                  <Download size={20} /> Descargar PDF
                </button>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
