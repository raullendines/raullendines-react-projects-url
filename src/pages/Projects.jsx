import React from 'react';
import projects from '../data/projects.js'; // Import the projects data

const projectsData = [
  {
    id: 1,
    name: 'Project 1',
    description: 'Description for Project 1',
  },
  {
    id: 2,
    name: 'Project 2',
    description: 'Description for Project 2',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-semibold mb-2">Projects</h1>
      <div className="grid gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg p-4 shadow-md"
          >
            <h2 className="text-lg font-medium mb-1">{project.title}</h2>
            <p className="text-gray-600">{project.projectInfo.objectivesDetails}</p>
            {/* Add more project details or links here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
