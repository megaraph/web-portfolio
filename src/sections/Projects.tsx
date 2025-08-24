import {
    getFeaturedProject,
    getOtherProjects,
} from "../components/types/projectsData";
import Reveal from "../components/Utils/Reveal";

export default function Projects() {
    const featuredProject = getFeaturedProject();
    const otherProjects = getOtherProjects();

    return (
        <section
            id="projects"
            className="relative py-32 bg-gradient-to-br from-white to-gray-50 dark:from-black dark:to-gray-950"
        >
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,146,60,0.03),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(251,146,60,0.05),transparent_50%)]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-orange-500"></div>
                        <span className="text-sm uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400 font-medium">
                            Portfolio
                        </span>
                        <div className="w-12 h-[2px] bg-gradient-to-r from-orange-500 to-transparent"></div>
                    </div>
                    <h2 className="text-5xl lg:text-6xl font-light tracking-tight text-gray-900 dark:text-white mb-6">
                        Featured{" "}
                        <span className="font-medium bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h2>
                    <p className="text-xl font-light text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Engineering solutions where creativity meets
                        functionality
                    </p>
                </div>

                {/* Featured Project */}
                <Reveal>
                    <div className="mb-24">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-8 h-[1px] bg-orange-500"></div>
                            <span className="text-xs uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400 font-medium">
                                Featured Project
                            </span>
                        </div>

                        <div className="group relative">
                            <a
                                href={featuredProject.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_80px_-20px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_100px_-20px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_30px_100px_-20px_rgba(0,0,0,0.5)] transition-all duration-700 border border-gray-100 dark:border-gray-800"
                            >
                                <div className="grid lg:grid-cols-3 gap-0">
                                    {/* Featured Image - Larger */}
                                    <div className="lg:col-span-2 relative overflow-hidden aspect-[16/10] lg:aspect-auto lg:min-h-[500px]">
                                        <img
                                            src={featuredProject.image}
                                            alt={featuredProject.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                                        />

                                        {/* Featured badge */}
                                        <div className="absolute top-8 left-8 px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-medium rounded-full shadow-lg">
                                            Featured
                                        </div>

                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20 dark:to-black/40"></div>
                                    </div>

                                    {/* Featured Content */}
                                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                                        <h3 className="text-3xl lg:text-4xl font-light tracking-tight text-gray-900 dark:text-white mb-6 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-300">
                                            {featuredProject.title}
                                        </h3>

                                        <p className="text-lg font-light leading-relaxed text-gray-600 dark:text-gray-400 mb-8">
                                            {featuredProject.description}
                                        </p>

                                        {/* Featured Tags */}
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {featuredProject.tags.map(
                                                (tag, index) => (
                                                    <span
                                                        key={tag}
                                                        className={`text-sm px-4 py-2 rounded-full border transition-all duration-300 ${
                                                            index === 0
                                                                ? "bg-orange-500/10 border-orange-500/30 text-orange-600 dark:text-orange-400"
                                                                : "bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400"
                                                        }`}
                                                    >
                                                        {tag}
                                                    </span>
                                                )
                                            )}
                                        </div>

                                        {/* Featured CTA */}
                                        <div className="flex items-center gap-3 text-orange-500 dark:text-orange-400 font-medium group-hover:gap-4 transition-all duration-300">
                                            <span className="text-lg">
                                                Read Full Story
                                            </span>
                                            <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors duration-300">
                                                <svg
                                                    className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Subtle border gradient on hover */}
                                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-500/20 group-hover:via-amber-500/20 group-hover:to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                            </a>
                        </div>
                    </div>
                </Reveal>

                {/* Other Projects Grid */}
                {otherProjects.length > 0 && (
                    <div>
                        <div className="flex items-center gap-3 mb-12">
                            <div className="w-8 h-[1px] bg-gray-400 dark:bg-gray-600"></div>
                            <span className="text-xs uppercase tracking-[0.2em] text-gray-600 dark:text-gray-400 font-medium">
                                Other Projects
                            </span>
                        </div>

                        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {otherProjects.map((project, index) => (
                                <Reveal key={project.id}>
                                    <div className="group relative">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.4)] transition-all duration-500 border border-gray-100 dark:border-gray-800"
                                        >
                                            {/* Regular Project Image */}
                                            <div className="relative overflow-hidden aspect-[4/3]">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                                />

                                                {/* Project number */}
                                                <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full flex items-center justify-center text-orange-500 font-medium text-xs border border-orange-500/20">
                                                    {String(index + 2).padStart(
                                                        2,
                                                        "0"
                                                    )}
                                                </div>
                                            </div>

                                            {/* Regular Content */}
                                            <div className="p-6">
                                                <h4 className="text-xl font-light tracking-tight text-gray-900 dark:text-white mb-3 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-300">
                                                    {project.title}
                                                </h4>

                                                <p className="text-sm font-light leading-relaxed text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                                                    {project.description}
                                                </p>

                                                {/* Compact tags - show max 3 */}
                                                <div className="flex flex-wrap gap-1 mb-4">
                                                    {project.tags
                                                        .slice(0, 3)
                                                        .map(
                                                            (tag, tagIndex) => (
                                                                <span
                                                                    key={tag}
                                                                    className={`text-xs px-2 py-1 rounded-full ${
                                                                        tagIndex ===
                                                                        0
                                                                            ? "bg-orange-500/10 text-orange-600 dark:text-orange-400"
                                                                            : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                                                                    }`}
                                                                >
                                                                    {tag}
                                                                </span>
                                                            )
                                                        )}
                                                    {project.tags.length >
                                                        3 && (
                                                        <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-500">
                                                            +
                                                            {project.tags
                                                                .length - 3}
                                                        </span>
                                                    )}
                                                </div>

                                                {/* View link */}
                                                <div className="flex items-center gap-2 text-orange-500 dark:text-orange-400 text-sm font-medium group-hover:gap-3 transition-all duration-300">
                                                    <span>Read More</span>
                                                    <svg
                                                        className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                )}

                {/* View All Projects Link */}
                <div className="text-center mt-20">
                    <a
                        href="https://your-hashnode-blog.hashnode.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 border-2 border-orange-500/30 text-gray-800 dark:text-gray-200 rounded-full hover:border-orange-500 hover:bg-orange-500/5 dark:hover:bg-orange-500/10 transition-all duration-300 font-medium tracking-wide backdrop-blur-sm group"
                    >
                        <span>Visit My Blog</span>
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
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
