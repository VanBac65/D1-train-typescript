import { FC, ReactElement } from "react";
import "app/styles/modules/outReputation.css";

type ReasonType = {
  icon: string;
  name: string;
  description: string;
};

type ReasonProps = {
  reason: ReasonType[];
};

const OutReputation: FC<ReasonProps> = ({ reason }): ReactElement => {
  return (
    <div className="out-reputation">
      <p className="out-reputation-title">Our Reputation</p>
      <div className="reasons">
        {reason.map((reason: ReasonType, index: number): ReactElement => {
          return (
            <div className="reason" key={index}>
              <img src={reason.icon} alt="" />
              <p className="reason-name">{reason.name}</p>
              <p className="reason-description">{reason.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OutReputation;
