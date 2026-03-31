"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const services = [
  { name: "Salud Ocupacional", href: "/servicios/salud-ocupacional" },
  { name: "Recursos Humanos", href: "/servicios/recursos-humanos" },
  { name: "Higiene y Seguridad Industrial", href: "/servicios/higiene-seguridad" },
  { name: "Medicina Laboral", href: "/servicios/medicina-laboral" },
  { name: "Actividades Complementarias", href: "/servicios/actividades-complementarias" },
];

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  // Servicios handled separately
  { name: "Normatividad", href: "/normatividad" },
  { name: "Blog", href: "/blog" },
  { name: "Contacto", href: "/contacto" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItemClass = (href: string, isActive: boolean) =>
    cn(
      "text-sm font-semibold transition-colors duration-300 relative py-1",
      isScrolled
        ? "text-slate-700 hover:text-[var(--color-primary-1)]"
        : "text-slate-700 hover:text-[var(--color-primary-1)]",
      isActive && "text-[var(--color-primary-1)]"
    );

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,padding,border-color] duration-400 backdrop-blur-xl",
        isScrolled
          ? "bg-white/85 shadow-[0_4px_30px_-8px_rgba(16,67,41,0.25)] py-2 border-b border-white/40"
          : "bg-white/60 py-4 border-b border-transparent"
      )}
    >
      <Container className="flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3 rounded-xl px-2 py-1 transition-all duration-300 hover:scale-[1.02]">
           <Image
            src="/images/branding/Logo_SYT.png"
            alt="Salud y Trabajo Soluciones Empresariales S.A.S." 
            width={200} 
            height={60} 
            className="h-10 md:h-12 w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className={cn(
          "hidden lg:flex items-center gap-1 rounded-full px-2 py-1.5 transition-[background-color,box-shadow,ring-color] duration-400",
          isScrolled
            ? "bg-white/60 ring-1 ring-black/[0.04] shadow-sm"
            : "bg-white/40 ring-1 ring-black/[0.06]"
        )}>
          {[
            { name: "Inicio", href: "/" },
            { name: "Nosotros", href: "/nosotros" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                navItemClass(link.href, pathname === link.href),
                "px-4 py-2 rounded-full transition-colors duration-300",
                pathname === link.href && "bg-[var(--color-primary-1)]/10"
              )}
            >
              {link.name}
            </Link>
          ))}
          
          <div 
            className="relative"
            onMouseEnter={() => setServiceDropdownOpen(true)}
            onMouseLeave={() => setServiceDropdownOpen(false)}
          >
            <button className={cn(
              navItemClass("/servicios", pathname.startsWith("/servicios")),
              "flex items-center gap-1 px-4 py-2 rounded-full",
              pathname.startsWith("/servicios") && "bg-[var(--color-primary-1)]/10"
            )}>
              Servicios <ChevronDown size={14} className={cn("transition-transform duration-300", serviceDropdownOpen && "-rotate-180")} />
            </button>
            <AnimatePresence>
              {serviceDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.97 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute top-full left-0 w-72 bg-white/95 backdrop-blur-xl shadow-[0_20px_55px_-24px_rgba(14,72,44,0.45)] rounded-2xl p-2 mt-3 border border-white/40 ring-1 ring-black/5"
                >
                  {services.map((service, idx) => (
                    <motion.div
                      key={service.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04, duration: 0.2 }}
                    >
                      <Link
                        href={service.href}
                        className="block px-4 py-3 text-sm font-medium text-slate-600 hover:bg-gradient-to-r hover:from-[var(--color-bg-light)] hover:to-transparent hover:text-[var(--color-primary-1)] rounded-xl transition-all duration-200"
                      >
                        {service.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {[
            { name: "Normatividad", href: "/normatividad" },
            { name: "Blog", href: "/blog" },
            { name: "Contacto", href: "/contacto" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                navItemClass(link.href, pathname === link.href),
                "px-4 py-2 rounded-full transition-colors duration-300",
                pathname === link.href && "bg-[var(--color-primary-1)]/10"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
            <Link 
              href="tel:3232317338" 
              className={cn(
                "flex items-center gap-2 text-sm font-semibold transition-colors duration-300",
                "text-slate-600 hover:text-[var(--color-primary-1)]"
              )}
            >
                <Phone size={16} />
                <span>323-231-7338</span>
            </Link>
            <Button variant="accent" size="sm" asChild className="font-bold shadow-lg shadow-amber-200/40 hover:shadow-amber-300/60 hover:scale-[1.03] transition-all duration-300">
                <Link href="/contacto">Solicitar Cotización</Link>
            </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2.5 rounded-xl transition-colors duration-300 text-slate-700 hover:bg-slate-100" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-white/95 backdrop-blur-2xl border-t border-slate-100 overflow-hidden shadow-2xl"
          >
            <Container className="py-8 flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block text-lg font-bold py-2 px-4 rounded-xl transition-all duration-300",
                      pathname === link.href 
                        ? "text-[var(--color-primary-1)] bg-[var(--color-primary-1)]/5" 
                        : "text-slate-800 hover:text-[var(--color-primary-1)] hover:bg-slate-50"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
               <div className="border-t border-slate-100 pt-6 mt-2">
                  <p className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest px-4">Servicios</p>
                  {services.map((service, idx) => (
                    <motion.div
                      key={service.href}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + idx * 0.04, duration: 0.25 }}
                    >
                      <Link
                        href={service.href}
                        className="block py-2.5 px-4 text-base font-medium text-slate-600 hover:text-[var(--color-primary-1)] hover:bg-slate-50 rounded-xl transition-all duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </Link>
                    </motion.div>
                  ))}
               </div>
               <div className="border-t border-slate-100 pt-6 mt-2 flex flex-col gap-4">
                 <Link href="tel:3232317338" className="flex items-center justify-center gap-2 text-base font-bold text-slate-600 py-2">
                    <Phone size={18} />
                    <span>323-231-7338</span>
                 </Link>
                 <Button variant="accent" size="lg" className="w-full font-bold shadow-xl" asChild>
                    <Link href="/contacto" onClick={() => setIsOpen(false)}>Solicitar Cotización</Link>
                 </Button>
               </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
