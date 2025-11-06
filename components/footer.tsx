"use client"

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AirPharma_logo-0aJsNkDA8Al4lI3VQtqj0Ihy6c6SzX.png"
                  alt="AirPharma Logo"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span className="text-xl md:text-2xl font-bold">AirPharma</span>
            </div>
            <p className="text-background/80 mb-4 max-w-md text-balance leading-relaxed">
              Revolucionando la salud desde el cielo. Drones autónomos que conectan comunidades con esperanza y
              tecnología.
            </p>
            <p className="text-sm text-background/60">Salud que vuela hacia ti</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm md:text-base text-background/80">
              <li>
                <a href="#inicio" className="hover:text-background transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#quienes-somos" className="hover:text-background transition-colors">
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a href="#solucion" className="hover:text-background transition-colors">
                  Solución
                </a>
              </li>
              <li>
                <a href="#impacto" className="hover:text-background transition-colors">
                  Impacto
                </a>
              </li>
              <li>
                <a href="#tecnologia" className="hover:text-background transition-colors">
                  Tecnología
                </a>
              </li>
              <li>
                <a href="#torimed" className="hover:text-background transition-colors">
                  ToriMed
                </a>
              </li>
              <li>
                <a href="#video" className="hover:text-background transition-colors">
                  Video Demo
                </a>
              </li>
              <li>
                <a href="#guia-usuario" className="hover:text-background transition-colors">
                  Cómo Funciona
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Síguenos</h4>
            <div className="flex gap-3 md:gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-xs md:text-sm text-background/60">
              © {currentYear} AirPharma - Grupo ROWASA S.A. de C.V. Todos los derechos reservados.
            </p>
            <div className="flex gap-4 md:gap-6 text-xs md:text-sm text-background/60">
              <a href="#" className="hover:text-background transition-colors">
                Privacidad
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Términos
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
