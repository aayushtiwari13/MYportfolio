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

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full bg-black py-16 flex flex-col items-center text-center px-4">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
                Ayush Tiwari
            </h2>

            <div className="mt-4 w-24 h-[2px] bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]" />

            <div className="mt-6 flex items-center gap-6">
                {socials.map(({ Icon, label, href }) => (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="text-white text-xl hover:text-[#1cd8d2] transition-colors"
                    >
                        <Icon />
                    </a>
                ))}
            </div>

            <p className="mt-6 text-gray-400 italic text-sm">
                "Success is when preparation meets opportunity."
            </p>

            <p className="mt-4 text-gray-600 text-xs">
                © {year} Ayush Tiwari. All rights reserved.
            </p>
        </footer>
    );
}