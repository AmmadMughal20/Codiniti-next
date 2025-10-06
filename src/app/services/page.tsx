import Link from "next/link";
import { servicesData } from "@/data/servicesData";

export default function ServicesPage()
{
    return (
        <section className="max-w-5xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold text-center mb-10">
                Our Services
            </h1>
            <div className="grid md:grid-cols-3 gap-8">
                {servicesData.map((service) => (
                    <div
                        key={service.slug}
                        className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition"
                    >
                        <div className="mb-4">{service.icon}</div>
                        <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                        <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                        <Link
                            href={`/services/${service.slug}`}
                            className="text-orange-600 hover:text-red-600 font-medium"
                        >
                            Learn More →
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
