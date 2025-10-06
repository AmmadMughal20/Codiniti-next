import { servicesData } from "@/data/servicesData";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

type Params = Promise<{ slug: string }>;


interface ServicePageProps
{
    params: Params;
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

// ✅ Correctly type generateMetadata
export async function generateMetadata({ params }: ServicePageProps)
{
    const resolvedParams = await params; // ⚡ await the Promise
    const service = servicesData.find((s) => s.slug === resolvedParams.slug);
    if (!service) return {};
    return {
        title: `${service.title} | Codiniti`,
        description: service.shortDescription,
    };
}

export default async function ServicePage({ params }: ServicePageProps)
{
    const resolvedParams = await params; // ⚡ await the Promise
    const service = servicesData.find((s) => s.slug === resolvedParams.slug);
    if (!service) return notFound();

    return (
        <section className="flex flex-col">
            {/* ===== HERO SECTION ===== */}
            <div
                className={`relative bg-gradient-to-r ${service.gradient} text-white py-20 px-6`}
            >
                <div className="max-w-5xl mx-auto text-center mt-20">
                    <div className="flex flex-col items-center gap-4">
                        {service.icon}
                        <h1 className="text-5xl font-bold">{service.title}</h1>
                        <p className="text-lg opacity-90 max-w-2xl mx-auto mt-3">
                            {service.shortDescription}
                        </p>

                        <a
                            href="https://wa.me/923394112114?text=Hello%2C%20I%27m%20interested%20in%20your%20services"
                            target="_blank"
                            className="mt-6 inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition"
                        >
                            Get Free Consultation
                        </a>
                    </div>
                </div>
            </div>

            {/* ===== DESCRIPTION SECTION ===== */}
            <div className="max-w-5xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                    {service.longDescription}
                </p>
            </div>

            {/* ===== FEATURES SECTION ===== */}
            {service.features && (
                <div className="bg-gray-50 py-16">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
                            Key Features
                        </h2>
                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {service.features.map((feature) => (
                                <li
                                    key={feature}
                                    className="flex items-start gap-3 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition"
                                >
                                    <span className="text-orange-600 text-xl mt-1">✔</span>
                                    <span className="text-gray-700">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {/* ===== TECHNOLOGIES SECTION ===== */}
            {service.technologies && (
                <div className="max-w-5xl mx-auto px-6 py-16">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
                        Technologies Used
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {service.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 font-medium px-4 py-2 rounded-md shadow-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* ===== PROJECTS SECTION ===== */}
            {service.projects && (
                <div className="bg-gray-50 py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-10 text-center">
                            Past Completed Projects
                        </h2>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {service.projects.map((project) => (
                                <div
                                    key={project.name}
                                    className="relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
                                >
                                    <div className="relative h-52">
                                        <Image
                                            src={project.image}
                                            alt={project.name}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <h3 className="absolute bottom-3 left-4 text-white text-lg font-semibold">
                                            {project.name}
                                        </h3>
                                    </div>

                                    <div className="p-5">
                                        <p className="text-gray-700 text-sm mb-3 text-justify">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-700"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                            {project.features.map((f) => (
                                                <li key={f}>{f}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
