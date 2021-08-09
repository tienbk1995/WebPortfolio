import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import backgroundImg from "../myImage/beach_sand.jpg";

export default function Project() {
  const [projectData, setProjectData] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
      title,
      date,
      place,
      description,
      projectType,
      link,
      tags
    }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);
  return (
    <main>
      <img
        className="absolute object-cover w-full h-full"
        src={backgroundImg}
      />
      <section className="container mx-auto relative">
        <h1 className="text-5xl flex justify-center cursive">My Project</h1>
        <h2 className="text-base text-blue-800 flex justify-center mb-12 gap-8 cursive">
          Welcome to my projects page!
        </h2>
        <section className="grid grid-cols-2 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article className="relative rounded-lg shadow-xl bg-white p-16">
                <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs space-x-4">
                  <span>
                    <strong className="font-bold">Finished on</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold">Place</strong>:{" "}
                    {project.place}
                  </span>
                  <span>
                    <strong className="font-bold">Type</strong>:{" "}
                    {project.projectType}
                  </span>
                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-red-500 font-bold hover:underline hover:text-red-400 text-lg"
                  >
                    View The Project{" "}
                    <span role="img" arial-label="right pointer">
                      😂😂
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
