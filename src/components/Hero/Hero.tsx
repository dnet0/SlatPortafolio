import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import heroData from "@/data/hero-data.json";

export const Hero = () => {
  // Function to handle CV download
  // We create a invisible link a click on it to dowload
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "./Johan_S_Salvatierra_Curriculum.pdf";
    link.download = "Johan_Salvatierra_Curriculum.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            className="text-5xl md:text-5xl lg:text-6xl font-bold"
            style={{ fontWeight: 800 }}
          >
            Johan Salvatierra
          </motion.h1>

          {/* Art Deco divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-32 h-0.5 mx-auto bg-linear-to-r from-transparent via-accent to-transparent"
          />

          {/* Role */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-4xl font-semibold text-foreground/80"
          >
            Software Engineer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {heroData.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/10 relative overflow-hidden group"
                onClick={handleDownloadCV}
              >
                <span className="relative z-10 flex items-center">
                  Descargar CV
                  <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="mt-16 relative h-40">
          <motion.div
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-0 -translate-x-1/2 w-32 h-32 rounded-full bg-linear-to-br from-primary/30 to-accent/30 blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute left-1/3 top-10 w-20 h-20 rounded-full bg-linear-to-br from-accent/20 to-primary/20 blur-2xl"
          />
          <motion.div
            animate={{
              y: [0, -25, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute right-1/3 top-5 w-24 h-24 rounded-full bg-linear-to-br from-primary/25 to-accent/25 blur-3xl"
          />
        </div>
      </div>
    </section>
  );
};
