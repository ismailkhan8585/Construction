import { Building2, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Building2 className="h-6 w-6" />
                            <span className="text-lg font-bold">APEX CONSTRUCTION</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Building excellence with precision, innovation, and unwavering commitment to quality.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <li><Link href="#introduction" className="hover:text-gray-900 dark:hover:text-gray-100">Introduction</Link></li>
                            <li><Link href="#vision" className="hover:text-gray-900 dark:hover:text-gray-100">Vision</Link></li>
                            <li><Link href="#about" className="hover:text-gray-900 dark:hover:text-gray-100">About Us</Link></li>
                            <li><Link href="#functions" className="hover:text-gray-900 dark:hover:text-gray-100">Functions</Link></li>
                            <li><Link href="#organogram" className="hover:text-gray-900 dark:hover:text-gray-100">Organogram</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Contact Info</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                <span className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <span className="text-gray-600 dark:text-gray-400">info@apexconstruction.com</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span className="text-gray-600 dark:text-gray-400">123 Builders Ave, NY 10001</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Newsletter</h3>
                        <div className="space-y-3">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Subscribe for updates and insights.
                            </p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 rounded-full border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-2 text-sm"
                                />
                                <Button size="sm" className="rounded-full">Subscribe</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Apex Construction. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}