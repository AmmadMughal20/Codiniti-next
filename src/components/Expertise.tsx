import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ExpertiseImage from '../assets/images/expertise.jpg'
import Image from "next/image";

const Expertise = () =>
{
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const technologies = [
        "React", "Next.js", "Python", "TypeScript", "AWS", "Docker",
        "MongoDB", "PostgreSQL", "Redis", "Kubernetes", "GraphQL", "Webflow", "Wordpress", "React Native",
    ];

    const expertiseAreas = [
        {
            title: "Website Design & Development",
            description:
                "Creating visually appealing, responsive, and high-performing websites tailored to your business needs.",
        },
        {
            title: "Mobile App Development",
            description:
                "Building intuitive, secure, and feature-rich Android and iOS applications with smooth user experiences.",
        },
        {
            title: "Custom Software Solutions",
            description:
                "Delivering bespoke software applications that address unique workflows and business challenges.",
        },
        {
            title: "AI-Powered Applications",
            description:
                "Integrating artificial intelligence to enhance automation, personalization, and decision-making.",
        },
    ];


    return (
        <section id="expertise" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                        Expertise we have
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our team combines deep technical knowledge with industry best practices to deliver exceptional results.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Image
                            src={ExpertiseImage}
                            width={1000}
                            height={1000}
                            alt="Programming and development"
                            className="w-full h-100 object-cover rounded-2xl shadow-2xl"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-6"
                    >
                        {expertiseAreas.map((area, index) => (
                            <div key={index} className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
                                <p className="text-gray-600">{area.description}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Technologies */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center"
                >
                    <h3 className="text-3xl font-bold text-gray-900 mb-8">Technologies We Master</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {technologies.map((tech, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                                whileHover={{ scale: 1.1 }}
                                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Expertise;