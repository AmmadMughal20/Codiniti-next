import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CRMImage from '@/assets/images/crm.jpg';
import POSImage from '@/assets/images/pos.jpg';
import Ecommerce from '@/assets/images/e-commerce.jpg';
import Inventory from '@/assets/images/inventory.jpg';
import MobileApp from '@/assets/images/mobile-app.jpg';
import LandingPage from '@/assets/images/landingpage.jpg';
import WebsiteMaintenence from '@/assets/images/website-maintenance.jpg';
import CustomDevelopment from '@/assets/images/custom.jpg';
import { StaticImageData } from 'next/image';

export interface Project
{
    id: string;
    title: string;
    slug?: string;
    description: string;
    longDescription: string;
    image: string | StaticImageData;
    technologies: string[];
    bestFor: string[];
    category: string;
    liveDemo?: string;
    github?: string;
}

interface ProjectsState
{
    projects: Project[];
}
export const projectsData: Project[] = [
    {
        id: "1",
        slug: "custom-software-development",
        title: "Custom Software Development",
        image: CustomDevelopment,
        description:
            "End-to-end tailored software that streamlines workflows, improves collaboration, and adapts to your specific industry needs — delivering measurable efficiency gains.",
        technologies: ["React", "Flask", "PostgreSQL"],
        bestFor: ["Corporate Companies", "Manufacturing", "Signage Industry", "Agencies"],
        category: "SaaS (Software as a Service)",
        longDescription:
            "Codiniti developed a comprehensive custom software solution for a variety of industries. Features include workflow automation, real-time analytics, and integration with existing tools, helping businesses scale efficiently."
    },
    {
        id: "2",
        slug: "tailored-crm-solutions",
        title: "Tailored CRM Solutions",
        image: CRMImage,
        description:
            "A fully customizable CRM built to match your exact sales process — from lead nurturing to customer retention — helping you close deals faster and build lasting relationships.",
        technologies: ["React", "Flask", "PostgreSQL"],
        bestFor: ["Sales Teams", "Service Providers", "SMEs"],
        category: "CRM Software",
        longDescription:
            "We built a CRM system for SMEs in Pakistan to streamline customer management. Key features include automated follow-ups, deal tracking, reporting dashboards, and mobile access for sales teams."
    },
    {
        id: "3",
        slug: "point-of-sale-systems",
        title: "Point of Sale (POS) Systems",
        image: POSImage,
        description:
            "Fast, secure, and inventory-aware POS systems that simplify billing, manage stock in real-time, and keep retail or restaurant operations running without interruptions.",
        technologies: ["React", "Flask", "PostgreSQL"],
        bestFor: ["Retail", "Restaurants", "Warehouses"],
        category: "Retail Solutions",
        longDescription:
            "POS systems designed for small retail shops and restaurants across Pakistan. Includes barcode scanning, payment gateway integration, inventory alerts, and detailed sales reporting."
    },
    {
        id: "4",
        slug: "store-inventory-management",
        title: "Store Inventory Management (SIS)",
        image: Inventory,
        description:
            "Smart inventory control to track, organize, and automate stock management — reducing waste, preventing stock-outs, and cutting operational costs.",
        technologies: ["React", "Flask", "PostgreSQL"],
        bestFor: ["Warehouses", "Retail", "Distributors"],
        category: "Business Automation",
        longDescription:
            "An automated inventory management solution for SMEs and distributors. Features real-time stock updates, reorder alerts, supplier management, and reporting dashboards."
    },
    {
        id: "5",
        slug: "e-commerce-website-development",
        title: "E-Commerce Website Development",
        image: Ecommerce,
        description:
            "Mobile-first, modern e-commerce stores with secure payment gateways, product analytics, and user-friendly designs to maximize sales.",
        technologies: ["React", "Next.js", "WooCommerce", "Shopify"],
        bestFor: ["Product Sellers", "Marketplaces", "SMEs"],
        category: "E-Commerce",
        longDescription:
            "We build e-commerce platforms tailored for local Pakistani businesses. Features include payment gateway integration, product management, responsive design, and performance optimization for high conversions."
    },
    {
        id: "6",
        slug: "business-mobile-app-development",
        title: "Business Mobile App Development",
        image: MobileApp,
        description:
            "Scalable mobile apps that streamline internal operations, enhance customer engagement, or bring startup ideas to life with intuitive user experiences.",
        technologies: ["React Native", "Firebase", "API Integrations"],
        bestFor: ["Businesses", "Startups", "Entrepreneurs"],
        category: "Mobile Applications",
        longDescription:
            "Mobile apps designed for SMEs and startups, enabling booking, ordering, and customer engagement directly from mobile devices. Fully customized and scalable."
    },
    {
        id: "7",
        slug: "restaurant-management-app",
        title: "Restaurant Management App",
        image: MobileApp,
        description:
            "A complete solution for restaurant owners to manage orders, menus, and delivery operations in one platform.",
        technologies: ["React Native", "Firebase", "Stripe API"],
        bestFor: ["Restaurants", "Cafes"],
        category: "Mobile Applications",
        longDescription:
            "Codiniti developed a mobile app for restaurants to manage orders, track deliveries, handle payments, and view analytics. Reduced errors and improved customer experience significantly."
    },
    {
        id: "8",
        slug: "healthcare-appointment-system",
        title: "Healthcare Appointment System",
        image: CRMImage,
        description:
            "An appointment booking platform for clinics and healthcare providers to manage patients and schedules efficiently.",
        technologies: ["React", "Next.js", "Node.js", "MongoDB"],
        bestFor: ["Clinics", "Doctors", "Healthcare SMEs"],
        category: "Healthcare Solutions",
        longDescription:
            "A digital platform to manage patient appointments, reminders, and staff schedules for clinics in Pakistan. Helps reduce manual errors and improve patient satisfaction."
    },
    {
        id: "9",
        slug: "high-conversion-landing-pages",
        title: "High-Conversion Landing Pages",
        image: LandingPage,
        description:
            "Conversion-focused landing pages designed to capture leads, drive campaign results, and create lasting impressions for product launches.",
        technologies: ["Webflow", "Next.js"],
        bestFor: ["Startups", "Campaigns", "Product Launches"],
        category: "Website",
        longDescription:
            "Landing pages designed to increase lead capture and conversion for marketing campaigns. Fully responsive, SEO-optimized, and built with fast-loading elements."
    },
    {
        id: "10",
        slug: "website-maintenance-optimization",
        title: "Website Maintenance & Optimization",
        image: WebsiteMaintenence,
        description:
            "Keep your digital presence strong with continuous security updates, SEO improvements, and performance optimization for faster loading and better rankings.",
        technologies: ["Any CMS", "Custom Stack"],
        bestFor: ["All Businesses"],
        category: "Maintenance",
        longDescription:
            "Full website maintenance service including security patches, speed optimization, SEO improvements, and uptime monitoring to ensure your website performs at its best."
    },
];



const initialState: ProjectsState = {
    projects: projectsData,
};

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        addProject: (state, action: PayloadAction<Project>) =>
        {
            state.projects.push(action.payload);
        },
        updateProject: (state, action: PayloadAction<Project>) =>
        {
            const index = state.projects.findIndex(p => p.id === action.payload.id);
            if (index !== -1)
            {
                state.projects[index] = action.payload;
            }
        },
        deleteProject: (state, action: PayloadAction<string>) =>
        {
            state.projects = state.projects.filter(p => p.id !== action.payload);
        },
    },
});

export const { addProject, updateProject, deleteProject } = projectsSlice.actions;
export default projectsSlice.reducer;