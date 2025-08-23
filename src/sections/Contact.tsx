export default function Contact() {
    const contactLinks = [
        {
            name: "Email",
            value: "raphael.murillo@example.com", // Replace with your actual email
            href: "mailto:raphael.murillo@example.com",
            icon: (
                <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                </svg>
            ),
            description: "Best way to reach me",
            primary: true,
        },
        {
            name: "LinkedIn",
            value: "linkedin.com/in/raphaelmurillo",
            href: "https://linkedin.com/in/your-profile", // Replace with your actual LinkedIn
            icon: (
                <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
            description: "Professional network",
            primary: true,
        },
        {
            name: "GitHub",
            value: "github.com/raphaelmurillo",
            href: "https://github.com/your-username", // Replace with your actual GitHub
            icon: (
                <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
            description: "Code repositories",
            primary: false,
        },
        {
            name: "Hashnode Blog",
            value: "raphaelmurillo.hashnode.dev",
            href: "https://your-blog.hashnode.dev", // Replace with your actual Hashnode blog
            icon: (
                <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M2.21 2.21a.75.75 0 011.06 0l18.53 18.53a.75.75 0 01-1.06 1.06L2.21 3.27a.75.75 0 010-1.06z" />
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 6a1 1 0 112 0v2a1 1 0 11-2 0V8zm1 7a1 1 0 100-2 1 1 0 000 2z" />
                </svg>
            ),
            description: "Technical writing",
            primary: false,
        },
    ];

    return (
        <section
            id="contact"
            className="relative py-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-black"
        >
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(251,146,60,0.03),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_70%,rgba(251,146,60,0.05),transparent_50%)]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-orange-500"></div>
                        <span className="text-sm uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400 font-medium">
                            Get In Touch
                        </span>
                        <div className="w-12 h-[2px] bg-gradient-to-r from-orange-500 to-transparent"></div>
                    </div>
                    <h2 className="text-5xl lg:text-6xl font-light tracking-tight text-gray-900 dark:text-white mb-6">
                        Let's{" "}
                        <span className="font-medium bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                            Connect
                        </span>
                    </h2>
                    {/* Space reserved for future call-to-action context */}
                    <div className="max-w-2xl mx-auto">
                        {/* This div is ready for future content like:
                            <p className="text-xl font-light text-gray-600 dark:text-gray-400">
                                Open to internship opportunities and collaborative projects
                            </p>
                        */}
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left Side - Contact Information */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            {contactLinks.map((contact, index) => (
                                <a
                                    key={contact.name}
                                    href={contact.href}
                                    target={
                                        contact.href.startsWith("mailto:")
                                            ? undefined
                                            : "_blank"
                                    }
                                    rel={
                                        contact.href.startsWith("mailto:")
                                            ? undefined
                                            : "noopener noreferrer"
                                    }
                                    className={`group flex items-center gap-6 p-6 rounded-2xl border transition-all duration-500 hover:scale-[1.02] ${
                                        contact.primary
                                            ? "bg-gradient-to-r from-orange-500/5 to-amber-500/5 dark:from-orange-500/10 dark:to-amber-500/10 border-orange-500/20 hover:border-orange-500/40 hover:shadow-lg"
                                            : "bg-white/50 dark:bg-gray-900/50 border-gray-200/50 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-white dark:hover:bg-gray-900"
                                    } backdrop-blur-sm`}
                                >
                                    {/* Icon Container */}
                                    <div
                                        className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                                            contact.primary
                                                ? "bg-orange-500/10 text-orange-500 group-hover:bg-orange-500/20"
                                                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 group-hover:bg-gray-200 dark:group-hover:bg-gray-700"
                                        }`}
                                    >
                                        {contact.icon}
                                    </div>

                                    {/* Contact Info */}
                                    <div className="flex-grow min-w-0">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                                                    {contact.name}
                                                </h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                                    {contact.description}
                                                </p>
                                                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                    {contact.value}
                                                </p>
                                            </div>

                                            {/* Arrow Icon */}
                                            <div className="flex-shrink-0">
                                                <svg
                                                    className="w-5 h-5 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300"
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
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Space reserved for future status indicator */}
                        <div className="pt-8 border-t border-gray-200/50 dark:border-gray-700/50">
                            {/* This div is ready for future content like:
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm text-gray-600 dark:text-gray-400">
                                        Available for opportunities
                                    </span>
                                </div>
                            */}
                        </div>
                    </div>

                    {/* Right Side - Inspirational Quote */}
                    <div className="space-y-8">
                        <div className="hidden lg:block">
                            {/* Quote Section */}
                            <div className="relative">
                                <div className="aspect-square rounded-3xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 dark:from-orange-500/20 dark:to-amber-500/20 border border-orange-500/20 flex items-center justify-center">
                                    <div className="text-center space-y-6 px-8">
                                        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center">
                                            <svg
                                                className="w-8 h-8 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                                />
                                            </svg>
                                        </div>
                                        <blockquote className="text-xl font-light text-gray-700 dark:text-gray-300 italic leading-relaxed">
                                            "Innovation distinguishes between a
                                            leader and a follower."
                                        </blockquote>
                                        <cite className="text-sm text-gray-500 dark:text-gray-400 not-italic">
                                            — Steve Jobs
                                        </cite>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
