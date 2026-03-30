"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRight, CheckCircle, Clock, Shield, Users, Building, Activity, FileText, Award, Sparkles } from "lucide-react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

/* ─── Animation Variants ─────────────────────────── */

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.85 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

/* ─── Animated Counter Component ─────────────────── */

function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  const numericValue = parseInt(target.replace(/\D/g, ""));
  const prefix = target.startsWith("+") ? "+" : "";

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, numericValue]);

  return (
    <div ref={ref} className="text-3xl font-bold font-heading">
      {prefix}{isInView ? count : 0}{suffix}
    </div>
  );
}

/* ─── 3D Tilt Card Component ─────────────────────── */

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Main Page ──────────────────────────────────── */

export default function Home() {

  return (
    <>
      {/* ════════ HERO ════════ */}
      <section className="hero-overlay relative min-h-[90vh] overflow-hidden text-white">
        {/* Lightweight glow effects — pure CSS, zero GPU cost */}
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(233,198,132,0.2)_0%,transparent_70%)] pointer-events-none z-[2]" />
        <div className="absolute -right-20 top-16 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(0,165,133,0.2)_0%,transparent_70%)] pointer-events-none z-[2]" />
        <div className="absolute left-1/3 bottom-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(29,118,70,0.18)_0%,transparent_70%)] pointer-events-none z-[2]" />

        {/* Grid pattern */}
        <div className="grid-fine absolute inset-0 opacity-20 z-[3]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 z-[4]" />

        <Container className="relative z-10 grid items-center gap-12 pt-24 pb-28 lg:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {/* Shimmer badge */}
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="shimmer-badge inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-50 bg-white/10"
            >
              <Sparkles size={14} className="text-[var(--color-accent)]" />
              Soluciones SST con enfoque empresarial
            </motion.span>
            
            <h1 className="text-4xl font-bold font-heading leading-tight md:text-5xl lg:text-6xl xl:text-[3.6rem]">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="block"
              >
                Protegemos la salud de tu equipo,{" "}
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-gradient block"
              >
                blindamos tu empresa
              </motion.span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="max-w-xl text-lg leading-relaxed text-gray-100/90 md:text-xl"
            >
              Expertos en Salud Ocupacional y Seguridad Industrial. Garantizamos cumplimiento normativo y bienestar laboral con un equipo altamente calificado.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Button size="lg" variant="accent" asChild className="group px-8 text-base shadow-lg shadow-amber-400/30 hover:shadow-amber-400/50 transition-shadow duration-300">
                <Link href="/servicios">
                  Conoce nuestros servicios
                  <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/70 bg-white/10 px-8 text-base text-white hover:bg-white hover:text-[#1d7646] transition-colors duration-300" asChild>
                <Link href="/contacto">Solicitar cotización</Link>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl border border-white/20 bg-white/[0.08] p-8 shadow-[0_32px_80px_-24px_rgba(0,0,0,0.5)]">

              <div className="relative grid grid-cols-2 gap-6 py-2">
                {[
                  { icon: Users, value: "+2000", label: "Trabajadores Atendidos" },
                  { icon: Building, value: "+500", label: "Empresas Aliadas" },
                  { icon: Clock, value: "+15", label: "Años de Experiencia" },
                  { icon: Award, value: "100%", label: "Cumplimiento Legal", suffix: "%" },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + idx * 0.12, duration: 0.5 }}
                    className={`card-premium p-6 text-center text-[#1d7646] ${idx % 2 !== 0 ? "lg:translate-y-4" : ""}`}
                  >
                    <stat.icon size={40} className="mx-auto mb-2 text-[#00a585]" />
                    <AnimatedCounter target={stat.value} suffix={stat.suffix || ""} />
                    <div className="text-sm font-semibold mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>

        {/* Bottom wave separator */}
        <div className="absolute bottom-0 left-0 right-0 z-[5]">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
            <path d="M0 60V30C240 10 480 0 720 10C960 20 1200 40 1440 30V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ════════ VALUE PROPS ════════ */}
      <section className="bg-white py-20 relative">
        <div className="dot-pattern absolute inset-0 opacity-40 pointer-events-none" />
        <Container className="relative">
          {/* Decorative top divider */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-16 h-[2px] w-24 origin-center rounded-full bg-gradient-to-r from-[var(--color-primary-1)] to-[var(--color-accent)]"
          />

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { icon: Users, title: "Profesionales Expertos", desc: "Equipo médico y técnico con amplia experiencia y especialización." },
              { icon: CheckCircle, title: "Precios Competitivos", desc: "Tarifas ajustadas al mercado sin comprometer la calidad del servicio." },
              { icon: Activity, title: "Soluciones a Medida", desc: "Adaptamos nuestro portafolio a las necesidades específicas de tu empresa." },
              { icon: Shield, title: "Alianzas Estratégicas", desc: "Red de partners confiables para una cobertura integral." },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <TiltCard className="card-premium px-6 py-8 text-center h-full">
                  <motion.div 
                    className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f0faf6] to-[#e8f5ee] text-[#00a585] shadow-sm ring-1 ring-[#00a585]/10"
                    whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                  >
                    <item.icon size={32} />
                  </motion.div>
                  <h3 className="mb-3 text-xl font-bold font-heading text-[#1d7646]">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ════════ SERVICES ════════ */}
      <section className="bg-[#f4f7f6] py-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="geo-shape absolute -right-20 top-20 h-64 w-64 opacity-40" />
        <div className="geo-shape absolute -left-16 bottom-32 h-48 w-48 rotate-45 opacity-30" />

        <Container className="relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto mb-6 h-[2px] w-16 origin-center rounded-full bg-gradient-to-r from-[var(--color-primary-1)] to-[var(--color-accent)]"
            />
            <h2 className="mb-4 text-3xl font-bold font-heading text-[#1d7646] md:text-4xl lg:text-[2.75rem]">
              Nuestras Áreas de <span className="text-gradient-green">Servicio</span>
            </h2>
            <p className="text-gray-600 text-lg">Soluciones integrales para garantizar la seguridad y bienestar en tu organización.</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { 
                title: "Salud Ocupacional", 
                icon: Activity, 
                desc: "Exámenes médicos de ingreso, periódicos y egreso. Énfasis osteomuscular y paraclínicos especializados.",
                href: "/servicios/salud-ocupacional"
              },
              { 
                title: "Recursos Humanos", 
                icon: Users, 
                desc: "Selección de personal, medición de clima laboral, perfiles de cargo y consultoría estratégica.",
                href: "/servicios/recursos-humanos"
              },
              { 
                title: "Seguridad Industrial", 
                icon: Shield, 
                desc: "Diseño del SG-SST, planes de emergencia, inspecciones y formación en prevención de riesgos.",
                href: "/servicios/higiene-seguridad"
              },
              { 
                title: "Medicina Laboral", 
                icon: FileText, 
                desc: "Calificación de origen, PCL, reintegro laboral y asesoría médico-legal especializada.",
                href: "/servicios/medicina-laboral"
              },
              { 
                title: "Actividades Complementarias", 
                icon: Award, 
                desc: "Vacunación empresarial, semana de la salud, profesiogramas y vigilancia epidemiológica.",
                href: "/servicios/actividades-complementarias"
              },
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group card-premium border-l-4 border-transparent p-8 hover:border-[#00a585] relative"
              >
                {/* Decorative index number */}
                <span className="service-index">{String(idx + 1).padStart(2, "0")}</span>

                <div className="relative z-[1]">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#f0faf6] to-[#e8f5ee] text-[#00a585] ring-1 ring-[#00a585]/10 group-hover:from-[#00a585] group-hover:to-[#1d7646] group-hover:text-white group-hover:shadow-lg group-hover:shadow-emerald-300/40 transition-all duration-500">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-heading text-[#1d7646] group-hover:text-[#00a585] transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                  <Link href={service.href} className="inline-flex items-center text-[#00a585] font-semibold hover:text-[#1d7646] transition-all duration-300 group/link">
                    Ver más detalles <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════ WHY US ════════ */}
      <section className="overflow-hidden bg-white py-24 relative">
        <div className="dot-pattern absolute inset-0 opacity-30 pointer-events-none" />
        <Container className="relative">
          <div className="section-shell grid items-center gap-16 px-8 py-14 lg:grid-cols-2 lg:px-14">
            <motion.div
               initial={{ opacity: 0, x: -40 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-6 h-[2px] w-16 origin-left rounded-full bg-gradient-to-r from-[var(--color-primary-1)] to-[var(--color-accent)]"
              />
               <h2 className="mb-6 text-3xl font-bold font-heading text-[#1d7646] md:text-4xl lg:text-[2.75rem]">¿Por qué elegirnos como tu <span className="text-gradient-green">aliado estratégico</span>?</h2>
               <div className="space-y-6 text-lg text-gray-600">
                 <p>
                   En <strong className="text-[#1d7646]">Salud y Trabajo Soluciones Empresariales</strong>, no solo prestamos un servicio, nos convertimos en parte de tu equipo. Entendemos que la salud de tus colaboradores es el motor de tu empresa.
                 </p>
                 <ul className="space-y-5">
                   {[
                     "Enfoque integral: Legal, Médico y Administrativo.",
                     "Calidad Humana y atención personalizada.",
                     "Respuesta ágil y oportunidad en citas.",
                     "Cobertura y alianzas estratégicas confiables."
                   ].map((item, idx) => (
                     <motion.li
                       key={idx}
                       initial={{ opacity: 0, x: -20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: 0.2 + idx * 0.12, duration: 0.5 }}
                       className="flex items-center gap-4 group"
                     >
                       <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#00a585] to-[#1d7646] shadow-md shadow-emerald-300/30">
                         <CheckCircle className="text-white" size={18} />
                       </span>
                       <span className="group-hover:text-[#1d7646] transition-colors duration-300">{item}</span>
                     </motion.li>
                   ))}
                 </ul>
                 <div className="pt-8">
                   <Button size="lg" className="bg-[#1d7646] group shadow-lg shadow-emerald-400/30 hover:shadow-emerald-400/50 transition-shadow duration-300" asChild>
                     <Link href="/nosotros">
                       Conoce más sobre nosotros
                       <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                     </Link>
                   </Button>
                 </div>
               </div>
            </motion.div>
            
            <motion.div
               initial={{ opacity: 0, x: 40 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
               className="relative h-[500px] overflow-hidden rounded-2xl border border-[#dbebe5] shadow-[0_32px_70px_-30px_rgba(14,72,44,0.6)]"
            >
               {/* Abstract geometric design instead of empty placeholder */}
               <div className="absolute inset-0 bg-gradient-to-br from-[#f0faf6] via-[#e8f5ee] to-[#dce8e4]" />
               
               {/* Floating geometric shapes */}
               <div className="absolute top-16 left-12 h-32 w-32 rounded-3xl bg-gradient-to-br from-[#00a585]/30 to-[#1d7646]/20 border border-[#00a585]/15 animate-float" />
               <div className="absolute top-8 right-16 h-24 w-24 rounded-full bg-gradient-to-br from-[var(--color-accent)]/25 to-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 animate-float-delayed" />
               <div className="absolute bottom-24 right-12 h-40 w-40 rounded-3xl bg-gradient-to-br from-[#1d7646]/20 to-[#00a585]/15 border border-[#1d7646]/10 rotate-12 animate-float-slow" />
               <div className="absolute bottom-16 left-16 h-20 w-20 rounded-full bg-gradient-to-br from-[#00a585]/20 to-transparent border border-[#00a585]/10 animate-float-delayed" />

               {/* Central content */}
               <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                 <div className="text-center animate-float">
                   <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/80 shadow-xl shadow-emerald-200/50 mb-4 ring-1 ring-[#00a585]/10">
                     <Shield size={40} className="text-[#00a585]" />
                   </div>
                   <p className="text-[#1d7646] font-bold font-heading text-lg">Protección Integral</p>
                   <p className="text-gray-500 text-sm mt-1">Legal · Médico · Administrativo</p>
                 </div>
               </div>

               {/* Overlay gradient */}
               <div className="absolute inset-0 z-20 bg-gradient-to-t from-white/30 via-transparent to-white/10 pointer-events-none" />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ════════ CTA ════════ */}
      <section className="relative overflow-hidden py-24 text-center text-white bg-gradient-to-br from-[#1d7646] via-[#1a6f43] to-[#155d39]">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/15" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent via-black/20 to-black/45" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[var(--color-accent)]/65" />
        
        {/* Lightweight CSS glows */}
        <div className="absolute -left-10 top-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(233,198,132,0.15)_0%,transparent_70%)] pointer-events-none z-[1]" />
        <div className="absolute -right-14 bottom-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(0,165,133,0.15)_0%,transparent_70%)] pointer-events-none z-[1]" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-3xl space-y-8 rounded-3xl border border-white/20 bg-white/[0.06] px-8 py-14 shadow-[0_24px_64px_-32px_rgba(0,0,0,0.6)]"
          >
            <div className="mx-auto mb-2 h-12 w-12 opacity-30">
              <Sparkles size={48} />
            </div>


            <h2 className="text-3xl font-bold font-heading md:text-5xl">¿Listo para proteger a tu equipo?</h2>
            <p className="text-xl text-gray-200/90">
              Solicita una asesoría sin costo y descubre cómo podemos optimizar la seguridad y salud en tu empresa.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
              <Button size="lg" variant="accent" className="pulse-ring h-auto w-full px-8 py-5 text-lg sm:w-auto shadow-xl shadow-amber-400/30 hover:shadow-amber-400/50 transition-shadow duration-300" asChild>
                <Link href="/contacto">Solicitar Asesoría Gratuita</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-auto w-full border-white bg-white/5 px-8 py-5 text-lg text-white backdrop-blur-xl hover:bg-white hover:text-[#1d7646] sm:w-auto transition-all duration-300" asChild>
                <Link href="https://wa.me/573232317338" target="_blank">Escribir por WhatsApp</Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
