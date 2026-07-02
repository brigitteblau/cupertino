import Link from "next/link"
import { PhoneMockup } from "@/components/ui/phone-mockup"
import { WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/constants"

export function Hero() {
  return (
    <section
      className="hero-bg relative min-h-screen flex items-center overflow-hidden"
      aria-label="Inicio"
    >
      {/* Decorative orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-1/4 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, #2563EB 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-28 flex flex-col-reverse items-center gap-16 lg:flex-row lg:justify-between lg:gap-12">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left max-w-xl">
          <p
            className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400 animate-fade-in"
            style={{ animationDelay: "0ms" }}
          >
            Cupertino Store · Buenos Aires
          </p>

          <h1
            className="mb-6 text-5xl font-bold leading-[1.04] tracking-tight text-white sm:text-6xl xl:text-7xl animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            iPhone a
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #C084FC 0%, #818CF8 100%)",
              }}
            >
              precio oficial.
            </span>
          </h1>

          <p
            className="mb-10 text-lg leading-relaxed text-white/55 sm:text-xl animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            Importados directo. Garantía certificada.
            <br className="hidden sm:block" />
            Envío en 24‑48hs a CABA.
          </p>

          <div
            className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block px-8 py-3.5 text-base"
              aria-label="Consultar por WhatsApp"
            >
              Consultar por WhatsApp
            </Link>

            <Link
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-block px-8 py-3.5 text-base"
              aria-label="Ver stock en Instagram"
            >
              Ver stock en Instagram
            </Link>
          </div>

          <p
            className="mt-8 text-sm text-white/25 animate-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            +500 clientes · 4.9★ · Distribuidor autorizado
          </p>
        </div>

        {/* Phones visual */}
        <div
          className="relative flex items-end justify-center gap-6 animate-fade-in flex-shrink-0"
          style={{ animationDelay: "200ms" }}
          aria-hidden="true"
        >
          {/* Back phone (slightly smaller, shifted) */}
          <div className="hidden sm:block opacity-60" style={{ marginBottom: -24 }}>
            <PhoneMockup
              screenGradient={["#C4B898", "#A09070", "#7A6A50"]}
              frameColor="#8A7A60"
              size="md"
            />
          </div>

          {/* Front / main phone */}
          <PhoneMockup
            screenGradient={["#3A3A3C", "#2C2C2E", "#1C1C1E"]}
            frameColor="#2A2A2C"
            size="lg"
          />

          {/* Floating badge */}
          <div
            className="absolute -bottom-4 -right-2 rounded-2xl px-4 py-2.5 text-center shadow-xl hidden sm:block"
            style={{
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <p className="text-xs font-semibold text-white">iPhone 17 Pro</p>
            <p className="text-lg font-bold text-white">USD 1.220</p>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 inset-x-0 h-24"
        style={{
          background: "linear-gradient(to bottom, transparent, #0A0814)",
        }}
      />
    </section>
  )
}
