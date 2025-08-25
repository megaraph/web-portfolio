import { useEffect, useRef, useState } from "react";
import video from "/videos/portfolio.mp4";

export default function VideoShowcase() {
    const sectionRef = useRef<HTMLElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const sectionTop = rect.top;
            const sectionHeight = rect.height;
            const windowHeight = window.innerHeight;

            // Calculate scroll progress relative to when section is visible
            const scrollProgress = Math.max(
                0,
                Math.min(
                    1,
                    (windowHeight - sectionTop) / (windowHeight + sectionHeight)
                )
            );

            setScrollY(scrollProgress);

            // Apply parallax transforms
            if (videoRef.current) {
                // Video moves slower than scroll (classic parallax)
                const videoTransform = scrollProgress * -30;
                videoRef.current.style.transform = `translate3d(0, ${videoTransform}px, 0) scale(1.1)`;
            }

            if (contentRef.current) {
                // Content moves slightly faster for depth
                const contentTransform = scrollProgress * 20;
                const opacity = 1 - scrollProgress * 0.3;
                contentRef.current.style.transform = `translate3d(0, ${contentTransform}px, 0)`;
                contentRef.current.style.opacity = Math.max(
                    0.7,
                    opacity
                ).toString();
            }

            if (overlayRef.current) {
                // Overlay intensity changes with scroll
                const overlayOpacity = 0.5 + scrollProgress * 0.3;
                overlayRef.current.style.backgroundColor = `rgba(0, 0, 0, ${Math.min(
                    0.8,
                    overlayOpacity
                )})`;
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

        // Initial call
        handleScroll();

        return () => window.removeEventListener("scroll", requestTick);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative h-screen w-full overflow-hidden"
        >
            {/* Parallax Video Container */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover will-change-transform"
                    style={{
                        transform: "translate3d(0, 0, 0) scale(1.1)", // Initial scale for parallax room
                    }}
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Dynamic overlay that responds to scroll */}
            <div
                ref={overlayRef}
                className="absolute inset-0 transition-colors duration-75 ease-out"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            />

            {/* Parallax Content */}
            <div
                ref={contentRef}
                className="absolute inset-0 flex items-center justify-center z-10 will-change-transform"
                style={{
                    transform: "translate3d(0, 0, 0)",
                    opacity: 1,
                }}
            >
                <div className="text-center max-w-4xl mx-auto px-8">
                    {/* Enhanced quote with subtle animations */}
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

                    {/* Optional: Scroll indicator that appears when section is in view */}
                    <div
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-300"
                        style={{
                            opacity: scrollY < 0.2 ? 1 - scrollY * 5 : 0,
                        }}
                    >
                        <div className="flex flex-col items-center text-white/60">
                            <span className="text-xs uppercase tracking-wider mb-2">
                                Scroll to explore
                            </span>
                            <div className="w-[1px] h-8 bg-gradient-to-b from-orange-500/60 to-transparent relative">
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-500 rounded-full animate-bounce"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle decorative elements that also move with parallax */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Top gradient that moves with scroll */}
                <div
                    className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/30 to-transparent transition-opacity duration-300"
                    style={{
                        opacity: 1 - scrollY * 0.5,
                        transform: `translate3d(0, ${scrollY * 10}px, 0)`,
                    }}
                />

                {/* Bottom gradient */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent transition-opacity duration-300"
                    style={{
                        opacity: 1 - scrollY * 0.3,
                        transform: `translate3d(0, ${scrollY * -15}px, 0)`,
                    }}
                />
            </div>
        </section>
    );
}
