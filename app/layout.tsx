import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>IdeaLab - Ideas into Reality</title>
        <meta name="description" content="Turn your innovative ideas into reality with IdeaLab at Govt Model Engineering College" />
        <link rel="icon" href="https://idealab.mec.ac.in/static/media/idealab.7524a97ccb12597d4ef1.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

