import { FC, ReactElement } from "react";
import Button from "app/components/elements/Button";
import btnBack from "public/images/button/Back.png";
import btnNext from "public/images/button/Next.png";
import "app/styles/modules/projectList.css";

type ProjectsType = {
  imgPath: string;
  name: string;
  address: string;
};

type ProjectsProps = {
  menu: string[];
  projects: ProjectsType[];
};

const Projects: FC<ProjectsProps> = ({ menu, projects }): ReactElement => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-content">
        <div className="projects-nav">
          <ul>
            {menu.map((item: string, index: number): ReactElement => {
              return (
                <li className="project-nav-item" key={index}>
                  <button>{item}</button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="projects-slide">
          {projects.map((item: ProjectsType, index: number) => {
            return (
              <div className="projects-slide-item" key={index}>
                <img src={item.imgPath} alt="" />
                <div className="slide-item-text">
                  <p>{item.name}</p>
                  <p>{item.address}</p>
                </div>
              </div>
            );
          })}
          <Button>
            <img src={btnBack} alt="" />
            Back
          </Button>
          <Button>
            Next
            <img src={btnNext} alt="" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
