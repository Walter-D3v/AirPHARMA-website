"use client"

import { motion } from "framer-motion"
import { Cpu, Satellite, Shield, Battery } from "lucide-react"
import { Card } from "@/components/ui/card"

export function TechnologySection() {
  const technologies = [
    {
      icon: Cpu,
      title: "Inteligencia Artificial",
      description: "Sistemas de navegación autónoma con IA para rutas optimizadas y vuelos seguros",
    },
    {
      icon: Satellite,
      title: "Geolocalización GPS",
      description: "Precisión en tiempo real para entregas exactas y monitoreo constante",
    },
    {
      icon: Shield,
      title: "Protocolos de Seguridad",
      description: "Sistemas redundantes y medidas de protección para garantizar entregas seguras",
    },
    {
      icon: Battery,
      title: "Energía Sostenible",
      description: "Drones eléctricos con baterías de larga duración y cero emisiones",
    },
  ]

  return (
    <section id="tecnologia" className="py-20 md:py-32 bg-gradient-to-br from-accent/5 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Innovación Tecnológica</h2>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            Tecnología de vanguardia al servicio de la salud y el bienestar humano
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50 group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <tech.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-balance">{tech.title}</h3>
                <p className="text-muted-foreground text-balance">{tech.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 md:p-12 bg-card overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-balance">Especificaciones Técnicas</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3 text-primary">Capacidades del Dron</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Alcance: hasta 10 kilómetros</li>
                    <li>• Capacidad de carga: 2-5 kg</li>
                    <li>• Velocidad: hasta 60 km/h</li>
                    <li>• Autonomía: 30-45 minutos</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-primary">Sistema de Control</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Monitoreo en tiempo real</li>
                    <li>• Control remoto de emergencia</li>
                    <li>• Registro digital de entregas</li>
                    <li>• Integración con sistemas de salud</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
