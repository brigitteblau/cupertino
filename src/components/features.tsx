import { ShieldCheck, Truck, PackageCheck, MessageCircle } from "lucide-react"
import { features, type Feature } from "@/lib/constants"

const iconMap = {
  "shield-check": ShieldCheck,
  truck: Truck,
  "package-check": PackageCheck,
  "message-circle": MessageCircle,
} as const

function FeatureItem({ feature }: { feature: Feature }) {
  const Icon = iconMap[feature.icon]
  return (
    <div className="feature-item flex flex-col gap-5 p-8 rounded-2xl" style={{ background: "#FAF8F5" }}>
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl"
        style={{ background: "#EDE5D8" }}
        aria-hidden="true"
      >
        <Icon size={22} style={{ color: "#92400E" }} strokeWidth={1.6} />
      </div>
      <div>
        <h3 className="mb-2 text-lg font-semibold" style={{ color: "#1D1D1F" }}>
          {feature.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "#6E6E73" }}>
          {feature.description}
        </p>
      </div>
    </div>
  )
}

export function Features() {
  return (
    <section
      id="diferencias"
      className="min-h-screen flex flex-col justify-center px-6 py-20 sm:py-24"
      aria-labelledby="features-heading"
      style={{ background: "#FFFFFF" }}
    >
      <div className="mx-auto max-w-6xl w-full">
        <div className="mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "#B45309" }}>
            Por qué elegirnos
          </p>
          <h2
            id="features-heading"
            className="text-4xl font-bold tracking-tight sm:text-5xl"
            style={{ color: "#1D1D1F" }}
          >
            Confianza en cada paso
          </h2>
          <p className="mt-4 max-w-lg text-base" style={{ color: "#6E6E73" }}>
            Importamos con todos los permisos. Tu compra está protegida de principio a fin.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <FeatureItem key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
