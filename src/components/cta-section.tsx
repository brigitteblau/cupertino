import Image from "next/image"
import Link from "next/link"
import { WHATSAPP_URL } from "@/lib/constants"

const CTA_PHOTO = "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&h=1000&fit=crop&q=85"

export function CtaSection() {
  return (
    <section
      id="contacto"
      className="overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="flex flex-col lg:flex-row min-h-120">
        {/* Photo side */}
        <div className="relative w-full lg:w-1/2 min-h-75 lg:min-h-0">
          <Image
            src={CTA_PHOTO}
            alt="iPhone en uso"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            style={{ objectPosition: "center 20%" }}
          />
          {/* Subtle dark overlay on bottom for text legibility on mobile */}
          <div
            className="absolute inset-0 lg:hidden"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)" }}
          />
        </div>

        {/* Text side */}
        <div
          className="relative w-full lg:w-1/2 flex flex-col justify-center px-8 py-16 sm:px-12 lg:px-16"
          style={{ background: "#1C1C1E" }}
        >
          {/* Subtle top border accent */}
          <div
            className="absolute top-0 left-8 right-8 lg:left-0 lg:right-0 h-px"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
            Sin intermediarios
          </p>

          <h2
            id="cta-heading"
            className="mb-5 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl"
          >
            ¿Listo para tu
            <br />
            iPhone?
          </h2>

          <p className="mb-8 text-base text-white/50 leading-relaxed max-w-sm">
            Escribinos ahora y recibís respuesta al instante. Sin formularios, sin esperas.
          </p>

          {/* Stats row */}
          <div className="flex items-center gap-6 mb-10">
            <div>
              <p className="text-2xl font-bold text-white">+500</p>
              <p className="text-xs text-white/40 mt-0.5">clientes</p>
            </div>
            <div className="w-px h-8" style={{ background: "rgba(255,255,255,0.12)" }} />
            <div>
              <p className="text-2xl font-bold text-white">4.9★</p>
              <p className="text-xs text-white/40 mt-0.5">calificación</p>
            </div>
            <div className="w-px h-8" style={{ background: "rgba(255,255,255,0.12)" }} />
            <div>
              <p className="text-2xl font-bold text-white">48hs</p>
              <p className="text-xs text-white/40 mt-0.5">envío CABA</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center px-8 py-3.5 text-sm"
              aria-label="Chatear por WhatsApp"
            >
              Chatear ahora →
            </Link>
            <Link
              href="#productos"
              className="btn-ghost inline-flex items-center justify-center px-8 py-3.5 text-sm"
            >
              Ver precios
            </Link>
          </div>

          <p className="mt-6 text-xs text-white/25">
            Atención de lunes a sábado · Envíos a todo el país
          </p>
        </div>
      </div>
    </section>
  )
}
