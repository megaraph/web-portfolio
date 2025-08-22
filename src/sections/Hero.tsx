export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center bg-white text-black dark:bg-black dark:text-white overflow-hidden">
            {/* Background Gradient Animation */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-200 via-transparent to-pink-200 dark:from-indigo-900 dark:via-transparent dark:to-pink-900 opacity-40 animate-gradient"></div>

            <h1 className="relative z-10 text-5xl md:text-6xl font-bold tracking-tight leading-tight max-w-2xl animate-fadeIn">
                Constant Engineering. Problem-Solving. Storytelling.
            </h1>

            <p
                className="relative z-10 mt-6 text-lg md:text-xl leading-relaxed max-w-xl text-gray-600 dark:text-gray-300 opacity-0 translate-y-2 animate-fadeIn"
                style={{
                    animationDelay: "0.4s",
                    animationFillMode: "forwards",
                }}
            >
                I design projects that merge engineering, design, and
                creativity.
            </p>

            <div
                className="relative z-10 mt-8 flex gap-4 opacity-0 translate-y-2 animate-fadeIn"
                style={{
                    animationDelay: "0.8s",
                    animationFillMode: "forwards",
                }}
            >
                <a
                    href="#projects"
                    className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full shadow-md hover:scale-105 transform transition"
                >
                    View Projects
                </a>
                <a
                    href="#contact"
                    className="px-6 py-3 border border-black dark:border-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                    Contact Me
                </a>
            </div>
        </section>
    );
}
