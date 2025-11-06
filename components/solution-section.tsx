"use client"

import { motion } from "framer-motion"
import { Package, Plane, CheckCircle, Radio } from "lucide-react"
import { Card } from "@/components/ui/card"

export function SolutionSection() {
  const steps = [
    {
      icon: Package,
      title: "Recepción y preparación",
      description: "Cuando una clínica o comunidad solicita ayuda, preparamos el kit médico con los insumos necesarios",
    },
    {
      icon: Plane,
      title: "Transporte mediante dron",
      description:
        "El dron despega y vuela hacia el destino siguiendo una ruta programada y supervisada en tiempo real",
    },
    {
      icon: CheckCircle,
      title: "Entrega y confirmación",
      description: "El dron entrega el kit en el punto acordado con registro digital y actualización automática",
    },
  ]

  const benefits = [
    "Entregas seguras y confiables",
    "Monitoreo en tiempo real",
    "Reducción de tiempos de entrega",
    "Cero emisiones contaminantes",
    "Acceso a zonas remotas",
    "Respuesta rápida en emergencias",
  ]

  return (
    <section id="solucion" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Nuestra Solución</h2>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            Un sistema inteligente de transporte médico aéreo que conecta comunidades con la salud que necesitan
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <Card className="p-8 h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    {index + 1}
                  </div>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 mt-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-balance">{step.title}</h3>
                  <p className="text-muted-foreground text-balance">{step.description}</p>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 md:p-12 bg-card">
            <div className="flex items-center gap-3 mb-8">
              <Radio className="w-8 h-8 text-primary" />
              <h3 className="text-2xl md:text-3xl font-bold">Beneficios del Sistema</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
