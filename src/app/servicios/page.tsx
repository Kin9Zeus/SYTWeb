"use client";

import { Container } from "@/components/ui/container";
import { servicesData } from "@/lib/services-data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <>
      <section className="hero-overlay relative overflow-hidden py-20 text-white">
        <div className="grid-fine absolute inset-0 opacity-30" />
        <Container>
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Nuestros Servicios</h1>
            <p className="text-xl text-gray-100">
              Ofrecemos un portafolio integral diseñado para cubrir todas las necesidades de Seguridad y Salud en el Trabajo de tu empresa.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(servicesData).map(([slug, service], idx) => (
              <motion.div
                key={slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group card-premium p-8"
              >
                <div className="mb-6 text-[#00a585] group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-heading text-[#1d7646] group-hover:text-[#00a585] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link 
                  href={`/servicios/${slug}`} 
                  className="inline-flex items-center text-[#00a585] font-semibold hover:text-[#1d7646] transition-colors"
                >
                  Ver más detalles <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
