import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Jacob Biju - Portfolio | Semiconductor Professional transitioning to IT",
  description:
    "Portfolio of Jacob Biju, a Semiconductor Professional transitioning to the IT Sector. Specializing in AI, Automation, and Software Development.",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
