// types/lenis.d.ts
declare module "@studio-freight/lenis" {
    export interface LenisOptions {
        duration?: number;
        easing?: (t: number) => number;
        direction?: "vertical" | "horizontal";
        gestureDirection?: "vertical" | "horizontal" | "both";
        smooth?: boolean;
        mouseMultiplier?: number;
        smoothTouch?: boolean;
        touchMultiplier?: number;
        infinite?: boolean;
        wrapper?: Window | HTMLElement;
        content?: HTMLElement;
        wheelEventsTarget?: HTMLElement | Window;
        eventsTarget?: HTMLElement | Window;
        normalizeWheel?: boolean;
        syncTouch?: boolean;
    }

    export interface LenisScrollData {
        scroll: number;
        limit: number;
        velocity: number;
        direction: number;
        progress: number;
    }

    export default class Lenis {
        constructor(options?: LenisOptions);
        raf(time: number): void;
        scrollTo(
            target: string | number | HTMLElement,
            options?: {
                offset?: number;
                duration?: number;
                easing?: (t: number) => number;
                lerp?: number;
                onComplete?: () => void;
            }
        ): void;
        on(event: "scroll", callback: (data: LenisScrollData) => void): void;
        off(event: "scroll", callback: (data: LenisScrollData) => void): void;
        destroy(): void;
        start(): void;
        stop(): void;
        resize(): void;
    }
}
