export const WHATSAPP_URL =
  "https://wa.me/5491161213913?text=Hola%2C%20quisiera%20informarme%20sobre%20los%20iPhones%20disponibles"
export const INSTAGRAM_URL = "https://instagram.com/cupertinostoreok"
export const SITE_URL = "https://cupertinostore.com.ar"

export type Product = {
  id: number
  name: string
  storage: string
  price: number
  /** screen background gradient for CSS mockup */
  screenGradient: [string, string, string]
  /** frame color hex */
  frameColor: string
  badge?: string
  type: "iphone" | "mac"
}

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 17 Pro Max",
    storage: "256GB",
    price: 1320,
    screenGradient: ["#C4B898", "#A09070", "#7A6A50"],
    frameColor: "#8A7A60",
    badge: "Nuevo",
    type: "iphone",
  },
  {
    id: 2,
    name: "iPhone 17 Pro",
    storage: "256GB",
    price: 1220,
    screenGradient: ["#3A3A3C", "#2C2C2E", "#1C1C1E"],
    frameColor: "#2A2A2C",
    badge: "Nuevo",
    type: "iphone",
  },
  {
    id: 3,
    name: "iPhone 17",
    storage: "128GB",
    price: 1050,
    screenGradient: ["#E8B4BC", "#D4849C", "#B86080"],
    frameColor: "#D48090",
    type: "iphone",
  },
  {
    id: 4,
    name: "iPhone 16 Pro Max",
    storage: "256GB",
    price: 1180,
    screenGradient: ["#C8B89A", "#AA9878", "#8A7858"],
    frameColor: "#AA9070",
    badge: "Disponible",
    type: "iphone",
  },
  {
    id: 5,
    name: "iPhone 16 Pro",
    storage: "256GB",
    price: 1080,
    screenGradient: ["#4A5568", "#2D3748", "#1A2332"],
    frameColor: "#3A4558",
    type: "iphone",
  },
  {
    id: 6,
    name: "iPhone 16",
    storage: "128GB",
    price: 950,
    screenGradient: ["#3B5998", "#2A4480", "#1A3060"],
    frameColor: "#2A4070",
    type: "iphone",
  },
  {
    id: 7,
    name: "MacBook Air M4",
    storage: "16GB · 256GB SSD",
    price: 1450,
    screenGradient: ["#C6C2B8", "#B0AC A2", "#9A9690"],
    frameColor: "#C0BCB2",
    type: "mac",
  },
  {
    id: 8,
    name: "MacBook Pro M4",
    storage: "16GB · 512GB SSD",
    price: 1950,
    screenGradient: ["#2C2C2E", "#1C1C1E", "#0A0A0C"],
    frameColor: "#1A1A1C",
    type: "mac",
  },
]

export type Feature = {
  id: string
  icon: "shield" | "zap" | "lock" | "message-circle"
  title: string
  description: string
}

export const features: Feature[] = [
  {
    id: "warranty",
    icon: "shield",
    title: "Garantía certificada",
    description: "Todos nuestros productos incluyen garantía oficial Apple. Sin letra chica, sin sorpresas.",
  },
  {
    id: "shipping",
    icon: "zap",
    title: "Envío en 24-48hs",
    description: "Entrega rápida en CABA y GBA. Envíos a todo el país disponibles con seguimiento.",
  },
  {
    id: "original",
    icon: "lock",
    title: "100% original sellado",
    description: "Importados directamente. Caja sellada, sin activar, verificados uno por uno.",
  },
  {
    id: "support",
    icon: "message-circle",
    title: "Soporte por WhatsApp",
    description: "Atención personalizada en tiempo real. Respondemos todas tus consultas al instante.",
  },
]

export type Metric = {
  value: string
  label: string
  description: string
}

export const metrics: Metric[] = [
  { value: "+500", label: "Clientes verificados", description: "Compradores satisfechos en Argentina" },
  { value: "4.9★", label: "Calificación promedio", description: "Basado en reseñas de Instagram" },
  { value: "48hs", label: "Envío express CABA", description: "De tu consulta a tu puerta" },
  { value: "100%", label: "Original sellado", description: "Garantía de autenticidad en cada equipo" },
]
