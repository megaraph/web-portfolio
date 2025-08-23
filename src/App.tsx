import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
// import Contact from "./sections/Contact";

function App() {
    return (
        <div className="min-h-screen">
            <Hero />
            <About />
            <Projects />
            {/* <Contact /> */}
        </div>
    );
}

export default App;
