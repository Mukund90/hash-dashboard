import Link from "next/link"
import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
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
    </nav>
  )
}

