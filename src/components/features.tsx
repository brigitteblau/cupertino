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
    <div className="feature-item flex flex-col gap-4">
      <div
        className="flex h-11 w-11 items-center justify-center rounded-xl"
        style={{ background: "#F0F0F0" }}
        aria-hidden="true"
      >
        <Icon size={20} style={{ color: "#111111" }} strokeWidth={1.75} />
      </div>
      <div>
        <h3 className="mb-1.5 text-base font-semibold text-gray-900">{feature.title}</h3>
        <p className="text-sm leading-relaxed text-gray-500">{feature.description}</p>
      </div>
    </div>
  )
}

export function Features() {
  return (
    <section
      id="diferencias"
      className="px-6 py-20 sm:py-28"
      aria-labelledby="features-heading"
      style={{ background: "#FFFFFF" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
            Por qué elegirnos
          </p>
          <h2
            id="features-heading"
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Confianza en cada paso
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm">
            Importamos con todos los permisos correspondientes. Tu compra está protegida de principio a fin.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureItem key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
