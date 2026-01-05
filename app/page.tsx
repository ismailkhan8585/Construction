"use client";

import { motion } from "framer-motion";
import { ArrowRight, Target, Users, Building, CheckCircle, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Organogram } from "@/components/organogram";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <Image src={"/demo.jpg"} alt="Demo" width={5000} height={5000} className="absolute inset-0 w-full h-full object-cover opacity-20" />
        {/* <div className="absolute inset-0 bg-linear-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black" /> */}
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Building <span className="text-gray-600 dark:text-gray-400">Tomorrow</span> with Precision Today
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Professional construction services that redefine excellence, innovation, and reliability in every project we undertake.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8">
                View Projects
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium mb-4">
                INTRODUCTION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pioneering Construction Excellence
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                At Apex Construction, we blend decades of expertise with cutting-edge technology to deliver
                construction solutions that stand the test of time. Our commitment to quality, safety, and
                innovation sets us apart in the competitive construction landscape.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Building, title: "Industry Leaders", desc: "30+ years of construction excellence" },
                { icon: CheckCircle, title: "Quality Certified", desc: "ISO 9001:2015 certified operations" },
                { icon: Users, title: "Expert Team", desc: "500+ skilled professionals" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium mb-4">
                OUR VISION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Shaping the Future of Construction
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400">
                  Our vision is to revolutionize the construction industry through sustainable practices,
                  innovative technologies, and unparalleled craftsmanship.
                </p>
                <ul className="space-y-3">
                  {[
                    "Sustainable building practices",
                    "Digital transformation in construction",
                    "Global excellence standards",
                    "Community-centric development"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Target className="h-4 w-4" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl bg-linear-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Building className="h-32 w-32 text-gray-400 dark:text-gray-600" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium mb-4">
                ABOUT US
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Building Excellence Since 1990
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Discover our journey, values, and commitment to construction excellence.
              </p>
            </motion.div>

            <Tabs defaultValue="history" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="history">Our History</TabsTrigger>
                <TabsTrigger value="values">Core Values</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
              </TabsList>
              <TabsContent value="history">
                <Card>
                  <CardContent className="p-6">
                    <p className="text-gray-600 dark:text-gray-400">
                      Founded in 1990, Apex Construction began as a small family business with a big vision.
                      Over three decades, {"we've"} grown into an industry leader, completing over 500 major projects
                      across residential, commercial, and industrial sectors while maintaining our commitment to
                      quality and integrity.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="values">
                <Card>
                  <CardContent className="p-6">
                    <ul className="space-y-4">
                      {["Integrity", "Excellence", "Innovation", "Safety", "Sustainability"].map((value) => (
                        <li key={value} className="flex items-center gap-3">
                          <CheckCircle className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                          <span className="text-gray-700 dark:text-gray-300">{value}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="achievements">
                <Card>
                  <CardContent className="p-6">
                    <ul className="space-y-4">
                      <li className="flex items-center justify-between">
                        <span className="text-gray-700 dark:text-gray-300">Projects Completed</span>
                        <span className="font-semibold">500+</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-gray-700 dark:text-gray-300">Client Satisfaction</span>
                        <span className="font-semibold">98%</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-gray-700 dark:text-gray-300">Safety Record</span>
                        <span className="font-semibold">0 Major Incidents</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Functions Section */}
      <section id="functions" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium mb-4">
                FUNCTIONS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Core Functions & Services
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Comprehensive construction services tailored to meet diverse project requirements.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  value: "design",
                  title: "Architectural Design & Planning",
                  content: "Comprehensive design services including architectural planning, structural engineering, and interior design with BIM integration."
                },
                {
                  value: "construction",
                  title: "General Construction",
                  content: "End-to-end construction management from ground-breaking to completion, ensuring quality and timeline adherence."
                },
                {
                  value: "project",
                  title: "Project Management",
                  content: "Professional project management services including budgeting, scheduling, quality control, and risk management."
                },
                {
                  value: "sustainability",
                  title: "Sustainable Construction",
                  content: "Green building solutions, LEED certification, energy-efficient designs, and sustainable material sourcing."
                },
                {
                  value: "maintenance",
                  title: "Maintenance & Renovation",
                  content: "Post-construction services, facility management, renovation, and restoration of existing structures."
                }
              ].map((item, index) => (
                <AccordionItem key={index} value={item.value}>
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800">
                        <Layers className="h-4 w-4" />
                      </div>
                      <span className="font-semibold">{item.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600 dark:text-gray-400 pl-12">{item.content}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Organogram Section */}
      <section id="organogram" className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium mb-4">
                ORGANOGRAM
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Organizational Structure
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Transparent hierarchy showcasing our leadership and operational teams.
              </p>
            </div>

            <Organogram />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-black dark:bg-white text-white dark:text-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Vision?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Contact us today to discuss your construction project and discover how we can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="rounded-full px-8">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-white dark:border-black">
                Call Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}