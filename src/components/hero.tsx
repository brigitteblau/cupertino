"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/constants"

const LINES = [
  { text: "Stock Apple", accent: false },
  { text: "sellado y con", accent: false },
  { text: "garantía.", accent: true },
]

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [mouse, setMouse] = useState({ x: 50, y: 50 })

  const { scrollY } = useScroll()
  const contentOpacity = useTransform(scrollY, [0, 380], [1, 0])
  const contentY      = useTransform(scrollY, [0, 380], [0, -32])
  const bgScale       = useTransform(scrollY, [0, 600], [1, 1.1])

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMouse({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <section
      ref={sectionRef}
      className="relative h-screen sticky top-0 z-0 overflow-hidden"
      onMouseMove={handleMouseMove}
      aria-label="Inicio"
    >
      {/* ── Fallback gradient (shows if image not found) ── */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(160deg, #1a0c04 0%, #0f0f0f 50%, #08101e 100%)",
        }}
      />

      {/* ── Hero photo with parallax ── */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 60%",
          scale: bgScale,
          transformOrigin: "center center",
        }}
      />

      {/* ── Dark overlay ── */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.68)" }}
      />

      {/* ── Warm vignette (top & sides) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 50% 0%, rgba(10,5,0,0.6) 0%, transparent 60%)",
        }}
      />

      {/* ── Bottom fade into next section ── */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0 h-48 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(15,15,15,0.95))" }}
      />

      {/* ── Mouse spotlight ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(650px circle at ${mouse.x}% ${mouse.y}%, rgba(245,158,11,0.11) 0%, transparent 60%)`,
          transition: "background 0.1s ease",
        }}
      />

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 h-full flex flex-col justify-center"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="mx-auto max-w-7xl px-6 w-full">

          {/* Label */}
          <motion.p
            className="mb-5 text-xs font-semibold uppercase tracking-[0.22em]"
            style={{ color: "#F59E0B" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Cupertino Store · Buenos Aires
          </motion.p>

          {/* Headline — blur reveal por línea */}
          <h1 className="mb-8" aria-label="Stock Apple sellado y con garantía.">
            {LINES.map((line, i) => (
              <motion.span
                key={line.text}
                className="block text-5xl font-bold tracking-tight leading-[1.06] sm:text-6xl xl:text-[80px]"
                style={{ color: line.accent ? "#F59E0B" : "#FFFFFF" }}
                initial={{ opacity: 0, y: 28, filter: "blur(14px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.75,
                  delay: 0.25 + i * 0.13,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {line.text}
              </motion.span>
            ))}
          </h1>

          {/* Subtítulo */}
          <motion.p
            className="mb-10 text-base leading-relaxed sm:text-lg max-w-md"
            style={{ color: "rgba(255,255,255,0.48)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.68 }}
          >
            Importados directo. Garantía certificada.
            <br className="hidden sm:block" />
            Envío en 24‑48hs a CABA.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.82 }}
          >
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center px-8 py-3.5 text-sm"
              aria-label="Consultar por WhatsApp"
            >
              Consultar por WhatsApp
            </Link>
            <Link
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center justify-center px-8 py-3.5 text-sm"
              aria-label="Ver stock en Instagram"
            >
              Ver stock en Instagram
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.p
            className="mt-8 text-xs"
            style={{ color: "rgba(255,255,255,0.20)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.05 }}
          >
            +500 clientes · 4.9★ · Distribuidor autorizado
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}
