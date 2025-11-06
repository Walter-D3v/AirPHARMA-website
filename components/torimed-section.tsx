"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Heart, Sparkles, Users } from "lucide-react"
import Image from "next/image"

export function ToriMedSection() {
  const features = [
    {
      icon: Heart,
      title: "Embajador de Esperanza",
      description: "ToriMed representa nuestro compromiso de llevar salud y esperanza a cada rincón del país",
    },
    {
      icon: Sparkles,
      title: "Tradición y Tecnología",
      description:
        "Inspirado en el torogoz, ave nacional de El Salvador, simboliza la unión entre nuestras raíces y el futuro",
    },
    {
      icon: Users,
      title: "Conexión Humana",
      description: "Demuestra que la tecnología puede tener corazón y servir al bienestar de las comunidades",
    },
  ]

  return (
    <section
      id="torimed"
      className="py-12 md:py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-balance">
            Conoce a <span className="text-primary">ToriMed</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground text-balance">
            Nuestra mascota oficial: un torogoz médico-tecnológico que simboliza la unión entre tradición y progreso
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto items-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <Card className="p-6 md:p-8 lg:p-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">El Alma de AirPharma</h3>
              <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6 text-balance leading-relaxed">
                ToriMed es más que una mascota: es un embajador del cambio. Inspirado en el ave nacional de El Salvador,
                el torogoz, representa el alma salvadoreña—resiliente, solidaria y llena de esperanza—pero también el
                salto hacia un futuro donde la tecnología salva vidas.
              </p>
              <p className="text-base md:text-lg text-muted-foreground text-balance leading-relaxed">
                Con su pequeño dron asistente y su estetoscopio digital, ToriMed encarna la misión de AirPharma: llevar
                salud y esperanza a los lugares más lejanos mediante la innovación y el compromiso humano.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ToriMed_logo-removebg-preview-Z6pl131KVxxj8Oj4Vr116udX9E23zJ.png"
                alt="ToriMed - Mascota de AirPharma"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="p-6 md:p-8 h-full hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                  <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4">{feature.title}</h4>
                <p className="text-sm md:text-base text-muted-foreground text-balance leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
