"use client"

import { useState, useEffect } from "react"
import { Menu, X, Car } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToCatalog = () => {
    const catalog = document.getElementById("catalog")
    catalog?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <Car className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Auto<span className="text-primary">Elite</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
              Início
            </a>
            <button 
              onClick={scrollToCatalog}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Catálogo
            </button>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
              Sobre Nós
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105">
              Agendar Visita
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:bg-secondary rounded-lg transition-colors duration-200"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border transition-all duration-300 ${
          isMobileMenuOpen 
            ? "opacity-100 visible translate-y-0" 
            : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <nav className="flex flex-col p-4 space-y-2">
          <a 
            href="#" 
            className="px-4 py-3 text-foreground hover:bg-secondary rounded-lg transition-colors duration-200"
          >
            Início
          </a>
          <button 
            onClick={scrollToCatalog}
            className="px-4 py-3 text-left text-foreground hover:bg-secondary rounded-lg transition-colors duration-200"
          >
            Catálogo
          </button>
          <a 
            href="#" 
            className="px-4 py-3 text-foreground hover:bg-secondary rounded-lg transition-colors duration-200"
          >
            Sobre Nós
          </a>
          <a 
            href="#" 
            className="px-4 py-3 text-foreground hover:bg-secondary rounded-lg transition-colors duration-200"
          >
            Contato
          </a>
          <button className="mt-2 w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200">
            Agendar Visita
          </button>
        </nav>
      </div>
    </header>
  )
}
