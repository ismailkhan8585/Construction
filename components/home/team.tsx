// components/team-section.tsx
'use client'

import React, { useState, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ChevronLeft, ChevronRight, Linkedin, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

const TeamSection = () => {
    const [currentTeamIndex, setCurrentTeamIndex] = useState(0)
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const teamMembers = [
        {
            id: 1,
            name: "Dr. Sarah Johnson",
            role: "Secretary General",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
            department: "Leadership",
            experience: "15+ years",
            linkedin: "#",
            email: "sarah.j@organization.com"
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Director of Operations",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
            department: "Operations",
            experience: "12+ years",
            linkedin: "#",
            email: "michael.c@organization.com"
        },
        {
            id: 3,
            name: "Emma Wilson",
            role: "Head of Technology",
            image: "https://images.unsplash.com/photo-1494790108755-2616b786d4c9?w=400&h=400&fit=crop",
            department: "Technology",
            experience: "10+ years",
            linkedin: "#",
            email: "emma.w@organization.com"
        },
        {
            id: 4,
            name: "Robert Williams",
            role: "Finance Director",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
            department: "Finance",
            experience: "14+ years",
            linkedin: "#",
            email: "robert.w@organization.com"
        },
        {
            id: 5,
            name: "Priya Sharma",
            role: "Marketing Lead",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
            department: "Marketing",
            experience: "8+ years",
            linkedin: "#",
            email: "priya.s@organization.com"
        },
        {
            id: 6,
            name: "David Kim",
            role: "Project Manager",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
            department: "Projects",
            experience: "9+ years",
            linkedin: "#",
            email: "david.k@organization.com"
        },
        {
            id: 7,
            name: "Lisa Anderson",
            role: "HR Director",
            image: "https://images.unsplash.com/photo-1494790108755-2616b786d4c9?w=400&h=400&fit=crop",
            department: "Human Resources",
            experience: "11+ years",
            linkedin: "#",
            email: "lisa.a@organization.com"
        },
        {
            id: 8,
            name: "James Miller",
            role: "Legal Advisor",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
            department: "Legal",
            experience: "13+ years",
            linkedin: "#",
            email: "james.m@organization.com"
        },
        {
            id: 9,
            name: "Sophia Garcia",
            role: "Sustainability Officer",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
            department: "Sustainability",
            experience: "7+ years",
            linkedin: "#",
            email: "sophia.g@organization.com"
        },
        {
            id: 10,
            name: "Alex Thompson",
            role: "Research Head",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
            department: "Research",
            experience: "10+ years",
            linkedin: "#",
            email: "alex.t@organization.com"
        }
    ]

    const scrollToNext = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current
            const cardWidth = 300 // approximate card width + gap
            const scrollAmount = cardWidth * 5 // Scroll 5 cards
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
            setCurrentTeamIndex(prev => Math.min(prev + 5, teamMembers.length - 5))
        }
    }

    const scrollToPrev = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current
            const cardWidth = 300
            const scrollAmount = cardWidth * 5
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
            setCurrentTeamIndex(prev => Math.max(prev - 5, 0))
        }
    }

    return (
        <section className="py-16 md:py-24 bg-linear-to-b from-muted/10 to-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Meet Our <span className="text-primary">Team</span>
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                        Get to know the brilliant minds driving our organization forward
                    </p>
                </div>

                {/* Team Container with Navigation */}
                <div className="relative">
                    {/* Navigation Buttons */}
                    <Button
                        onClick={scrollToPrev}
                        disabled={currentTeamIndex === 0}
                        variant="outline"
                        size="icon"
                        className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 hidden lg:flex h-12 w-12 rounded-full bg-background shadow-lg hover:bg-muted"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </Button>

                    <Button
                        onClick={scrollToNext}
                        disabled={currentTeamIndex >= teamMembers.length - 5}
                        variant="outline"
                        size="icon"
                        className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden lg:flex h-12 w-12 rounded-full bg-background shadow-lg hover:bg-muted"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </Button>

                    {/* Team Grid/Carousel */}
                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto scrollbar-hide gap-6 pb-4"
                    >
                        {teamMembers.map((member) => (
                            <Card
                                key={member.id}
                                className="min-w-70 sm:min-w-75 shrink-0 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <CardContent className="p-6">
                                    {/* Member Avatar */}
                                    <div className="flex flex-col items-center text-center">
                                        <div className="relative mb-6">
                                            <Avatar className="h-32 w-32 border-4 border-background shadow-xl">
                                                <AvatarImage src={member.image} alt={member.name} />
                                                <AvatarFallback className="text-2xl bg-linear-to-br from-primary to-primary/70 text-white">
                                                    {member.name.split(' ').map(n => n[0]).join('')}
                                                </AvatarFallback>
                                            </Avatar>
                                        </div>

                                        {/* Member Name & Role */}
                                        <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                                        <p className="text-primary font-semibold mb-3">{member.role}</p>

                                        {/* Department & Experience */}
                                        <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                                            <span>{member.department}</span>
                                            <span>•</span>
                                            <span>{member.experience}</span>
                                        </div>

                                        {/* Social Links */}
                                        <div className="flex gap-3 mb-6">
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                className="rounded-full"
                                                asChild
                                            >
                                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                                    <Linkedin className="h-4 w-4" />
                                                </a>
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                className="rounded-full"
                                                asChild
                                            >
                                                <a href={`mailto:${member.email}`}>
                                                    <Mail className="h-4 w-4" />
                                                </a>
                                            </Button>
                                        </div>

                                        {/* View Profile Button */}
                                        <Button className="w-full group">
                                            View Profile
                                            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Mobile Navigation Dots */}
                    <div className="flex justify-center gap-2 mt-8 lg:hidden">
                        {Array.from({ length: Math.ceil(teamMembers.length / 5) }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    if (scrollContainerRef.current) {
                                        const container = scrollContainerRef.current
                                        const cardWidth = 300
                                        const scrollAmount = cardWidth * 5 * index
                                        container.scrollTo({ left: scrollAmount, behavior: 'smooth' })
                                        setCurrentTeamIndex(index * 5)
                                    }
                                }}
                                className={cn(
                                    "w-2 h-2 rounded-full transition-all",
                                    currentTeamIndex >= index * 5 && currentTeamIndex < (index + 1) * 5
                                        ? "bg-primary w-8"
                                        : "bg-muted"
                                )}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamSection