// components/ThemeToggle.tsx
import React from "react";
import { useTheme } from "../../context/useTheme"; // Adjust path as needed

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-2xl hover:shadow-xl dark:hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center justify-center backdrop-blur-sm"
            aria-label={`Switch to ${
                theme === "light" ? "dark" : "light"
            } mode`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
            {theme === "light" ? (
                // Moon icon for switching to dark mode
                <svg
                    className="w-5 h-5 text-gray-700 transition-transform duration-300 hover:rotate-180"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
            ) : (
                // Sun icon for switching to light mode
                <svg
                    className="w-5 h-5 text-yellow-400 transition-transform duration-300 hover:rotate-180"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clipRule="evenodd"
                    />
                </svg>
            )}
        </button>
    );
};

export default ThemeToggle;
