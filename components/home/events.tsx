// components/events-section.tsx
'use client'

import React, { useState, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Calendar, Clock, User } from 'lucide-react'
import { cn } from '@/lib/utils'

const EventsSection = () => {
    const [currentEventIndex, setCurrentEventIndex] = useState(0)
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const events = [
        {
            id: 1,
            title: "Annual Technology Summit & Innovation Conference 2024",
            date: "2024-03-15",
            time: "09:00 AM - 05:00 PM",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop",
            category: "Conference",
            attendees: "500+",
            description: "Join industry leaders in discussing the future of technology and innovation."
        },
        {
            id: 2,
            title: "Sustainable Development Workshop Series",
            date: "2024-03-22",
            time: "10:00 AM - 04:00 PM",
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=500&fit=crop",
            category: "Workshop",
            attendees: "100+",
            description: "Interactive sessions on sustainable practices and environmental conservation."
        },
        {
            id: 3,
            title: "Global Leadership Awards Ceremony",
            date: "2024-04-05",
            time: "06:00 PM - 10:00 PM",
            image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=500&fit=crop",
            category: "Awards",
            attendees: "300+",
            description: "Celebrating excellence in leadership and organizational achievement."
        },
        {
            id: 4,
            title: "Digital Transformation Seminar",
            date: "2024-04-12",
            time: "02:00 PM - 06:00 PM",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=500&fit=crop",
            category: "Seminar",
            attendees: "200+",
            description: "Exploring digital innovation and business transformation strategies."
        },
        {
            id: 5,
            title: "Community Outreach Program Launch",
            date: "2024-04-20",
            time: "11:00 AM - 03:00 PM",
            image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=500&fit=crop",
            category: "Community",
            attendees: "150+",
            description: "Launching new initiatives for community development and support."
        },
        {
            id: 6,
            title: "Financial Planning & Investment Forum",
            date: "2024-05-08",
            time: "09:30 AM - 04:30 PM",
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop",
            category: "Forum",
            attendees: "250+",
            description: "Expert insights on financial strategies and investment opportunities."
        }
    ]

    const scrollToNext = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current
            const scrollAmount = container.clientWidth
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
            setCurrentEventIndex(prev => Math.min(prev + 3, events.length - 3))
        }
    }

    const scrollToPrev = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current
            const scrollAmount = container.clientWidth
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
            setCurrentEventIndex(prev => Math.max(prev - 3, 0))
        }
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        })
    }

    const getTruncatedTitle = (title: string, maxLength: number = 40) => {
        return title.length > maxLength ? title.substring(0, maxLength) + '...' : title
    }

    return (
        <section className="py-16 md:py-24 bg-linear-to-b from-muted/20 to-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center justify-center p-2 rounded-full bg-primary/10 mb-4">
                        <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Upcoming <span className="text-primary">Events</span>
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                        Join us for inspiring gatherings and networking opportunities
                    </p>
                </div>

                {/* Events Container with Navigation */}
                <div className="relative">
                    {/* Navigation Buttons */}
                    <Button
                        onClick={scrollToPrev}
                        disabled={currentEventIndex === 0}
                        variant="outline"
                        size="icon"
                        className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex h-12 w-12 rounded-full bg-background shadow-lg hover:bg-muted"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </Button>

                    <Button
                        onClick={scrollToNext}
                        disabled={currentEventIndex >= events.length - 3}
                        variant="outline"
                        size="icon"
                        className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex h-12 w-12 rounded-full bg-background shadow-lg hover:bg-muted"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </Button>

                    {/* Events Grid/Carousel */}
                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory md:grid md:grid-cols-3 gap-6 md:overflow-visible"
                    >
                        {events.map((event) => (
                            <Card
                                key={event.id}
                                className="min-w-75 md:min-w-0 shrink-0 snap-start md:shrink group hover:shadow-2xl transition-all duration-300"
                            >
                                {/* Event Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-primary text-white text-sm font-semibold rounded-full">
                                            {event.category}
                                        </span>
                                    </div>
                                </div>

                                <CardContent className="p-6">
                                    {/* Event Date & Time */}
                                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="h-4 w-4" />
                                            <span>{formatDate(event.date)}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-4 w-4" />
                                            <span>{event.time}</span>
                                        </div>
                                    </div>

                                    {/* Event Title */}
                                    <h3 className="text-xl font-bold mb-3 line-clamp-2">
                                        {getTruncatedTitle(event.title, 60)}
                                    </h3>

                                    {/* Event Description */}
                                    <p className="text-muted-foreground mb-6 line-clamp-2">
                                        {event.description}
                                    </p>

                                    {/* Attendees */}
                                    <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
                                        <User className="h-4 w-4" />
                                        <span>{event.attendees} attendees</span>
                                    </div>

                                    {/* Read More Button */}
                                    <Button
                                        variant="outline"
                                        className="w-full group hover:bg-primary hover:text-white transition-colors"
                                    >
                                        Read More
                                        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Mobile Navigation Dots */}
                    <div className="flex justify-center gap-2 mt-8 md:hidden">
                        {Array.from({ length: Math.ceil(events.length / 3) }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    if (scrollContainerRef.current) {
                                        const container = scrollContainerRef.current
                                        const scrollAmount = container.clientWidth * index
                                        container.scrollTo({ left: scrollAmount, behavior: 'smooth' })
                                        setCurrentEventIndex(index * 3)
                                    }
                                }}
                                className={cn(
                                    "w-2 h-2 rounded-full transition-all",
                                    currentEventIndex >= index * 3 && currentEventIndex < (index + 1) * 3
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

export default EventsSection