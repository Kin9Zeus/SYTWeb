"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { ArrowRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/20 bg-[var(--color-secondary)] text-white pt-20 pb-8">
      {/* Decorative top effects */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-black/45 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px w-[92%] bg-gradient-to-r from-transparent via-[var(--color-accent)]/85 to-transparent" />
      <div className="pointer-events-none absolute left-0 right-0 -top-20 mx-auto h-48 w-[90%] rounded-full bg-[var(--color-primary-1)]/15 blur-[90px]" />
      
      {/* Background geometric decorations */}
      <div className="pointer-events-none absolute right-10 top-24 h-56 w-56 rounded-3xl border border-white/[0.04] rotate-12 opacity-50" />
      <div className="pointer-events-none absolute -left-8 bottom-20 h-40 w-40 rounded-full border border-white/[0.04] opacity-40" />
      <div className="dot-pattern absolute inset-0 opacity-[0.03] pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-6 rounded-xl bg-white px-4 py-3 shadow-[0_14px_44px_-26px_rgba(0,0,0,0.7)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)]">
              <Image 
                src="/images/branding/Logo_SYT.png" 
                alt="Salud y Trabajo Soluciones Empresariales S.A.S." 
                width={180} 
                height={54}
                className="h-11 w-auto object-contain"
              />
            </Link>
            <p className="mb-6 leading-relaxed text-emerald-50/85">
              Protegemos la salud de tu equipo, blindamos tu empresa. Expertos en Salud Ocupacional, Seguridad Industrial y Medicina Laboral.
            </p>
            <div className="flex gap-3">
              <Link href="#" className="social-icon inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 transition-all duration-400 hover:-translate-y-1">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="social-icon inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 transition-all duration-400 hover:-translate-y-1">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="social-icon inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 transition-all duration-400 hover:-translate-y-1">
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-lg font-bold font-heading text-[var(--color-accent)]">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {[
                { name: "Nosotros", href: "/nosotros" },
                { name: "Servicios", href: "/servicios" },
                { name: "Normatividad", href: "/normatividad" },
                { name: "Blog", href: "/blog" },
                { name: "Contacto", href: "/contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group inline-flex items-center gap-2 text-emerald-50/85 transition-all duration-300 hover:text-[var(--color-accent)] hover:translate-x-1">
                    <ArrowRight size={14} className="text-[var(--color-primary-1)] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading text-[var(--color-accent)]">Nuestros Servicios</h4>
            <ul className="space-y-3">
              {[
                { name: "Salud Ocupacional", href: "/servicios/salud-ocupacional" },
                { name: "Recursos Humanos", href: "/servicios/recursos-humanos" },
                { name: "Higiene y Seguridad", href: "/servicios/higiene-seguridad" },
                { name: "Medicina Laboral", href: "/servicios/medicina-laboral" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group inline-flex items-center gap-2 text-emerald-50/85 transition-all duration-300 hover:text-[var(--color-accent)] hover:translate-x-1">
                    <ArrowRight size={14} className="text-[var(--color-primary-1)] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading text-[var(--color-accent)]">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start group">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.07] ring-1 ring-white/10 mt-0.5 group-hover:bg-[var(--color-primary-1)]/20 transition-colors duration-300">
                  <MapPin className="text-[var(--color-accent)]" size={18} />
                </span>
                <span className="text-emerald-50/85 leading-relaxed">Carrera 49 No. 93-41, Piso 1, La Castellana, Bogotá D.C.</span>
              </li>
              <li className="flex gap-3 items-center group">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.07] ring-1 ring-white/10 group-hover:bg-[var(--color-primary-1)]/20 transition-colors duration-300">
                  <Phone className="text-[var(--color-accent)]" size={18} />
                </span>
                <span className="text-emerald-50/85">601 5210258 | 323 231 7338</span>
              </li>
              <li className="flex gap-3 items-center group">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.07] ring-1 ring-white/10 group-hover:bg-[var(--color-primary-1)]/20 transition-colors duration-300">
                  <Mail className="text-[var(--color-accent)]" size={18} />
                </span>
                <a href="mailto:grospina@saludytrabajosst.com" className="break-all text-emerald-50/85 transition-colors duration-300 hover:text-[var(--color-accent)]">grospina@saludytrabajosst.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Animated divider */}
        <div className="relative h-px mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute left-1/2 -translate-x-1/2 -top-1.5 h-3 w-3 rounded-full bg-[var(--color-accent)]/50 shadow-[0_0_12px_rgba(233,198,132,0.4)]" />
        </div>

        <div className="text-center text-sm text-emerald-100/60">
          <p>&copy; {new Date().getFullYear()} Salud y Trabajo Soluciones Empresariales S.A.S. Todos los derechos reservados.</p>
        </div>
      </Container>
    </footer>
  );
}
