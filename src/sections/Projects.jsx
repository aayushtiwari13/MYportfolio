import { useRef, useState, useEffect } from "react";
import { useScroll } from "framer-motion";


const projects = [
    {
        title: "nk studio",
        tagline: "We empower brands to inspire people",
        bg: "bg-gradient-to-br from-emerald-600 to-teal-700",
        buttonText: "Open Project",
        link: "#",
    },
    {
        title: "Gamily",
        tagline: "Match with other gamers",
        bg: "bg-gradient-to-br from-blue-500 to-sky-600",
        buttonText: "View Project",
        link: "#",
    },
    {
        title: "Hungry Tiger",
        tagline: "Unwrap the adventure",
        bg: "bg-gradient-to-br from-orange-400 to-yellow-500",
        buttonText: "View Project",
        link: "#",
    },
];

const count = projects.length;

export default function Projects() {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const lastIndex = useRef(0);

    // scrollYProgress goes 0 -> 1 as the user scrolls through this section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            const index = Math.min(count - 1, Math.floor(latest * count));
            // only trigger a re-render when the active project actually
            // changes — without this, every scroll pixel fires a setState,
            // which is what was causing the lag
            if (index !== lastIndex.current) {
                lastIndex.current = index;
                setActiveIndex(index);
            }
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <section
            id="projects"
            ref={containerRef}
            className="relative bg-black"
            style={{ height: `${count * 100}vh` }}
        >
            {/* sticky wrapper stays pinned on screen while we scroll through the tall section above */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
                <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-white pt-12 pb-4 relative z-10 bg-black">
                    My Work
                </h2>

                <div className="relative flex-1">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            // no transition classes here on purpose — the swap
                            // between projects should be an instant cut, not
                            // an animated slide/fade
                            className={`absolute inset-0 flex flex-col items-center justify-center px-8 sm:px-12 ${
                                project.bg
                            } ${i === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                        >
                            <h3 className="text-3xl sm:text-4xl font-bold italic text-white mb-2">
                                {project.title}
                            </h3>
                            <p className="text-white/80 mb-8">{project.tagline}</p>

                            {/* Image placeholder — replace this div's content with your project screenshot */}
                            <div className="w-full max-w-3xl aspect-video rounded-xl border-2 border-dashed border-white/50 flex items-center justify-center bg-black/20 mb-8">
                                <span className="text-white/80 text-lg font-medium">
                                    yaha image lagao
                                </span>
                            </div>

                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-full bg-black/80 text-white font-medium hover:bg-black transition"
                            >
                                {project.buttonText}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}