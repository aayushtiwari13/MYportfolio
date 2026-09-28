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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">

                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="
                                group relative overflow-hidden
                                border border-white/10
                                rounded-2xl
                                p-6
                                bg-white/[0.03]
                                cursor-pointer

                                transition-all duration-500 ease-out

                                hover:-translate-y-2
                                hover:scale-[1.02]
                                hover:border-white/30
                                hover:bg-white/[0.07]
                                hover:shadow-[0_20px_50px_rgba(255,255,255,0.08)]

                                active:scale-[0.98]
                            "
                        >

                            {/* Hover Glow */}
                            <div
                                className="
                                    absolute
                                    -top-20
                                    -right-20
                                    w-40
                                    h-40
                                    rounded-full
                                    bg-white/10
                                    blur-3xl
                                    opacity-0
                                    group-hover:opacity-100
                                    transition-opacity
                                    duration-500
                                "
                            />

                            {/* Profile Image */}
                            <div className="flex justify-center mb-5 relative z-10">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="
                                        w-12
                                        h-12
                                        rounded-full
                                        object-cover
                                        ring-2
                                        ring-white/10

                                        transition-all
                                        duration-500

                                        group-hover:scale-110
                                        group-hover:ring-white/40
                                    "
                                />
                            </div>

                            {/* Testimonial */}
                            <p
                                className="
                                    relative
                                    z-10
                                    text-gray-400
                                    text-sm
                                    text-center
                                    leading-relaxed

                                    transition-colors
                                    duration-500

                                    group-hover:text-gray-200
                                "
                            >
                                "{testimonial.text}"
                            </p>

                            {/* Name */}
                            <h3
                                className="
                                    relative
                                    z-10
                                    text-white
                                    text-sm
                                    font-semibold
                                    text-center
                                    mt-5

                                    transition-all
                                    duration-500

                                    group-hover:scale-105
                                "
                            >
                                {testimonial.name}
                            </h3>

                            {/* Role */}
                            <p
                                className="
                                    relative
                                    z-10
                                    text-gray-500
                                    text-xs
                                    text-center
                                    mt-1

                                    transition-colors
                                    duration-500

                                    group-hover:text-gray-300
                                "
                            >
                                {testimonial.role}
                            </p>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}