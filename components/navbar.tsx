"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleScrollActive = () => {
      const sections = ["inicio", "quienes-somos", "solucion", "impacto", "tecnologia", "torimed", "contacto"]
      for (const section of sections) {
        const element = document.querySelector(`#${section}`)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
          }
        }
      }
    }
    window.addEventListener("scroll", handleScrollActive)
    return () => window.removeEventListener("scroll", handleScrollActive)
  }, [])

  const mobileNavItems = [
    { name: "Inicio", href: "#inicio", id: "inicio" },
    { name: "Quiénes Somos", href: "#quienes-somos", id: "quienes-somos" },
    { name: "Solución", href: "#solucion", id: "solucion" },
    { name: "Impacto", href: "#impacto", id: "impacto" },
    { name: "Tecnología", href: "#tecnologia", id: "tecnologia" },
    { name: "ToriMed", href: "#torimed", id: "torimed" },
    { name: "Contacto", href: "#contacto", id: "contacto" },
  ]

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)

    // Use setTimeout to allow menu to close before scrolling
    setTimeout(() => {
      const element = document.querySelector(`#${sectionId}`)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 100)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          <motion.a href="#inicio" whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
            <div className="relative w-8 h-8 md:w-10 md:h-10 flex-shrink-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AirPharma_logo-0aJsNkDA8Al4lI3VQtqj0Ihy6c6SzX.png"
                alt="AirPharma Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-base md:text-xl font-bold text-foreground whitespace-nowrap">AirPharma</span>
          </motion.a>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {/* Inicio - No dropdown */}
            <motion.a
              href="#inicio"
              whileHover={{ color: "#007BFF" }}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors whitespace-nowrap"
            >
              Inicio
            </motion.a>

            {/* Quiénes Somos - Dropdown with Contacto */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors whitespace-nowrap outline-none group">
                <span>Quiénes Somos</span>
                <motion.div initial={{ rotate: 0 }} whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </DropdownMenuTrigger>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <DropdownMenuContent align="start" className="min-w-[160px]">
                  <DropdownMenuItem asChild>
                    <a
                      href="#quienes-somos"
                      className="cursor-pointer w-full block py-2 px-3 rounded transition-colors hover:bg-blue/10 hover:text-primary"
                    >
                      Sobre Nosotros
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a
                      href="#contacto"
                      className="cursor-pointer w-full block py-2 px-3 rounded transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      Contacto
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </motion.div>
            </DropdownMenu>

            {/* Solución - Dropdown with Impacto, Tecnología, ToriMed */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors whitespace-nowrap outline-none group">
                <span>Solución</span>
                <motion.div initial={{ rotate: 0 }} whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </DropdownMenuTrigger>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <DropdownMenuContent align="start" className="min-w-[160px]">
                  <DropdownMenuItem asChild>
                    <a
                      href="#solucion"
                      className="cursor-pointer w-full block py-2 px-3 rounded transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      Nuestra Solución
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a
                      href="#impacto"
                      className="cursor-pointer w-full block py-2 px-3 rounded transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      Impacto
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a
                      href="#tecnologia"
                      className="cursor-pointer w-full block py-2 px-3 rounded transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      Tecnología
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a
                      href="#torimed"
                      className="cursor-pointer w-full block py-2 px-3 rounded transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      ToriMed
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </motion.div>
            </DropdownMenu>
          </div>

          <div className="hidden lg:block">
            <Button size="sm" className="font-semibold whitespace-nowrap" asChild>
              <a href="#contacto">Contáctanos</a>
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background/95 backdrop-blur-lg border-t"
          >
            <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
              {mobileNavItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleMobileNavClick(e, item.id)}
                  whileHover={{ x: 5 }}
                  className={`text-sm font-medium py-2 px-3 rounded transition-all ${
                    activeSection === item.id
                      ? "bg-primary text-white"
                      : "text-foreground/80 hover:text-primary hover:bg-foreground/5"
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
              <Button
                size="sm"
                className="w-full font-semibold mt-2"
                asChild
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <a href="#contacto">Contáctanos</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
