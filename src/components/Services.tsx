import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Smartphone, Cloud, BarChart } from "lucide-react";
import { servicesData } from "@/data/servicesData";

const Services = () =>
{
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

    // const services = [
    //     {
    //         icon: <Code className="w-12 h-12" />,
    //         title: "Website Design & Development",
    //         slug: "website-design-and-development",
    //         description:
    //             "Build fast, secure, and SEO-optimized websites that attract customers and elevate your online presence.",
    //         gradient: "from-blue-500 to-purple-600",
    //     },
    //     {
    //         icon: <Smartphone className="w-12 h-12" />,
    //         title: "Mobile App Development (Android & iOS)",
    //         slug: "mobile-app-development",
    //         description:
    //             "Deliver feature-rich, high-performance apps that engage users and scale with your business needs.",
    //         gradient: "from-green-500 to-teal-600",
    //     },
    //     {
    //         icon: <Cloud className="w-12 h-12" />,
    //         title: "Custom Software Development",
    //         slug: "custom-software-development",
    //         description:
    //             "Automate processes and reduce costs with tailored software built around your unique workflows.",
    //         gradient: "from-orange-500 to-red-600",
    //     },
    //     {
    //         icon: <BarChart className="w-12 h-12" />,
    //         title: "Digital Marketing",
    //         slug: "digital-marketing",
    //         description:
    //             "Reach the right audience with data-driven campaigns that boost visibility, leads, and conversions.",
    //         gradient: "from-purple-500 to-pink-600",
    //     },
    // ];

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                        Services We Offer
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Helping businesses grow with custom digital solutions — fast, scalable, and future-ready.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div
                                className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                            >
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">{service.shortDescription}</p>
                            <Link
                                href={`/services/${service.slug}`}
                                className="text-blue-600 font-medium hover:underline"
                            >
                                Learn More →
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
