import Link from "next/link"
import { WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/constants"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="px-6 py-12"
      style={{
        background: "#0A0A0A",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
      aria-label="Pie de página"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:justify-between sm:items-center">
          {/* Brand */}
          <div>
            <p className="text-base font-semibold text-white">Cupertino Store</p>
            <p className="mt-1 text-sm text-white/35">Buenos Aires, Argentina</p>
          </div>

          {/* Links */}
          <nav aria-label="Links de contacto">
            <ul className="flex items-center gap-6">
              <li>
                <Link
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/40 transition-colors hover:text-white"
                  aria-label="Instagram de Cupertino Store"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/40 transition-colors hover:text-white"
                  aria-label="WhatsApp de Cupertino Store"
                >
                  WhatsApp
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div
          className="mt-8 pt-8 flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-xs text-white/20">
            © {year} Cupertino Store. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/20">
            Distribuidor autorizado de productos Apple importados legalmente.
          </p>
        </div>
      </div>
    </footer>
  )
}
