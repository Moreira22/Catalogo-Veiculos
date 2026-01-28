"use client"

import Image from "next/image"
import type { Vehicle } from "@/lib/vehicles-data"
import { Fuel, Gauge, Settings2 } from "lucide-react"

interface VehicleCardProps {
  vehicle: Vehicle
  onClick: () => void
  index: number
}

export function VehicleCard({ vehicle, onClick, index }: VehicleCardProps) {
  return (
    <article
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      tabIndex={0}
      role="button"
      aria-label={`Ver detalhes do ${vehicle.name}`}
      className="group relative bg-card rounded-xl overflow-hidden cursor-pointer border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={vehicle.image || "/placeholder.svg"}
          alt={`${vehicle.brand} ${vehicle.name}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
        
        {/* Category badge */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold rounded-full">
          {vehicle.category}
        </div>
        
        {/* Year badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-background/80 backdrop-blur-sm text-foreground text-xs font-semibold rounded-full border border-border">
          {vehicle.year}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Brand & Name */}
        <div className="mb-4">
          <p className="text-xs text-primary font-medium uppercase tracking-wider mb-1">
            {vehicle.brand}
          </p>
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {vehicle.name}
          </h3>
        </div>

        {/* Quick Specs */}
        <div className="flex items-center gap-4 mb-5 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Fuel className="w-4 h-4" />
            <span>{vehicle.fuel}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Settings2 className="w-4 h-4" />
            <span>{vehicle.power}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Gauge className="w-4 h-4" />
            <span>{vehicle.acceleration.split(" ")[0]}</span>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground">A partir de</p>
            <p className="text-2xl font-bold text-foreground">
              R$ {vehicle.price.toLocaleString("pt-BR")}
            </p>
          </div>
          <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300">
            <span className="text-sm">Ver mais</span>
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Hover effect border */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-500 pointer-events-none" />
    </article>
  )
}
