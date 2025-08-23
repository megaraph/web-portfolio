import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import VideoShowcase from "./sections/VideoShowcase";

function App() {
    return (
        <div className="min-h-screen">
            <Hero />
            <VideoShowcase />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
