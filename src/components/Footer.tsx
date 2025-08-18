import CodinitiLogo from "@/assets/images/codiniti-logo-transparent.png";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Image from "next/image";

const Footer = () =>
{
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/company/codiniti/", label: "LinkedIn" },
        { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/codiniti", label: "Twitter" },
        { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/profile.php?id=100094295640964", label: "Facebook" },
        { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/codiniti/", label: "Instagram" }
    ];

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
                            <Image src={CodinitiLogo} alt="codiniti" style={{ width: '200px' }} width={500} height={500} />
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Transforming innovative ideas into powerful digital solutions that drive business growth and success.
                        </p>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-orange-500" />
                                <span className="text-gray-300">codiniti@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-orange-500" />
                                <span className="text-gray-300">03394112114</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin className="w-5 h-5 text-orange-500" />
                                <span className="text-gray-300">Lahore, PK</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-orange-500 transition-colors duration-300 hover:scale-110 transform"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="border-t border-gray-800 mt-8 pt-8 text-center"
                >
                    <p className="text-gray-300">
                        © {currentYear} Codiniti. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;