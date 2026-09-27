import { motion } from "framer-motion";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiFastapi,
    SiPython,
    SiDocker,
    SiNodedotjs,
    SiMongodb,
    SiAngular,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";

const skills = [
    { name: "Angular", Icon: SiAngular, color: "#DD0031" },
    { name: "Java", Icon: FaJava, color: "#f89820" },
    { name: "React", Icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
    { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
    { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
    { name: "Python", Icon: SiPython, color: "#FFD43B" },
    { name: "Docker", Icon: SiDocker, color: "#2496ED" },
    { name: "Node.js", Icon: SiNodedotjs, color: "#3C873A" },
    { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
];

export default function Skills() {
    // duplicated so the scroll loop is seamless (translateX(-50%) lands exactly
    // where the second copy starts)
    const marqueeSkills = [...skills, ...skills];

    return (
        <section
            id="skills"
            className="w-full py-20 relative bg-black overflow-hidden"
        >
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-10 blur-[150px]" />
            </div>

            <div className="relative z-10 text-center mb-12 px-4">
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    My Skills
                </motion.h2>
                <p className="mt-2 text-gray-400 text-sm sm:text-base">
                    Modern Applications | Modern Technologies
                </p>
            </div>

            <div className="relative z-10 overflow-hidden">
                <div className="flex w-max gap-16 animate-marquee">
                    {marqueeSkills.map(({ name, Icon, color }, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center gap-2 shrink-0"
                        >
                            <Icon size={40} style={{ color }} />
                            <span className="text-xs sm:text-sm text-gray-300 whitespace-nowrap">
                                {name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}