import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Smartphone, Cloud, BarChart } from "lucide-react";

const Services = () =>
{
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const services = [
        {
            icon: <Code className="w-12 h-12" />,
            title: "Website Design and Development",
            description:
                "Responsive, SEO-friendly websites crafted with modern technologies to deliver a seamless user experience.",
            gradient: "from-blue-500 to-purple-600",
        },
        {
            icon: <Smartphone className="w-12 h-12" />,
            title: "Mobile App Development (Android / iOS)",
            description:
                "High-performance native and cross-platform mobile apps tailored for Android and iOS devices.",
            gradient: "from-green-500 to-teal-600",
        },
        {
            icon: <Cloud className="w-12 h-12" />,
            title: "Custom Software Development",
            description:
                "Bespoke software solutions built to match your unique business requirements and workflows.",
            gradient: "from-orange-500 to-red-600",
        },
        {
            icon: <BarChart className="w-12 h-12" />,
            title: "Digital Marketing",
            description:
                "Data-driven marketing strategies to boost your online presence and reach your target audience.",
            gradient: "from-purple-500 to-pink-600",
        },
        {
            icon: <Code className="w-12 h-12" />,
            title: "UI/UX Design and Development",
            description:
                "Engaging and intuitive interfaces designed to enhance user satisfaction and brand loyalty.",
            gradient: "from-yellow-500 to-orange-600",
        },
        {
            icon: <Smartphone className="w-12 h-12" />,
            title: "AI Enabled Web and Mobile Applications",
            description:
                "Cutting-edge AI-powered solutions that bring automation, personalization, and intelligence to your apps.",
            gradient: "from-indigo-500 to-blue-600",
        },
    ];


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
                        Services we offer
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive software development services designed to meet your business objectives and drive digital transformation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
