import React from "react";

const ProjectCard = () => {
  const projects = [
    {
      title: "E-commerce Store",
      image: "/foundich.png",
      description:
        "A complete e-commerce platform with user auth, product catalog, shopping cart, and Stripe payment integration.",

      demoLink: "https://foundichleatherworks.vercel.app",
    },
    {
      title: "Portfolio Website",
      image: "/caleb-collins.png",
      description:
        "A modern and responsive portfolio site built with Next.js and Tailwind CSS, showcasing developer experience and work.",
      demoLink: "https://calebcollinsmedia.vercel.app",
    },
  ];

  return (
    <div className="flex flex-col mt-12 px-4" id="projects">
      <h1 className="text-2xl font-bold text-center mb-6">My Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500 ease-in-out"
            />

            {/* Sliding Overlay (bottom half only) */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-500 to-blue-300 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out p-4 flex flex-col justify-end">
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-white/80 mb-3 leading-snug line-clamp-3">
                {project.description}
              </p>
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start px-4 py-1.5 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-200 transition"
              >
                View Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
