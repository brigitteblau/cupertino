type LaptopMockupProps = {
  screenGradient: [string, string, string]
  size?: "sm" | "md"
}

const sizes = {
  sm: { width: 240, screenH: 150 },
  md: { width: 320, screenH: 200 },
}

export function LaptopMockup({ screenGradient, size = "md" }: LaptopMockupProps) {
  const s = sizes[size]

  return (
    <div
      className="flex flex-col items-center flex-shrink-0 select-none"
      style={{ width: s.width }}
      aria-hidden="true"
    >
      {/* Lid / Screen */}
      <div
        className="laptop-screen-frame w-full"
        style={{ height: s.screenH }}
      >
        {/* Screen */}
        <div
          className="w-full h-full rounded-md overflow-hidden relative"
          style={{
            background: `linear-gradient(150deg, ${screenGradient[0]} 0%, ${screenGradient[1]} 50%, ${screenGradient[2]} 100%)`,
          }}
        >
          {/* Webcam dot */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#3A3A3C]" />
          {/* Screen glare */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 40%)",
            }}
          />
          {/* Apple logo (simplified) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 24 28" width={s.screenH * 0.18} fill="rgba(255,255,255,0.15)">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.37 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Base */}
      <div className="laptop-base w-full" />
    </div>
  )
}
