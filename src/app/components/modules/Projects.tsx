import { FC, ReactElement } from "react";
import dataProjects from "app/const/projects";
import Button from "app/components/elements/Button";
import ProjectsNav from "app/components/elements/ProjectsNav";
import { ProjectsType } from "app/types/dataType";
import ProjectsSlide from "app/components/elements/ProjectsSilde";
import "app/styles/modules/Projects.css";

type ProjectsProps = ProjectsType;

const Projects: FC = (): ReactElement => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-content">
        <ProjectsNav />
        <div className="projects-slide">
          {dataProjects.map((item: ProjectsProps, index: number) => {
            return (
              <div className="projects-slide-item" key={index}>
                <ProjectsSlide {...item} />
              </div>
            );
          })}
          <Button title="Back" />
          <Button title="Next" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
