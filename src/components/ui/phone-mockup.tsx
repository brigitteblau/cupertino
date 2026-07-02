type PhoneMockupProps = {
  screenGradient: [string, string, string]
  frameColor: string
  size?: "sm" | "md" | "lg"
}

const sizes = {
  sm: { width: 120, height: 240, radius: 28, screenRadius: 20, islandW: 52, islandH: 16 },
  md: { width: 160, height: 320, radius: 36, screenRadius: 27, islandW: 68, islandH: 20 },
  lg: { width: 220, height: 440, radius: 48, screenRadius: 38, islandW: 90, islandH: 26 },
}

export function PhoneMockup({ screenGradient, frameColor, size = "md" }: PhoneMockupProps) {
  const s = sizes[size]

  return (
    <div
      className="phone-frame relative flex-shrink-0 select-none"
      style={{
        width: s.width,
        height: s.height,
        borderRadius: s.radius,
        background: "#1C1C1E",
      }}
      aria-hidden="true"
    >
      {/* Side volume buttons */}
      <div
        className="phone-side-btn absolute"
        style={{ left: -4, top: "22%", width: 4, height: 32 }}
      />
      <div
        className="phone-side-btn absolute"
        style={{ left: -4, top: "34%", width: 4, height: 52 }}
      />
      <div
        className="phone-side-btn absolute"
        style={{ left: -4, top: "48%", width: 4, height: 52 }}
      />
      {/* Power button */}
      <div
        className="phone-side-btn absolute"
        style={{ right: -4, top: "30%", width: 4, height: 64 }}
      />

      {/* Screen */}
      <div
        className="phone-screen"
        style={{
          borderRadius: s.screenRadius,
          background: `linear-gradient(160deg, ${screenGradient[0]} 0%, ${screenGradient[1]} 50%, ${screenGradient[2]} 100%)`,
        }}
      >
        {/* Dynamic Island */}
        <div
          className="dynamic-island"
          style={{
            width: s.islandW,
            height: s.islandH,
            borderRadius: s.islandH / 2,
            top: Math.round(s.height * 0.04),
          }}
        />

        {/* Screen glare */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%)",
            borderRadius: s.screenRadius,
          }}
        />

        {/* Home indicator */}
        <div
          className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white/30"
          style={{ width: s.islandW * 0.55, height: 4 }}
        />
      </div>
    </div>
  )
}
