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
      <span className="mt-2 text-base font-semibold text-white/80">{metric.label}</span>
      <span className="mt-1 text-sm text-white/40">{metric.description}</span>
    </div>
  )
}

export function SocialProof() {
  return (
    <section
      id="numeros"
      className="relative px-6 py-24 sm:py-32 overflow-hidden"
      aria-labelledby="social-proof-heading"
      style={{
        background: "linear-gradient(135deg, #1E0B4B 0%, #2D1B6B 40%, #1A1040 100%)",
      }}
    >
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 rounded-full opacity-30"
        style={{
          background: "radial-gradient(ellipse, #7C3AED 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
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
          <p className="text-sm text-white/35">
            Verificá las reseñas en{" "}
            <a
              href="https://instagram.com/cupertinostoreok"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-white underline underline-offset-4 transition-colors"
            >
              @cupertinostoreok
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
