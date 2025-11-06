"use client"

import { motion } from "framer-motion"
import { Users, MapPin, Building2, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"

export function ImpactSection() {
  const stats = [
    {
      icon: Users,
      value: "300+",
      label: "Pacientes beneficiados",
      color: "text-primary",
    },
    {
      icon: MapPin,
      value: "50+",
      label: "Comunidades rurales alcanzadas",
      color: "text-accent",
    },
    {
      icon: Building2,
      value: "15+",
      label: "Hospitales conectados",
      color: "text-primary",
    },
    {
      icon: Clock,
      value: "85%",
      label: "Reducción en tiempo de entrega",
      color: "text-accent",
    },
  ]

  return (
    <section id="impacto" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Nuestro Impacto</h2>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            Transformando vidas a través de la tecnología y el compromiso social
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
                <div
                  className={`w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center ${stat.color}`}
                >
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-balance">{stat.value}</div>
                <div className="text-muted-foreground text-balance">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-2">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-balance">
              Contribuyendo a los Objetivos de Desarrollo Sostenible
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-bold mb-2">Salud y Bienestar</h4>
                  <p className="text-sm text-muted-foreground text-balance">
                    Garantizando acceso equitativo a servicios de salud de calidad
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-xl flex-shrink-0">
                  9
                </div>
                <div>
                  <h4 className="font-bold mb-2">Industria, Innovación e Infraestructura</h4>
                  <p className="text-sm text-muted-foreground text-balance">
                    Impulsando la innovación tecnológica para el desarrollo sostenible
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
