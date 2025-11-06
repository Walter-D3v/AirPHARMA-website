"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export function TeamSection() {
  const team = [
    {
      name: "Walter Antonio Cortez Meléndez",
      role: "Co-fundador & Desarrollo Técnico",
      description: "Especialista en robótica y sistemas autónomos, lidera el desarrollo tecnológico de los drones.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Héctor Samuel Vásquez Figueroa",
      role: "Co-fundador & Operaciones",
      description:
        "Experto en logística médica y gestión de operaciones, coordina las entregas y alianzas estratégicas.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Andrea Rosmery Mendoza García",
      role: "Co-fundadora & Estrategia",
      description:
        "Especialista en innovación social y desarrollo de negocios, impulsa la visión y crecimiento de AirPharma.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const partners = [
    "Ministerio de Salud",
    "Cruz Roja Salvadoreña",
    "Hospital Nacional",
    "Universidad Tecnológica",
    "Protección Civil",
    "OPS/OMS",
  ]

  return (
    <section className="py-12 md:py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-balance">Nuestro Equipo</h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground text-balance">
            Conoce a las personas detrás de la innovación que está transformando la salud en El Salvador
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-16 md:mb-20">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="p-6 md:p-8 h-full hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4 md:mb-6">
                  <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 md:mb-6 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-primary/10 flex items-center justify-center text-2xl md:text-3xl font-bold text-primary">
                      {member.name.split(" ")[0][0]}
                      {member.name.split(" ")[2][0]}
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-balance">{member.name}</h3>
                  <p className="text-sm md:text-base text-primary font-semibold mb-3 md:mb-4">{member.role}</p>
                  <p className="text-sm md:text-base text-muted-foreground text-balance leading-relaxed">
                    {member.description}
                  </p>
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
          <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center text-balance">
            Nuestros Aliados Estratégicos
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-4 md:p-6 text-center hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/50">
                  <p className="font-semibold text-sm md:text-base text-balance">{partner}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
