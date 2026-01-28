export interface Vehicle {
  id: number
  name: string
  brand: string
  year: number
  price: number
  category: string
  image: string
  mileage: number
  fuel: string
  transmission: string
  engine: string
  power: string
  torque: string
  acceleration: string
  topSpeed: string
  features: string[]
  description: string
}

export const vehicles: Vehicle[] = [
  {
    id: 1,
    name: "Navigator Elite",
    brand: "Premium Motors",
    year: 2024,
    price: 385000,
    category: "SUV",
    image: "/vehicles/suv-premium.jpg",
    mileage: 0,
    fuel: "Gasolina",
    transmission: "Automático 8 marchas",
    engine: "3.5L V6 Twin-Turbo",
    power: "450 cv",
    torque: "691 Nm",
    acceleration: "5.2s (0-100 km/h)",
    topSpeed: "250 km/h",
    features: [
      "Teto panorâmico",
      "Bancos em couro premium",
      "Sistema de som Harman Kardon",
      "Piloto automático adaptativo",
      "Câmera 360°",
      "Head-up display"
    ],
    description: "O Navigator Elite redefine o conceito de SUV de luxo. Com espaço generoso para 7 passageiros e tecnologia de ponta, este veículo oferece o equilíbrio perfeito entre conforto, performance e elegância."
  },
  {
    id: 2,
    name: "Elegance S500",
    brand: "Luxury Auto",
    year: 2024,
    price: 520000,
    category: "Sedan",
    image: "/vehicles/sedan-luxury.jpg",
    mileage: 0,
    fuel: "Gasolina",
    transmission: "Automático 9 marchas",
    engine: "4.0L V8 Biturbo",
    power: "503 cv",
    torque: "700 Nm",
    acceleration: "4.3s (0-100 km/h)",
    topSpeed: "280 km/h",
    features: [
      "Interior Nappa leather",
      "Massagem nos bancos",
      "Suspensão a ar adaptativa",
      "Sistema de entretenimento traseiro",
      "Iluminação ambiente 64 cores",
      "Assistente de estacionamento Plus"
    ],
    description: "O Elegance S500 representa o ápice da engenharia automotiva de luxo. Cada detalhe foi meticulosamente projetado para proporcionar uma experiência de condução incomparável."
  },
  {
    id: 3,
    name: "Venom GT",
    brand: "Speed Division",
    year: 2024,
    price: 890000,
    category: "Esportivo",
    image: "/vehicles/sports-car.jpg",
    mileage: 0,
    fuel: "Gasolina",
    transmission: "PDK 7 marchas",
    engine: "4.0L Flat-6 Twin-Turbo",
    power: "650 cv",
    torque: "800 Nm",
    acceleration: "2.8s (0-100 km/h)",
    topSpeed: "340 km/h",
    features: [
      "Aerodinâmica ativa",
      "Freios cerâmicos",
      "Modo track",
      "Launch control",
      "Escape esportivo",
      "Rodas forjadas 21\""
    ],
    description: "Nascido nas pistas, refinado para as ruas. O Venom GT é a expressão máxima de performance e adrenalina, com tecnologia de corrida adaptada para o uso diário."
  },
  {
    id: 4,
    name: "Ranger Extreme",
    brand: "Force Motors",
    year: 2024,
    price: 295000,
    category: "Pickup",
    image: "/vehicles/pickup-truck.jpg",
    mileage: 0,
    fuel: "Diesel",
    transmission: "Automático 10 marchas",
    engine: "3.0L V6 Turbo Diesel",
    power: "330 cv",
    torque: "850 Nm",
    acceleration: "6.8s (0-100 km/h)",
    topSpeed: "210 km/h",
    features: [
      "Tração 4x4 selecionável",
      "Bloqueio diferencial traseiro",
      "Capacidade de reboque 5.500kg",
      "Caçamba revestida",
      "Off-road package",
      "Proteção de cárter"
    ],
    description: "Robusta, versátil e sofisticada. A Ranger Extreme combina capacidade de trabalho pesado com o conforto de um veículo de passeio premium."
  },
  {
    id: 5,
    name: "Vision EV",
    brand: "Future Mobility",
    year: 2024,
    price: 450000,
    category: "Elétrico",
    image: "/vehicles/electric-car.jpg",
    mileage: 0,
    fuel: "Elétrico",
    transmission: "Redução única",
    engine: "Dual Motor AWD",
    power: "580 cv",
    torque: "1.000 Nm",
    acceleration: "3.2s (0-100 km/h)",
    topSpeed: "260 km/h",
    features: [
      "Autonomia 650 km",
      "Carregamento rápido 350kW",
      "Piloto automático Full Self-Driving",
      "Tela central 17\"",
      "Atualização OTA",
      "Teto de vidro inteiro"
    ],
    description: "O futuro da mobilidade chegou. O Vision EV oferece performance extraordinária com zero emissões, representando a vanguarda da tecnologia automotiva sustentável."
  },
  {
    id: 6,
    name: "Urban Pulse",
    brand: "City Cars",
    year: 2024,
    price: 145000,
    category: "Compacto",
    image: "/vehicles/compact-car.jpg",
    mileage: 0,
    fuel: "Flex",
    transmission: "CVT",
    engine: "1.5L Turbo Flex",
    power: "170 cv",
    torque: "270 Nm",
    acceleration: "8.5s (0-100 km/h)",
    topSpeed: "195 km/h",
    features: [
      "Central multimídia 10\"",
      "Carregador wireless",
      "Sensores de estacionamento",
      "Câmera de ré HD",
      "Apple CarPlay & Android Auto",
      "Economia de combustível"
    ],
    description: "Perfeito para a vida urbana. O Urban Pulse combina eficiência, tecnologia e design moderno em um pacote compacto ideal para o dia a dia nas grandes cidades."
  }
]

export const categories = ["Todos", "SUV", "Sedan", "Esportivo", "Pickup", "Elétrico", "Compacto"]
