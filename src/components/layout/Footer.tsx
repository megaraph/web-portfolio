import { useState } from "react";
import { useLenis } from "../../context/useLenis";
import {
    scrollToTop,
    scrollToSection,
    easingFunctions,
} from "../../utils/scrollUtils";
import contactData from "../../components/types/contactsData"; // Import the data file

export default function Footer() {
    const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
    const lenis = useLenis();

    const handleScrollToTop = (e: React.MouseEvent) => {
        e.preventDefault();
        scrollToTop(lenis, {
            duration: 2.5,
            easing: easingFunctions.luxury,
        });
    };

    const quickLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const handleQuickLink = (href: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        scrollToSection(href, lenis, {
            duration: 2,
            easing: easingFunctions.luxury,
            offset: -20,
        });
    };

    const handleStartConversation = (e: React.MouseEvent) => {
        e.preventDefault();
        scrollToSection("#contact", lenis, {
            duration: 2.5,
            easing: easingFunctions.luxury,
            offset: -20,
        });
    };

    return (
        <footer className="relative bg-gradient-to-br from-gray-900 to-black text-white">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/10 via-transparent to-transparent"></div>

            {/* Main footer content */}
            <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 py-20">
                <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <h3 className="text-3xl font-light tracking-tight mb-2">
                                Raphael{" "}
                                <span className="font-medium bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                                    Murillo
                                </span>
                            </h3>
                            <div className="w-16 h-[2px] bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
                        </div>

                        <p className="text-gray-300 leading-relaxed mb-6 max-w-sm">
                            Crafting innovative solutions where engineering
                            precision meets creative design.
                        </p>

                        <div className="text-sm text-gray-400 mb-6">
                            <div className="flex items-center gap-2 mb-2">
                                <svg
                                    className="w-4 h-4 text-orange-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <span>{contactData.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg
                                    className="w-4 h-4 text-orange-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    />
                                </svg>
                                <span>{contactData.university}</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-1">
                        <h4 className="text-lg font-medium mb-6 text-gray-200">
                            Quick Navigation
                        </h4>
                        <div className="space-y-3">
                            {quickLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={handleQuickLink(link.href)}
                                    className="block text-gray-400 hover:text-orange-400 transition-colors duration-300 text-left cursor-pointer"
                                >
                                    {link.name}
                                </button>
                            ))}
                        </div>

                        {/* Back to top */}
                        <div className="mt-8">
                            <button
                                onClick={handleScrollToTop}
                                className="group flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-all duration-300 cursor-pointer"
                            >
                                <svg
                                    className="w-4 h-4 group-hover:-translate-y-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                                    />
                                </svg>
                                <span className="text-sm">Back to Top</span>
                            </button>
                        </div>
                    </div>

                    {/* Connect Section */}
                    <div className="lg:col-span-1">
                        <h4 className="text-lg font-medium mb-6 text-gray-200">
                            Let's Connect
                        </h4>

                        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                            Ready to collaborate on something extraordinary?
                            Let's bring your ideas to life.
                        </p>

                        {/* Social Links */}
                        <div className="flex flex-wrap gap-4 mb-8">
                            {contactData.socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target={
                                        social.name !== "Email"
                                            ? "_blank"
                                            : undefined
                                    }
                                    rel={
                                        social.name !== "Email"
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    className={`group relative p-3 bg-gray-800 rounded-full border border-gray-700 hover:border-orange-500 transition-all duration-300 ${
                                        hoveredSocial === social.name
                                            ? "bg-orange-500/10 border-orange-500"
                                            : "hover:bg-gray-700"
                                    }`}
                                    onMouseEnter={() =>
                                        setHoveredSocial(social.name)
                                    }
                                    onMouseLeave={() => setHoveredSocial(null)}
                                    title={social.name}
                                >
                                    <div
                                        className={`transition-colors duration-300 ${
                                            hoveredSocial === social.name
                                                ? "text-orange-400"
                                                : "text-gray-400 group-hover:text-white"
                                        }`}
                                    >
                                        {social.icon}
                                    </div>

                                    {/* Tooltip */}
                                    <div
                                        className={`absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded transition-opacity duration-200 ${
                                            hoveredSocial === social.name
                                                ? "opacity-100"
                                                : "opacity-0 pointer-events-none"
                                        }`}
                                    >
                                        {social.name}
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* CTA */}
                        <button
                            onClick={handleStartConversation}
                            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium transition-colors duration-300 group cursor-pointer"
                        >
                            <span>Start a Conversation</span>
                            <svg
                                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-sm text-gray-500">
                            © {new Date().getFullYear()} Raphael Murillo.
                            Crafted with precision and creativity.
                        </div>

                        <div className="flex items-center gap-6 text-sm text-gray-500">
                            <span className="flex items-center gap-2">
                                <span>Built with</span>
                                <svg
                                    className="w-4 h-4 text-red-400"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                                <span>& React</span>
                            </span>

                            <div className="w-[1px] h-4 bg-gray-700"></div>

                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span>Available for Projects</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
        </footer>
    );
}
