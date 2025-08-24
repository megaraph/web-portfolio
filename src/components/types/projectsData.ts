export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string; // Now required - will be Hashnode blog URL
    featured?: boolean;
}

export const projects: Project[] = [
    {
        id: "lamp-design",
        title: "3D Printed Lamp – Musée Collection",
        description:
            "A fully 3D printed PLA desk lamp with a sculptural design inspired by organic modernism.",
        image: "/images/lamp-design.jpg",
        tags: ["3D Printing", "Product Design", "Lighting"],
        link: "https://your-hashnode-blog.hashnode.dev/3d-printed-lamp-musee-collection", // Your actual Hashnode URL
        featured: true,
    },
    {
        id: "robot-prototype",
        title: "Cute Desk Robot",
        description:
            "An ESP32-based desk companion with OLED animations and a retro-tech aesthetic.",
        image: "/images/robot-prototype.jpg",
        tags: ["Electronics", "CAD Design", "Prototyping"],
        link: "https://your-hashnode-blog.hashnode.dev/cute-desk-robot-esp32-companion", // Your actual Hashnode URL
    },
];

// Helper functions
export const getFeaturedProject = (): Project => {
    return projects.find((project) => project.featured) || projects[0];
};

export const getOtherProjects = (): Project[] => {
    return projects.filter((project) => !project.featured);
};
