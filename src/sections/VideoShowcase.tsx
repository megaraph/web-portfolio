import { useEffect, useRef } from "react";
import video from "/videos/portfolio.mp4";

export default function VideoShowcase() {
    const sectionRef = useRef<HTMLElement>(null);
    const videoContainerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !videoContainerRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const sectionTop = rect.top;
            const sectionHeight = rect.height;

            // Calculate how much of the section has been scrolled past
            const scrollProgress = Math.max(
                0,
                Math.min(1, -sectionTop / sectionHeight)
            );

            // Apply the "hiding behind next section" effect
            if (videoContainerRef.current) {
                // Video stays fixed while content scrolls over it
                const translateY = scrollProgress * sectionHeight * 0.5; // Adjust multiplier for speed
                videoContainerRef.current.style.transform = `translate3d(0, ${translateY}px, 0)`;

                // Optional: Scale video slightly as it gets hidden for more drama
                const scale = 1 + scrollProgress * 0.1;
                videoContainerRef.current.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
            }

            // Content fades out as section scrolls away
            if (contentRef.current) {
                const opacity = Math.max(0, 1 - scrollProgress * 1.5);
                contentRef.current.style.opacity = opacity.toString();

                // Slight upward movement for content
                const contentTranslateY = scrollProgress * -50;
                contentRef.current.style.transform = `translate3d(0, ${contentTranslateY}px, 0)`;
            }
        };

        // Use requestAnimationFrame for smooth performance
        let ticking = false;
        const requestTick = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", requestTick, { passive: true });
        handleScroll(); // Initial call

        return () => window.removeEventListener("scroll", requestTick);
    }, []);

    return (
        <>
            {/* Video Section - Fixed positioning for parallax effect */}
            <section
                ref={sectionRef}
                className="relative h-screen w-full overflow-hidden"
                style={{ zIndex: 1 }}
            >
                {/* Video Container - This will move/scale with scroll */}
                <div
                    ref={videoContainerRef}
                    className="absolute inset-0 w-full h-full will-change-transform"
                >
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

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                {/* Content that fades out */}
                <div
                    ref={contentRef}
                    className="absolute inset-0 flex items-center justify-center z-10 will-change-transform"
                >
                    <div className="text-center max-w-4xl mx-auto px-8">
                        {/* Enhanced quote with subtle hover animations */}
                        <blockquote className="text-3xl lg:text-4xl xl:text-5xl font-light text-white leading-tight tracking-wide italic mb-8">
                            <span className="inline-block transform transition-transform duration-500 hover:scale-105">
                                "Nothing in life is to be feared,
                            </span>
                            <br />
                            <span
                                className="inline-block transform transition-transform duration-500 hover:scale-105"
                                style={{ transitionDelay: "0.1s" }}
                            >
                                it is only to be
                            </span>
                            <span
                                className="font-medium bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent inline-block transform transition-transform duration-500 hover:scale-110"
                                style={{ transitionDelay: "0.2s" }}
                            >
                                &nbsp;understood
                            </span>
                            <span
                                className="inline-block transform transition-transform duration-500 hover:scale-105"
                                style={{ transitionDelay: "0.3s" }}
                            >
                                "
                            </span>
                        </blockquote>

                        {/* Enhanced attribution with hover effects */}
                        <div className="flex items-center justify-center group">
                            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent transition-all duration-300 group-hover:via-orange-400 group-hover:w-20"></div>
                            <span className="mx-4 text-sm uppercase tracking-[0.3em] text-orange-400/80 font-light transition-all duration-300 group-hover:text-orange-400 group-hover:tracking-[0.4em]">
                                Marie Curie
                            </span>
                            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent transition-all duration-300 group-hover:via-orange-400 group-hover:w-20"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
