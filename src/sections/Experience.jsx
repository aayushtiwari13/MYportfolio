import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const experiences = [
    {
        title: "Web Developer",
        company: "Brain Mentors",
        period: "2022",
        description:
            "Worked with team to build high-performance apps, integrated AI features, and improved engagement by 10%.",
        position: "top",
    },
    {
        title: "Web Developer Intern",
        company: "Mobisoft Technologies",
        period: "2022 - 2023",
        description:
            "In this internship, I gained valuable hands on experience and exposure to various aspects of web development.",
        position: "bottom",
    },
    {
        title: "Graduate Engineer",
        company: "HCL Technologies",
        period: "2024 - 2025",
        description:
            "Built the frontend of a GenAI-powered PV intake application using NestJs and TypeScript for a U.S life sciences client, enabling automated patient report processing across global regions.",
        position: "top",
    },
];

const count = experiences.length;

function ExperienceItem({ exp, i, progress }) {
    // each item gets its own little window of scroll progress to fade/slide in
    const start = i / count;
    const end = start + 0.5 / count;

    const opacity = useTransform(progress, [start, end], [0, 1]);
    const scale = useTransform(progress, [start, end], [0.6, 1]);
    const y = useTransform(
        progress,
        [start, end],
        [exp.position === "top" ? 16 : -16, 0]
    );

    const leftPercent = (i / (count - 1)) * 100;

    return (
        <div
            className="absolute"
            style={{
                left: `${leftPercent}%`,
                top: "50%",
                transform: "translate(-50%, -50%)",
            }}
        >
            {/* dot on the line — pops in with a little spring scale */}
            <motion.div
                className="w-3 h-3 rounded-full bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] mx-auto shadow-[0_0_10px_2px_rgba(28,216,210,0.5)]"
                style={{ opacity, scale }}
            />

            {/* info card, above or below the line depending on position */}
            <motion.div
                style={{ opacity, y }}
                className={`absolute ${
                    exp.position === "top" ? "bottom-6" : "top-6"
                } left-1/2 -translate-x-1/2 w-56 sm:w-64 bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm`}
            >
                <h3 className="text-white font-semibold text-sm sm:text-base">
                    {exp.title}
                </h3>
                <p className="text-gray-400 text-xs mb-2">
                    {exp.company} | {exp.period}
                </p>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {exp.description}
                </p>
            </motion.div>
        </div>
    );
}

export default function Experience() {
    const containerRef = useRef(null);

    // scrollYProgress goes 0 -> 1 as the user scrolls through this section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // spring-smoothed version so the line visibly eases/trails as you scroll
    // instead of snapping instantly to the scroll position
    const progress = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 22,
        mass: 0.4,
    });

    const lineWidth = useTransform(progress, [0, 1], ["0%", "100%"]);

    return (
        <section
            id="experience"
            ref={containerRef}
            className="relative bg-black"
            style={{ height: `${count * 100}vh` }}
        >
            {/* sticky wrapper stays pinned while we scroll through the tall section above */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center px-6">
                <h2 className="absolute top-12 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
                    Experience
                </h2>

                <div className="relative w-full max-w-5xl h-1">
                    {/* base track (always fully visible, dim) */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[2px] bg-white/20" />

                    {/* progress line that visibly fills in as you scroll */}
                    <motion.div
                        className="absolute top-1/2 -translate-y-1/2 left-0 h-[2px] bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]"
                        style={{ width: lineWidth }}
                    />

                    {/* glowing tip that travels at the leading edge of the line,
                        with a gentle pulse so the motion is easy to notice */}
                    <motion.div
                        className="absolute top-1/2 w-3 h-3 rounded-full -translate-y-1/2 -translate-x-1/2 bg-[#1cd8d2] shadow-[0_0_14px_4px_rgba(28,216,210,0.7)]"
                        style={{ left: lineWidth }}
                        animate={{ scale: [1, 1.35, 1] }}
                        transition={{
                            duration: 1.1,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {experiences.map((exp, i) => (
                        <ExperienceItem
                            key={i}
                            exp={exp}
                            i={i}
                            progress={progress}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}