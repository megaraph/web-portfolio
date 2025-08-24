import { useLenis } from "./context/useLenis";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import VideoShowcase from "./sections/VideoShowcase";
import Skills from "./sections/Skills";
import Footer from "./components/layout/Footer";

function App() {
    // Initialize Lenis smooth scrolling for the entire app
    useLenis({
        // Custom scroll handler (optional)
        onScroll: () => {
            // You can add global scroll-based animations here
            // console.log('Scroll progress:', data.progress);
        },
    });

    return (
        <div className="min-h-screen">
            <Hero />
            <VideoShowcase />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
