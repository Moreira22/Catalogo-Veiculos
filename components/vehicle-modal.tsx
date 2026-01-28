"use client"

import React from "react"

import { useEffect, useRef } from "react"
import Image from "next/image"
import type { Vehicle } from "@/lib/vehicles-data"
import { 
  X, 
  Fuel, 
  Gauge, 
  Settings2, 
  Zap, 
  Timer, 
  TrendingUp,
  Check,
  Phone,
  Calendar
} from "lucide-react"

interface VehicleModalProps {
  vehicle: Vehicle | null
  isOpen: boolean
  onClose: () => void
}

export function VehicleModal({ vehicle, isOpen, onClose }: VehicleModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) {
      onClose()
    }
  }

  if (!vehicle) return null

  return (
    <div
      ref={modalRef}
      onClick={handleBackdropClick}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ${
        isOpen 
          ? "opacity-100 visible" 
          : "opacity-0 invisible pointer-events-none"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-background/80 backdrop-blur-md transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Modal Content */}
      <div 
        className={`relative w-full max-w-5xl max-h-[90vh] bg-card border border-border rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
          isOpen 
            ? "opacity-100 scale-100 translate-y-0" 
            : "opacity-0 scale-95 translate-y-8"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-background/80 backdrop-blur-sm rounded-full border border-border hover:bg-secondary transition-colors duration-200"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        <div className="overflow-y-auto max-h-[90vh]">
          {/* Hero Image */}
          <div className="relative h-72 md:h-96">
            <Image
              src={vehicle.image || "/placeholder.svg"}
              alt={`${vehicle.brand} ${vehicle.name}`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
            
            {/* Vehicle Name Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  {vehicle.category}
                </span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full border border-border">
                  {vehicle.year}
                </span>
              </div>
              <p className="text-sm text-primary font-medium uppercase tracking-wider">
                {vehicle.brand}
              </p>
              <h2 id="modal-title" className="text-3xl md:text-4xl font-bold text-foreground">
                {vehicle.name}
              </h2>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Price Section */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 pb-6 border-b border-border">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Preço sugerido</p>
                <p className="text-4xl font-bold text-primary">
                  R$ {vehicle.price.toLocaleString("pt-BR")}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105">
                  <Phone className="w-4 h-4" />
                  Falar com Consultor
                </button>
                <button className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-secondary transition-all duration-300">
                  <Calendar className="w-4 h-4" />
                  Agendar Test Drive
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">Sobre este veículo</h3>
              <p className="text-muted-foreground leading-relaxed">{vehicle.description}</p>
            </div>

            {/* Technical Specs Grid */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Especificações Técnicas</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 bg-secondary rounded-xl border border-border">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Settings2 className="w-5 h-5" />
                    <span className="text-xs font-medium uppercase tracking-wider">Motor</span>
                  </div>
                  <p className="font-semibold text-foreground">{vehicle.engine}</p>
                </div>

                <div className="p-4 bg-secondary rounded-xl border border-border">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Zap className="w-5 h-5" />
                    <span className="text-xs font-medium uppercase tracking-wider">Potência</span>
                  </div>
                  <p className="font-semibold text-foreground">{vehicle.power}</p>
                </div>

                <div className="p-4 bg-secondary rounded-xl border border-border">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-xs font-medium uppercase tracking-wider">Torque</span>
                  </div>
                  <p className="font-semibold text-foreground">{vehicle.torque}</p>
                </div>

                <div className="p-4 bg-secondary rounded-xl border border-border">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Timer className="w-5 h-5" />
                    <span className="text-xs font-medium uppercase tracking-wider">Aceleração</span>
                  </div>
                  <p className="font-semibold text-foreground">{vehicle.acceleration}</p>
                </div>

                <div className="p-4 bg-secondary rounded-xl border border-border">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Gauge className="w-5 h-5" />
                    <span className="text-xs font-medium uppercase tracking-wider">Velocidade Máx.</span>
                  </div>
                  <p className="font-semibold text-foreground">{vehicle.topSpeed}</p>
                </div>

                <div className="p-4 bg-secondary rounded-xl border border-border">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Fuel className="w-5 h-5" />
                    <span className="text-xs font-medium uppercase tracking-wider">Combustível</span>
                  </div>
                  <p className="font-semibold text-foreground">{vehicle.fuel}</p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-4 bg-secondary rounded-xl border border-border">
                <h4 className="font-semibold text-foreground mb-2">Transmissão</h4>
                <p className="text-muted-foreground">{vehicle.transmission}</p>
              </div>
              <div className="p-4 bg-secondary rounded-xl border border-border">
                <h4 className="font-semibold text-foreground mb-2">Quilometragem</h4>
                <p className="text-muted-foreground">{vehicle.mileage === 0 ? "0 km (Zero)" : `${vehicle.mileage.toLocaleString("pt-BR")} km`}</p>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Equipamentos de Série</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {vehicle.features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
