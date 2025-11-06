"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Play } from "lucide-react"
import Image from "next/image"

export function VideoSection() {
  return (
    <section id="video" className="py-12 md:py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-balance">
            Mira <span className="text-primary">AirPharma</span> en Acción
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground text-balance">
            Descubre cómo nuestros drones están transformando la entrega de medicamentos en comunidades rurales
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <Card className="overflow-hidden">
            <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20">
              {/* Placeholder for video - replace with actual video embed */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="relative w-full h-full">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/util_droneflying-0qvxazv7yWal83nE5c2yARZVcnuQEx.png"
                      alt="AirPharma Drone Demo"
                      fill
                      className="object-cover opacity-40"
                    />
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 backdrop-blur-sm">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center mb-4 md:mb-6 hover:scale-110 transition-transform cursor-pointer">
                      <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1" />
                    </div>
                    <p className="text-base md:text-lg font-semibold text-white px-4">
                      Video demostrativo próximamente
                    </p>
                    <p className="text-sm md:text-base text-white/80 mt-2 px-4">
                      Aquí podrás ver nuestros drones en acción
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid sm:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
            <Card className="p-4 md:p-6 text-center">
              <p className="text-2xl md:text-3xl font-bold text-primary mb-2">10 km</p>
              <p className="text-sm md:text-base text-muted-foreground">Alcance de vuelo</p>
            </Card>
            <Card className="p-4 md:p-6 text-center">
              <p className="text-2xl md:text-3xl font-bold text-primary mb-2">15 min</p>
              <p className="text-sm md:text-base text-muted-foreground">Tiempo promedio de entrega</p>
            </Card>
            <Card className="p-4 md:p-6 text-center">
              <p className="text-2xl md:text-3xl font-bold text-primary mb-2">2 kg</p>
              <p className="text-sm md:text-base text-muted-foreground">Capacidad de carga</p>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
