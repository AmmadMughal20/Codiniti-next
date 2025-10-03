// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap
{
    const projectsData = [
        {
            id: "1",
            title: "Custom Software Development",
            slug: "custom-software-development",
            description:
                "Design and develop a complete software solution tailored to your business workflows.",
            updatedAt: "2025-10-03",
        },
        {
            id: "2",
            title: "Tailored CRM Solutions",
            slug: "tailored-crm-solutions",
            description:
                "Build a customer relationship management system that matches your exact sales process.",
            updatedAt: "2025-10-03",
        },
        {
            id: "3",
            title: "Point of Sale (POS) Systems",
            slug: "pos-systems",
            description:
                "Fast, reliable, and inventory-aware POS systems to keep your retail or restaurant business running smoothly.",
            updatedAt: "2025-10-03",
        },
        {
            id: "4",
            title: "Store Inventory Management (SIS)",
            slug: "store-inventory-management",
            description:
                "Track, organize, and automate inventory control to reduce waste, avoid stock-outs, and save costs.",
            updatedAt: "2025-10-03",
        },
        {
            id: "5",
            title: "E-Commerce Website Development",
            slug: "ecommerce-website-development",
            description:
                "Launch your online store with modern, mobile-first design and secure payment integrations.",
            updatedAt: "2025-10-03",
        },
        {
            id: "6",
            title: "Business Mobile App Development",
            slug: "business-mobile-app-development",
            description:
                "Custom mobile apps to streamline operations, connect with customers, or power your startup idea.",
            updatedAt: "2025-10-03",
        },
        {
            id: "9",
            title: "High-Conversion Landing Pages",
            slug: "high-conversion-landing-pages",
            description:
                "Beautifully designed, conversion-optimized landing pages for your product launch or marketing campaigns.",
            updatedAt: "2025-10-03",
        },
        {
            id: "10",
            title: "Website Maintenance & Optimization",
            slug: "website-maintenance-optimization",
            description:
                "Keep your website secure, fast, and SEO-friendly with ongoing updates and performance tuning.",
            updatedAt: "2025-10-03",
        },
    ];

    const projectUrls = projectsData.map((project) => ({
        url: `https://www.codiniti.com/projects/${project.slug}`,
        lastModified: new Date(project.updatedAt),
    }));

    return [
        {
            url: "https://www.codiniti.com",
            lastModified: new Date(),
        },
        {
            url: "https://www.codiniti.com/about",
            lastModified: new Date(),
        },
        {
            url: "https://www.codiniti.com/services",
            lastModified: new Date(),
        },
        {
            url: "https://www.codiniti.com/projects",
            lastModified: new Date(),
        },
        ...projectUrls,
        {
            url: "https://www.codiniti.com/contact",
            lastModified: new Date(),
        },
    ];
}
