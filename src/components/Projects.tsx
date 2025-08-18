import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Link from "next/link";
import Image from "next/image";
import Placeholder from '@/assets/images/placeholder.jpg'

const Projects = () =>
{
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const projects = useSelector((state: RootState) => state.projects.projects);
    const displayProjects = projects.slice(0, 6); // Show only first 3 projects

    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                        Realizing IDEAs
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Transforming innovative concepts into powerful digital solutions that make a real impact.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className="relative overflow-hidden">
                                <Image
                                    src={
                                        !project.image
                                            ? Placeholder // in /public folder
                                            : typeof project.image === "string"
                                                ? project.image.startsWith("/") || project.image.startsWith("http")
                                                    ? project.image
                                                    : Placeholder
                                                : project.image
                                    }
                                    alt={project.title}
                                    width={1000}
                                    height={1000}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm rounded-full">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.bestFor?.map((bFor, bForIndex) => (
                                        <span
                                            key={bForIndex}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                                        >
                                            {bFor}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    {project.liveDemo && (
                                        <Button size="sm" variant="outline" className="flex-1" asChild>
                                            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                Live Demo
                                            </a>
                                        </Button>
                                    )}
                                    {project.github && (
                                        <Button size="sm" variant="outline" className="flex-1" asChild>
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <Github className="w-4 h-4 mr-2" />
                                                Code
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-12"
                >
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                        asChild
                    >
                        <Link href="/projects">View All Projects</Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;