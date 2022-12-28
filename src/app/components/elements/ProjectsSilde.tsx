import { ProjectsType } from "app/types/dataType";
import { FC, ReactElement } from "react";

type ProjectsProps = ProjectsType;

const ProjectsSlide: FC<ProjectsProps> = (
  item: ProjectsProps
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

export default ProjectsSlide;
