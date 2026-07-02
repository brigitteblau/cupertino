export const WHATSAPP_URL =
  "https://wa.me/5491161213913?text=Hola%2C%20quisiera%20informarme%20sobre%20los%20iPhones%20disponibles"
export const INSTAGRAM_URL = "https://instagram.com/cupertinostoreok"
export const SITE_URL = "https://cupertinostore.com.ar"

const US = "https://images.unsplash.com"

export type Product = {
  id: number
  name: string
  storage: string
  price: number
  image: string
  imageAlt: string
  badge?: string
  type: "iphone" | "mac"
}

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 17 Pro Max",
    storage: "256GB",
    price: 1320,
    image: `${US}/photo-1580910051074-3eb694886505?w=470&h=556&fit=crop&q=85`,
    imageAlt: "iPhone 17 Pro Max",
    badge: "Nuevo",
    type: "iphone",
  },
  {
    id: 2,
    name: "iPhone 17 Pro",
    storage: "256GB",
    price: 1220,
    image: `${US}/photo-1632661674596-df8be070a5c5?w=470&h=556&fit=crop&q=85`,
    imageAlt: "iPhone 17 Pro",
    badge: "Nuevo",
    type: "iphone",
  },
  {
    id: 3,
    name: "iPhone 17",
    storage: "128GB",
    price: 1050,
    image: `${US}/photo-1567581935884-3349723552ca?w=470&h=556&fit=crop&q=85`,
    imageAlt: "iPhone 17",
    type: "iphone",
  },
  {
    id: 4,
    name: "iPhone 16 Pro Max",
    storage: "256GB",
    price: 1180,
    image: `${US}/photo-1510557880182-3d4d3cba35a5?w=470&h=556&fit=crop&q=85`,
    imageAlt: "iPhone 16 Pro Max",
    badge: "Disponible",
    type: "iphone",
  },
  {
    id: 5,
    name: "iPhone 16 Pro",
    storage: "256GB",
    price: 1080,
    image: `${US}/photo-1574944985070-8f3ebc6b79d2?w=470&h=556&fit=crop&q=85`,
    imageAlt: "iPhone 16 Pro",
    type: "iphone",
  },
  {
    id: 6,
    name: "iPhone 16",
    storage: "128GB",
    price: 950,
    image: `${US}/photo-1592750475338-74b7b21085ab?w=470&h=556&fit=crop&q=85`,
    imageAlt: "iPhone 16",
    type: "iphone",
  },
  {
    id: 7,
    name: "MacBook Air M4",
    storage: "16GB · 256GB SSD",
    price: 1450,
    image: `${US}/photo-1517336714731-489689fd1ca8?w=452&h=420&fit=crop&q=85`,
    imageAlt: "MacBook Air M4",
    type: "mac",
  },
  {
    id: 8,
    name: "MacBook Pro M4",
    storage: "16GB · 512GB SSD",
    price: 1950,
    image: `${US}/photo-1541807084-5c52b6b3adef?w=452&h=420&fit=crop&q=85`,
    imageAlt: "MacBook Pro M4",
    type: "mac",
  },
]

export type Feature = {
  id: string
  icon: "shield-check" | "truck" | "package-check" | "message-circle"
  title: string
  description: string
}

export const features: Feature[] = [
  {
    id: "warranty",
    icon: "shield-check",
    title: "Garantía certificada",
    description: "Todos nuestros productos incluyen garantía oficial Apple. Sin letra chica, sin sorpresas.",
  },
  {
    id: "shipping",
    icon: "truck",
    title: "Envío en 24-48hs",
    description: "Entrega rápida en CABA y GBA. Envíos a todo el país disponibles con seguimiento.",
  },
  {
    id: "original",
    icon: "package-check",
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
