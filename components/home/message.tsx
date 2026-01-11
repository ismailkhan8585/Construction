'use client'

import React, { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ChevronDown, ChevronUp, Mail, Phone, Award, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'

const MessageSection = () => {
  const [showFullDetail, setShowFullDetail] = useState(false)

  const secretary = {
    name: "Dr. Sarah Johnson",
    role: "Secretary General",
    detail: "With over 15 years of experience in organizational leadership and strategic planning, Dr. Sarah Johnson brings unparalleled expertise to our organization. Her visionary approach and commitment to excellence have been instrumental in driving our success.",
    fullDetail: `Dr. Sarah Johnson holds a Ph.D. in Organizational Leadership from Harvard University and has been with our organization for over a decade. Under her leadership, we have achieved unprecedented growth, expanding our operations to 15 countries worldwide.

Her strategic vision focuses on sustainable development, innovative solutions, and empowering team members to reach their full potential. Dr. Johnson has been recognized with numerous awards including the "Global Leadership Excellence Award 2023" and "Innovator of the Year 2022."

Before joining our organization, she served as Director of Operations at TechGlobal Inc., where she led initiatives that resulted in a 300% growth in international markets. Her publications on organizational psychology and leadership have been featured in top-tier journals.

Dr. Johnson believes in collaborative leadership and maintains an open-door policy, encouraging innovative ideas from all team members. Her commitment to excellence and ethical leadership continues to inspire our entire organization.`,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    email: "sarah.johnson@organization.com",
    phone: "+1 (555) 123-4567",
    tenure: "Since 2014",
    awards: "5 Industry Awards"
  }

  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center p-2 rounded-full bg-primary/10 mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Message from the <span className="text-primary">Secretary</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Leadership insights and vision for our organization&apos;s future
            </p>
          </div>

          {/* Secretary Card */}
          <Card className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              {/* Left Column - Image & Basic Info */}
              <div className="lg:col-span-1 bg-linear-to-br from-primary/5 to-primary/10 p-8 md:p-10 flex flex-col items-center justify-center">
                <div className="relative mb-6">
                  <Avatar className="h-48 w-48 md:h-56 md:w-56 border-4 border-background shadow-2xl">
                    <AvatarImage src={secretary.image} alt={secretary.name} />
                    <AvatarFallback className="text-4xl bg-linear-to-br from-primary to-primary/70 text-white">
                      SJ
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2 bg-primary text-white px-4 py-2 rounded-full shadow-lg">
                    <span className="text-sm font-semibold">{secretary.role}</span>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold">{secretary.name}</h3>
                  <p className="text-primary font-semibold">{secretary.role}</p>

                  {/* Contact Info */}
                  <div className="space-y-3 pt-4 border-t">
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      <span className="text-sm">{secretary.email}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <span className="text-sm">{secretary.phone}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{secretary.tenure}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Award className="h-4 w-4" />
                      <span className="text-sm">{secretary.awards}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Message */}
              <div className="lg:col-span-2 p-6 md:p-8 lg:p-10">
                <div className="mb-6">
                  <h4 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                    A Message of Vision and Progress
                  </h4>
                  <div className="space-y-4">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {secretary.detail}
                    </p>

                    <div className={cn(
                      "overflow-hidden transition-all duration-500",
                      showFullDetail ? "max-h-500 opacity-100" : "max-h-0 opacity-0"
                    )}>
                      <div className="pt-4 space-y-4">
                        {secretary.fullDetail.split('\n\n').map((paragraph, index) => (
                          <p key={index} className="text-muted-foreground leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Show More/Less Button */}
                <Button
                  onClick={() => setShowFullDetail(!showFullDetail)}
                  variant="outline"
                  className="group border-primary/20 hover:bg-primary/5 hover:border-primary/40"
                >
                  {showFullDetail ? (
                    <>
                      Show Less
                      <ChevronUp className="ml-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
                    </>
                  ) : (
                    <>
                      Read Full Message
                      <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                    </>
                  )}
                </Button>

                {/* Quote */}
                <div className="mt-8 pt-6 border-t">
                  <blockquote className="text-lg italic text-muted-foreground">
                    &ldquo;Great leaders don&apos;t set out to be leaders, they set out to make a difference.&rdquo;
                    <footer className="mt-2 text-sm font-semibold">— Dr. Sarah Johnson</footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default MessageSection