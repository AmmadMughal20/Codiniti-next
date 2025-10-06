'use client';

import { useRouter, useParams } from "next/navigation";
import { projectsData } from "@/store/projectsSlice";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const ProjectDetail = () =>
{
    const router = useRouter();
    const params = useParams();
    const id = params.slug as string;
    const project = projectsData.find(p => p.slug === id);

    if (!project) return <div className="text-center py-20">Project not found</div>;

    return (
        <div className="relative">
            {/* Hero Section */}
            <div className="relative w-full h-96">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover brightness-75"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">{project.title}</h1>
                    <p className="text-white/80 max-w-2xl">{project.description}</p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Problem & Solution */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                        <p className="text-gray-700 mb-4">{project.longDescription}</p>
                        <p className="text-gray-700">
                            <strong>Problem:</strong> Many SMEs struggle with {project.category.toLowerCase()} and need a solution that is scalable, efficient, and tailored to their operations.
                        </p>
                        <p className="text-gray-700 mt-2">
                            <strong>Solution:</strong> Codiniti delivered a solution that improves productivity, automates key processes, and enhances customer engagement.
                        </p>
                    </motion.div>

                    {/* Features / Highlights */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-semibold mb-4">Key Features & Highlights</h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {project.technologies.map((tech, index) => (
                                <li
                                    key={index}
                                    className="px-4 py-3 bg-orange-50 text-orange-700 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Best For */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h2 className="text-2xl font-semibold mb-4">Best For</h2>
                        <div className="flex flex-wrap gap-3">
                            {project.bestFor.map((item, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-medium shadow-sm"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Client & Location */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="pt-4"
                    >
                        <h2 className="text-2xl font-semibold mb-2">Client & Location</h2>
                        <p className="text-gray-700">Client: Local SME / Startup based in Pakistan</p>
                        <p className="text-gray-700">Industry: {project.category}</p>
                    </motion.div>
                </div>

                {/* Right Column - CTA / Image */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={600}
                        className="rounded-2xl shadow-2xl object-cover w-full h-auto"
                    />

                    <Button
                        size="lg"
                        onClick={() => window.open("https://wa.me/923394112114?text=Hello,%20I%20am%20interested%20in%20this%20project", "_blank")}
                        className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-lg"
                    >
                        Contact Us for Similar Project
                    </Button>

                    <Button
                        size="lg"
                        variant="outline"
                        onClick={() => router.back()}
                        className="w-full border-gray-300 text-gray-800 hover:bg-gray-100"
                    >
                        <ArrowLeft className="inline-block mr-2" /> Back to Projects
                    </Button>
                </motion.div>
            </div>

            {/* Related Projects Section */}
            <div className="container mx-auto px-4 py-20">
                <h2 className="text-3xl font-bold mb-8 text-center">Related Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {projectsData
                        .filter(p => p.id !== project.id)
                        .slice(0, 4)
                        .map(p => (
                            <motion.div
                                key={p.id}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden cursor-pointer"
                                onClick={() => router.push(`/projects/${p.slug}`)}
                            >
                                <Image
                                    src={p.image}
                                    alt={p.title}
                                    width={500}
                                    height={500}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold mb-2 text-black">{p.title}</h3>
                                    <p className="text-gray-700 text-sm line-clamp-3">{p.description}</p>
                                </div>
                            </motion.div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
