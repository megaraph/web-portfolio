import { useLenis } from "./context/useLenis";
import { ThemeProvider } from "./context/ThemeProvider"; // Adjust path as needed
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import VideoShowcase from "./sections/VideoShowcase";
import Skills from "./sections/Skills";
import Footer from "./components/layout/Footer";
import ThemeToggle from "./components/Utils/ThemeToggle";

function AppContent() {
    // Initialize Lenis smooth scrolling for the entire app
    useLenis({
        // Custom scroll handler (optional)
        onScroll: () => {
            // You can add global scroll-based animations here
            // console.log('Scroll progress:', data.progress);
        },
    });

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
            <Hero />
            <VideoShowcase />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
            <ThemeToggle />
        </div>
    );
}

function App() {
    return (
        <ThemeProvider>
            <AppContent />
        </ThemeProvider>
    );
}

export default App;
