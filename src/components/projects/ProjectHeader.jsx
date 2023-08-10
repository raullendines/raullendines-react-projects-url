import React from 'react';

const ProjectHeader = ({ singleProjectHeader }) => {
  return (
    <div>
      {/* Project heading and meta info */}
      <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
        {singleProjectHeader.title}
      </p>
      <div className="flex">
        <div className="flex items-center mr-10">
          <i
            className="w-4 h-4 text-ternary-dark dark:text-ternary-light"
          ></i>
          <span className="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light">
            {singleProjectHeader.date}
          </span>
        </div>
        <div className="flex items-center">
          <i
            className="w-4 h-4 text-ternary-dark dark:text-ternary-light"
          ></i>
          <span className="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light">
            {singleProjectHeader.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
