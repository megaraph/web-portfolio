export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-black overflow-hidden">
            {/* Animated Background Aura - Orange/Amber theme to match About section */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-200/30 via-amber-100/20 to-orange-300/25 dark:from-orange-900/20 dark:via-amber-900/10 dark:to-orange-800/15 animate-gradient"></div>

            {/* Additional subtle radial gradients for depth */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-orange-400/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div
                className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-amber-400/8 to-transparent rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "2s" }}
            ></div>

            {/* Subtle floating particles */}
            <div
                className="absolute top-1/3 left-1/5 w-1 h-1 bg-orange-500 rounded-full opacity-40 animate-ping"
                style={{ animationDelay: "1s" }}
            ></div>
            <div
                className="absolute top-2/3 right-1/4 w-1 h-1 bg-amber-500 rounded-full opacity-30 animate-pulse"
                style={{ animationDelay: "3s" }}
            ></div>
            <div
                className="absolute bottom-1/3 left-1/3 w-2 h-2 border border-orange-400/20 rounded-full opacity-50 animate-bounce"
                style={{ animationDelay: "2.5s" }}
            ></div>
            <div
                className="absolute top-1/2 right-1/6 w-1 h-1 bg-orange-400 rounded-full opacity-60 animate-pulse"
                style={{ animationDelay: "4s" }}
            ></div>

            {/* Very subtle gradient aura around content */}
            <div className="absolute inset-0 bg-gradient-radial from-orange-500/5 via-transparent to-transparent"></div>

            {/* Main Content */}
            <div className="relative z-10 space-y-8 max-w-5xl">
                {/* Subtitle/Role */}
                <div className="opacity-0 animate-fadeIn">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-orange-500"></div>
                        <span className="text-sm uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400 font-medium">
                            Raphael C. Murillo
                        </span>
                        <div className="w-8 h-[1px] bg-gradient-to-r from-orange-500 to-transparent"></div>
                    </div>
                </div>

                {/* Main Headline */}
                <h1
                    className="relative opacity-0 animate-fadeIn text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.9] max-w-4xl mx-auto"
                    style={{
                        animationDelay: "0.2s",
                        animationFillMode: "forwards",
                    }}
                >
                    <span className="text-gray-900 dark:text-white">
                        Creative
                    </span>{" "}
                    <span className="font-medium bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                        Engineering
                    </span>
                    <br />
                    <span className="text-gray-700 dark:text-gray-300">
                        Meets Design
                    </span>
                </h1>

                {/* Tagline */}
                <p
                    className="relative opacity-0 translate-y-4 animate-fadeIn mt-8 text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto text-gray-600 dark:text-gray-400"
                    style={{
                        animationDelay: "0.6s",
                        animationFillMode: "forwards",
                    }}
                >
                    Crafting projects where{" "}
                    <span className="text-gray-800 dark:text-gray-200 font-normal">
                        function meets art
                    </span>
                    , blending engineering precision with creative storytelling.
                </p>

                {/* Enhanced Call to Action Buttons */}
                <div
                    className="relative opacity-0 translate-y-4 animate-fadeIn flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 pb-16"
                    style={{
                        animationDelay: "1s",
                        animationFillMode: "forwards",
                    }}
                >
                    <a
                        href="#projects"
                        className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-orange-500/25 transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 font-medium tracking-wide overflow-hidden"
                    >
                        {/* Subtle button glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                        <span className="relative flex items-center gap-2">
                            Explore Projects
                            <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                                <svg
                                    className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300"
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
                            </div>
                        </span>
                    </a>

                    <a
                        href="#contact"
                        className="group relative px-8 py-4 border-2 border-orange-500/30 text-gray-800 dark:text-gray-200 rounded-full hover:border-orange-500 hover:bg-orange-500/5 dark:hover:bg-orange-500/10 hover:shadow-xl hover:shadow-orange-500/10 transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 font-medium tracking-wide backdrop-blur-sm"
                    >
                        <span className="relative flex items-center gap-2">
                            Let's Connect
                            <div className="w-5 h-5 border border-orange-500/30 rounded-full flex items-center justify-center group-hover:border-orange-500 group-hover:bg-orange-500/10 transition-all duration-300">
                                <svg
                                    className="w-3 h-3 group-hover:scale-110 transition-transform duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                    />
                                </svg>
                            </div>
                        </span>
                        {/* Hover glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </a>
                </div>
            </div>

            {/* Enhanced Scroll Indicator */}
            <div
                className="absolute bottom-8 left-0 right-0 opacity-0 animate-fadeIn z-10"
                style={{
                    animationDelay: "1.4s",
                    animationFillMode: "forwards",
                }}
            >
                <div className="flex flex-col items-center justify-center gap-3 text-gray-400 dark:text-gray-600 group cursor-pointer">
                    <span className="text-xs uppercase tracking-[0.3em] font-medium group-hover:text-orange-500 transition-colors duration-300">
                        Scroll to explore
                    </span>
                    <div className="relative">
                        <div className="w-[1px] h-8 bg-gradient-to-b from-orange-500/50 to-transparent animate-pulse mx-auto"></div>
                        {/* Floating indicator dot */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-500 rounded-full animate-bounce"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
