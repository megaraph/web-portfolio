import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project/:id" element={<ProjectDetail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
