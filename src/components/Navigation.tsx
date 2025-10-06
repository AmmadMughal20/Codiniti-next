'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import CodinitiLogo from "@/assets/images/codiniti-logo-transparent.png";
import CodinitiLogoDark from "@/assets/images/codiniti-logo-transparent-dark.png";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const Navigation = () =>
{
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    // Detect if the current page is the homepage
    const isHomePage = pathname === "/";

    useEffect(() =>
    {
        if (!isHomePage)
        {
            setIsScrolled(true); // Always show dark navbar on non-home pages
            return;
        }

        const handleScroll = () =>
        {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHomePage]);

    const scrollToSection = (sectionId: string) =>
    {
        setIsOpen(false);

        if (!isHomePage)
        {
            // Navigate to home with hash
            router.push(`/#${sectionId}`);
            return;
        }

        // Update URL hash without reload
        window.history.replaceState(null, "", `#${sectionId}`);

        const element = document.getElementById(sectionId);
        if (element)
        {
            const navHeight = 64;
            const offsetTop = element.offsetTop - navHeight;
            window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }
    };

    const navItems = [
        { label: "Home", id: "hero" },
        { label: "About", id: "about" },
        { label: "Services", id: "services" },
        { label: "Expertise", id: "expertise" },
        { label: "Projects", id: "projects" },
        { label: "Contact", id: "contact" },
    ];

    // --- Navbar style logic ---
    const navStyle =
        !isHomePage || isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "bg-transparent";

    const textStyle =
        !isHomePage || isScrolled
            ? "text-gray-800 hover:text-orange-600"
            : "text-white hover:text-orange-300";

    const logoSrc = !isHomePage || isScrolled ? CodinitiLogoDark : CodinitiLogo;

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-1 left-0 right-0 z-50 transition-all duration-300 ${navStyle}`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
                        <Image
                            src={logoSrc}
                            alt="Codiniti - Custom Software Development"
                            className="h-8 w-auto"
                            width={100}
                            height={100}
                        />
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`font-medium transition-colors duration-300 ${textStyle}`}
                            >
                                {item.label}
                            </button>
                        ))}
                        <Button
                            onClick={() => scrollToSection("contact")}
                            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-lg"
                        >
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`md:hidden p-2 z-50 ${!isHomePage || isScrolled ? "text-gray-800" : "text-white"}`}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className={`md:hidden absolute top-16 left-0 right-0 backdrop-blur-md border-b border-gray-100 shadow-lg ${!isHomePage || isScrolled ? "bg-white/95" : "bg-transparent"}`}
                    >
                        <div className="py-4 space-y-2">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`block w-full text-left px-6 py-3 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-300 font-medium ${!isHomePage || isScrolled ? "text-gray-800" : "text-white"}`}
                                >
                                    {item.label}
                                </button>
                            ))}
                            <div className="px-6 pt-2">
                                <Button
                                    onClick={() => scrollToSection("contact")}
                                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white"
                                >
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};

export default Navigation;
