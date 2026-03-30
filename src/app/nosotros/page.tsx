"use client";

import { Container } from "@/components/ui/container";
import { CheckCircle, Target, Eye, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-overlay relative overflow-hidden py-20 text-white">
        <div className="grid-fine absolute inset-0 opacity-30" />
        <div className="absolute inset-0 bg-black/10" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Sobre Nosotros</h1>
            <p className="text-xl text-gray-100">
              Somos una empresa colombiana dedicada a brindar soluciones integrales en Seguridad y Salud en el Trabajo, comprometidos con el bienestar de su talento humano.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* History & Approach */}
      <section className="bg-white py-20">
        <Container>
          <div className="section-shell grid items-center gap-16 px-8 py-12 lg:grid-cols-2 lg:px-12">
             <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
             >
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-[var(--color-secondary)] mb-6">Nuestra Historia</h2>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    <strong>Salud y Trabajo Soluciones Empresariales S.A.S.</strong> nace con el propósito de convertirse en el aliado estratégico fundamental para las empresas en Colombia, ofreciendo un portafolio robusto en medicina laboral y seguridad industrial.
                  </p>
                  <p>
                    Con años de experiencia en el mercado, hemos logrado consolidar un modelo de servicio que prioriza la calidad humana, la eficiencia administrativa y el rigor científico, permitiendo a nuestros clientes cumplir con la normativa vigente mientras cuidan lo más valioso: su gente.
                  </p>
                  <p>
                    Nuestra sede en Bogotá está equipada con tecnología de punta y un equipo de profesionales apasionados por la salud ocupacional.
                  </p>
                </div>
             </motion.div>
             <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-[400px] overflow-hidden rounded-2xl border border-[#dbebe5] bg-gray-100 shadow-[0_26px_55px_-30px_rgba(14,72,44,0.56)]"
             >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00a585]/15 to-[#1d7646]/20" />
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
                  Imagen de las instalaciones o equipo
                </div>
             </motion.div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-bg-light)] py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-premium border-t-4 border-[var(--color-primary-1)] p-8"
            >
              <Target size={40} className="text-[var(--color-primary-1)] mb-4" />
              <h3 className="text-2xl font-bold font-heading text-[var(--color-secondary)] mb-4">Misión</h3>
              <p className="text-gray-600">
                Prestar servicios integrales de Salud y Seguridad en el Trabajo con altos estándares de calidad, apoyando a las empresas en el cuidado de su población trabajadora y el cumplimiento legal.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card-premium border-t-4 border-[var(--color-accent)] p-8"
            >
              <Eye size={40} className="text-[var(--color-accent)] mb-4" />
              <h3 className="text-2xl font-bold font-heading text-[var(--color-secondary)] mb-4">Visión</h3>
              <p className="text-gray-600">
                Ser reconocidos en el 2030 como la empresa líder en soluciones de SST en Bogotá y la región, destacándonos por nuestra innovación, cobertura y excelencia en el servicio al cliente.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card-premium border-t-4 border-[var(--color-secondary)] p-8"
            >
              <Heart size={40} className="text-[var(--color-secondary)] mb-4" />
              <h3 className="text-2xl font-bold font-heading text-[var(--color-secondary)] mb-4">Valores</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[var(--color-primary-1)]" /> Calidad Humana</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[var(--color-primary-1)]" /> Ética Profesional</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[var(--color-primary-1)]" /> Compromiso</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[var(--color-primary-1)]" /> Responsabilidad Social</li>
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-[var(--color-secondary)] mb-4">Nuestro Equipo Profesional</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Contamos con médicos especialistas, ingenieros, psicólogos y profesionales de la salud listos para atender los requerimientos de tu empresa.
            </p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
             {[1, 2, 3, 4].map((i) => (
               <div key={i} className="card-premium group p-6 text-center">
                 <div className="relative mx-auto mb-6 h-40 w-40 overflow-hidden rounded-full bg-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">Foto</div>
                 </div>
                 <h3 className="text-xl font-bold text-[var(--color-secondary)]">Profesional {i}</h3>
                 <p className="text-[var(--color-primary-1)] font-medium">Especialidad</p>
               </div>
             ))}
          </div>
        </Container>
      </section>
    </>
  );
}
