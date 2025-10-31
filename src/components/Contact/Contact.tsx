import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { SiLinkedin } from "react-icons/si";

import { SiGithub } from "react-icons/si";
import { CustomTitle } from "../CustomTitle";
import { CustomSubDiv } from "../CustomSubDiv";
import { CustomCard } from "../CustomCard";
import { useForm, ValidationError } from "@formspree/react";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [state, handleSubmit] = useForm("xvgvwlkb");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
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
            <CustomCard animate isInView={isInView} title="Enviame un mensaje">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2 ">
                  <input type="text" name="_gotcha" className="hidden" />
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Nombre Completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Tu nombre"
                    required
                    className="border-border focus:border-primary"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Tu email"
                    required
                    className="border-border focus:border-primary"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="asuont"
                    className="text-sm font-medium text-foreground"
                  >
                    Asunto *
                  </label>
                  <Input
                    id="asunto"
                    name="asunto"
                    type="text"
                    placeholder="Asunto del mensaje"
                    required
                    className="border-border focus:border-primary"
                  />
                  <ValidationError
                    prefix="Asunto"
                    field="asunto"
                    errors={state.errors}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Cuéntame sobre tu proyecto..."
                    rows={5}
                    required
                    className="border-border focus:border-primary resize-none"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                  disabled={state.submitting}
                >
                  Enviar Mensaje
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CustomCard>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-8 "
            >
              {/* Email */}
              <CustomCard animate={false} title="Información de Contacto">
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
                <div className="flex justify-start mt-2">
                  <a
                    href="https://github.com/dnet0"
                    target="_blank"
                    className="gap-4 p-3 rounded-lg hover:bg-primary/5"
                  >
                    <SiGithub className="w-5 h-5 text-primary" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/johansalgut/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-4 p-3 rounded-lg hover:bg-primary/5"
                  >
                    <SiLinkedin className="w-5 h-5 text-primary" />
                  </a>
                </div>
              </CustomCard>
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
