import contactData from "../components/types/contactsData"; // Import the data file

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-black"
        >
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(251,146,60,0.03),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_70%,rgba(251,146,60,0.05),transparent_50%)]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                        <div className="w-8 sm:w-12 h-[2px] bg-gradient-to-r from-transparent to-orange-500"></div>
                        <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400 font-medium">
                            Get In Touch
                        </span>
                        <div className="w-8 sm:w-12 h-[2px] bg-gradient-to-r from-orange-500 to-transparent"></div>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-gray-900 dark:text-white mb-4 sm:mb-6">
                        Let's{" "}
                        <span className="font-medium bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                            Connect
                        </span>
                    </h2>
                    {/* Space reserved for future call-to-action context */}
                    <div className="max-w-2xl mx-auto">
                        {/* This div is ready for future content like:
                            <p className="text-lg sm:text-xl font-light text-gray-600 dark:text-gray-400">
                                Open to internship opportunities and collaborative projects
                            </p>
                        */}
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 items-start">
                    {/* Left Side - Contact Information */}
                    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                        <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                            {contactData.contactLinks.map((contact) => (
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
                                    className={`group flex items-center gap-3 sm:gap-4 lg:gap-6 p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl border transition-all duration-500 hover:scale-[1.01] sm:hover:scale-[1.02] ${
                                        contact.primary
                                            ? "bg-gradient-to-r from-orange-500/5 to-amber-500/5 dark:from-orange-500/10 dark:to-amber-500/10 border-orange-500/20 hover:border-orange-500/40 hover:shadow-lg"
                                            : "bg-white/50 dark:bg-gray-900/50 border-gray-200/50 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-white dark:hover:bg-gray-900"
                                    } backdrop-blur-sm`}
                                >
                                    {/* Icon Container */}
                                    <div
                                        className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                                            contact.primary
                                                ? "bg-orange-500/10 text-orange-500 group-hover:bg-orange-500/20"
                                                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 group-hover:bg-gray-200 dark:group-hover:bg-gray-700"
                                        }`}
                                    >
                                        <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
                                            {contact.icon}
                                        </div>
                                    </div>

                                    {/* Contact Info */}
                                    <div className="flex-grow min-w-0">
                                        <div className="flex items-start justify-between gap-2">
                                            <div className="min-w-0 flex-grow">
                                                <h3 className="text-sm sm:text-base lg:text-lg font-medium text-gray-900 dark:text-white mb-1 truncate">
                                                    {contact.name}
                                                </h3>
                                                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1 sm:mb-2">
                                                    {contact.description}
                                                </p>
                                                <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 break-all sm:break-normal">
                                                    {contact.value}
                                                </p>
                                            </div>

                                            {/* Arrow Icon */}
                                            <div className="flex-shrink-0 ml-2">
                                                <svg
                                                    className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300"
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
                        <div className="pt-6 sm:pt-8 border-t border-gray-200/50 dark:border-gray-700/50">
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
                    <div className="space-y-6 sm:space-y-8">
                        <div className="hidden sm:block lg:block">
                            {/* Quote Section */}
                            <div className="relative">
                                <div className="aspect-square rounded-2xl sm:rounded-3xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 dark:from-orange-500/20 dark:to-amber-500/20 border border-orange-500/20 flex items-center justify-center">
                                    <div className="text-center space-y-4 sm:space-y-6 px-6 sm:px-8">
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl sm:rounded-2xl flex items-center justify-center">
                                            <svg
                                                className="w-6 h-6 sm:w-8 sm:h-8 text-white"
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
                                        <blockquote className="text-lg sm:text-xl font-light text-gray-700 dark:text-gray-300 italic leading-relaxed">
                                            Hope to hear from you soon!
                                        </blockquote>
                                        <cite className="text-sm text-gray-500 dark:text-gray-400 not-italic">
                                            — raph
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
