import { useState } from "react";
import Reveal from "../components/Utils/Reveal";
import { useLenis } from "../context/useLenis";
import { scrollToSection, easingFunctions } from "../utils/scrollUtils";

interface Skill {
    name: string;
    description: string;
    icon: string;
    category: string;
}

export default function Skills() {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
    const lenis = useLenis();

    const handleLetsBuild = (e: React.MouseEvent) => {
        e.preventDefault();
        scrollToSection("#contact", lenis, {
            duration: 2,
            easing: easingFunctions.luxury,
            offset: -20,
        });
    };

    const skills: Skill[] = [
        // CAD & Design
        {
            name: "SolidWorks",
            description: "3D modeling, assemblies, and technical drawings",
            icon: "📐",
            category: "cad",
        },
        {
            name: "Fusion 360",
            description: "Integrated CAD/CAM for design and manufacturing",
            icon: "🔧",
            category: "cad",
        },
        {
            name: "OnShape",
            description: "Cloud-based collaborative CAD platform",
            icon: "☁️",
            category: "cad",
        },
        {
            name: "AutoCAD",
            description: "2D drafting and technical documentation",
            icon: "📏",
            category: "cad",
        },

        // Programming & Technical Computing
        {
            name: "Python",
            description:
                "Data analysis, automation, and engineering calculations",
            icon: "🐍",
            category: "programming",
        },
        {
            name: "MATLAB",
            description: "Numerical computing and engineering simulations",
            icon: "📊",
            category: "programming",
        },
        {
            name: "JavaScript/React",
            description: "Web development and interactive applications",
            icon: "⚛️",
            category: "programming",
        },
        {
            name: "C/C++",
            description: "Embedded systems and high-performance computing",
            icon: "⚡",
            category: "programming",
        },
        {
            name: "Docker",
            description: "Containerization and environment management",
            icon: "🐳",
            category: "programming",
        },
        {
            name: "AWS",
            description:
                "Mainly used for hosting web applications (lambda, S3, bedrock, dynamoDB)",
            icon: "☁️",
            category: "programming",
        },

        // Electronics
        {
            name: "KiCad",
            description: "PCB design and electronic circuit development",
            icon: "🔌",
            category: "electronics",
        },
        {
            name: "Arduino",
            description: "Rapid prototyping and embedded system development",
            icon: "🤖",
            category: "electronics",
        },
        {
            name: "ESP32",
            description: "IoT development and wireless communication",
            icon: "📡",
            category: "electronics",
        },

        // Manufacturing
        {
            name: "3D Printing",
            description: "Additive manufacturing for rapid prototyping",
            icon: "🖨️",
            category: "manufacturing",
        },
        {
            name: "CNC Milling",
            description: "Precision subtractive manufacturing processes",
            icon: "⚙️",
            category: "manufacturing",
        },
        {
            name: "Laser Cutting/Engraving",
            description: "High-precision material processing",
            icon: "✨",
            category: "manufacturing",
        },
    ];

    const skillCategories = {
        cad: { title: "CAD & Design", color: "orange" },
        programming: {
            title: "Programming & Technical Computing",
            color: "blue",
        },
        electronics: { title: "Electronics", color: "green" },
        manufacturing: { title: "Manufacturing", color: "purple" },
    };

    const getSkillsByCategory = (category: string) => {
        return skills.filter((skill) => skill.category === category);
    };

    const getRelatedSkills = (currentSkill: string) => {
        // Define skill relationships for subtle connection effects
        const connections: { [key: string]: string[] } = {
            Python: ["MATLAB", "Arduino", "ESP32"],
            MATLAB: ["Python", "SolidWorks"],
            Arduino: ["KiCad", "ESP32", "C/C++", "Python", "3D Printing"],
            ESP32: ["Arduino", "KiCad", "C/C++"],
            KiCad: ["Arduino", "ESP32"],
            SolidWorks: [
                "Fusion 360",
                "OnShape",
                "MATLAB",
                "3D Printing",
                "CNC Milling",
            ],
            "Fusion 360": [
                "SolidWorks",
                "OnShape",
                "3D Printing",
                "CNC Milling",
                "Laser Cutting/Engraving",
            ],
            OnShape: ["SolidWorks", "Fusion 360", "3D Printing"],
            "C/C++": ["Arduino", "ESP32"],
            "JavaScript/React": ["Python"],
            "3D Printing": ["SolidWorks", "Fusion 360", "OnShape", "Arduino"],
            "CNC Milling": ["SolidWorks", "Fusion 360", "AutoCAD"],
            "Laser Cutting/Engraving": ["Fusion 360", "AutoCAD"],
            AutoCAD: ["SolidWorks", "CNC Milling", "Laser Cutting/Engraving"],
        };
        return connections[currentSkill] || [];
    };

    return (
        <section
            id="skills"
            className="relative py-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-black"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.03),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.05),transparent_50%)]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-orange-500"></div>
                        <span className="text-sm uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400 font-medium">
                            Technical Expertise
                        </span>
                        <div className="w-12 h-[2px] bg-gradient-to-r from-orange-500 to-transparent"></div>
                    </div>
                    <h2 className="text-5xl lg:text-6xl font-light tracking-tight text-gray-900 dark:text-white mb-6">
                        Raph's Engineering{" "}
                        <span className="font-medium bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                            Toolkit
                        </span>
                    </h2>
                    <p className="text-xl font-light text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        These are some skills I have picked up along the way.
                        Bridging traditional engineering with modern digital
                        innovation.
                    </p>
                    <div className="mt-4 text-sm text-gray-500 dark:text-gray-500">
                        Engineering • Design • Technology
                    </div>
                </div>

                {/* Technical Skills Grid */}
                <Reveal>
                    <div className="mb-24">
                        <div className="grid gap-12">
                            {Object.entries(skillCategories).map(
                                ([categoryKey, categoryInfo]) => (
                                    <div key={categoryKey} className="group">
                                        {/* Category Header */}
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="w-8 h-[1px] bg-orange-500"></div>
                                            <h3 className="text-2xl font-light text-gray-900 dark:text-white">
                                                {categoryInfo.title}
                                            </h3>
                                        </div>

                                        {/* Skills Grid */}
                                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                            {getSkillsByCategory(
                                                categoryKey
                                            ).map((skill) => {
                                                const isHovered =
                                                    hoveredSkill === skill.name;
                                                const relatedSkills =
                                                    getRelatedSkills(
                                                        skill.name
                                                    );
                                                const isRelated =
                                                    hoveredSkill &&
                                                    relatedSkills.includes(
                                                        hoveredSkill
                                                    );

                                                return (
                                                    <div
                                                        key={skill.name}
                                                        className={`relative group/skill p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 transition-all duration-500 cursor-pointer
                                                        ${
                                                            isHovered
                                                                ? "shadow-[0_20px_60px_-12px_rgba(251,146,60,0.25)] dark:shadow-[0_20px_60px_-12px_rgba(251,146,60,0.15)] border-orange-200 dark:border-orange-800 transform -translate-y-2"
                                                                : ""
                                                        }
                                                        ${
                                                            isRelated
                                                                ? "shadow-[0_12px_40px_-8px_rgba(251,146,60,0.15)] border-orange-100 dark:border-orange-900 transform -translate-y-1"
                                                                : ""
                                                        }
                                                        ${
                                                            !hoveredSkill ||
                                                            isHovered ||
                                                            isRelated
                                                                ? "opacity-100"
                                                                : "opacity-60"
                                                        }
                                                        hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.3)] hover:-translate-y-1
                                                    `}
                                                        onMouseEnter={() =>
                                                            setHoveredSkill(
                                                                skill.name
                                                            )
                                                        }
                                                        onMouseLeave={() =>
                                                            setHoveredSkill(
                                                                null
                                                            )
                                                        }
                                                    >
                                                        {/* Subtle glow effect for connections */}
                                                        {(isHovered ||
                                                            isRelated) && (
                                                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-amber-500/5 rounded-2xl"></div>
                                                        )}

                                                        <div className="relative z-10">
                                                            {/* Icon */}
                                                            <div
                                                                className={`text-4xl mb-4 transition-transform duration-300 ${
                                                                    isHovered
                                                                        ? "scale-110"
                                                                        : "group-hover/skill:scale-105"
                                                                }`}
                                                            >
                                                                {skill.icon}
                                                            </div>

                                                            {/* Skill Name */}
                                                            <h4
                                                                className={`text-xl font-medium mb-2 transition-colors duration-300 ${
                                                                    isHovered
                                                                        ? "text-orange-500 dark:text-orange-400"
                                                                        : "text-gray-900 dark:text-white group-hover/skill:text-orange-500 dark:group-hover/skill:text-orange-400"
                                                                }`}
                                                            >
                                                                {skill.name}
                                                            </h4>

                                                            {/* Description */}
                                                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                                {
                                                                    skill.description
                                                                }
                                                            </p>

                                                            {/* Connection indicator */}
                                                            {isHovered &&
                                                                relatedSkills.length >
                                                                    0 && (
                                                                    <div className="mt-4 flex items-center gap-2 text-xs text-orange-600 dark:text-orange-400">
                                                                        <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                                                                        <span>
                                                                            Connected
                                                                            to{" "}
                                                                            {
                                                                                relatedSkills.length
                                                                            }{" "}
                                                                            other
                                                                            tools
                                                                        </span>
                                                                    </div>
                                                                )}

                                                            {/* Subtle accent line */}
                                                            <div
                                                                className={`w-12 h-[2px] bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mt-4 transition-all duration-300 ${
                                                                    isHovered
                                                                        ? "w-full opacity-100"
                                                                        : isRelated
                                                                        ? "w-16 opacity-60"
                                                                        : "opacity-0 group-hover/skill:opacity-100 group-hover/skill:w-16"
                                                                }`}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </Reveal>

                {/* Contact CTA */}
                <div className="text-center mt-20">
                    <button
                        onClick={handleLetsBuild}
                        className="inline-flex items-center gap-3 px-8 py-4 border-2 border-orange-500/30 text-gray-800 dark:text-gray-200 rounded-full hover:border-orange-500 hover:bg-orange-500/5 dark:hover:bg-orange-500/10 transition-all duration-300 font-medium tracking-wide backdrop-blur-sm group"
                    >
                        <span>Let's Build Something Extraordinary</span>
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
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
