import video from "../../public/videos/portfolio.mp4";

export default function VideoShowcase() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Full-screen video */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dark filter overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Quote Content */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="text-center max-w-4xl mx-auto px-8">
                    <blockquote className="text-3xl lg:text-4xl xl:text-5xl font-light text-white leading-tight tracking-wide italic mb-8">
                        "Nothing in life is to be feared,
                        <br />
                        it is only to be
                        <span className="font-medium bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                            &nbsp;understood
                        </span>
                        "
                    </blockquote>

                    <div className="flex items-center justify-center">
                        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent"></div>
                        <span className="mx-4 text-sm uppercase tracking-[0.3em] text-orange-400/80 font-light">
                            Marie Curie
                        </span>
                        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
