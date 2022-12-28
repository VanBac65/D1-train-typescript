import { FC, ReactElement } from "react";
import ProjectsNav from "app/components/modules/projects/projectsNav/ProjectsNav";
import ProjectsSlide from "app/components/modules/projects/projectsSlice/ProjectSlice";
import dataProjects from "app/const/projects";
import { ProjectsType } from "app/types/DataType";
import "app/styles/projects/Projects.css"

const Projects: FC = (): ReactElement => {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="projects-content">
                <ProjectsNav />
                <div className="projects-slide">
                {
                    dataProjects.map((item: ProjectsType, index: number) => {
                        return (
                            <div className="projects-slide-item" key={index}>
                                <ProjectsSlide {...item} />
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Projects;