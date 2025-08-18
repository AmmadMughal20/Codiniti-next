import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () =>
{

    const form = useRef<HTMLFormElement | null>(null);

    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
    {
        e.preventDefault();
        setIsSubmitting(true);

        try
        {
            // Simulate a brief delay
            await new Promise((resolve) => setTimeout(resolve, 1000));

            const result = await emailjs.sendForm(
                'service_bjepq2k',
                'template_zo2059i',
                form.current!,
                'EUJLyM97-kwE0VaEo'
            );

            console.log("EmailJS result:", result.text);

            toast({
                title: "Message sent successfully!",
                description: "We'll get back to you within 24 hours.",
            });

            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });

        } catch (error: unknown)
        {
            if (error instanceof Error)
            {
                console.error("EmailJS error:", error.message);
            } else
            {
                console.error("Unknown error:", error);
            }

            toast({
                title: "Failed to send message",
                description: "Please try again or contact us directly.",
            });
        } finally
        {
            setIsSubmitting(false);
        }
    };


    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            value: "codiniti@gmail.com",
            href: "mailto:codiniti@gmail.com"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Phone",
            value: "03394112114",
            href: "tel:+923394112114"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Location",
            value: "Lahore, PK",
            href: "#"
        }
    ];

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                        Let's Start Something{" "}
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                            Amazing
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Ready to transform your ideas into reality? Get in touch with us and let's discuss your next project.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white rounded-2xl p-8 shadow-lg"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6" ref={form}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="h-12"
                                />
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="h-12"
                                />
                            </div>
                            <Input
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                required
                                className="h-12"
                            />
                            <Textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                rows={6}
                                className="resize-none"
                            />
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full h-12 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                            >
                                {isSubmitting ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        <Send className="w-5 h-5 mr-2" />
                                        Send Message
                                    </>
                                )}
                            </Button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in touch</h3>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                We're here to help you bring your vision to life. Whether you have a specific project in mind
                                or just want to explore possibilities, we'd love to hear from you.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={index}
                                    href={info.href}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                                    className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900">{info.title}</h4>
                                        <p className="text-gray-600">{info.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white"
                        >
                            <h4 className="text-xl font-bold mb-4">Ready to get started?</h4>
                            <p className="mb-6">
                                Let's schedule a free consultation to discuss your project requirements and explore how we can help.
                            </p>
                            <Button
                                variant="secondary"
                                className="bg-white text-gray-900 hover:bg-gray-100"
                            >
                                Schedule Consultation
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;