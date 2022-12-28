import { FC, ReactElement } from "react";
import dataProjects from "app/const/projects";
import Button from "app/components/elements/Button";
import btnBack from "public/images/button/Back.png";
import btnNext from "public/images/button/Next.png";
import "app/styles/modules/Projects.css";

type ProjectsType = {
  imgPath: string;
  name: string;
  address: string;
};

const navProject: string[] = ["All", "Commercial", "Residential", "Other"];

const Projects: FC = (): ReactElement => {
  const ProjectsNav: FC = (): ReactElement => {
    return (
      <div className="projects-nav">
        <ul>
          {navProject.map((item: string, index: number): ReactElement => {
            return (
              <li className="project-nav-item" key={index}>
                <button>{item}</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const ProjectsSlide: FC<ProjectsType> = (
    item: ProjectsType
  ): ReactElement => {
    return (
      <>
        <img src={item.imgPath} alt="" />
        <div className="slide-item-text">
          <p>{item.name}</p>
          <p>{item.address}</p>
        </div>
      </>
    );
  };

  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-content">
        <ProjectsNav />
        <div className="projects-slide">
          {dataProjects.map((item: ProjectsType, index: number) => {
            return (
              <div className="projects-slide-item" key={index}>
                <ProjectsSlide {...item} />
              </div>
            );
          })}
          <Button title="Back" icon={btnBack} />
          <Button title="Next" icon={btnNext} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
