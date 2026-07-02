import Link from "next/link"
import { WHATSAPP_URL } from "@/lib/constants"

export function CtaSection() {
  return (
    <section
      id="contacto"
      className="relative px-6 py-28 sm:py-36 overflow-hidden"
      aria-labelledby="cta-heading"
      style={{ background: "#0A0814" }}
    >
      {/* Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div
          className="w-96 h-96 rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-2xl text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-purple-400">
          Sin intermediarios
        </p>

        <h2
          id="cta-heading"
          className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl"
        >
          ¿Listo para tu
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #C084FC 0%, #818CF8 100%)",
            }}
          >
            iPhone?
          </span>
        </h2>

        <p className="mb-10 text-lg text-white/50">
          Escribinos ahora y recibís respuesta al instante.
          <br className="hidden sm:block" />
          Sin formularios, sin esperas.
        </p>

        <Link
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-purple inline-block px-10 py-4 text-base"
          aria-label="Chatear por WhatsApp ahora"
        >
          Chatear ahora →
        </Link>

        <p className="mt-6 text-xs text-white/25">
          Atención de lunes a sábado · Envíos a todo el país
        </p>
      </div>
    </section>
  )
}
