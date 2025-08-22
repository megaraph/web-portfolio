import { useTheme } from "../context/useTheme";

export default function Home() {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6">
            <button
                onClick={toggleTheme}
                className="absolute top-6 right-6 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
            >
                {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
            <h1 className="text-4xl md:text-6xl font-serif text-orange-500 mb-4">
                Engineering Student. Problem-Solver. Storyteller.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-xl text-center">
                I design projects that merge engineering, design, and
                creativity.
            </p>
        </div>
    );
}
