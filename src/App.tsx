import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import VideoShowcase from "./sections/VideoShowcase";
import Skills from "./sections/Skills";

function App() {
    return (
        <div className="min-h-screen">
            <Hero />
            <VideoShowcase />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
