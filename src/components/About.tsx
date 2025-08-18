import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from 'next/image'
import Mision from '@/assets/images/mission.jpg';

const About = () =>
{
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                        Launching Journey from our{" "}
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                            Homeland
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        {
                            `Founded on excellence and innovation, our journey started from our homeland with a vision to transform
                        businesses through cutting-edge technology solutions. We've grown to become a trusted partner for
                        companies worldwide, delivering exceptional software solutions that drive growth and success.
                        `}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Image
                            src={Mision}
                            alt="Team collaboration"
                            width={1500}
                            height={1500}
                            className="w-full h-96 object-cover object-[60%_65%] rounded-2xl shadow-2xl"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">
                            Our Mission & Vision
                        </h3>
                        <div className="space-y-4">
                            <div className="p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border-l-4 border-orange-500">
                                <h4 className="text-xl font-semibold text-gray-900 mb-2">Mission</h4>
                                <p className="text-gray-700">
                                    To deliver innovative software solutions that empower businesses to achieve their digital transformation goals.
                                </p>
                            </div>
                            <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-l-4 border-blue-500">
                                <h4 className="text-xl font-semibold text-gray-900 mb-2">Vision</h4>
                                <p className="text-gray-700">
                                    To be the leading software development company that bridges the gap between ideas and reality.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
