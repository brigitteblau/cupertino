"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures"
import { products, WHATSAPP_URL, type Product } from "@/lib/constants"

function ProductCard({ product }: { product: Product }) {
  const waLink = `https://wa.me/5491161213913?text=Hola%2C%20me%20interesa%20el%20${encodeURIComponent(product.name)}`
  const isMac = product.type === "mac"

  return (
    <article
      className="product-card flex flex-col rounded-2xl overflow-hidden bg-white shrink-0"
      style={{
        width: "clamp(220px, 72vw, 260px)",
        boxShadow: "0 1px 8px rgba(0,0,0,0.06), 0 4px 20px rgba(0,0,0,0.05)",
      }}
    >
      {/* Image area */}
      <div
        className="relative overflow-hidden"
        style={{
          background: "#F5F5F7",
          height: isMac ? 190 : 240,
        }}
      >
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{
                background: product.badge === "Nuevo" ? "#111111" : "#E8E8ED",
                color: product.badge === "Nuevo" ? "#fff" : "#3A3A3C",
              }}
            >
              {product.badge}
            </span>
          </div>
        )}

        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 640px) 72vw, 260px"
          className="object-cover"
          style={{ objectPosition: isMac ? "center" : "center top" }}
        />
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-4">
        <h3 className="text-sm font-semibold text-gray-900 leading-snug">{product.name}</h3>
        <p className="text-xs text-gray-400 mt-0.5 mb-4">{product.storage}</p>

        <div className="mt-auto flex items-end justify-between gap-2">
          <div>
            <p className="text-xs text-gray-400 mb-0.5">Precio oficial</p>
            <p className="text-xl font-bold text-gray-900 leading-none">
              USD {product.price.toLocaleString("es-AR")}
            </p>
          </div>
          <Link
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-75"
            style={{ background: "#111111" }}
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
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      dragFree: true,
      containScroll: "trimSnaps",
    },
    [WheelGesturesPlugin()]
  )

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
    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section
      id="productos"
      className="py-20 sm:py-28"
      aria-labelledby="products-heading"
      style={{
        background: "#F5F5F7",
        borderRadius: "20px 20px 0 0",
        boxShadow: "0 -6px 40px rgba(0,0,0,0.25)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between px-6">
          <div>
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
              Catálogo
            </p>
            <h2
              id="products-heading"
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Stock disponible
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Todos los precios en USD · Precio oficial de importación
            </p>
          </div>

          <div className="hidden sm:flex gap-2">
            <button
              onClick={scrollPrev}
              disabled={!prevEnabled}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-all hover:border-gray-400 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Anterior"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={scrollNext}
              disabled={!nextEnabled}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-all hover:border-gray-400 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Siguiente"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Embla track */}
        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
          ref={emblaRef}
        >
          <div className="flex gap-4 px-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Dots indicator for mobile */}
        <div className="mt-6 flex justify-center gap-1.5 sm:hidden px-6">
          {products.map((_, i) => (
            <div
              key={i}
              className="h-1 w-4 rounded-full"
              style={{ background: i === 0 ? "#111111" : "#D1D1D6" }}
            />
          ))}
        </div>

        <div className="mt-6 px-6">
          <p className="text-sm text-gray-400">
            ¿No encontrás tu modelo?{" "}
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-700 hover:text-gray-900 underline underline-offset-4"
            >
              Consultanos por WhatsApp
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
