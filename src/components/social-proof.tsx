import { metrics, type Metric } from "@/lib/constants"

function MetricCard({ metric }: { metric: Metric }) {
  return (
    <div className="flex flex-col py-10 px-6 border-t" style={{ borderColor: "#E5DDD5" }}>
      <span
        className="text-6xl font-bold tracking-tight sm:text-7xl"
        style={{ color: "#1D1D1F", fontVariantNumeric: "tabular-nums" }}
      >
        {metric.value}
      </span>
      <span className="mt-3 text-base font-semibold" style={{ color: "#3A3A3C" }}>
        {metric.label}
      </span>
      <span className="mt-1 text-sm" style={{ color: "#6E6E73" }}>
        {metric.description}
      </span>
    </div>
  )
}

export function SocialProof() {
  return (
    <section
      id="numeros"
      className="min-h-screen flex flex-col justify-center px-6 py-20 sm:py-24"
      aria-labelledby="social-proof-heading"
      style={{ background: "#F0EBE3" }}
    >
      <div className="mx-auto max-w-6xl w-full">
        <div className="mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "#B45309" }}>
            Números reales
          </p>
          <h2
            id="social-proof-heading"
            className="text-4xl font-bold tracking-tight sm:text-5xl"
            style={{ color: "#1D1D1F" }}
          >
            Ya confían en nosotros
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>

        <div className="mt-14 pt-10 border-t" style={{ borderColor: "#E5DDD5" }}>
          <p className="text-sm" style={{ color: "#6E6E73" }}>
            Verificá las reseñas en{" "}
            <a
              href="https://instagram.com/cupertinostoreok"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 transition-opacity hover:opacity-60"
              style={{ color: "#1D1D1F" }}
            >
              @cupertinostoreok
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
