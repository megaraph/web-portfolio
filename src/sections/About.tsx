import portrait from "../assets/img/portrait.jpg";
import Reveal from "../components/Utils/Reveal";

interface Interest {
    name: string;
    description: string;
    icon: string;
    specialties: string[];
    gradient: string;
}

export default function About() {
    const interests: Interest[] = [
        {
            name: "Aerospace",
            description:
                "Pushing the boundaries of flight and space exploration",
            icon: "🚀",
            specialties: [
                "Propulsion Systems",
                "Aerodynamics",
                "Systems Design",
            ],
            gradient: "from-blue-500 to-indigo-600",
        },
        {
            name: "Biomedical",
            description:
                "Engineering solutions for healthcare and human enhancement",
            icon: "🫀",
            specialties: ["Medical Devices", "Biomechanics", "Prosthetics"],
            gradient: "from-red-500 to-pink-600",
        },
        {
            name: "Manufacturing",
            description: "Innovating production processes and automation",
            icon: "🏭",
            specialties: ["Automation", "3D Printing", "CNC Machining"],
            gradient: "from-orange-500 to-amber-600",
        },
        {
            name: "Marine",
            description: "Exploring ocean engineering and naval technologies",
            icon: "⚓",
            specialties: ["Robotics", "Hydrodynamics", "Oceanography"],
            gradient: "from-cyan-500 to-blue-600",
        },
    ];

    return (
        <section
            id="about"
            className="relative py-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-black"
        >
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.03),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.05),transparent_50%)]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12">
                {/* Main About Content */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
                    {/* Left Content Column */}
                    <div className="order-2 lg:order-1 space-y-8">
                        {/* Name with subtle accent */}
                        <Reveal>
                            <div className="space-y-3">
                                <div className="w-12 h-[2px] bg-gradient-to-r from-orange-500 to-amber-400"></div>
                                <h2 className="text-5xl lg:text-6xl font-light tracking-tight text-gray-900 dark:text-white">
                                    Raphael C.{" "}
                                    <span className="font-medium bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                                        Murillo
                                    </span>
                                </h2>
                            </div>
                        </Reveal>

                        {/* Credentials */}
                        <Reveal>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                    <p className="text-xl font-light text-gray-700 dark:text-gray-300 tracking-wide">
                                        Mechanical Engineering
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                                    <p className="text-xl font-light text-gray-700 dark:text-gray-300 tracking-wide">
                                        De La Salle University, Manila
                                    </p>
                                </div>
                            </div>
                        </Reveal>

                        {/* Description */}
                        <Reveal>
                            <div className="max-w-lg">
                                <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-400 font-light">
                                    Engineering student passionate about{" "}
                                    <span className="text-gray-800 dark:text-gray-200 font-normal">
                                        blending creativity
                                    </span>{" "}
                                    with problem-solving to craft projects where{" "}
                                    <span className="text-gray-800 dark:text-gray-200 font-normal">
                                        engineering meets impact
                                    </span>
                                    .
                                </p>
                            </div>
                        </Reveal>

                        {/* Optional: Call to action or contact info */}
                        <div className="pt-4">
                            <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wider font-medium">
                                <span>Available for collaboration</span>
                                <div className="w-8 h-[1px] bg-gray-300 dark:bg-gray-700"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Portrait Column */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div className="relative group">
                            {/* Gradient background */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/20 via-amber-500/10 to-orange-600/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            {/* Portrait container */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-full"></div>
                                <img
                                    src={portrait}
                                    alt="Raphael C. Murillo Portrait"
                                    className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover 
                                             shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] 
                                             dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]
                                             border-4 border-white dark:border-gray-800
                                             transition-transform duration-700 group-hover:scale-[1.02]"
                                />

                                {/* Subtle ring decoration */}
                                <div className="absolute inset-0 rounded-full border border-orange-500/20 scale-110"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Interest Areas Section */}
                <Reveal>
                    <div>
                        <div className="text-center mb-16">
                            <div className="flex items-center justify-center gap-3 mb-6">
                                <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-orange-500"></div>
                                <span className="text-sm uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400 font-medium">
                                    Passion Areas
                                </span>
                                <div className="w-12 h-[2px] bg-gradient-to-r from-orange-500 to-transparent"></div>
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-light tracking-tight text-gray-900 dark:text-white mb-4">
                                Where Engineering{" "}
                                <span className="font-medium bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                                    Meets Innovation
                                </span>
                            </h3>
                            <p className="text-lg font-light text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Exploring diverse fields where mechanical
                                engineering principles drive breakthrough
                                solutions
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                            {interests.map((interest) => (
                                <div
                                    key={interest.name}
                                    className="group relative overflow-hidden bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.4)] transition-all duration-500 border border-gray-100 dark:border-gray-800 hover:-translate-y-2"
                                >
                                    {/* Background Gradient */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${interest.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                                    ></div>

                                    <div className="relative z-10">
                                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                            {interest.icon}
                                        </div>
                                        <h4 className="text-xl font-light text-gray-900 dark:text-white mb-3 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-300">
                                            {interest.name}
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                            {interest.description}
                                        </p>

                                        {/* Specialties */}
                                        <div className="space-y-1.5">
                                            {interest.specialties.map(
                                                (specialty) => (
                                                    <div
                                                        key={specialty}
                                                        className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500"
                                                    >
                                                        <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                                                        <span>{specialty}</span>
                                                    </div>
                                                )
                                            )}
                                        </div>

                                        {/* Accent line */}
                                        <div
                                            className={`w-12 h-[2px] bg-gradient-to-r ${interest.gradient} rounded-full mt-4 opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-500`}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
