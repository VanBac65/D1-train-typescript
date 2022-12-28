import { FC, ReactElement } from "react";
import { ReasonType } from "app/types/dataType";

type ReasonProps = ReasonType;

const Reason: FC<ReasonProps> = (reason: ReasonProps): ReactElement => {
  return (
    <>
      <img src={reason.icon} alt="" />
      <p className="reason-name">{reason.name}</p>
      <p className="reason-description">{reason.description}</p>
    </>
  );
};

export default Reason;
