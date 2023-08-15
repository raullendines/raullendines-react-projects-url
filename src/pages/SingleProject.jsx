import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProjectHeader from '../components/Projects/ProjectHeader';
import ProjectGallery from '../components/Projects/ProjectGallery';
import ProjectInfo from '../components/Projects/ProjectInfo';
import projects from '../data/projects';

function SingleProject() {
  const { projectId } = useParams(); // Access the project ID from the URL parameter
  const [project, setProject] = useState(null);

  useEffect(() => {
    const selectedProject = projects.find((proj) => proj.id === parseInt(projectId));
    setProject(selectedProject);
  }, [projectId]);

  return (
    <div className="container mx-auto mt-10 sm:mt-20">
      {project && (
        <>
          {/* Project header */}
          <ProjectHeader singleProjectHeader={project} />

          {/* Project gallery */}
          <ProjectGallery projectImages={project.projectImages} />

          {/* Project information */}
          <ProjectInfo projectInfo={project.projectInfo} />

          
        </>
      )}
    </div>
  );
}

export default SingleProject;
