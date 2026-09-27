import React from "react";

const testimonials = [
    {
        image: "https://i.pravatar.cc/100?img=12",
        text: "Working with Ayush was a great experience. He understands the requirements quickly and delivers clean, modern work.",
        name: "Rahul Sharma",
        role: "Frontend Developer",
    },
    {
        image: "https://i.pravatar.cc/100?img=32",
        text: "Ayush is hardworking, creative and always ready to learn new technologies. His approach towards development is impressive.",
        name: "Ananya Singh",
        role: "Software Engineer",
    },
    {
        image: "https://i.pravatar.cc/100?img=47",
        text: "A great teammate who takes responsibility and makes sure the work gets completed on time. Highly collaborative and reliable.",
        name: "Rohan Verma",
        role: "Team Member",
    },
    {
        image: "https://i.pravatar.cc/100?img=5",
        text: "Ayush has a strong understanding of frontend development and always puts effort into making the user experience better.",
        name: "Priya Kapoor",
        role: "UI/UX Designer",
    },
];

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="min-h-screen bg-black text-white px-6 py-24"
        >
            <div className="max-w-4xl mx-auto">

                {/* Heading */}
                <h2 className="text-center text-2xl md:text-3xl font-semibold mb-12">
                    What People Say
                </h2>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">

                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="border border-white/20 rounded-lg p-6 
                            bg-white/[0.03] hover:bg-white/[0.06] 
                            transition-all duration-300"
                        >

                            {/* Profile Image */}
                            <div className="flex justify-center mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                            </div>

                            {/* Testimonial */}
                            <p className="text-gray-300 text-xs md:text-sm 
                            text-center leading-relaxed">
                                "{testimonial.text}"
                            </p>

                            {/* Name */}
                            <h3 className="text-white text-sm font-medium 
                            text-center mt-4">
                                {testimonial.name}
                            </h3>

                            {/* Role */}
                            <p className="text-gray-500 text-xs text-center mt-1">
                                {testimonial.role}
                            </p>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}