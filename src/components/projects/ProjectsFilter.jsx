import React from 'react';

function ProjectsFilter({ filter }) {
  const selectOptions = ['Web Application', 'Mobile Application', 'Desktop Application'];

  return (
    <select
      onChange={(e) => filter(e.target.value)}
      className="font-general-medium px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
    >
      <option value="">All Projects</option>
      {selectOptions.map((option) => (
        <option key={option} value={option} className="sm:text-md">
          {option}
        </option>
      ))}
    </select>
  );
}

export default ProjectsFilter;
