import React from 'react';

const ProjectInfo = ({ projectInfo }) => {

  return (
    <section className="block sm:flex gap-0 sm:gap-10 mt-14">
      {/* Single project left section details */}
      <aside className="w-full sm:w-1/3 text-left">
        {/* Single project client details */}
        <div className="mb-7">
          <h2 className="font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2">
            {projectInfo.clientHeading}
          </h2>
          <ul className="leading-loose">
            {projectInfo.companyInfos.map((info) => (
              <li
                key={info.title}
                className="font-general-regular text-ternary-dark dark:text-ternary-light"
              >
                <span className="font-general-medium">{info.title}: </span>
                <a
                  href="#"
                  className={
                    info.title === 'Website' || info.title === 'Phone'
                      ? 'hover:underline cursor-pointer'
                      : ''
                  }
                  aria-label="Project Website and Phone"
                >
                  {info.details}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Single project objectives */}
        <div className="mb-7">
          <p className="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
            {projectInfo.objectivesHeading}
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {projectInfo.objectivesDetails}
          </p>
        </div>

        {/* Single project technologies */}
        <div className="mb-7">
          <p className="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
            {projectInfo.technologies[0].title}
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {projectInfo.technologies[0].techs.join(', ')}
          </p>
        </div>

        {/* Single project social sharing */}
        <div>
          <p className="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
            {projectInfo.socialSharingsHeading}
          </p>
          <div className="flex items-center gap-3 mt-5">
            {projectInfo.socialSharings.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share Project"
                className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
              >
                <i className={`w-4 lg:w-5 h-4 lg:h-5 ${social.icon}`} />
              </a>
            ))}
          </div>
        </div>
      </aside>
      
      {/* Single project right section details */}
      
      {/* Single project right section details */}
      <article className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
        <h2 className="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
          {projectInfo.projectDetailsHeading}
        </h2>
        {projectInfo.projectDetails.map((projectDetail) => (
          <p
            key={projectDetail.id}
            className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
          >
            {projectDetail.details}
          </p>
        ))}
      </article>
    </section>
  );
};

export default ProjectInfo;
