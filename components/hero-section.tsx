"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="inicio"
      className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-14 md:pt-16"
    >
      <div className="absolute inset-0 bg-[url('/drones.jpg')] bg-cover bg-center opacity-10" />

      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
            }}
            animate={{
              y: [null, Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000)],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 py-8 md:py-0">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-5 text-balance leading-tight">
              Revolucionamos la salud <span className="text-primary">desde el cielo</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-5 md:mb-7 text-balance px-4"
          >
            Drones autónomos que conectan comunidades con esperanza y tecnología
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center px-4"
          >
            <Button
              size="default"
              onClick={() => scrollToSection("guia-usuario")}
              className="text-sm md:text-base px-5 md:px-6 py-4 md:py-5 font-semibold group w-full sm:w-auto"
            >
              Cómo funciona
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="default"
              variant="outline"
              onClick={() => scrollToSection("video")}
              className="text-sm md:text-base px-5 md:px-6 py-4 md:py-5 font-semibold group bg-transparent w-full sm:w-auto"
            >
              <Play className="mr-2 w-4 h-4" />
              Ver demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 md:mt-12"
          >
            <p className="text-sm text-muted-foreground">Donde nadie llega, la salud vuela</p>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}
