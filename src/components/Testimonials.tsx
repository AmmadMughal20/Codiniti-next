import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote } from "lucide-react";

const Testimonials = () =>
{
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const testimonials = [
        {
            name: "Sarah Johnson",
            position: "CEO, TechStartup Inc.",
            content: "Codiniti transformed our vision into reality with exceptional attention to detail and cutting-edge technology. Their team's expertise is unmatched.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=150"
        },
        {
            name: "Michael Chen",
            position: "CTO, DataFlow Solutions",
            content: "The quality of work and professionalism shown by Codiniti exceeded our expectations. They delivered a robust solution that scaled perfectly with our growth.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
        },
        {
            name: "Emily Rodriguez",
            position: "Product Manager, InnovateCorp",
            content: "Working with Codiniti was a game-changer for our project. Their innovative approach and technical excellence helped us launch ahead of schedule.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
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
                        Don't just take our word for it. Here's what our satisfied clients have to say about our work.
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
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
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
                                "{testimonial.content}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;