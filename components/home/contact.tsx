// components/contact-section.tsx
'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Send, Mail, Check, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const ContactSection = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        cnic: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))

        setIsSubmitting(false)
        setIsSubmitted(true)

        // Reset form after 3 seconds
        setTimeout(() => {
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                cnic: '',
                message: ''
            })
            setIsSubmitted(false)
        }, 3000)
    }

    return (
        <section className="py-16 md:py-24 bg-linear-to-b from-background to-muted/30">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Get In <span className="text-primary">Touch</span>
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                        Reach out to us for inquiries, collaborations, or feedback
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Column - Newsletter */}
                    <Card className="border-0 shadow-xl bg-linear-to-br from-primary/5 to-primary/10">
                        <CardContent className="p-8 md:p-10">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 mb-4">
                                    <Mail className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h3>
                                <p className="text-muted-foreground">
                                    Subscribe to our newsletter for the latest updates and announcements
                                </p>
                            </div>

                            <form className="space-y-4">
                                <div>
                                    <Label htmlFor="newsletter-email" className="mb-2">Email Address</Label>
                                    <Input
                                        id="newsletter-email"
                                        type="email"
                                        placeholder="Enter your email"
                                        className="h-12"
                                    />
                                </div>
                                <Button className="w-full h-12 group">
                                    Subscribe Now
                                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </form>

                            <div className="mt-8 pt-8 border-t">
                                <h4 className="font-semibold mb-4">Why Subscribe?</h4>
                                <ul className="space-y-2">
                                    {[
                                        "Get exclusive content and early access",
                                        "Stay informed about upcoming events",
                                        "Receive industry insights and reports",
                                        "Never miss important announcements"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-primary" />
                                            <span className="text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Right Column - Contact Form */}
                    <Card className="border-0 shadow-xl">
                        <CardContent className="p-8 md:p-10">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h3>
                                <p className="text-muted-foreground">
                                    Fill out the form below and we&apos;ll get back to you shortly
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="fullName">Full Name *</Label>
                                        <Input
                                            id="fullName"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                            placeholder="John Doe"
                                            className="h-12"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email Address *</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="john@example.com"
                                            className="h-12"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone Number *</Label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            placeholder="+1 (555) 123-4567"
                                            className="h-12"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="cnic">CNIC / ID Number</Label>
                                        <Input
                                            id="cnic"
                                            name="cnic"
                                            value={formData.cnic}
                                            onChange={handleChange}
                                            placeholder="XXXXX-XXXXXXX-X"
                                            className="h-12"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Message *</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Type your message here..."
                                        rows={6}
                                        className="resize-none"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={cn(
                                        "w-full h-12 group",
                                        isSubmitted && "bg-green-600 hover:bg-green-700"
                                    )}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Sending Message...
                                        </>
                                    ) : isSubmitted ? (
                                        <>
                                            <Check className="mr-2 h-4 w-4" />
                                            Message Sent Successfully!
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </Button>

                                <p className="text-xs text-muted-foreground text-center">
                                    By submitting this form, you agree to our privacy policy and terms of service.
                                </p>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default ContactSection