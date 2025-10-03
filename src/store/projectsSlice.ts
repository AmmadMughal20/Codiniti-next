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
    description: string;
    image: string | StaticImageData;
    technologies: string[];
    bestFor?: string[];
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
        id: "2",
        title: "Tailored CRM Solutions",
        image: CRMImage, // e.g., the illustration shown above
        description:
            "Build a customer relationship management system that matches your exact sales process — from lead tracking to customer retention analytics.",
        technologies: ["React", "Flask", "PostgreSQL"],
        bestFor: ["Sales Teams", "Service Providers", "SMEs"],
        category: "CRM Software",
    },
    {
        id: "3",
        title: "Point of Sale (POS) Systems",
        image: POSImage, // use POS system graphic
        description:
            "Fast, reliable, and inventory-aware POS systems to keep your retail or restaurant business running smoothly.",
        technologies: ["React", "Flask", "PostgreSQL"],
        bestFor: ["Retail", "Restaurants", "Warehouses"],
        category: "Retail Solutions",
    },
    {
        id: "4",
        title: "Store Inventory Management (SIS)",
        image: Inventory, // e.g., data/inventory schematic
        description:
            "Track, organize, and automate inventory control to reduce waste, avoid stock-outs, and save costs.",
        technologies: ["React", "Flask", "PostgreSQL"],
        bestFor: ["Warehouses", "Retail", "Distributors"],
        category: "Business Automation",
    },
    {
        id: "5",
        title: "E-Commerce Website Development",
        image: Ecommerce, // maybe use the system/dashboard graphic
        description:
            "Launch your online store with modern, mobile-first design and secure payment integrations.",
        technologies: ["React", "Next.js", "WooCommerce", "Shopify"],
        bestFor: ["Product Sellers", "Marketplaces"],
        category: "E-Commerce",
    },
    {
        id: "6",
        title: "Business Mobile App Development",
        image: MobileApp, // perhaps a general app or chat UI
        description:
            "Custom mobile apps to streamline operations, connect with customers, or power your startup idea.",
        technologies: ["React Native", "Firebase", "API Integrations"],
        bestFor: ["Businesses", "Startups", "Entrepreneurs"],
        category: "Mobile Applications",
    },
    // {
    //     id: "7",
    //     title: "Real-Time Chat Applications",
    //     image: "URL_CHAT_IMAGE_HERE", // maybe reuse same app/communication graphic
    //     description:
    //         "Secure, scalable, and responsive chat solutions for customer support, communities, or internal teams.",
    //     technologies: ["Flask", "Python", "PostgreSQL"],
    //     bestFor: ["SaaS", "Support Platforms", "Internal Teams"],
    //     category: "Communication",
    // },
    // {
    //     id: "8",
    //     title: "Crypto & Fintech Platforms",
    //     image: "URL_DATA_IMAGE_HERE", // dashboard or analytics style
    //     description:
    //         "Modern trading platforms with real-time data, secure transactions, and analytics dashboards.",
    //     technologies: ["Next.js", "NextAuth", "MongoDB"],
    //     bestFor: ["Crypto Startups", "Fintech Companies"],
    //     category: "Cryptocurrency",
    // },
    {
        id: "9",
        title: "High-Conversion Landing Pages",
        image: LandingPage,
        description:
            "Beautifully designed, conversion-optimized landing pages for your product launch or marketing campaigns.",
        technologies: ["Webflow", "Next.js"],
        bestFor: ["Startups", "Campaigns", "Product Launches"],
        category: "Website",
    },
    {
        id: "10",
        title: "Website Maintenance & Optimization",
        image: WebsiteMaintenence, // analytics or dashboard graphic
        description:
            "Keep your website secure, fast, and SEO-friendly with ongoing updates and performance tuning.",
        technologies: ["Any CMS", "Custom Stack"],
        bestFor: ["All Businesses"],
        category: "Maintenance",
    },
    {
        id: "1",
        title: "Custom Software Development",
        image: CustomDevelopment, // or a workflow/system image
        description:
            "Design and develop a complete software solution tailored to your business workflows — streamline operations, track progress, and improve collaboration.",
        technologies: ["React", "Flask", "PostgreSQL"],
        bestFor: ["Corporate Companies", "Manufacturing", "Signage Industry", "Agencies"],
        category: "SaaS (Software as a Service)",
    },
]

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