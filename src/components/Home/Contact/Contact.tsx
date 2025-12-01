import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { CustomTitle } from "../../CustomTitle";
import { CustomSubDiv } from "../../CustomSubDiv";
import { CustomCard } from "../../CustomCard";
import { useForm, ValidationError } from "@formspree/react";
import { useTranslation } from "react-i18next";
import type { ContactDTO } from "@/interface/ContactDTO";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [state, handleSubmit] = useForm("xvgvwlkb");
  const { t } = useTranslation("contact-data");
  const contact = t("contact", { returnObjects: true }) as ContactDTO;
  console.log(contact)
  if (state.succeeded) {
    return (
      <section className="flex items-center justify-center min-h-[60vh] text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="p-6 bg-primary/5 rounded-2xl border border-primary/20"
        >
          <h2 className="text-2xl font-semibold text-primary mb-2">
            {contact.confirmationMessage.title}
          </h2>
          <p className="text-muted-foreground">
            {contact.confirmationMessage.subtitle}
          </p>
        </motion.div>
      </section>
    );
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
          <CustomTitle title={contact.title} subTitle={contact.subtitle} />

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
                    {contact.form.inputNombre}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder={contact.form.placeHolderNombre}
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
                    {contact.form.inputEmail}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={contact.form.placeHolderEmail}
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
                    htmlFor="asunto"
                    className="text-sm font-medium text-foreground"
                  >
                    {contact.form.inputAsunto}
                  </label>
                  <Input
                    id="asunto"
                    name="asunto"
                    type="text"
                    placeholder={contact.form.placeHolderAsunto}
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
                    {contact.form.inputMensaje}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={contact.form.placeHolderAsunto}
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
                  {state.submitting ? (
                    <>
                     {contact.form.submiting}
                      <Send className="ml-2 h-4 w-4 animate-pulse" />
                    </>
                  ) : (
                    <>
                     {contact.form.submit}
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
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
              <CustomCard animate={false} title={contact.data.title}>
                <CustomSubDiv
                  icon={Phone}
                  title={contact.data.telefonoTitle}
                  subTitle="+34 610932370"
                  href="tel:+34610932370"
                />
                <CustomSubDiv
                  icon={Mail}
                  title={contact.data.emailTitle}
                  subTitle="johansalgut@gmail.com"
                  href="mailto:johansalgut@gmail.com"
                />
                <CustomSubDiv
                  icon={MapPin}
                  title={contact.data.ubicacionTitle}
                  subTitle="Madrid"
                />
                <hr />
                {/* Social Links */}
                <div className="flex justify-start mt-2">
                  <a
                    href="https://github.com/dnet0"
                    target="_blank"
                    aria-label="Github"
                    className="gap-4 p-3 rounded-lg hover:bg-primary/5"
                  >
                    <SiGithub className="w-5 h-5 text-primary" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/johansalgut/"
                    target="_blank"
                    aria-label="Linkedin"
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
                  {contact.oferta.title}
                </h3>
                <p className="text-muted-foreground">
                  {contact.oferta.description}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
