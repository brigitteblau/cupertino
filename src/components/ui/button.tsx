import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

type ButtonVariant = "primary" | "secondary"
type ButtonSize = "sm" | "md" | "lg"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "btn-primary bg-white text-black font-semibold rounded-full cursor-pointer",
  secondary:
    "btn-secondary bg-transparent text-white font-semibold rounded-full border border-white/30 cursor-pointer",
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3 text-base",
  lg: "px-9 py-4 text-lg",
}

export function Button({
  variant = "primary",
  size = "md",
  asChild = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"
  const classes = [variantClasses[variant], sizeClasses[size], className]
    .filter(Boolean)
    .join(" ")

  return (
    <Comp className={classes} {...props}>
      {children}
    </Comp>
  )
}
