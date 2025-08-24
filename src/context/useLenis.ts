// hooks/useLenis.ts
import { useEffect, useRef, useCallback, useMemo } from "react";
import Lenis from "@studio-freight/lenis";
import type { LenisOptions, LenisScrollData } from "@studio-freight/lenis";

interface UseLenisOptions extends LenisOptions {
    onScroll?: (data: LenisScrollData) => void;
}

export const useLenis = (options?: UseLenisOptions) => {
    const lenisRef = useRef<Lenis | null>(null);
    const rafRef = useRef<number | null>(null);

    // Extract onScroll to handle separately
    const onScroll = options?.onScroll;

    // Memoize Lenis options (excluding onScroll)
    const lenisOptions = useMemo(() => {
        const defaultOptions: LenisOptions = {
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: "vertical",
            gestureDirection: "vertical",
            smooth: true,
            mouseMultiplier: 0.8,
            smoothTouch: false,
            touchMultiplier: 1.5,
            infinite: false,
        };

        if (!options) return defaultOptions;

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { onScroll: _, ...restOptions } = options;
        return {
            ...defaultOptions,
            ...restOptions,
        };
    }, [options]);

    useEffect(() => {
        // Initialize Lenis
        lenisRef.current = new Lenis(lenisOptions);

        // Add scroll event listener if provided
        if (onScroll) {
            lenisRef.current.on("scroll", onScroll);
        }

        // Animation frame function
        const raf = (time: number) => {
            lenisRef.current?.raf(time);
            rafRef.current = requestAnimationFrame(raf);
        };

        rafRef.current = requestAnimationFrame(raf);

        // Cleanup
        return () => {
            if (onScroll) {
                lenisRef.current?.off("scroll", onScroll);
            }
            lenisRef.current?.destroy();
            lenisRef.current = null;

            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
                rafRef.current = null;
            }
        };
    }, [lenisOptions, onScroll]);

    return lenisRef.current;
};

// Enhanced hook with scroll progress tracking
export const useEnhancedLenis = () => {
    const lenisRef = useRef<Lenis | null>(null);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        lenisRef.current = new Lenis({
            duration: 1.4,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: "vertical",
            gestureDirection: "vertical",
            smooth: true,
            mouseMultiplier: 0.8,
            smoothTouch: false,
            touchMultiplier: 1.5,
            infinite: false,
        });

        // Enhanced scroll listener with CSS custom properties
        const handleScroll = (data: LenisScrollData) => {
            const { scroll, velocity, progress } = data;

            // Update CSS custom properties for scroll-driven animations
            document.documentElement.style.setProperty(
                "--scroll-progress",
                progress.toString()
            );
            document.documentElement.style.setProperty(
                "--scroll-velocity",
                Math.abs(velocity).toString()
            );
            document.documentElement.style.setProperty(
                "--scroll-position",
                scroll.toString()
            );
        };

        lenisRef.current.on("scroll", handleScroll);

        const raf = (time: number) => {
            lenisRef.current?.raf(time);
            rafRef.current = requestAnimationFrame(raf);
        };

        rafRef.current = requestAnimationFrame(raf);

        return () => {
            lenisRef.current?.off("scroll", handleScroll);
            lenisRef.current?.destroy();
            lenisRef.current = null;

            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
                rafRef.current = null;
            }
        };
    }, []);

    return lenisRef.current;
};

// Hook that returns Lenis instance and utility methods
export const useLenisWithMethods = (options?: UseLenisOptions) => {
    const lenisRef = useRef<Lenis | null>(null);
    const rafRef = useRef<number | null>(null);

    // Extract onScroll to handle separately
    const onScroll = options?.onScroll;

    // Memoize Lenis options (excluding onScroll)
    const lenisOptions = useMemo(() => {
        const defaultOptions: LenisOptions = {
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: "vertical",
            gestureDirection: "vertical",
            smooth: true,
            mouseMultiplier: 0.8,
            smoothTouch: false,
            touchMultiplier: 1.5,
            infinite: false,
        };

        if (!options) return defaultOptions;

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { onScroll: _, ...restOptions } = options;
        return {
            ...defaultOptions,
            ...restOptions,
        };
    }, [options]);

    useEffect(() => {
        lenisRef.current = new Lenis(lenisOptions);

        if (onScroll) {
            lenisRef.current.on("scroll", onScroll);
        }

        const raf = (time: number) => {
            lenisRef.current?.raf(time);
            rafRef.current = requestAnimationFrame(raf);
        };

        rafRef.current = requestAnimationFrame(raf);

        return () => {
            if (onScroll) {
                lenisRef.current?.off("scroll", onScroll);
            }
            lenisRef.current?.destroy();
            lenisRef.current = null;

            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
                rafRef.current = null;
            }
        };
    }, [lenisOptions, onScroll]);

    // Utility methods
    const scrollTo = useCallback(
        (
            target: string | number | HTMLElement,
            scrollOptions?: { offset?: number; duration?: number }
        ) => {
            lenisRef.current?.scrollTo(target, scrollOptions);
        },
        []
    );

    const start = useCallback(() => {
        lenisRef.current?.start();
    }, []);

    const stop = useCallback(() => {
        lenisRef.current?.stop();
    }, []);

    return {
        lenis: lenisRef.current,
        scrollTo,
        start,
        stop,
    };
};
