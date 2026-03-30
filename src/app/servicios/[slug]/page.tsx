import { servicesData } from "@/lib/services-data";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug as keyof typeof servicesData];
  if (!service) return { title: "Servicio no encontrado" };
  return {
    title: `${service.title} | Salud y Trabajo Soluciones Empresariales`,
    description: service.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <>
      <section className="hero-overlay relative overflow-hidden py-20 text-white">
        <div className="grid-fine absolute inset-0 opacity-30" />
        <Container>
          <Link href="/servicios" className="relative z-10 mb-6 inline-flex items-center text-gray-200 transition-colors hover:text-white">
            <ArrowLeft size={16} className="mr-2" /> Volver a Servicios
          </Link>
          <div className="relative z-10 flex items-center gap-6">
            <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
              <Icon size={48} className="text-[var(--color-accent)]" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-heading">{service.title}</h1>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold font-heading text-[var(--color-secondary)] mb-6">Descripción del Servicio</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.description}
                  <br /><br />
                  En <strong>Salud y Trabajo Soluciones Empresariales</strong>, nos aseguramos de que cada proceso cumpla con los más altos estándares de calidad y la normativa legal vigente en Colombia.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-heading text-[var(--color-secondary)] mb-6">¿Qué incluye?</h2>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="card-premium flex items-start gap-3 p-4">
                      <CheckCircle className="text-[var(--color-primary-1)] shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-heading text-[var(--color-secondary)] mb-6">Beneficios para tu empresa</h2>
                <div className="rounded-xl border-l-4 border-[var(--color-primary-1)] bg-[var(--color-bg-light)] p-6 shadow-[0_14px_40px_-30px_rgba(16,67,41,0.58)]">
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[var(--color-primary-1)]" />
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="section-shell sticky top-24 p-6">
                <h3 className="text-xl font-bold font-heading text-[var(--color-secondary)] mb-4">Solicita una Cotización</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Obtén una propuesta personalizada para los servicios de {service.title}.
                </p>
                <Button className="mb-4 w-full bg-[var(--color-accent)] text-[#1d1d1d] font-semibold" asChild>
                  <Link href="/contacto">Cotizar Ahora</Link>
                </Button>
                <Button variant="outline" className="w-full border-[var(--color-primary-1)] text-[var(--color-primary-1)] hover:bg-[var(--color-primary-1)] hover:text-white" asChild>
                  <Link href="https://wa.me/573232317338" target="_blank">Consultar por WhatsApp</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
