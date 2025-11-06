"use client"

import { motion } from "framer-motion"
import { Globe, Cog, Heart } from "lucide-react"
import { Card } from "@/components/ui/card"

export function AboutSection() {
  const pillars = [
    {
      icon: Globe,
      title: "Conectamos comunidades aisladas",
      description: "Llevamos salud a zonas rurales y de difícil acceso donde los servicios tradicionales no llegan",
    },
    {
      icon: Cog,
      title: "Aplicamos inteligencia aérea",
      description: "Tecnología de drones autónomos con IA para entregas seguras y eficientes",
    },
    {
      icon: Heart,
      title: "Promovemos logística médica sostenible",
      description: "Soluciones ecológicas con drones eléctricos que reducen la huella de carbono",
    },
  ]

  return (
    <section id="quienes-somos" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-10 md:mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-5 text-balance">Quiénes Somos</h2>
          <p className="text-base md:text-lg text-muted-foreground text-balance">
            AirPharma es una startup salvadoreña que combina tecnología, innovación y compromiso social para mejorar el
            acceso a la salud mediante drones autónomos inteligentes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary/50">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-balance">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground text-balance">{pillar.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 md:mt-14 max-w-4xl mx-auto"
        >
          <Card className="p-6 md:p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Nuestra Misión</h3>
                <p className="text-sm text-muted-foreground text-balance">
                  Mejorar el acceso a la salud mediante tecnología aérea avanzada, proporcionando soluciones logísticas
                  eficientes y sostenibles para el transporte de insumos médicos.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Nuestra Visión</h3>
                <p className="text-sm text-muted-foreground text-balance">
                  Ser líderes en innovación tecnológica aplicada a la salud, consolidando una red de transporte médico
                  aéreo confiable y sostenible en toda Latinoamérica.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
