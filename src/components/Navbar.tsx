"use client"
import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

const Navbar = () => {

    const { setTheme } = useTheme()

    return (
    <nav className="fixed inset-x-0 top-0 z-10 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
        <div className="container px-4 md:px-6">
            <div className="flex h-16 items-center">
                <div className="mr-auto flex items-center gap-2">
                    <Link href={"/"}>
                        <span className="font-protest text-5xl md:text-6xl font-semibold">
                            ar
                        </span>
                    </Link>
                </div>
                <div className="ml-auto flex items-center space-x-4">
                    <Link href="/aboutpage">
                        <Button variant="link" className="font-bold text-lg">About</Button>
                    </Link>
                    <Link href="/">
                        <Button variant="link" className="font-bold text-lg">Project</Button>
                    </Link>
                    <Link href="/">
                        <Button variant="link" className="font-bold text-lg">Contact</Button>
                    </Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                                System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
