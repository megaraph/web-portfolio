import tmdImg from "/images/tmd.png";
import rfidImg from "/images/rfid.png";
import nailImg from "/images/clippers.png";
import noseImg from "/images/nose-cone.png";
import implantImg from "/images/implant.png";

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
        id: "tmd-simulation",
        title: "Tuned Mass Damper Simulation",
        description:
            "Using an experimental setup with an Arduino, this project demonstrated that a frequency-tuned pendulum effectively suppressed vibrations in a scaled building model, confirming the practical benefits of Tuned Mass Dampers (TMDs) for enhancing structural safety and resilience.",
        image: tmdImg,
        tags: [
            "Periodic Motion",
            "Mechanics",
            "Data Analysis",
            "Signal Processing",
            "3D Printing",
        ],
        link: "https://drive.google.com/file/d/1Urj53TkxPSavPeiYhQufXObDKXYTeD-Y/view?usp=sharing",
        featured: true,
    },
    {
        id: "rfid-scanner",
        title: "School ID Scanner with ESP32",
        description:
            "An ESP32-based RFID scanner that reads student IDs and logs attendance data to a Google Sheet via WiFi, streamlining the attendance process for school organizations.",
        image: rfidImg,
        tags: ["Electronics", "Product Design", "Prototyping"],
        link: "https://raphmurillo.hashnode.dev/school-id-based-attendance-system",
    },
    {
        id: "hip-implant",
        title: "3D Printed Femoral Hip Implant",
        description:
            "A detailed 3D printed model of a femoral hip implant created using Fusion360. The design was derived from online images of actual implants and I spun-off a design of my own.",
        image: implantImg,
        tags: ["Fusion360", "3D Modeling", "Biomedical"],
        link: "https://your-hashnode-blog.hashnode.dev/cute-desk-robot-esp32-companion",
    },
    {
        id: "nail-clippers",
        title: "3D Reconstruction of Nail Clippers",
        description:
            "A detailed 3D model of a nail clipper created using Solidworks, showcasing skills in 3D modeling.",
        image: nailImg,
        tags: ["SolidWorks", "3d Modeling", "CAD"],
        link: "https://drive.google.com/file/d/1Vx4ZhvUFTzReigpi7vFYsx7xYr6sB2Dx/view?usp=sharing",
    },
    {
        id: "nose-cone",
        title: "Computational Volumetric Analysis of a Von Kármán Ogive Rocket Nose Cone",
        description:
            "A computational analysis of a Von Kármán ogive rocket nose cone determining its volume and cost of 3D printing using Python and integral calculus.",
        image: noseImg,
        tags: ["Integral Calculus", "Matplotlib", "CAD"],
        link: "https://drive.google.com/file/d/1mSREjQ9Zs21Lo0JRKQnxBbu1JeltuPDL/view?usp=drive_link",
    },
];

// Helper functions
export const getFeaturedProject = (): Project => {
    return projects.find((project) => project.featured) || projects[0];
};

export const getOtherProjects = (): Project[] => {
    return projects.filter((project) => !project.featured);
};
