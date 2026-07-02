import { Shield, Zap, Lock, MessageCircle } from "lucide-react"
import { features, type Feature } from "@/lib/constants"

const iconMap = {
  shield: Shield,
  zap: Zap,
  lock: Lock,
  "message-circle": MessageCircle,
} as const

const iconColors = {
  shield: { bg: "#EDE9FE", color: "#6D28D9" },
  zap: { bg: "#FEF3C7", color: "#D97706" },
  lock: { bg: "#DCFCE7", color: "#16A34A" },
  "message-circle": { bg: "#DBEAFE", color: "#2563EB" },
} as const

function FeatureItem({ feature }: { feature: Feature }) {
  const Icon = iconMap[feature.icon]
  const colors = iconColors[feature.icon]

  return (
    <div className="feature-item flex flex-col gap-4">
      <div
        className="flex h-12 w-12 items-center justify-center rounded-2xl"
        style={{ background: colors.bg }}
        aria-hidden="true"
      >
        <Icon size={22} style={{ color: colors.color }} strokeWidth={2} />
      </div>
      <div>
        <h3 className="mb-2 text-base font-semibold text-gray-900">{feature.title}</h3>
        <p className="text-sm leading-relaxed text-gray-500">{feature.description}</p>
      </div>
    </div>
  )
}

export function Features() {
  return (
    <section
      id="diferencias"
      className="px-6 py-24 sm:py-32"
      aria-labelledby="features-heading"
      style={{ background: "#FFFFFF" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-purple-600">
            Por qué elegirnos
          </p>
          <h2
            id="features-heading"
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Confianza en cada paso
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
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
