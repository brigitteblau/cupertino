import { metrics, type Metric } from "@/lib/constants"

function MetricCard({ metric }: { metric: Metric }) {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <span
        className="text-5xl font-bold tracking-tight text-white sm:text-6xl"
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        {metric.value}
      </span>
      <span className="mt-2 text-sm font-semibold text-white/70">{metric.label}</span>
      <span className="mt-1 text-xs text-white/35">{metric.description}</span>
    </div>
  )
}

export function SocialProof() {
  return (
    <section
      id="numeros"
      className="relative px-6 py-20 sm:py-28"
      aria-labelledby="social-proof-heading"
      style={{ background: "#111111" }}
    >
      <div className="relative mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
            Números reales
          </p>
          <h2
            id="social-proof-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Ya confían en nosotros
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-white/30">
            Verificá las reseñas en{" "}
            <a
              href="https://instagram.com/cupertinostoreok"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white underline underline-offset-4 transition-colors"
            >
              @cupertinostoreok
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
