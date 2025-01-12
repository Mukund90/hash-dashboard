"use client"

import { useState } from "react"
import { Moon, Sun, Hash } from 'lucide-react'
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { MainNav } from "./main-nav"

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { setTheme, theme } = useTheme()
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground">
      <aside className={`w-64 bg-card border-r border-border p-4 transition-all duration-300 ease-in-out ${isNavOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="flex items-center space-x-2 mb-6">
          <Hash className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">HASH</span>
        </div>
        <MainNav className="flex-col items-start space-y-4" />
      </aside>
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto p-4">
          {children}
        </main>
      </div>
    </div>
  )
}

