"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChatDemo } from "@/components/chat-demo";
import { AnimatedGridBackground } from "@/components/animated-grid-background";
import Image from "next/image";
import { ArrowRight, BarChart, MessageSquare, MousePointerClick, Users2, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <AnimatedGridBackground className="absolute inset-0 z-0" />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Hero Section */}
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-4">
              <Image 
                src="/logo.svg" 
                alt="AgentorAI Logo" 
                width={40} 
                height={40}
                className="w-10 h-10"
              />
              <h1 className="text-xl font-bold">AgentorAI</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <a className="text-sm font-medium hover:underline underline-offset-4" href="#features">
                Features
              </a>
              <a className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
                Pricing
              </a>
              <a className="text-sm font-medium hover:underline underline-offset-4" href="#about">
                About
              </a>
            </nav>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                Log In
              </Button>
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        </header>
        
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Intelligent Conversations for Your Website
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      Transform visitor interactions with AI that understands your business and converts prospects into customers.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button className="px-8">Get Started</Button>
                    <Button variant="outline" className="px-8">
                      Demo <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <ChatDemo />
                </div>
              </div>
            </div>
          </section>
          
          <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Key Features</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Everything you need to engage visitors and convert them into customers
                  </p>
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
                <Card>
                  <CardHeader>
                    <MessageSquare className="h-10 w-10 mb-2 text-primary" />
                    <CardTitle>Conversational Interface</CardTitle>
                    <CardDescription>Natural language understanding with smart suggestions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Pre-trained on your product information</li>
                      <li>Smart suggestions and quick replies</li>
                      <li>Typing animation and user-friendly design</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <MousePointerClick className="h-10 w-10 mb-2 text-primary" />
                    <CardTitle>Intent Recognition</CardTitle>
                    <CardDescription>Identify user intent and route to appropriate responses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Identify "learn more," "talk to sales," etc.</li>
                      <li>Route to appropriate response paths</li>
                      <li>Connect with the right team members</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <Zap className="h-10 w-10 mb-2 text-primary" />
                    <CardTitle>Dynamic Responses</CardTitle>
                    <CardDescription>Rich media responses for better engagement</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Answer FAQs about product, pricing, features</li>
                      <li>Display media (images, videos, charts)</li>
                      <li>Share links to relevant resources</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <Users2 className="h-10 w-10 mb-2 text-primary" />
                    <CardTitle>Lead Capture</CardTitle>
                    <CardDescription>Gather contact information at the right moment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Request name, email, company, use case</li>
                      <li>Sync with CRM or email automation</li>
                      <li>Contextual lead capture when appropriate</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <Users2 className="h-10 w-10 mb-2 text-primary" />
                    <CardTitle>Human Handoff</CardTitle>
                    <CardDescription>Seamless transfer to live support when needed</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Transfer to live chat or support team</li>
                      <li>Availability indicators</li>
                      <li>Email follow-up if humans unavailable</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <BarChart className="h-10 w-10 mb-2 text-primary" />
                    <CardTitle>Analytics Dashboard</CardTitle>
                    <CardDescription>Understand visitor interactions and optimize</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Track user interactions</li>
                      <li>Common queries and drop-off points</li>
                      <li>Conversion rates and session durations</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          
          <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How It Works</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Simple to set up, powerful in action
                  </p>
                </div>
              </div>
              
              <Tabs defaultValue="setup" className="mt-12 w-full max-w-3xl mx-auto">
                <TabsList className="grid grid-cols-3 w-full">
                  <TabsTrigger value="setup">Setup</TabsTrigger>
                  <TabsTrigger value="customize">Customize</TabsTrigger>
                  <TabsTrigger value="analyze">Analyze</TabsTrigger>
                </TabsList>
                <TabsContent value="setup" className="p-4 border rounded-md mt-4">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">1. Quick Setup</h3>
                    <p>Add a single line of code to your website to enable the chat interface. Our system automatically scans your site content to build knowledge.</p>
                    <div className="bg-muted p-4 rounded-md">
                      <code>{'<script src="https://agentorai.org/chat.js"></script>'}</code>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="customize" className="p-4 border rounded-md mt-4">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">2. Customize Your Assistant</h3>
                    <p>Use our dashboard to customize appearance, responses, and behavior. Upload additional documents or connect APIs for enhanced capabilities.</p>
                    <Image 
                      src="/dashboard-preview.png" 
                      alt="Dashboard Preview" 
                      width={600} 
                      height={400}
                      className="rounded-md border"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="analyze" className="p-4 border rounded-md mt-4">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">3. Analyze & Improve</h3>
                    <p>Review conversation analytics to understand what users are asking and how the AI is performing. Continuously improve based on real user interactions.</p>
                    <Image 
                      src="/analytics-preview.png" 
                      alt="Analytics Preview" 
                      width={600} 
                      height={400}
                      className="rounded-md border"
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>
          
          <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Transform Your Website?</h2>
                  <p className="max-w-[600px] md:text-xl">
                    Start engaging visitors with intelligent conversations that convert.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button variant="secondary" size="lg" className="px-8">
                    Get Started Free
                  </Button>
                  <Button variant="outline" size="lg" className="px-8">
                    Book a Demo
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-muted-foreground">© 2024 AgentorAI. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <a className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </a>
            <a className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </a>
            <a className="text-xs hover:underline underline-offset-4" href="#">
              Contact
            </a>
          </nav>
        </footer>
      </div>
    </div>
  );
}
