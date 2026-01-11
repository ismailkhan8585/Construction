// components/gallery-section.tsx
'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Eye, ChevronRight, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const galleryCategories = {
    projects: [
        {
            id: 1,
            title: "Urban Development Project",
            description: "Modern infrastructure development in metropolitan areas",
            image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h-600&fit=crop",
            category: "Infrastructure",
            year: "2023"
        },
        {
            id: 2,
            title: "Green Energy Initiative",
            description: "Sustainable energy solutions for future generations",
            image: "https://images.unsplash.com-1470225620780-dba8ba36b745?w=800&h=600&fit=crop",
            category: "Sustainability",
            year: "2022"
        },
        {
            id: 3,
            title: "Technology Innovation Hub",
            description: "State-of-the-art research and development center",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
            category: "Technology",
            year: "2024"
        },
        {
            id: 4,
            title: "Community Welfare Program",
            description: "Social development initiatives for underserved communities",
            image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=600&fit=crop",
            category: "Social",
            year: "2023"
        }
    ],
    events: [
        {
            id: 5,
            title: "Annual Summit 2023",
            description: "Global leadership conference with industry experts",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
            category: "Conference",
            year: "2023"
        },
        {
            id: 6,
            title: "Innovation Awards Ceremony",
            description: "Recognizing excellence in technological innovation",
            image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
            category: "Awards",
            year: "2024"
        },
        {
            id: 7,
            title: "Team Building Retreat",
            description: "Annual team bonding and strategy planning session",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
            category: "Team",
            year: "2023"
        },
        {
            id: 8,
            title: "Sustainability Workshop",
            description: "Interactive sessions on environmental conservation",
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
            category: "Workshop",
            year: "2024"
        }
    ]
}

const GallerySection = () => {
    const [activeCategory, setActiveCategory] = useState<'projects' | 'events'>('projects')
    const [selectedImage, setSelectedImage] = useState<number | null>(null)

    const handleImageClick = (id: number) => {
        setSelectedImage(id)
    }

    return (
        <section className="py-16 md:py-24 bg-linear-to-b from-background to-muted/20">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Our <span className="text-primary">Gallery</span>
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                        Explore our projects and events through captivating visuals
                    </p>
                </div>

                {/* Category Buttons */}
                <div className="flex justify-center gap-4 mb-12">
                    <Button
                        onClick={() => setActiveCategory('projects')}
                        variant={activeCategory === 'projects' ? 'default' : 'outline'}
                        className={cn(
                            "px-8 py-6 text-lg rounded-full transition-all duration-300",
                            activeCategory === 'projects' && "shadow-lg"
                        )}
                    >
                        Projects Gallery
                    </Button>
                    <Button
                        onClick={() => setActiveCategory('events')}
                        variant={activeCategory === 'events' ? 'default' : 'outline'}
                        className={cn(
                            "px-8 py-6 text-lg rounded-full transition-all duration-300",
                            activeCategory === 'events' && "shadow-lg"
                        )}
                    >
                        Events Gallery
                    </Button>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {galleryCategories[activeCategory].map((item) => (
                        <div
                            key={item.id}
                            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                            onClick={() => handleImageClick(item.id)}
                        >
                            {/* Image Container */}
                            <div className="aspect-square overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-end">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {/* Category Tag */}
                                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                                        <span className="text-white text-sm font-medium">{item.category}</span>
                                        <span className="ml-2 text-white/70 text-sm">{item.year}</span>
                                    </div>

                                    {/* Title & Description */}
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-white/80 text-sm mb-6">{item.description}</p>

                                    {/* View Button */}
                                    <Button
                                        variant="secondary"
                                        size="sm"
                                        className="bg-white text-black hover:bg-white/90 group w-full"
                                    >
                                        View Details
                                        <Eye className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                                    </Button>
                                </div>
                            </div>

                            {/* Floating Category Badge */}
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                                <span className="text-sm font-semibold">{item.category}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <Button
                        variant="outline"
                        className="group border-primary/20 hover:border-primary/40 px-8 py-6 rounded-full text-lg"
                    >
                        View Complete Gallery
                        <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </Button>
                </div>
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute -top-12 right-0 text-white hover:bg-white/20"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="h-6 w-6" />
                        </Button>

                        <div className="bg-white rounded-2xl overflow-hidden">
                            <div className="relative">
                                <img
                                    src={galleryCategories[activeCategory].find(img => img.id === selectedImage)?.image}
                                    alt="Full size"
                                    className="w-full h-96 object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-2xl font-bold">
                                        {galleryCategories[activeCategory].find(img => img.id === selectedImage)?.title}
                                    </h3>
                                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                                        {galleryCategories[activeCategory].find(img => img.id === selectedImage)?.year}
                                    </span>
                                </div>
                                <p className="text-muted-foreground">
                                    {galleryCategories[activeCategory].find(img => img.id === selectedImage)?.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default GallerySection