import React from 'react';

const ProjectRelatedProjects = ({ relatedProject }) => {
  return (
    <div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
      <p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
        {relatedProject.relatedProjectsHeading}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
        {relatedProject.relatedProjects.map((item) => (
          <div key={item.id}>
            <img
              src={item.img}
              className="rounded-xl cursor-pointer"
              alt={item.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectRelatedProjects;
