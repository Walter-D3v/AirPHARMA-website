"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dr. Carlos Martínez",
      role: "Director, Hospital Rural San Miguel",
      content:
        "AirPharma ha transformado nuestra capacidad de respuesta. Ahora podemos recibir medicamentos críticos en minutos en lugar de horas.",
      image: "/doctor-portrait.png",
    },
    {
      name: "María González",
      role: "Coordinadora, Cruz Roja Salvadoreña",
      content:
        "La tecnología de AirPharma nos permite llegar a comunidades que antes eran inaccesibles durante emergencias. Es un cambio revolucionario.",
      image: "/female-healthcare-worker.png",
    },
    {
      name: "Ing. Roberto Flores",
      role: "Ministerio de Salud",
      content:
        "Este proyecto representa el futuro de la logística médica en El Salvador. Estamos orgullosos de apoyar esta innovación nacional.",
      image: "/male-professional-portrait.png",
    },
  ]

  const partners = [
    "Ministerio de Salud",
    "Cruz Roja",
    "Hospital Nacional",
    "Universidad Tecnológica",
    "Protección Civil",
    "OPS/OMS",
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Testimonios</h2>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            Lo que dicen nuestros aliados y beneficiarios
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="p-8 h-full hover:shadow-xl transition-shadow duration-300 relative">
                <Quote className="w-10 h-10 text-primary/20 absolute top-4 right-4" />
                <div className="mb-6">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mb-4"
                  />
                  <p className="text-muted-foreground italic mb-4 text-balance">"{testimonial.content}"</p>
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground text-balance">{testimonial.role}</p>
                </div>
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
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-balance">
            Nuestros Aliados Estratégicos
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/50">
                  <p className="font-semibold text-balance">{partner}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
