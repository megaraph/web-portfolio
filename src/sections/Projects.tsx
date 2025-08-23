import Reveal from "../components/Effects/Reveal";

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-6 bg-white dark:bg-black">
            <div className="max-w-6xl mx-auto">
                <Reveal>
                    <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 dark:text-white">
                        Selected Projects
                    </h2>
                </Reveal>

                <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((project) => (
                        <Reveal key={project}>
                            <div className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition">
                                <img
                                    src={`/projects/${project}.jpg`}
                                    alt={`Project ${project}`}
                                    className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="text-xl font-medium">
                                        Project {project}
                                    </h3>
                                    <p className="text-sm opacity-80">
                                        Description here
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
