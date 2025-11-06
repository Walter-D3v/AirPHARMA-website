"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export function CTASection() {
  return (
    <section
      id="contacto"
      className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              y: [null, Math.random() * 100 + "%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Únete a la transformación de la salud</h2>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            Juntos podemos llevar esperanza y tecnología a donde más se necesita
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 md:p-10 h-full">
              <h3 className="text-2xl font-bold mb-6">Contáctanos</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre completo</label>
                  <Input placeholder="Tu nombre" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Correo electrónico</label>
                  <Input type="email" placeholder="tu@email.com" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Organización</label>
                  <Input placeholder="Nombre de tu organización" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mensaje</label>
                  <Textarea placeholder="Cuéntanos cómo podemos ayudarte" className="w-full min-h-32" />
                </div>
                <Button size="lg" className="w-full font-semibold">
                  Enviar mensaje
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-muted-foreground">contacto@airpharma.sv</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Teléfono</p>
                    <p className="text-muted-foreground">+503 2222-3333</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Ubicación</p>
                    <p className="text-muted-foreground text-balance">San Salvador, El Salvador</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">Solicita una demostración</h3>
              <p className="mb-6 text-primary-foreground/90 text-balance">
                Descubre cómo AirPharma puede transformar la logística médica en tu institución
              </p>
              <Button size="lg" variant="secondary" className="w-full font-semibold">
                Agendar demo
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
