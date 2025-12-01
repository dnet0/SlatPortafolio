import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, BookOpen, Award } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { EducationDTO } from "@/interface/EducationDTO";
import type { CoursesDTO } from "@/interface/CoursesDTO";

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const  {t} = useTranslation("education-data");
  const education = t("education", {returnObjects: true}) as EducationDTO;
  const { t:t2 } = useTranslation("certification-data");
  const courses = t2("courses", { returnObjects: true }) as CoursesDTO;

  return (
    <section
      id="educacion"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6"
          >
            <GraduationCap className="w-8 h-8 text-primary" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">{education.title}</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {education.subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* University Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="card-hover bg-card border border-border rounded-2xl overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">
                        {education.status}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold mb-2 text-foreground">
                      {education.degree}
                    </h3>
                    <p className="text-lg text-primary font-semibold mb-1">
                      {education.institution}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-5 h-5" />
                    <span className="text-sm font-medium">
                      {education.period}
                    </span>
                  </div>
                </div>

                <div className="w-full h-px bg-linear-to-r from-transparent via-border to-transparent mb-6" />

                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  {education.description}
                </p>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-primary/5 border border-primary/10 rounded-xl p-6"
                >
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">
                        {education.projectTitle}
                      </h4>
                      <p className="text-foreground/80 text-sm leading-relaxed">
                        {education.highlight}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-primary/5 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-linear-to-tr from-accent/5 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Professional Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10">
                <Award className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                {courses.title}
              </h3>
            </div>

            <div className="grid gap-6">
              {courses.data.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="group relative bg-card/50 border border-border/50 rounded-xl p-6 hover:bg-card hover:border-border transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {cert.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <p className="text-sm text-primary font-medium">
                          {cert.institution}
                        </p>
                        <span className="text-muted-foreground text-xs">•</span>
                        <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20">
                        {cert.focus}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
