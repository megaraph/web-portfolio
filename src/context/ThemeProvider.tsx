import React, { useState, useEffect, type ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [theme, setTheme] = useState<"light" | "dark">(
        localStorage.getItem("theme") === "dark" ? "dark" : "light"
    );

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
