import { Project } from "@/data/projectsList";
import * as React from "react";

const ProjectCard: React.FC<Project> = ({ title, image, description }) => {
    return (
        <div className="bg-[#0f1a2b] border border-gray-700 rounded-2xl p-4 hover:shadow-lg hover:shadow-blue-500/10 transition">
            <img src={image} alt={title} className="rounded-xl mb-3" />
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    );
};

export default ProjectCard;
