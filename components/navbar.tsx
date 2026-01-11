// components/navbar.tsx
import React from 'react'
import { Search, Menu, Sun, Moon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="container mx-auto px-4">
                <div className="flex h-14 md:h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 md:h-10 md:w-10 rounded-lg bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                            <span className="text-white font-bold text-sm md:text-lg">LOGO</span>
                        </div>
                        <div className="block">
                            <h1 className="text-base md:text-xl font-bold tracking-tight">Organization</h1>
                            <p className="text-xs text-muted-foreground hidden md:block">Tagline here</p>
                        </div>
                    </div>

                    {/* Search Bar - Desktop */}
                    <div className="hidden md:flex items-center gap-4 flex-1 max-w-md mx-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search..."
                                className="pl-9 w-full"
                            />
                        </div>
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-2 md:gap-4">
                        {/* Search Button - Mobile */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden rounded-full"
                        >
                            <Search className="h-5 w-5" />
                        </Button>

                        {/* Mobile Menu Button */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="md:hidden">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-75 sm:w-100">
                                <div className="mt-6">
                                    {/* Mobile Search */}
                                    <div className="relative mb-6">
                                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            type="search"
                                            placeholder="Search..."
                                            className="pl-9 w-full"
                                        />
                                    </div>

                                    {/* Mobile Menu Items */}
                                    <div className="space-y-2">
                                        <Button variant="ghost" className="w-full justify-start">
                                            Home
                                        </Button>
                                        <Button variant="ghost" className="w-full justify-start">
                                            Projects
                                        </Button>
                                        <Button variant="ghost" className="w-full justify-start">
                                            Media
                                        </Button>
                                        <Button variant="ghost" className="w-full justify-start">
                                            Contact
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>

                {/* Mobile Search Bar - Optional if you want it visible */}
                <div className="md:hidden py-2">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search..."
                            className="pl-9 w-full"
                        />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar