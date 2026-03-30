import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, User } from "lucide-react";

const posts = [
  { title: "Importancia de los Exámenes Médicos Ocupacionales", category: "Salud Ocupacional", date: "Oct 10, 2025", author: "Dr. Juan Pérez", desc: "Descubre por qué son fundamentales para la prevención de enfermedades laborales y el cumplimiento legal." },
  { title: "Cómo implementar el SG-SST en tu empresa", category: "Seguridad Industrial", date: "Sep 25, 2025", author: "Ing. María López", desc: "Guía paso a paso para cumplir con la normativa vigente y evitar sanciones por parte del Ministerio de Trabajo." },
  { title: "Beneficios de un buen Clima Laboral", category: "Bienestar", date: "Ago 15, 2025", author: "Psic. Ana García", desc: "El impacto positivo de un entorno de trabajo saludable en la productividad y retención del talento humano." },
];

export default function BlogPage() {
  return (
    <>
      <section className="hero-overlay relative overflow-hidden py-20 text-white">
        <div className="grid-fine absolute inset-0 opacity-30" />
        <Container>
          <h1 className="relative z-10 mb-6 text-center text-4xl font-bold font-heading md:text-5xl">Blog y Recursos</h1>
          <p className="relative z-10 mx-auto max-w-3xl text-center text-xl text-gray-100">
            Artículos educativos y novedades sobre SST para mantenerte informado.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, idx) => (
              <div key={idx} className="card-premium flex flex-col overflow-hidden">
                <div className="relative h-48 bg-gray-100">
                   <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-400 font-medium">
                     Imagen del Artículo
                   </div>
                   <div className="absolute inset-0 bg-gradient-to-t from-[#1d7646]/35 via-transparent to-transparent opacity-70" />
                </div>
                <div className="flex flex-grow flex-col p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="rounded-full bg-[var(--color-bg-light)] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[var(--color-primary-1)]">{post.category}</span>
                  </div>
                  <h3 className="mb-3 line-clamp-2 text-xl font-bold font-heading text-[var(--color-secondary)] transition-colors hover:text-[var(--color-primary-1)]">
                    <Link href="#">{post.title}</Link>
                  </h3>
                  <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <p className="mb-6 line-clamp-3 flex-grow text-gray-600">{post.desc}</p>
                  <Button variant="link" className="self-start p-0 font-semibold text-[var(--color-primary-1)]" asChild>
                    <Link href="#">Leer más &rarr;</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
