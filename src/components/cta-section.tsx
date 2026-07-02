import Image from "next/image"
import Link from "next/link"
import { WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/constants"

const CTA_PHOTO = "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&h=1100&fit=crop&q=85"

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function CtaSection() {
  const year = new Date().getFullYear()

  return (
    <section
      id="contacto"
      className="min-h-screen flex flex-col lg:flex-row"
      aria-labelledby="cta-heading"
    >
      {/* Foto */}
      <div className="relative w-full lg:w-1/2 min-h-72 lg:min-h-0">
        <Image
          src={CTA_PHOTO}
          alt="iPhone en uso"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          style={{ objectPosition: "center 20%" }}
        />
      </div>

      {/* Contenido + footer integrado */}
      <div
        className="w-full lg:w-1/2 flex flex-col px-8 py-14 sm:px-14 lg:px-20"
        style={{ background: "#FAF7F2" }}
      >
        {/* CTA content — crece para llenar espacio */}
        <div className="flex flex-col flex-1 justify-center">
          <p
            className="mb-5 text-xs font-semibold uppercase tracking-[0.18em]"
            style={{ color: "#B45309" }}
          >
            Sin intermediarios
          </p>

          <h2
            id="cta-heading"
            className="mb-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
            style={{ color: "#1D1D1F" }}
          >
            ¿Listo para tu iPhone?
          </h2>

          <p className="mb-10 text-base leading-relaxed max-w-sm" style={{ color: "#6E6E73" }}>
            Escribinos y respondemos al instante. Sin formularios, sin esperas.
          </p>

          {/* Métricas */}
          <div className="flex items-center gap-8 mb-12">
            {[
              { v: "+500", l: "clientes" },
              { v: "4.9★", l: "calificación" },
              { v: "48hs", l: "envío CABA" },
            ].map((m, i) => (
              <div key={i}>
                <p className="text-2xl font-bold" style={{ color: "#1D1D1F" }}>{m.v}</p>
                <p className="text-xs mt-0.5" style={{ color: "#6E6E73" }}>{m.l}</p>
              </div>
            ))}
          </div>

          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center self-start px-10 py-4 text-base"
          >
            Chatear ahora →
          </Link>
        </div>

        {/* Footer integrado */}
        <div
          className="mt-14 pt-8 border-t"
          style={{ borderColor: "#E8E0D4" }}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm font-semibold" style={{ color: "#1D1D1F" }}>
                Cupertino Store
              </p>
              <p className="text-xs mt-0.5" style={{ color: "#6E6E73" }}>
                Buenos Aires, Argentina
              </p>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <Link
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-60"
                style={{ color: "#1D1D1F" }}
                aria-label="Instagram de Cupertino Store"
              >
                <InstagramIcon />
                <span className="hidden sm:inline">Instagram</span>
              </Link>
              <div className="w-px h-4" style={{ background: "#D1C9BF" }} />
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-60"
                style={{ color: "#1D1D1F" }}
                aria-label="WhatsApp de Cupertino Store"
              >
                <WhatsAppIcon />
                <span className="hidden sm:inline">WhatsApp</span>
              </Link>
            </div>
          </div>

          <p className="text-xs" style={{ color: "#8E8E93" }}>
            © {year} Cupertino Store. Distribuidor autorizado de productos Apple importados legalmente.
          </p>
        </div>
      </div>
    </section>
  )
}
