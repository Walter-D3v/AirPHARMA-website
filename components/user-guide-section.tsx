"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Package, Plane, MapPin, CheckCircle } from "lucide-react"
import Image from "next/image"

export function UserGuideSection() {
  const steps = [
    {
      icon: Package,
      title: "1. Solicitud y Preparación",
      description:
        "Una clínica, hospital o comunidad solicita ayuda. Nuestro equipo prepara el kit médico con los insumos necesarios según la emergencia.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/util_medidron-cq2TMM51hCZGHawBtGw6eaZWEfVjMX.png",
    },
    {
      icon: Plane,
      title: "2. Transporte Aéreo",
      description:
        "El dron despega desde la base más cercana y vuela hacia el destino siguiendo una ruta programada, supervisado en tiempo real para garantizar seguridad y rapidez.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/drone_util-bbHfbAuAKTH0iJfR4KU1imZAULtVH0.png",
    },
    {
      icon: MapPin,
      title: "3. Navegación Inteligente",
      description:
        "Sistema GPS avanzado y sensores de evitación de obstáculos garantizan un vuelo seguro, incluso en condiciones climáticas adversas.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/util_droneflying-0qvxazv7yWal83nE5c2yARZVcnuQEx.png",
    },
    {
      icon: CheckCircle,
      title: "4. Entrega y Confirmación",
      description:
        "El dron entrega el kit en el punto acordado. Se confirma la recepción con registro digital y el sistema actualiza automáticamente los datos de la misión.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/util_medidron-cq2TMM51hCZGHawBtGw6eaZWEfVjMX.png",
    },
  ]

  return (
    <section
      id="guia-usuario"
      className="py-12 md:py-20 lg:py-32 bg-gradient-to-br from-accent/5 via-background to-primary/5"
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
            Cómo Funciona <span className="text-primary">AirPharma</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground text-balance">
            Un proceso simple y eficiente que salva vidas en minutos
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className={`overflow-hidden ${index % 2 === 0 ? "" : "bg-primary/5"}`}>
                <div
                  className={`grid md:grid-cols-2 gap-6 md:gap-8 items-center ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}
                >
                  <div className={`p-6 md:p-8 lg:p-10 ${index % 2 === 0 ? "order-1" : "order-2"}`}>
                    <div className="flex items-start gap-4 mb-4 md:mb-6">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                      </div>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-balance">{step.title}</h3>
                    </div>
                    <p className="text-base md:text-lg text-muted-foreground text-balance leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className={`relative h-64 md:h-80 ${index % 2 === 0 ? "order-2" : "order-1"}`}>
                    <Image
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      fill
                      className="object-contain p-6 md:p-8"
                    />
                  </div>
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
          className="mt-12 md:mt-16 max-w-4xl mx-auto"
        >
          <Card className="p-6 md:p-8 lg:p-10 bg-gradient-to-br from-primary/10 to-accent/10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center">Características Técnicas</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary mb-2">10 km</p>
                <p className="text-sm md:text-base text-muted-foreground">Alcance máximo</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary mb-2">2 kg</p>
                <p className="text-sm md:text-base text-muted-foreground">Capacidad de carga</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary mb-2">30 min</p>
                <p className="text-sm md:text-base text-muted-foreground">Autonomía de vuelo</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary mb-2">GPS</p>
                <p className="text-sm md:text-base text-muted-foreground">Navegación precisa</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
