import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground";
import { useMemo } from "react";
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

const socials = [
    {
        Icon: FaInstagram,
        label: "Instagram",
        href: "https://www.instagram.com/i_aayushtiwari_/",
    },
    {
        Icon: FaLinkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/aayushtiwari2007/",
    },
    {
        Icon: FaGithub,
        label: "GitHub",
        href: "https://github.com/aayushtiwari13",
    },
];

const glowVariants = {
    initial: {
        scale: 1,
        y: 0,
        filter: "drop-shadow(0 0 0 rgba(0,0,0,0)))",
    },

    hover: {
        scale: 1.2,
        y: -3,
        filter:
            "drop-shadow(0 0 6px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 20px rgba(255, 255, 255, 0.6))",
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 15,
        },
    },

    tap: {
        scale: 0.95,
        y: 0,
        transition: {
            duration: 0.2,
        },
    },
};

export default function Home() {
    const roles = useMemo(
        () => [
            "Full Stack Developer",
            "UI/UX Designer",
            "Software Engineer",
            "AI Enthusiast",
        ],
        []
    );

    const [index, setIndex] = React.useState(0);
    const [subindex, setSubindex] = React.useState(0);
    const [deleting, setDeleting] = React.useState(false);

    React.useEffect(() => {
        const current = roles[index];

        const timeout = setTimeout(() => {
            if (!deleting && subindex === current.length) {
                setTimeout(() => setDeleting(true), 1000);
            } else if (!deleting && subindex < current.length) {
                setSubindex((prev) => prev + 1);
            } else if (deleting && subindex > 0) {
                setSubindex((prev) => prev - 1);
            } else if (deleting && subindex === 0) {
                setDeleting(false);
                setIndex((prevIndex) => (prevIndex + 1) % roles.length);
            }
        }, deleting ? 40 : 60);

        return () => clearTimeout(timeout);
    }, [subindex, index, deleting, roles]);

    return (
        <section
            id="home"
            className="w-full min-h-screen relative bg-black overflow-hidden pt-24 sm:pt-28"
        >
            <ParticleBackground />

            <div className="absolute inset-0">
                
                <div
                    className="absolute -top-32 -left-32 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vh] sm:h-[50vh] md:h-[40vh] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-purple-500 via-[#00bf8f] to-[#1cdbd2] opacity-30 sm:opacity-25 md:opacity-10 blur-[100px] sm:blur-[150px] md:blur-[150px] animate-pulse"
                ></div>

                
                <div
                    className="absolute bottom-0 right-0 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vh] sm:h-[50vh] md:h-[40vh] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-purple-500 via-[#00bf8f] to-[#1cdbd2] opacity-30 sm:opacity-25 md:opacity-10 blur-[100px] sm:blur-[150px] md:blur-[150px] animate-pulse delay-500"
                ></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-16">

                <div className="flex flex-col justify-center text-center lg:text-left relative">

                    <div className="w-full mx-auto lg:mx-0 max-w-3xl">

                        
                        <motion.div
                            className="text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-wide min-h-[1.6rem]"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <span>
                                {roles[index].substring(0, subindex)}
                            </span>

                            <span
                                className="inline-block w-[2px] bg-white ml-1 animate-pulse align-middle"
                                style={{ height: "1rem" }}
                            ></span>
                        </motion.div>

                        
                        <motion.h1
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Hello I'm
                            <br />

                            <span className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                                Ayush Tiwari
                            </span>
                        </motion.h1>

                        
                        <motion.p
                            className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            I build modern, responsive, and scalable web 
                            applicationswith a focus on clean design,
                             seamless user experiences,and solving
                            real-world problems through technology..
                        </motion.p>

                        
                        <motion.div
                            className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            <a
                                href="#projects"
                                className="px-6 py-3 rounded-full font-medium text-lg text-white bg-gradient-to-r from-[#1cd8d2] via-[#00b8ff] to-[#302b63] shadow-lg hover:scale-105 transition-all"
                            >
                                View My Work
                            </a>

                            <a
                                href="/resume.pdf"
                                download
                                className="px-6 py-3 rounded-full text-lg font-medium text-black bg-white hover:bg-gray-200 shadow-lg hover:scale-105 transition-all"
                            >
                                My Resume
                            </a>
                        </motion.div>

                        {/* Social Icons */}
                        <motion.div
                            className="mt-8 flex items-center justify-center lg:justify-start gap-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.8 }}
                        >
                            {socials.map(({ Icon, label, href }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    variants={glowVariants}
                                    initial="initial"
                                    whileHover="hover"
                                    whileTap="tap"
                                    className="text-white text-2xl"
                                >
                                    <Icon />
                                </motion.a>
                            ))}
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    );
}