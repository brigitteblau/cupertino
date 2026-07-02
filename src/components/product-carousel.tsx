"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { PhoneMockup } from "@/components/ui/phone-mockup"
import { LaptopMockup } from "@/components/ui/laptop-mockup"
import { Badge } from "@/components/ui/badge"
import { products, WHATSAPP_URL, type Product } from "@/lib/constants"

function ProductCard({ product }: { product: Product }) {
  const waLink = `https://wa.me/5491161213913?text=Hola%2C%20me%20interesa%20el%20${encodeURIComponent(product.name)}`

  return (
    <article
      className="product-card flex flex-col rounded-2xl overflow-hidden bg-white"
      style={{ width: 280, boxShadow: "0 2px 20px rgba(0,0,0,0.08)" }}
    >
      {/* Mockup area */}
      <div
        className="flex items-end justify-center pt-8 pb-6 relative"
        style={{ background: "linear-gradient(160deg, #F0EEF8 0%, #E8E4F4 100%)", minHeight: 260 }}
      >
        {product.badge && (
          <div className="absolute top-4 right-4">
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{
                background: product.badge === "Nuevo" ? "#EDE9FE" : "#FEF3C7",
                color: product.badge === "Nuevo" ? "#6D28D9" : "#92400E",
              }}
            >
              {product.badge}
            </span>
          </div>
        )}

        {product.type === "iphone" ? (
          <PhoneMockup
            screenGradient={product.screenGradient}
            frameColor={product.frameColor}
            size="md"
          />
        ) : (
          <LaptopMockup screenGradient={product.screenGradient} size="sm" />
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-sm font-semibold text-gray-900 mb-0.5">{product.name}</h3>
        <p className="text-xs text-gray-400 mb-4">{product.storage}</p>

        <div className="mt-auto flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400 mb-0.5">Precio oficial</p>
            <p className="text-xl font-bold text-gray-900">
              USD {product.price.toLocaleString("es-AR")}
            </p>
          </div>
          <Link
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-4 py-2 text-xs font-semibold text-white transition-all duration-200 hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #6D28D9, #4F46E5)" }}
            aria-label={`Consultar por ${product.name}`}
          >
            Consultar
          </Link>
        </div>
      </div>
    </article>
  )
}

export function ProductCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  })

  const [prevEnabled, setPrevEnabled] = useState(false)
  const [nextEnabled, setNextEnabled] = useState(true)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevEnabled(emblaApi.canScrollPrev())
    setNextEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    return () => { emblaApi.off("select", onSelect); emblaApi.off("reInit", onSelect) }
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section
      id="productos"
      className="py-24 sm:py-32"
      aria-labelledby="products-heading"
      style={{ background: "#F7F7F9" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex items-end justify-between px-6">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-purple-600">
              Catálogo
            </p>
            <h2
              id="products-heading"
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Stock disponible
            </h2>
            <p className="mt-2 text-gray-500">
              Todos los precios en USD · Precio oficial de importación
            </p>
          </div>

          {/* Nav arrows */}
          <div className="hidden sm:flex gap-2">
            <button
              onClick={scrollPrev}
              disabled={!prevEnabled}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all hover:border-purple-300 hover:text-purple-600 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={scrollNext}
              disabled={!nextEnabled}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all hover:border-purple-300 hover:text-purple-600 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Siguiente"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Embla track */}
        <div className="overflow-hidden px-6" ref={emblaRef}>
          <div className="flex gap-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 px-6">
          <p className="text-sm text-gray-400">
            ¿No encontrás tu modelo?{" "}
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-purple-600 hover:text-purple-700 underline underline-offset-4"
            >
              Consultanos por WhatsApp
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
