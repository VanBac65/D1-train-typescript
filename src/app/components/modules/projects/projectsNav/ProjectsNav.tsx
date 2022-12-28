import { FC, ReactElement } from "react";
import "app/styles/projects/ProjectsNav.css"

const navProject: string[] = ["All", "Commercial", "Residential", "Other"]

const ProjectsNav: FC = (): ReactElement => {
    return (
        <div className="projects-nav">
            <ul>
                {
                    navProject.map((item: string, index: number): ReactElement => {
                        return (
                            <li className="project-nav-item" key={index}>
                                <button>{item}</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ProjectsNav;