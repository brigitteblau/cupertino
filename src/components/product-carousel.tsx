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
        width: "clamp(240px, 68vw, 280px)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}
    >
      <div
        className="relative overflow-hidden"
        style={{ background: "#F5F5F7", height: isMac ? 200 : 260 }}
      >
        {product.badge && (
          <span
            className="absolute top-3 left-3 z-10 text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{
              background: product.badge === "Nuevo" ? "#1D1D1F" : "#E8E8ED",
              color: product.badge === "Nuevo" ? "#fff" : "#3A3A3C",
            }}
          >
            {product.badge}
          </span>
        )}
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 640px) 68vw, 280px"
          className="object-cover"
          style={{ objectPosition: isMac ? "center" : "center top" }}
        />
      </div>

      <div className="flex flex-col flex-1 p-5">
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
            style={{ background: "#1D1D1F" }}
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
    { align: "start", dragFree: true, containScroll: "trimSnaps" },
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
    return () => { emblaApi.off("select", onSelect); emblaApi.off("reInit", onSelect) }
  }, [emblaApi, onSelect])

  return (
    <section
      id="productos"
      className="min-h-screen flex flex-col justify-center py-20 sm:py-24"
      aria-labelledby="products-heading"
      style={{ background: "#F5F5F7" }}
    >
      <div className="mx-auto max-w-7xl w-full">
        {/* Header */}
        <div className="mb-12 flex items-end justify-between px-6">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "#B45309" }}>
              Catálogo
            </p>
            <h2
              id="products-heading"
              className="text-4xl font-bold tracking-tight sm:text-5xl"
              style={{ color: "#1D1D1F" }}
            >
              Stock disponible
            </h2>
            <p className="mt-2 text-sm" style={{ color: "#8E8E93" }}>
              Todos los precios en USD · Precio oficial de importación
            </p>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!prevEnabled}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white transition-all hover:border-gray-400 disabled:opacity-30"
              aria-label="Anterior"
            >
              <ChevronLeft size={16} className="text-gray-600" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!nextEnabled}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white transition-all hover:border-gray-400 disabled:opacity-30"
              aria-label="Siguiente"
            >
              <ChevronRight size={16} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Track */}
        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
          ref={emblaRef}
        >
          <div className="flex gap-5 px-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* CTA bottom */}
        <div className="mt-10 px-6">
          <p className="text-sm" style={{ color: "#8E8E93" }}>
            ¿No encontrás tu modelo?{" "}
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 hover:opacity-70"
              style={{ color: "#1D1D1F" }}
            >
              Consultanos por WhatsApp
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
