import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import HeroImage from '@/assets/images/hero-image.jpg';

const Hero = () =>
{
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() =>
    {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: Array<{
            x: number;
            y: number;
            dx: number;
            dy: number;
            size: number;
            opacity: number;
            baseX: number;
            baseY: number;
            magnetism: number;
            angle: number;
            speed: number;
        }> = [];

        // Create particles with smooth movement properties
        for (let i = 0; i < 120; i++)
        {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            particles.push({
                x,
                y,
                dx: (Math.random() - 0.5) * 0.8,
                dy: (Math.random() - 0.5) * 0.8,
                size: Math.random() * 3 + 1,
                opacity: Math.random() * 0.5 + 0.3,
                baseX: x,
                baseY: y,
                magnetism: Math.random() * 0.08 + 0.02,
                angle: Math.random() * Math.PI * 2,
                speed: Math.random() * 0.01 + 0.005
            });
        }

        let animationId: number;

        function animate()
        {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle, index) =>
            {
                // Continuous base movement with smooth sine wave patterns
                particle.angle += particle.speed;
                particle.baseX += Math.sin(particle.angle) * 0.5;
                particle.baseY += Math.cos(particle.angle) * 0.3;

                // Apply base drift
                particle.x += particle.dx * 0.3;
                particle.y += particle.dy * 0.3;

                // Calculate distance to mouse for magnetic effect
                const dx = mousePosition.x - particle.x;
                const dy = mousePosition.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 150;

                if (distance < maxDistance && mousePosition.x > 0 && mousePosition.y > 0)
                {
                    // Smooth magnetic attraction to cursor
                    const force = (maxDistance - distance) / maxDistance;
                    const smoothForce = Math.pow(force, 2) * 0.1;
                    particle.x += dx * particle.magnetism * smoothForce;
                    particle.y += dy * particle.magnetism * smoothForce;
                } else
                {
                    // Gentle return to base position with smooth interpolation
                    const returnForce = 0.002;
                    particle.x += (particle.baseX - particle.x) * returnForce;
                    particle.y += (particle.baseY - particle.y) * returnForce;
                }

                // Smooth edge bouncing
                if (particle.x < 0 || particle.x > canvas.width)
                {
                    particle.dx *= -0.8;
                    particle.baseX = Math.random() * canvas.width;
                }
                if (particle.y < 0 || particle.y > canvas.height)
                {
                    particle.dy *= -0.8;
                    particle.baseY = Math.random() * canvas.height;
                }

                // Draw particle with smooth gradient
                const gradient = ctx.createRadialGradient(
                    particle.x, particle.y, 0,
                    particle.x, particle.y, particle.size * 2
                );
                gradient.addColorStop(0, `rgba(249, 115, 22, ${particle.opacity})`);
                gradient.addColorStop(0.4, `rgba(234, 88, 12, ${particle.opacity * 0.6})`);
                gradient.addColorStop(1, `rgba(194, 65, 12, 0)`);

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();
            });

            // Connect nearby particles with smooth, dynamic connections
            particles.forEach((a, i) =>
            {
                particles.slice(i + 1, i + 6).forEach(b =>
                {
                    const distance = Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
                    if (distance < 100)
                    {
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        const opacity = Math.pow((100 - distance) / 100, 2) * 0.2;
                        ctx.strokeStyle = `rgba(249, 115, 22, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                });
            });

            animationId = requestAnimationFrame(animate);
        }

        animate();

        const handleResize = () =>
        {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            particles.forEach(particle =>
            {
                if (particle.x > canvas.width)
                {
                    particle.x = Math.random() * canvas.width;
                    particle.baseX = particle.x;
                }
                if (particle.y > canvas.height)
                {
                    particle.y = Math.random() * canvas.height;
                    particle.baseY = particle.y;
                }
            });
        };

        const handleMouseMove = (e: MouseEvent) =>
        {
            const rect = canvas.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
        };

        const handleMouseLeave = () =>
        {
            setMousePosition({ x: 0, y: 0 });
        };

        window.addEventListener('resize', handleResize);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        return () =>
        {
            window.removeEventListener('resize', handleResize);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationId);
        };
    }, [mousePosition]);

    const scrollToAbout = () =>
    {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="hero" className="min-h-screen relative overflow-hidden">
            {/* Interactive Canvas Background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800"
            />

            {/* Enhanced dark overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40" />

            {/* Floating elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-20 right-20 text-orange-400/20"
                >
                    <Sparkles size={60} />
                </motion.div>
                <motion.div
                    animate={{
                        y: [0, 15, 0],
                        rotate: [0, -3, 3, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 3
                    }}
                    className="absolute bottom-32 left-16 text-orange-300/15"
                >
                    <Sparkles size={40} />
                </motion.div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 pt-20 min-h-screen flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-white"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
                        >
                            <Sparkles className="w-4 h-4 text-orange-400" />
                            <span className="text-sm font-medium">Transforming Tomorrow</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                        >
                            We{" "}
                            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-300 bg-clip-text text-transparent">
                                Innovate
                            </span>
                            <br />
                            Digital Solutions
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed max-w-2xl"
                        >
                            Codiniti transforms your vision into powerful digital experiences. We create scalable, modern solutions that drive your business forward in the digital age.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-lg px-8 py-6 shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
                                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                            >
                                Start Your Project
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-white/60 text-white bg-white/5 hover:bg-white hover:text-gray-900 text-lg px-8 py-6 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                            >
                                Explore Services
                            </Button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="flex gap-8 mt-12"
                        >
                            <div className="text-center">
                                <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">150+</div>
                                <div className="text-sm text-gray-400">Projects Delivered</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">4+</div>
                                <div className="text-sm text-gray-400">Years Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">50+</div>
                                <div className="text-sm text-gray-400">Happy Clients</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Enhanced Team Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                            <Image
                                src={HeroImage}
                                alt="Professional team at Codiniti"
                                className="w-full h-96 object-cover rounded-2xl"
                                width={1000}
                                height={1000}
                            />
                            <motion.div
                                animate={{
                                    scale: [1, 1.05, 1],
                                    rotate: [0, 2, -2, 0]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center shadow-lg"
                            >
                                <span className="text-white font-bold text-sm">4+ Years</span>
                            </motion.div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-full blur-2xl"></div>
                    </motion.div>
                </div>

                {/* Enhanced Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <button
                        onClick={scrollToAbout}
                        className="flex flex-col items-center text-white/70 hover:text-white transition-colors group"
                    >
                        <span className="text-sm mb-2 group-hover:text-orange-300 transition-colors">Discover More</span>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="p-2 rounded-full border border-white/30 group-hover:border-orange-300 transition-colors"
                        >
                            <ArrowDown size={20} />
                        </motion.div>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;