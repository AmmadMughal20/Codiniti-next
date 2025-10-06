'use client'
import About from "@/components/About";
import Contact from "@/components/Contact";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import FloatingWhatsAppButton from "@/components/WhatsappChat";
import { persistor } from "@/store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PersistGate } from "redux-persist/integration/react";

const queryClient = new QueryClient();

const Index = () =>
{
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 400,
        damping: 40,
        restDelta: 0.001
    });

    const pathname = usePathname();

    useEffect(() =>
    {
        const scrollToHash = () =>
        {
            const hash = window.location.hash;
            if (!hash) return;

            const element = document.querySelector(hash);
            if (!element) return;

            const navHeight = 64;
            const offsetTop = element.getBoundingClientRect().top + window.scrollY - navHeight;
            window.scrollTo({ top: offsetTop, behavior: "smooth" });
        };

        // Wait a bit to ensure DOM is mounted
        setTimeout(scrollToHash, 50);

        // Also listen for hash changes (e.g., clicking menu links)
        window.addEventListener("hashchange", scrollToHash);
        return () => window.removeEventListener("hashchange", scrollToHash);
    }, []);

    useEffect(() =>
    {
        const handleScroll = () =>
        {
            setIsScrolled(window.scrollY > window.innerHeight * 0.3);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () =>
    {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <QueryClientProvider client={queryClient}>
            <PersistGate loading={null} persistor={persistor}>
                <TooltipProvider>
                    <Sonner />
                    <FloatingWhatsAppButton />
                    <div className="relative">
                        {/* Fixed Progress Bar at the very top */}
                        <motion.div
                            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 to-red-600 origin-[0%] z-[100]"
                            style={{ scaleX }}
                        />

                        <main>
                            <Hero />
                            <About />
                            <Services />
                            <Stats />
                            <Expertise />
                            <Projects />
                            <Testimonials />
                            <Contact />
                        </main>


                        {/* Modern Scroll to Top Button */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: isScrolled ? 1 : 0,
                                scale: isScrolled ? 1 : 0
                            }}
                            transition={{ duration: 0.3 }}
                            className="fixed bottom-4 right-20 z-40"
                        >
                            <Button
                                onClick={scrollToTop}
                                size="icon"
                                className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 shadow-2xl hover:shadow-3xl transition-all duration-300 border-0"
                            >
                                <ArrowUp className="h-5 w-5" />
                            </Button>
                        </motion.div>
                    </div>
                </TooltipProvider>
            </PersistGate>
        </QueryClientProvider>
    );
};

export default Index;