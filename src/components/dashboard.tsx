"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { RefreshCw, AlertCircle, Sparkles } from "lucide-react"

type DashboardState = "loading" | "loaded" | "error" | "empty"

export function Dashboard() {
  const [state, setState] = useState<DashboardState>("loading")
  const [currentTime, setCurrentTime] = useState<Date>(new Date())

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setState("loaded")
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Update time every minute
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  const getGreeting = () => {
    const hour = currentTime.getHours()
    if (hour < 12) return "Good morning"
    if (hour < 18) return "Good afternoon"
    return "Good evening"
  }

  const formatTime = () => {
    return currentTime.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
  }

  const formatFullTime = () => {
    return currentTime.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
  }

  const handleRetry = () => {
    setState("loading")
    setTimeout(() => setState("loaded"), 1000)
  }

  const handleGetStarted = () => {
    setState("loaded")
  }

  // Loading State
  if (state === "loading") {
    return (
      <main
        role="main"
        aria-label="Dashboard"
        aria-busy="true"
        className="w-full max-w-7xl mx-auto p-4 sm:p-6 space-y-6"
      >
        <Card className="border-b shadow-none">
          <div className="p-4">
            <Skeleton className="h-8 w-48" />
          </div>
        </Card>

        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-32" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-4 w-64 mb-2" />
            <Skeleton className="h-6 w-24" />
          </CardContent>
        </Card>

        <Card className="p-4">
          <Skeleton className="h-4 w-48" />
        </Card>
      </main>
    )
  }

  // Error State
  if (state === "error") {
    return (
      <main
        role="main"
        aria-label="Dashboard"
        className="w-full max-w-7xl mx-auto p-4 sm:p-6"
      >
        <Alert variant="destructive" aria-live="polite">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            <p className="mb-4">Failed to load dashboard</p>
            <Button
              onClick={handleRetry}
              variant="outline"
              size="sm"
              className="gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Retry
            </Button>
          </AlertDescription>
        </Alert>
      </main>
    )
  }

  // Empty State
  if (state === "empty") {
    return (
      <main
        role="main"
        aria-label="Dashboard"
        className="w-full max-w-7xl mx-auto p-4 sm:p-6"
      >
        <Card className="p-12 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
              <Sparkles className="h-12 w-12 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Welcome to your dashboard</h2>
              <p className="text-muted-foreground">Get started by setting up your workspace</p>
            </div>
            <Button onClick={handleGetStarted} className="mt-4">
              Get Started
            </Button>
          </div>
        </Card>
      </main>
    )
  }

  // Loaded State
  return (
    <main
      role="main"
      aria-label="Dashboard"
      className="w-full max-w-7xl mx-auto p-4 sm:p-6 space-y-6"
    >
      {/* Dashboard Header */}
      <Card className="border-b shadow-none rounded-none sm:rounded-lg sm:border sm:shadow-sm">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
      </Card>

      {/* Greeting Card */}
      <Card role="region" aria-labelledby="greeting-title">
        <CardHeader>
          <CardTitle id="greeting-title" className="text-xl">
            {getGreeting()}!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-muted-foreground mb-2">
            Welcome back to your dashboard. Here's what's happening today.
          </p>
          <Badge
            variant="secondary"
            aria-label={formatFullTime()}
          >
            {formatTime()}
          </Badge>
        </CardContent>
      </Card>

      {/* Dashboard Content */}
      <Card className="p-4">
        <p className="text-center text-muted-foreground">
          Your content will appear here
        </p>
      </Card>
    </main>
  )
}
