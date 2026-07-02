"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown } from "lucide-react"

const LINES = [
  { text: "Stock Apple", accent: false },
  { text: "sellado y con", accent: false },
  { text: "garantía.", accent: true },
]

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const [mouse, setMouse] = useState({ x: 50, y: 50 })

  const { scrollY } = useScroll()
  const textOpacity = useTransform(scrollY, [0, 320], [1, 0])
  const bgScale     = useTransform(scrollY, [0, 600], [1, 1.07])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMouse({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <div
      ref={ref}
      className="relative h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
      aria-label="Inicio"
    >
      {/* ── Fallback cálido ── */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(160deg,#EDE0D0 0%,#D8CCB8 100%)" }}
      />

      {/* ── Foto de fondo ── */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          scale: bgScale,
          transformOrigin: "center center",
        }}
      />

      {/* ── Gradient inferior: foto domina arriba, texto legible abajo ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 38%, rgba(0,0,0,0.35) 62%, rgba(0,0,0,0.72) 82%, rgba(0,0,0,0.88) 100%)",
        }}
      />

      {/* ── Spotlight sutil ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(500px circle at ${mouse.x}% ${mouse.y}%, rgba(255,200,100,0.06) 0%, transparent 55%)`,
          transition: "background 0.15s ease",
        }}
      />

      {/* ── Texto: anclado al fondo ── */}
      <motion.div
        className="absolute bottom-0 inset-x-0 px-6 pb-20 sm:pb-28"
        style={{ opacity: textOpacity }}
      >
        <div className="mx-auto max-w-7xl">

          <motion.p
            className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/50"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Cupertino Store · Buenos Aires
          </motion.p>

          <h1 className="mb-0" aria-label="Stock Apple sellado y con garantía.">
            {LINES.map((line, i) => (
              <motion.span
                key={line.text}
                className="block font-bold tracking-tight leading-[1.04]"
                style={{
                  fontSize: "clamp(2.4rem, 6vw, 5rem)",
                  color: line.accent ? "#F0C060" : "#FFFFFF",
                }}
                initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.7,
                  delay: 0.3 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {line.text}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="mt-5 text-base text-white/55 max-w-sm sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.72 }}
          >
            Importados directo · Garantía certificada · 24-48hs CABA
          </motion.p>
        </div>
      </motion.div>

      {/* ── Scroll cue ── */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <ChevronDown size={18} className="text-white/50" />
      </motion.div>
    </div>
  )
}
