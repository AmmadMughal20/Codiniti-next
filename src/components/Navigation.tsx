import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import CodinitiLogo from "@/assets/images/codiniti-logo-transparent.png";
import CodinitiLogoDark from "@/assets/images/codiniti-logo-transparent-dark.png";
import Image from "next/image";

const Navigation = () =>
{
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() =>
    {
        const handleScroll = () =>
        {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) =>
    {
        console.log("Scrolling to section:", sectionId);
        setIsOpen(false); // Close menu first

        // Small delay to allow menu to close
        setTimeout(() =>
        {
            const element = document.getElementById(sectionId);
            if (element)
            {
                const navHeight = 64; // Height of the navigation bar
                const elementPosition = element.offsetTop - navHeight;
                window.scrollTo({
                    top: elementPosition,
                    behavior: "smooth"
                });
            } else
            {
                console.log("Element not found:", sectionId);
            }
        }, 100);
    };

    const navItems = [
        { label: "Home", id: "hero" },
        { label: "About", id: "about" },
        { label: "Services", id: "services" },
        { label: "Expertise", id: "expertise" },
        { label: "Projects", id: "projects" },
        { label: "Contact", id: "contact" }
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-1 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100" : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
                    >
                        <Image src={isScrolled ? CodinitiLogoDark : CodinitiLogo} alt="Codiniti - Custom Software Development" className="h-8 w-auto" width={100} height={100} />
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`font-medium transition-colors duration-300 ${isScrolled
                                    ? "text-gray-800 hover:text-orange-600"
                                    : "text-white hover:text-orange-300"
                                    }`}
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
                        className={`md:hidden p-2 z-50 ${isScrolled ? "text-gray-800" : "text-white"
                            }`}
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
                        className={`md:hidden absolute top-16 left-0 right-0 backdrop-blur-md border-b border-gray-100 shadow-lg ${isScrolled ? "bg-white/95" : "bg-transparent"}`}
                    >
                        <div className="py-4 space-y-2">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`block w-full text-left px-6 py-3  hover:text-orange-600 hover:bg-orange-50 transition-colors duration-300 font-medium ${isScrolled ? "text-gray-800" : "text-white"}`}
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
