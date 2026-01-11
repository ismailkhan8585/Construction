// components/about-section.tsx
import React from 'react'
import { CheckCircle, Globe, Target, Users } from 'lucide-react'
import { Button } from '../ui/button'

const AboutSection = () => {
    return (
        <section className="py-16 md:py-24 bg-linear-to-b from-muted/30 to-background overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column - Image */}
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                                alt="About Our Organization"
                                className="w-full h-64 md:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

                            {/* Floating Stats */}
                            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4">
                                <div className="bg-white p-4 rounded-xl shadow-xl min-w-30 text-center">
                                    <div className="text-2xl font-bold text-primary">15+</div>
                                    <div className="text-sm text-muted-foreground">Years</div>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-xl min-w-30 text-center">
                                    <div className="text-2xl font-bold text-primary">50+</div>
                                    <div className="text-sm text-muted-foreground">Projects</div>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-xl min-w-30 text-center">
                                    <div className="text-2xl font-bold text-primary">200+</div>
                                    <div className="text-sm text-muted-foreground">Team Members</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Details */}
                    <div className="space-y-6">
                        <div>
                            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                                <Target className="h-4 w-4 mr-2" />
                                About Our Organization
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                                Leading Innovation in <span className="text-primary">Global Solutions</span>
                            </h2>
                        </div>

                        <div className="space-y-4">
                            <p className="text-lg text-muted-foreground">
                                Founded with a vision to transform industries through innovation and excellence,
                                our organization has been at the forefront of delivering cutting-edge solutions
                                for over 15 years.
                            </p>

                            <p className="text-lg text-muted-foreground">
                                We specialize in creating sustainable, technology-driven solutions that address
                                complex challenges across various sectors including technology, infrastructure,
                                and environmental sustainability.
                            </p>

                            <p className="text-lg text-muted-foreground">
                                Our team of dedicated professionals combines deep industry expertise with
                                innovative thinking to deliver exceptional results that exceed client
                                expectations and contribute to global progress.
                            </p>

                            <p className="text-lg text-muted-foreground">
                                Through strategic partnerships and a commitment to quality, we have successfully
                                completed over 50 major projects across 15 countries, establishing ourselves
                                as a trusted leader in our field.
                            </p>
                        </div>

                        {/* Key Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            {[
                                { icon: Globe, text: 'Global Presence Across 15+ Countries' },
                                { icon: Users, text: 'Expert Team of 200+ Professionals' },
                                { icon: CheckCircle, text: 'ISO 9001:2015 Certified' },
                                { icon: Target, text: '95% Client Satisfaction Rate' },
                            ].map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <feature.icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <span className="font-medium">{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        <Button className="mt-6 group">
                            Learn More About Us
                            <Users className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection