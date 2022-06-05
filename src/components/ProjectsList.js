import React from 'react';

import Project from './Project';

import classes from './ProjectsList.module.css';

const ProjectsList = props => {
    return (
        <div className={classes.container}>
            {
                props.projects
                    .map(project => <Project key={project.id} project={project} />)
            }
        </div>
    );
}

export default ProjectsList;