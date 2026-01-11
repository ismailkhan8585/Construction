// components/news-section.tsx
'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, User, Eye, ChevronRight } from 'lucide-react'

const NewsSection = () => {
    const newsArticles = [
        {
            id: 1,
            title: "Organization Achieves Record Growth in Q4 2023",
            excerpt: "Our organization has reached unprecedented milestones in the last quarter, with significant expansion across all departments.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
            date: "2024-01-15",
            author: "Michael Chen",
            views: 2456,
            readTime: "5 min read",
            category: "Business"
        },
        {
            id: 2,
            title: "New Sustainability Initiative Launched Globally",
            excerpt: "We're proud to announce our new environmental sustainability program aimed at reducing carbon footprint.",
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=500&fit=crop",
            date: "2024-01-10",
            author: "Sarah Johnson",
            views: 1892,
            readTime: "4 min read",
            category: "Environment"
        },
        {
            id: 3,
            title: "Technology Innovation Awards 2023 Winners Announced",
            excerpt: "Discover the groundbreaking innovations recognized at this year's Technology Innovation Awards ceremony.",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
            date: "2024-01-05",
            author: "Robert Williams",
            views: 3120,
            readTime: "6 min read",
            category: "Technology"
        },
        {
            id: 4,
            title: "Community Outreach Program Impacts Over 10,000 Lives",
            excerpt: "Our community development initiatives have made significant positive changes in underserved areas.",
            image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=500&fit=crop",
            date: "2023-12-28",
            author: "Emma Wilson",
            views: 1567,
            readTime: "3 min read",
            category: "Community"
        }
    ]

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        })
    }

    return (
        <section className="py-16 md:py-24 bg-linear-to-b from-background to-muted/10">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 md:mb-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            Latest <span className="text-primary">News</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl">
                            Stay updated with our latest achievements, initiatives, and announcements
                        </p>
                    </div>
                    <Button className="mt-4 md:mt-0 group">
                        See All News
                        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {newsArticles.map((article) => (
                        <Card
                            key={article.id}
                            className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                        >
                            {/* Article Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-sm font-semibold rounded-full">
                                        {article.category}
                                    </span>
                                </div>
                            </div>

                            <CardContent className="p-6">
                                {/* Article Metadata */}
                                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4" />
                                        <span>{formatDate(article.date)}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <User className="h-4 w-4" />
                                        <span>{article.author}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Eye className="h-4 w-4" />
                                        <span>{article.views.toLocaleString()} views</span>
                                    </div>
                                </div>

                                {/* Article Title */}
                                <h3 className="text-xl font-bold mb-3 line-clamp-2">
                                    {article.title}
                                </h3>

                                {/* Article Excerpt */}
                                <p className="text-muted-foreground mb-6 line-clamp-3">
                                    {article.excerpt}
                                </p>

                                {/* Read Time */}
                                <div className="text-sm text-muted-foreground mb-6">
                                    {article.readTime}
                                </div>

                                {/* Read More Button */}
                                <Button
                                    variant="outline"
                                    className="w-full group hover:bg-primary hover:text-white transition-colors"
                                >
                                    Read Article
                                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default NewsSection