// utils/scrollUtils.ts
import type Lenis from "@studio-freight/lenis";

interface ScrollToOptions {
    offset?: number;
    duration?: number;
    easing?: (t: number) => number;
    onComplete?: () => void;
}

// Smooth scroll to a specific section
export const scrollToSection = (
    selector: string,
    lenis: Lenis | null,
    options?: ScrollToOptions
): void => {
    if (!lenis) {
        console.warn("Lenis instance not available");
        return;
    }

    const target = document.querySelector(selector);
    if (!target) {
        console.warn(`Element with selector "${selector}" not found`);
        return;
    }

    const defaultOptions: ScrollToOptions = {
        duration: 2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        offset: 0,
    };

    lenis.scrollTo(target as HTMLElement, { ...defaultOptions, ...options });
};

// Add this to your scrollUtils.ts if it's not already there
export const scrollToTop = (
    lenis: Lenis | null,
    options?: ScrollToOptions
): void => {
    const defaultOptions: ScrollToOptions = {
        duration: 1.5,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    };

    const finalOptions = { ...defaultOptions, ...options };

    // Try to get Lenis instance
    const lenisInstance = lenis || window.lenis;

    console.log("ScrollToTop - Lenis instance:", lenisInstance);

    if (lenisInstance) {
        console.log("Using Lenis scroll to top");
        lenisInstance.scrollTo(0, finalOptions);
    } else {
        console.log("Lenis not available, trying retry for scroll to top...");

        // Retry after a short delay
        setTimeout(() => {
            const retryLenis = window.lenis;
            console.log("ScrollToTop Retry - Lenis instance:", retryLenis);

            if (retryLenis) {
                console.log("ScrollToTop retry successful, using Lenis");
                retryLenis.scrollTo(0, finalOptions);
            } else {
                console.log("ScrollToTop retry failed, using native scroll");
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }
        }, 100);
    }
};

// Scroll by a specific amount
export const scrollBy = (
    amount: number,
    lenis: Lenis | null,
    options?: ScrollToOptions
): void => {
    if (!lenis) {
        console.warn("Lenis instance not available");
        return;
    }

    const defaultOptions: ScrollToOptions = {
        duration: 1,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    };

    lenis.scrollTo(window.scrollY + amount, { ...defaultOptions, ...options });
};

// Custom easing functions for different scroll feels
export const easingFunctions = {
    // Luxury smooth (default)
    luxury: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),

    // More dramatic ease
    dramatic: (t: number) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,

    // Bouncy feel
    bouncy: (t: number) => {
        const c1 = 1.70158;
        const c3 = c1 + 1;
        return c3 * t * t * t - c1 * t * t;
    },

    // Subtle ease
    subtle: (t: number) => t * t * (3 - 2 * t),
};
