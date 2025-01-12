import Link from "next/link"
import { cn } from "@/lib/utils"
import { Moon, Sun, Hash } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useState } from "react"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {


  const { setTheme, theme } = useTheme()
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <nav
      className={cn("flex", className)}
      {...props}
    >
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Dashboard
      </Link>
      <Link
        href="/transaction"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Transaction Report
      </Link>
      <Link
        href="/gaming"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Manage Gaming Console
      </Link>
      <Link
        href="/booking"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Manage Booking
      </Link>
      <Link
        href="/tournament"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Tournament Organize
      </Link>
      <Link
        href="/account"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        My Account
      </Link>
      <div>
      <Button variant="outline" size="icon" onClick={() => setIsNavOpen(!isNavOpen)} className="md:hidden">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
          <Button variant="outline" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
      </div>
    </nav>
  )
}

