import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LocateIcon, Mail, MapPin, Phone, Send } from "lucide-react";
import { SiLinkedin } from "react-icons/si";

import { SiGithub } from "react-icons/si";
import { CustomTitle } from "./CustomTitle";
import { CustomSubDiv } from "./CustomSubDiv";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    asunto: "",
    message: "",
  });

  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     toast({
  //       title: "Mensaje enviado",
  //       description: "Gracias por contactarme. Te responderé pronto.",
  //     });
  //     setFormData({ name: "", email: "", message: "" });
  //   };

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Section Title */}
          <CustomTitle
            title="Contacto"
            subTitle="¿Tienes un proyecto en mente? ¡Hablemos!"
          />

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border"
            >
              <h2 className="text-2xl font-medium text-foreground mb-2">
                Enviame un mensaje
              </h2>
              <form onSubmit={() => {}} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Nombre Completo
                  </label>
                  <Input
                    id="name"
                    placeholder="Johan Salvatierra"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Asunto
                  </label>
                  <Input
                    id="asunto"
                    type="text"
                    placeholder="Asunto del mensaje"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntame sobre tu proyecto..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  Enviar Mensaje
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-8 "
            >
              {/* Email */}
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                <h2 className="text-2xl font-medium text-foreground mb-2">
                  Información de Contacto
                </h2>
                <CustomSubDiv
                  icon={Phone}
                  title="Telefono"
                  subTitle="+34 610932370"
                  href="tel:+34610932370"
                />
                <CustomSubDiv
                  icon={Mail}
                  title="Email"
                  subTitle="johansalgut@gmail.com"
                  href="mailto:johansalgut@gmail.com"
                />
                <CustomSubDiv
                  icon={MapPin}
                  title="Ubicación"
                  subTitle="Madrid"
                />
                <hr />
                {/* Social Links */}
                <div>
                  <Button className="items-center gap-4 p-5 rounded-lg ">
                    <a
                      href="https://github.com/dnet0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SiGithub className="w-5 h-5 text-primary" />
                    </a>
                  </Button>
                </div>
                <a
                  href="https://www.linkedin.com/in/johansalgut/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors group"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <SiLinkedin className="w-5 h-5 text-primary" />
                  </div>
                </a>
              </div>

              {/* CTA */}
              <div className="bg-linear-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  ¿Buscás incorporar talento o iniciar un nuevo proyecto?
                </h3>
                <p className="text-muted-foreground">
                  Desde proyectos personales hasta proyectos empresariales,
                  siempre estoy abierto a nuevas ideas y conversaciones sobre
                  desarrollo.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
