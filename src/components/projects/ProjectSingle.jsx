import React from 'react';
import { Link } from 'react-router-dom';

function ProjectSingle({ project }) {
  return (
    <Link
      to={`/projects/single-project/${project.id}`}
      className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
      aria-label="Single Project"
    >
      <div>
        <img src={project.img} alt={project.title} className="rounded-t-xl border-none" />
      </div>
      <div className="text-center px-4 py-6">
        <p className="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">
          {project.title}
        </p>
        <span className="font-general-medium text-lg text-ternary-dark dark:text-ternary-light">{project.category}</span>
      </div>
    </Link>
  );
}

export default ProjectSingle;
