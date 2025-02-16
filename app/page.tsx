"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import LoadingPage from "../components/LoadingPage"

const LandingPage = dynamic(() => import("../components/LandingPage"), {
  loading: () => <LoadingPage />,
})

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // Show loading page for 3 seconds

    return () => clearTimeout(timer)
  }, [])

  return isLoading ? <LoadingPage /> : <LandingPage />
}

