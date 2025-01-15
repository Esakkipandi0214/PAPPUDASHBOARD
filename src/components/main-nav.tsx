import Link from "next/link"

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
        href="/UserManagement"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Users
      </Link>
      <Link
        href="/applications"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Applications
      </Link>
      <Link
        href="/locations"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Locations
      </Link>
      <Link
        href="/feedbacks"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Feedbacks
      </Link>
    </nav>
  )
}

