import React, { useState, useEffect, type ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        // Check if there's a saved theme preference
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light" || savedTheme === "dark") {
            return savedTheme;
        }
        // Default to dark theme if no preference is saved
        return "dark";
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
