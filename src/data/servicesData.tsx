import
{
    Code,
    Smartphone,
    Cloud,
    BarChart,
    Palette,
    Brain
} from "lucide-react";

import CRMImage from '@/assets/images/crm.jpg';
import POSImage from '@/assets/images/pos.jpg';
import Ecommerce from '@/assets/images/e-commerce.jpg';
import Inventory from '@/assets/images/inventory.jpg';
import MobileApp from '@/assets/images/mobile-app.jpg';
import LandingPage from '@/assets/images/landingpage.jpg';
import WebsiteMaintenence from '@/assets/images/website-maintenance.jpg';
import CustomDevelopment from '@/assets/images/custom.jpg';

export const servicesData = [
    {
        id: 1,
        slug: "website-design-and-development",
        title: "Website Design & Development",
        shortDescription:
            "Build fast, secure, and SEO-optimized websites that attract customers and elevate your online presence.",
        longDescription: `
            At Codiniti, we design and develop responsive, modern websites that convert visitors into customers. 
            Our team leverages cutting-edge technologies like Next.js, React, and Tailwind CSS to create lightning-fast, 
            accessible, and SEO-optimized sites. Whether you need a corporate website, portfolio, or eCommerce platform, 
            we ensure it reflects your brand identity and delivers measurable results.
        `,
        icon: <Code className="w-12 h-12" />,
        gradient: "from-blue-500 to-purple-600",
        features: [
            "Custom UI design and branding",
            "Responsive layouts optimized for all devices",
            "SEO best practices integrated",
            "Next.js and React-based performance",
            "CMS integration (WordPress, Sanity, Strapi, etc.)",
        ],
        technologies: ["HTML", "CSS", "JS", "WordPress", "Webflow", "Next.js", "React", "Tailwind CSS",],
        projects: [
            {
                name: "E-Commerce Website Development",
                image: Ecommerce,
                description:
                    "Modern e-commerce stores with smooth checkout, analytics, and mobile-first UX for higher conversions.",
                technologies: ["Next.js", "Shopify", "Tailwind CSS"],
                features: [
                    "Responsive eCommerce design",
                    "Secure payment gateway integration",
                    "Product management dashboard",
                ],
            },
            {
                name: "High-Conversion Landing Pages",
                image: LandingPage,
                description:
                    "Conversion-focused landing pages optimized for marketing campaigns and lead generation.",
                technologies: ["Webflow", "Next.js"],
                features: [
                    "High-performance static generation",
                    "A/B tested conversion design",
                    "CRM and analytics integration",
                ],
            },
            {
                name: "Website Maintenance & Optimization",
                image: WebsiteMaintenence,
                description:
                    "Performance and SEO optimization to improve Core Web Vitals and rankings.",
                technologies: ["Any CMS", "Custom Stack"],
                features: [
                    "Speed optimization",
                    "Continuous updates",
                    "SEO monitoring and fixes",
                ],
            },
        ],
        seo: {
            title: "Website Design & Development | Codiniti Lahore",
            description:
                "Professional website design and development in Lahore. We build SEO-friendly, fast, and modern web solutions to grow your online business.",
            keywords: ["web design", "website development", "Next.js", "Lahore web company"],
        },
    },
    {
        id: 2,
        slug: "mobile-app-development",
        title: "Mobile App Development (Android & iOS)",
        shortDescription:
            "Deliver feature-rich, high-performance apps that engage users and scale with your business needs.",
        longDescription: `
            Codiniti builds cross-platform and native mobile apps that combine stunning design with powerful performance. 
            Our expertise in React Native and Flutter enables us to craft apps that are reliable, fast, and user-friendly 
            — perfect for startups and enterprises alike.
        `,
        icon: <Smartphone className="w-12 h-12" />,
        gradient: "from-green-500 to-teal-600",
        features: [
            "Cross-platform (React Native / Flutter)",
            "Native Android & iOS apps",
            "App store deployment support",
            "Push notifications and analytics",
            "Smooth animations and modern UI/UX",
        ],
        technologies: ["React Native", "Flutter", "Firebase", "Expo"],
        projects: [
            {
                name: "Business Mobile App Development",
                image: MobileApp,
                description:
                    "Scalable mobile app built to enhance internal business operations and customer engagement.",
                technologies: ["React Native", "Firebase"],
                features: [
                    "Real-time notifications",
                    "User authentication",
                    "Offline data persistence",
                ],
            },
            {
                name: "MinaClass (Sample)",
                image: MobileApp,
                description:
                    "A modern tutoring app connecting students and teachers through real-time sessions.",
                technologies: ["React Native", "Next.js", "Firebase"],
                features: [
                    "Real-time video classes",
                    "Scheduling and payments",
                    "Chat and notifications",
                ],
            },
        ],
        seo: {
            title: "Mobile App Development | Codiniti Lahore",
            description:
                "Codiniti offers high-performance mobile app development services in Lahore. Build cross-platform or native apps tailored to your needs.",
            keywords: ["mobile app", "React Native", "Flutter", "Android iOS apps", "Lahore software company"],
        },
    },
    {
        id: 3,
        slug: "custom-software-development",
        title: "Custom Software Development",
        shortDescription:
            "Automate processes and reduce costs with tailored software built around your unique workflows.",
        longDescription: `
            We develop enterprise-grade custom software that simplifies your operations. From ERP and CRM solutions to 
            inventory management and automation tools, we design systems that scale with your business and integrate 
            seamlessly into your existing infrastructure.
        `,
        icon: <Cloud className="w-12 h-12" />,
        gradient: "from-orange-500 to-red-600",
        features: [
            "Business process automation",
            "ERP & CRM systems",
            "Custom dashboards and reports",
            "API integrations",
            "Scalable backend architecture",
        ],
        technologies: ["React", "Flask", "PostgreSQL", "Node.js", "Supabase"],
        projects: [
            {
                name: "Custom Software Development (ESG)",
                image: CustomDevelopment,
                description:
                    "Developed enterprise-grade automation software for internal workflows, inventory, and reporting.",
                technologies: ["React", "Flask", "PostgreSQL"],
                features: [
                    "Inventory control and analytics",
                    "Multi-user dashboards",
                    "Secure role-based access",
                ],
            },
            {
                name: "Tailored CRM Solutions",
                image: CRMImage,
                description:
                    "A fully customizable CRM built to match sales pipelines and customer management needs.",
                technologies: ["React", "Flask", "PostgreSQL"],
                features: [
                    "Lead management system",
                    "Customer analytics",
                    "Automated follow-ups",
                ],
            },
            {
                name: "Store Inventory Management (SIS)",
                image: Inventory,
                description:
                    "Smart stock management software for warehouses and distributors.",
                technologies: ["React", "Flask", "PostgreSQL"],
                features: [
                    "Stock tracking and reporting",
                    "Supplier and invoice management",
                    "Alerts for stock-out prevention",
                ],
            },
        ],
        seo: {
            title: "Custom Software Development | Codiniti",
            description:
                "Custom software development company in Lahore providing ERP, CRM, and automation solutions built around your business needs.",
            keywords: ["custom software", "ERP development", "CRM solutions", "automation software"],
        },
    },
    {
        id: 4,
        slug: "digital-marketing",
        title: "Digital Marketing",
        shortDescription:
            "Reach the right audience with data-driven campaigns that boost visibility, leads, and conversions.",
        longDescription: `
            Codiniti helps you grow your online presence with smart marketing strategies. We manage SEO, social media, 
            Google Ads, and email marketing to drive measurable business growth. Our data-driven approach ensures that 
            every dollar spent delivers results.
        `,
        icon: <BarChart className="w-12 h-12" />,
        gradient: "from-purple-500 to-pink-600",
        features: [
            "Search Engine Optimization (SEO)",
            "Google Ads & PPC campaigns",
            "Social Media Marketing",
            "Email marketing automation",
            "Performance analytics and reporting",
        ],
        technologies: ["Google Ads", "Meta Ads", "SEO Tools", "GA4", "Mailchimp"],
        projects: [
            {
                name: "Digital Campaign for eCommerce Client (Sample)",
                image: LandingPage,
                description:
                    "SEO and ad strategy to increase online sales by 40% within 3 months.",
                technologies: ["Google Ads", "Facebook Pixel", "GA4"],
                features: [
                    "Targeted ad campaigns",
                    "Conversion tracking setup",
                    "Performance-based optimization",
                ],
            },
        ],
        seo: {
            title: "Digital Marketing Services | Codiniti Lahore",
            description:
                "Boost your online visibility with Codiniti’s SEO, PPC, and digital marketing strategies in Lahore. Data-driven marketing that delivers results.",
            keywords: ["digital marketing", "SEO services", "PPC", "Google Ads", "social media marketing Lahore"],
        },
    },
    {
        id: 5,
        slug: "ui-ux-design-and-development",
        title: "UI/UX Design & Development",
        shortDescription:
            "Delight users with clean, intuitive, and conversion-focused designs that build brand trust.",
        longDescription: `
            We craft beautiful and intuitive user interfaces that make your digital products stand out. From wireframes 
            to polished prototypes, our design process ensures usability, accessibility, and aesthetic excellence. 
            Good design isn’t just about looks — it’s about experience.
        `,
        icon: <Palette className="w-12 h-12" />,
        gradient: "from-yellow-500 to-orange-600",
        features: [
            "Wireframing & prototyping",
            "User research and journey mapping",
            "Interactive UI mockups",
            "Design systems & component libraries",
            "Cross-platform consistency",
        ],
        technologies: ["Figma", "Adobe XD", "Framer", "React", "Tailwind CSS"],
        projects: [
            {
                name: "UI Design for Inventory System (SIS)",
                image: Inventory,
                description:
                    "A clean, intuitive dashboard for managing stock, suppliers, and analytics.",
                technologies: ["Figma", "React"],
                features: [
                    "Simplified inventory navigation",
                    "Visual data analytics",
                    "Color-coded alerts and statuses",
                ],
            },
            {
                name: "Power ERP Dashboard UI (Sample)",
                image: CustomDevelopment,
                description:
                    "Modern, scalable ERP dashboard design system for enterprise operations.",
                technologies: ["Figma", "Framer"],
                features: [
                    "Modular design system",
                    "Dark/light mode UI",
                    "Data visualization widgets",
                ],
            },
        ],
        seo: {
            title: "UI/UX Design Services | Codiniti",
            description:
                "Professional UI/UX design services in Lahore. Codiniti creates user-friendly, aesthetic interfaces that enhance engagement and conversions.",
            keywords: ["UI design", "UX design", "user interface", "product design", "Lahore UI company"],
        },
    },
    {
        id: 6,
        slug: "ai-powered-web-and-mobile-apps",
        title: "AI-Powered Web & Mobile Apps",
        shortDescription:
            "Leverage AI for smarter apps with automation, personalization, and real-time decision-making.",
        longDescription: `
            Transform your digital products with artificial intelligence. From predictive analytics to chatbot integration 
            and process automation, Codiniti integrates AI features that enhance performance, personalization, and efficiency.
        `,
        icon: <Brain className="w-12 h-12" />,
        gradient: "from-indigo-500 to-blue-600",
        features: [
            "AI-based chatbots and assistants",
            "Predictive analytics and insights",
            "Machine learning model integration",
            "Automation workflows",
            "Data-driven recommendations",
        ],
        technologies: ["Python", "TensorFlow", "OpenAI API", "Next.js", "LangChain"],
        projects: [
            {
                name: "AI Chat Assistant (Sample)",
                image: CustomDevelopment,
                description:
                    "Integrated a GPT-based chat system for customer support and internal query handling.",
                technologies: ["OpenAI API", "Next.js"],
                features: [
                    "Conversational AI chatbot",
                    "Custom prompt workflows",
                    "Integration with backend CRM",
                ],
            },
            {
                name: "Predictive Sales Analytics Tool (Sample)",
                image: CRMImage,
                description:
                    "Built ML-driven dashboards to predict sales trends and customer churn.",
                technologies: ["Python", "TensorFlow", "Flask"],
                features: [
                    "Sales prediction models",
                    "Data visualization dashboards",
                    "Automated reporting",
                ],
            },
        ],
        seo: {
            title: "AI Solutions | Codiniti Lahore",
            description:
                "Codiniti develops AI-driven web and mobile applications in Lahore. Integrate machine learning, chatbots, and automation into your business.",
            keywords: ["AI apps", "machine learning", "AI software", "chatbots", "automation"],
        },
    },
];
