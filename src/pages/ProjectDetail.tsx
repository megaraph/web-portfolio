import { useParams } from "react-router-dom";

export default function ProjectDetail() {
    const { id } = useParams<{ id: string }>();

    return (
        <div className="p-8">
            <h1 className="text-3xl font-serif">Project {id}</h1>
            <p className="text-gray-600 dark:text-gray-300">
                Detailed case study coming soon.
            </p>
        </div>
    );
}
