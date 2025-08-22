import portrait from "../assets/img/portrait.jpg";

export default function About() {
    return (
        <section
            id="about"
            className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-black"
        >
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.03),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.05),transparent_50%)]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left Content Column */}
                    <div className="order-2 lg:order-1 space-y-8">
                        {/* Name with subtle accent */}
                        <div className="space-y-3">
                            <div className="w-12 h-[2px] bg-gradient-to-r from-orange-500 to-amber-400"></div>
                            <h2 className="text-5xl lg:text-6xl font-light tracking-tight text-gray-900 dark:text-white">
                                Raphael C.{" "}
                                <span className="font-medium bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                                    Murillo
                                </span>
                            </h2>
                        </div>

                        {/* Credentials */}
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

                        {/* Description */}
                        <div className="max-w-lg">
                            <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-400 font-light">
                                Engineering student passionate about{" "}
                                <span className="text-gray-800 dark:text-gray-200 font-normal">
                                    blending creativity
                                </span>{" "}
                                with problem-solving to craft projects where{" "}
                                <span className="text-gray-800 dark:text-gray-200 font-normal">
                                    function meets art
                                </span>
                                .
                            </p>
                        </div>

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
            </div>
        </section>
    );
}
