"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  company: z.string().min(2, "La empresa es requerida."),
  email: z.string().email("Correo electrónico inválido."),
  phone: z.string().min(7, "Teléfono inválido."),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres."),
});

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would integrate with EmailJS or similar
    alert("Gracias por contactarnos. Pronto nos comunicaremos contigo.");
    form.reset();
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg-light)] py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="section-shell p-8 md:p-10"
          >
            <h1 className="text-4xl font-bold font-heading text-[var(--color-secondary)] mb-6">Contáctanos</h1>
            <p className="text-gray-600 mb-12 text-lg">
              Estamos listos para asesorarte y brindarte las mejores soluciones en seguridad y salud en el trabajo.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-white p-3 text-[var(--color-primary-1)] shadow-[0_14px_30px_-22px_rgba(17,24,39,0.52)]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">Ubicación</h3>
                  <p className="text-gray-600">Carrera 49 No. 93-41, Piso 1, La Castellana<br />Bogotá D.C., Colombia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-white p-3 text-[var(--color-primary-1)] shadow-[0_14px_30px_-22px_rgba(17,24,39,0.52)]">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">Teléfonos</h3>
                  <p className="text-gray-600">Fijo: (601) 521 0258</p>
                  <p className="text-gray-600">Móvil: 323 231 7338</p>
                  <p className="text-gray-600">Comercial: 310 316 2201</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-white p-3 text-[var(--color-primary-1)] shadow-[0_14px_30px_-22px_rgba(17,24,39,0.52)]">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">Correo Electrónico</h3>
                  <a href="mailto:grospina@saludytrabajosst.com" className="text-[var(--color-primary-1)] hover:underline">grospina@saludytrabajosst.com</a>
                </div>
              </div>
            </div>

            <div className="mt-12 h-64 overflow-hidden rounded-xl border border-[#d7e6e2] shadow-[0_24px_50px_-36px_rgba(17,24,39,0.62)]">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.476475765668!2d-74.06046768523774!3d4.686949396603178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9aeb7b63992d%3A0x6b8f8f8f8f8f8f8f!2sCra.%2049%20%2393-41%2C%20Bogot%C3%A1!5e0!3m2!1sen!2sco!4v1620000000000!5m2!1sen!2sco" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen={true} 
                 loading="lazy"
                 title="Mapa de ubicación"
               ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-shell p-8 md:p-10"
          >
            <h2 className="text-2xl font-bold font-heading text-[var(--color-secondary)] mb-6">Envíanos un mensaje</h2>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Nombre Completo</label>
                <Input {...form.register("name")} placeholder="Ej. Juan Pérez" />
                {form.formState.errors.name && <p className="text-red-500 text-xs">{form.formState.errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Empresa</label>
                <Input {...form.register("company")} placeholder="Ej. Tu Empresa S.A.S." />
                {form.formState.errors.company && <p className="text-red-500 text-xs">{form.formState.errors.company.message}</p>}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Correo Electrónico</label>
                  <Input {...form.register("email")} type="email" placeholder="correo@empresa.com" />
                  {form.formState.errors.email && <p className="text-red-500 text-xs">{form.formState.errors.email.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Teléfono</label>
                  <Input {...form.register("phone")} type="tel" placeholder="300 123 4567" />
                  {form.formState.errors.phone && <p className="text-red-500 text-xs">{form.formState.errors.phone.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Mensaje</label>
                <Textarea {...form.register("message")} placeholder="¿En qué podemos ayudarte?" className="min-h-[120px]" />
                {form.formState.errors.message && <p className="text-red-500 text-xs">{form.formState.errors.message.message}</p>}
              </div>

              <Button type="submit" variant="default" className="h-12 w-full text-lg">
                Enviar Mensaje
              </Button>
            </form>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
