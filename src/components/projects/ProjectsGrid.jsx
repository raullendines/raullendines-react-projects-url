import React, { useState, useEffect } from 'react';
import ProjectsFilter from './ProjectsFilter';
import ProjectSingle from './ProjectSingle';
import projects from '../../data/projects';

function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchProject, setSearchProject] = useState('');
  const [projectsHeading, setProjectsHeading] = useState('Projects Portfolio');
  const [filteredProjects, setFilteredProjects] = useState([]);


  useEffect(() => {
    if (selectedCategory) {
      setFilteredProjects(filterProjectsByCategory());
    } else if (searchProject) {
      setFilteredProjects(filterProjectsBySearch());
    } else {
      setFilteredProjects(projects);
    }
  }, [selectedCategory, searchProject]);

  const filterProjectsByCategory = () => {
    return projects.filter((item) => {
      let category =
        item.category.charAt(0).toUpperCase() + item.category.slice(1);
      return category.includes(selectedCategory);
    });
  };

  const filterProjectsBySearch = () => {
    let project = new RegExp(searchProject, 'i');
    return projects.filter((el) => el.title.match(project));
  };

  return (
    <section className="pt-10 sm:pt-14">
      <div className="text-center">
        <p className="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light">
          {projectsHeading}
        </p>
      </div>

      <div className="mt-10 sm:mt-10">
        <h3 className="font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl font-normal mb-4">
          Search projects by title or filter by category
        </h3>
        <div className="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-2">
          <div className="flex justify-between gap-2">
            <span className="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer">
              <i className="text-ternary-dark dark:text-ternary-light" />
            </span>
            <input
              value={searchProject}
              onChange={(e) => setSearchProject(e.target.value)}
              className="font-general-medium pl-3 pr-1 sm:px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
              id="name"
              name="name"
              type="search"
              required=""
              placeholder="Search Projects"
              aria-label="Name"
            />
          </div>
          <ProjectsFilter filter={(value) => setSelectedCategory(value)} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
        {filteredProjects.map((project) => (
          <ProjectSingle key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsGrid;
