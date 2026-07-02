import * as React from "react"

type BadgeVariant = "new" | "limited" | "default"

type BadgeProps = {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

const variantClasses: Record<BadgeVariant, string> = {
  new: "bg-white/10 text-white border border-white/20",
  limited: "bg-amber-500/15 text-amber-300 border border-amber-500/25",
  default: "bg-white/8 text-white/70 border border-white/12",
}

function getBadgeVariant(text: string): BadgeVariant {
  if (text.toLowerCase().includes("nuevo")) return "new"
  if (text.toLowerCase().includes("limitado")) return "limited"
  return "default"
}

export function Badge({ children, variant, className = "" }: BadgeProps) {
  const resolvedVariant =
    variant ?? (typeof children === "string" ? getBadgeVariant(children) : "default")
  const classes = [
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium backdrop-blur-sm",
    variantClasses[resolvedVariant],
    className,
  ]
    .filter(Boolean)
    .join(" ")

  return <span className={classes}>{children}</span>
}
