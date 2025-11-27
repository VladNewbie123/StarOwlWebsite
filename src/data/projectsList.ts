export interface Project {
    id: number;
    title: string;
    category: "3d" | "book" | "code";
    image: string;
    description: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "3D model of a cup",
        category: "3d",
        image: "cup1_1.png",
        description: "The 3D model was created in Blender as part of the project. I experimented with modeling, texturing, and lighting to create the cup, glass, and the filling animation.",
    },
    {
        id: 2,
        title: "A dream that never ended",
        category: "book",
        image: "book1.png",
        description: "After a strange dream, the hero wakes up in a world that seems familiar, but something is wrong. Time has stopped, people are disappearing, and every step brings him closer to the answer - has he really woken up? Mysticism, dreams, and the border between reality and the subconscious - this is a story about how difficult it is to escape from yourself.",
    },
    {
        id: 3,
        title: "Portfolio Website",
        category: "code",
        image: "logo.png",
        description: "A responsive personal website built on React. The website you're currently on is it.",
    },
    {
        id: 4,
        title: "3D model of a glass",
        category: "3d",
        image: "cup2.webp",
        description: "The 3D model was created in Blender as part of the project. I experimented with modeling, texturing, and lighting to create the cup, glass, and the filling animation.",
    },
    {
        id: 5,
        title: "3D models of fruits",
        category: "3d",
        image: "mango_render_02.png",
        description: "In this work I practiced a little with the material and shape of the objects so that they looked like real ones.",
    },
    {
        id: 6,
        title: "Owl Agency. Case No. 1: Theft of retro cars.",
        category: "book",
        image: "image-1.png",
        description: "A new private detective agency, Owl, is launched - a team of young but talented investigators who see what others don't. Their first official case begins with the mysterious theft of several vintage cars belonging to a local collector.",
    },
    {
        id: 7,
        title: "Cute Cactus Pen Holder",
        category: "3d",
        image: "CactuarCup1.jpg",
        description: "Add a little fun and personality to your workspace with this adorable cactus-shaped pen holder",
    },
];
