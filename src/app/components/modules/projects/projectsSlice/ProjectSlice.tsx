import { ProjectsType } from "app/types/DataType";
import { FC, ReactElement } from "react";

const ProjectsSlide: FC<ProjectsType> = (item: ProjectsType): ReactElement => {
    return (
        <>
            <img src={item.imgPath} alt="" />
            <div className="slide-item-text">
                <p>{item.name}</p>
                <p>{item.address}</p>
            </div>
        </>
    )
}

export default ProjectsSlide;