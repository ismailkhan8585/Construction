'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import {
    Facebook,
    Twitter,
    Youtube,
    Linkedin,
    Instagram,
    Mail,
    Phone,
    MapPin,
    Building,
    Users,
    Globe,
    MessageSquare
} from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const departments = [
        { name: 'About', href: '/about' },
        { name: 'Introduction', href: '/introduction' },
        { name: 'Vision', href: '/vision' },
        { name: 'Functions', href: '/functions' },
        { name: 'Organogram', href: '/organogram' },
    ]

    const modules = [
        { name: 'E-registration', href: '/' },
        { name: 'E-Standardization', href: '/' },
        { name: 'EPAD', href: '/' },
        { name: 'GIS Portal', href: '/' },
        { name: 'E-billing', href: '/' },
        { name: 'PWMIS', href: '/pwmis' },
    ]

    const socialLinks = [
        { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
        { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
        { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
        { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    ]

    const contactInfo = [
        {
            icon: MapPin,
            text: '123 Innovation Drive, Tech City, TC 10001',
            href: 'https://maps.google.com'
        },
        {
            icon: Mail,
            text: 'info@organization.com',
            href: 'mailto:info@organization.com'
        },
        {
            icon: Phone,
            text: '+1 (555) 123-4567',
            href: 'tel:+15551234567'
        }
    ]

    return (
        <>
            {/* Main Footer */}
            <footer className="bg-linear-to-b from-background to-muted/50 border-t mt-20">
                <div className="container mx-auto px-4 py-12 md:py-16">
                    {/* Four Column Layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {/* Column 1: About */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-10 w-10 rounded-lg bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                                    <Building className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Organization</h3>
                                    <p className="text-sm text-muted-foreground">Excellence in Service</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground mb-6">
                                Leading the way in innovative solutions and professional services since 2010.
                                Committed to excellence, integrity, and sustainable growth.
                            </p>
                            <div className="flex gap-3">
                                {socialLinks.slice(0, 3).map((social) => {
                                    const Icon = social.icon
                                    return (
                                        <Button
                                            key={social.label}
                                            variant="outline"
                                            size="icon"
                                            className="rounded-full h-10 w-10"
                                            asChild
                                        >
                                            <a href={social.href} target="_blank" rel="noopener noreferrer">
                                                <Icon className="h-4 w-4" />
                                                <span className="sr-only">{social.label}</span>
                                            </a>
                                        </Button>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Column 2: Departments */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-primary/10">
                                    <Users className="h-5 w-5 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold">Departments</h3>
                            </div>
                            <ul className="space-y-3">
                                {departments.map((department) => (
                                    <li key={department.name}>
                                        <Link
                                            href={department.href}
                                            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                                        >
                                            <div className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <span>{department.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Modules */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-primary/10">
                                    <Globe className="h-5 w-5 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold">Modules</h3>
                            </div>
                            <ul className="space-y-3">
                                {modules.map((module) => (
                                    <li key={module.name}>
                                        <Link
                                            href={module.href}
                                            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                                        >
                                            <div className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <span>{module.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 4: Get In Touch & Follow Us */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-primary/10">
                                    <MessageSquare className="h-5 w-5 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold">Get In Touch</h3>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-4 mb-8">
                                {contactInfo.map((contact, index) => {
                                    const Icon = contact.icon
                                    return (
                                        <a
                                            key={index}
                                            href={contact.href}
                                            className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group"
                                        >
                                            <Icon className="h-5 w-5 mt-0.5 shrink-0" />
                                            <span className="text-sm">{contact.text}</span>
                                        </a>
                                    )
                                })}
                            </div>

                            {/* Follow Us */}
                            <div>
                                <h4 className="font-semibold mb-4">Follow Us</h4>
                                <div className="flex gap-3">
                                    {socialLinks.map((social) => {
                                        const Icon = social.icon
                                        return (
                                            <Button
                                                key={social.label}
                                                variant="ghost"
                                                size="icon"
                                                className="h-10 w-10 rounded-lg hover:bg-primary/10"
                                                asChild
                                            >
                                                <a href={social.href} target="_blank" rel="noopener noreferrer">
                                                    <Icon className="h-4 w-4" />
                                                    <span className="sr-only">{social.label}</span>
                                                </a>
                                            </Button>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links Bar */}
                    <div className="mt-12 pt-8 border-t border-border">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex flex-wrap gap-6">
                                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap', 'Careers'].map((link) => (
                                    <Link
                                        key={link}
                                        href={`/${link.toLowerCase().replace(' ', '-')}`}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link}
                                    </Link>
                                ))}
                            </div>
                            <div className="text-sm text-muted-foreground">
                                ISO 9001:2015 Certified • Member Since 2010
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Footer */}
                <div className="bg-muted/40 border-t">
                    <div className="container mx-auto px-4 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="text-center md:text-left">
                                <p className="text-sm text-muted-foreground">
                                    © {currentYear} Organization Name. All rights reserved.
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">
                                    Professional solutions for modern businesses • Registered in Tech City, TC 10001
                                </p>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                    <span>All systems operational</span>
                                </div>
                                <div className="text-xs text-muted-foreground">
                                    Version 2.1.0
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer