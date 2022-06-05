import React from 'react';

import projects from '../data';
import ProjectsList from '../components/ProjectsList';

const INITIAL_PROJECTS = projects;

const Projects = () => {
    return (
        <ProjectsList projects={INITIAL_PROJECTS} />
    );
}

export default Projects;