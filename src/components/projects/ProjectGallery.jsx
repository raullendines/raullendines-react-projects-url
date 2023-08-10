import React from 'react';

const ProjectGallery = ({ projectImages }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
      {projectImages.map((projectImage) => (
        <div key={projectImage.id} className="mb-10 sm:mb-0">
          <img
            src={projectImage.img}
            className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
            alt={projectImage.title}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery;
