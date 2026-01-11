// components/features-section.tsx
import React from 'react'
import { Target, Award, Users, Clock, Shield } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const features = [
    { icon: Target, title: 'Mission', subtitle: 'Our Core Purpose' },
    { icon: Award, title: 'Excellence', subtitle: 'Quality Standards' },
    { icon: Users, title: 'Team', subtitle: 'Expert Professionals' },
    { icon: Clock, title: 'Efficiency', subtitle: 'Time Management' },
    { icon: Shield, title: 'Security', subtitle: 'Data Protection' },
]

const FeaturesSection = () => {
    return (
        <section className="-mt-24 md:-mt-72 relative z-10">
            <div className="container mx-auto px-4">
                <div className="rounded-2xl bg-white/10 backdrop-blur-xl p-6 md:p-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                        {features.map((feature) => {
                            const Icon = feature.icon
                            return (
                                <Card
                                    key={feature.title}
                                    className="border bg-background/80 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                                >
                                    <CardContent className="flex flex-col items-center text-center p-6">
                                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                            <Icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <h3 className="text-sm font-bold">{feature.title}</h3>
                                        <p className="text-xs text-muted-foreground mt-1">
                                            ({feature.subtitle})
                                        </p>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection
