// components/sub-navbar.tsx
'use client'

import React, { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
} from '@/components/ui/dropdown-menu'
import { ChevronDown, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"

type SimpleNavItem = {
  title: string
  items: string[]
}

type NestedNavItem = {
  title: string
  subItems: {
    title: string
    items: string[]
  }[]
}

type SubNavItem = SimpleNavItem | NestedNavItem


const subNavItems: SubNavItem[] = [
    {
        title: 'Home',
        items: ['About', 'Introduction', 'Vision', 'Functions', 'Organogram']
    },
    {
        title: 'Project',
        subItems: [
            {
                title: 'In Progress Projects',
                items: ['A', 'B', 'C', 'D', 'E', 'F']
            },
            {
                title: 'Completed Projects',
                items: ['A', 'B', 'C', 'D', 'E', 'F']
            }
        ]
    },
    {
        title: 'Media',
        items: ['Events', 'A', 'B']
    },
    {
        title: 'Tenders',
        items: ['Single Stage Single Envelope', 'Double Stage Envelope']
    },
    {
        title: 'Team',
        items: ['MD', 'GD', 'Office Staff', 'A', 'B']
    },
    {
        title: 'Contact',
        items: []
    },
    {
        title: 'Achievement',
        items: []
    }
]

const SubNavbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex sticky top-14 md:top-16 z-40 w-full border-b bg-muted/40 backdrop-blur">
                <div className="container mx-auto px-4">
                    <div className="flex h-10 md:h-12 items-center">
                        <div className="flex items-center justify-between w-full">
                            {subNavItems.map((item) => (
                                <div key={item.title} className="flex-1 min-w-0">
                                    <div className="flex justify-center">
                                        {'subItems' in item ? (
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button
                                                        variant="ghost"
                                                        className="flex items-center gap-1 hover:bg-muted w-full justify-center px-2 text-xs md:text-sm"
                                                    >
                                                        {item.title}
                                                        <ChevronDown className="h-3 w-3 md:h-4 md:w-4 opacity-50" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="center" className="w-48 md:w-64">
                                                    {item.subItems.map((subItem) => (
                                                        <DropdownMenuSub key={subItem.title}>
                                                            <DropdownMenuSubTrigger className="flex items-center justify-between w-full text-xs md:text-sm">
                                                                {subItem.title}
                                                            </DropdownMenuSubTrigger>
                                                            <DropdownMenuSubContent className="w-40 md:w-48">
                                                                {subItem.items.map((project) => (
                                                                    <DropdownMenuItem key={project} className="text-xs md:text-sm">
                                                                        Project {project}
                                                                    </DropdownMenuItem>
                                                                ))}
                                                            </DropdownMenuSubContent>
                                                        </DropdownMenuSub>
                                                    ))}
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        ) : item.items.length > 0 ? (
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button
                                                        variant="ghost"
                                                        className="flex items-center gap-1 hover:bg-muted w-full justify-center px-2 text-xs md:text-sm"
                                                    >
                                                        {item.title}
                                                        <ChevronDown className="h-3 w-3 md:h-4 md:w-4 opacity-50" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="center" className="w-40 md:w-48">
                                                    {item.items.map((subItem) => (
                                                        <DropdownMenuItem key={subItem} className="text-xs md:text-sm">
                                                            {subItem}
                                                        </DropdownMenuItem>
                                                    ))}
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        ) : (
                                            <Button
                                                variant="ghost"
                                                className="hover:bg-muted w-full justify-center px-2 text-xs md:text-sm"
                                            >
                                                {item.title}
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden sticky top-14 md:top-16 z-40 w-full border-b bg-muted/40 backdrop-blur">
                <div className="container mx-auto px-4">
                    <div className="flex h-12 items-center justify-between">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                                    <Menu className="h-5 w-5" />
                                    <span className="text-sm">Menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-70 sm:w-87.5 p-0">
                                <ScrollArea className="h-full">
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                                        <div className="space-y-2">
                                            {subNavItems.map((item) => (
                                                <div key={item.title} className="space-y-1">
                                                    <div className="font-medium text-sm p-2 hover:bg-muted rounded-md">
                                                        {item.title}
                                                    </div>
                                                    {('subItems' in item ? item.subItems.flatMap(s => s.items) : item.items).length > 0 && (
                                                        <div className="pl-4 space-y-1">
                                                            {('subItems' in item ? item.subItems.flatMap(s => s.items) : item.items).slice(0, 3).map((subItem) => (
                                                                <div key={subItem} className="text-sm text-muted-foreground p-1 hover:text-foreground cursor-pointer">
                                                                    {subItem}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </ScrollArea>
                            </SheetContent>
                        </Sheet>

                        {/* Mobile simplified menu */}
                        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
                            {subNavItems.slice(0, 4).map((item) => (
                                <Button
                                    key={item.title}
                                    variant="ghost"
                                    size="sm"
                                    className="text-xs whitespace-nowrap px-2"
                                    onClick={() => setIsOpen(true)}
                                >
                                    {item.title}
                                </Button>
                            ))}
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-xs whitespace-nowrap px-2"
                                onClick={() => setIsOpen(true)}
                            >
                                More...
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubNavbar