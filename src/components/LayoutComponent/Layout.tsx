"use client"


import React from "react"

interface LayoutProps {
  children: React.ReactNode
}

import { MainNav } from "@/components/main-nav"

import Image from "next/image"
import { Search } from "@/components/search"
import { UserNav } from "@/components/user-nav"

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <span>
          <div className="md:hidden">
                  <Image
                    src="/examples/dashboard-light.png"
                    width={1280}
                    height={866}
                    alt="Dashboard"
                    className="block dark:hidden"
                  />
                  <Image
                    src="/examples/dashboard-dark.png"
                    width={1280}
                    height={866}
                    alt="Dashboard"
                    className="hidden dark:block"
                  />
                </div>
                  <div className="border-b">
                    <div className="flex h-16 items-center px-4">
                      <MainNav className="mx-6" />
                      <div className="ml-auto flex items-center space-x-4">
                        <Search />
                        <UserNav />
                      </div>
                    </div>
                  </div>
                  </span>

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-auto bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
