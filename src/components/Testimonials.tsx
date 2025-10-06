import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const Testimonials = () =>
{
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const testimonials = [
        {
            name: "Ayesha Khan",
            position: "Owner, Lahore Boutique",
            content: "Codiniti helped us digitize our store with an intuitive e-commerce platform. Their team understood our SME needs and delivered a solution that boosted our sales significantly.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1733310925495-0b0c596945bc?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Fahad Ahmed",
            position: "Founder, Karachi Catering Services",
            content: "Our booking system was outdated and hard to manage. Codiniti developed a custom solution that streamlined our operations and improved client satisfaction immensely.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1673830719944-7bf527816dae?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Sana Riaz",
            position: "Manager, Islamabad Fitness Studio",
            content: "Codiniti transformed our business by creating a mobile app for class bookings and memberships. Their professional approach and understanding of small businesses made the process seamless.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1650004089007-6f83c6d56e52?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                        What Our Clients Say
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {` Don't just take our word for it. Here's what our satisfied clients have to say about our work.`}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative"
                        >
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-orange-500/20" />

                            <div className="flex items-center mb-6">
                                <Image
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    width={100}
                                    height={100}
                                    className="w-16 h-16 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                                </div>
                            </div>

                            <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>

                            <p className="text-gray-700 leading-relaxed italic">
                                {`"`}{testimonial.content}{`"`}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;