import { FC, ReactElement } from "react";
import dataReasons from "app/const/reasons";
import "app/styles/modules/OutReputation.css";

export type ReasonType = {
  icon: string;
  name: string;
  description: string;
};

const OutReputation: FC = (): ReactElement => {
  const Reason: FC<ReasonType> = (reason: ReasonType): ReactElement => {
    return (
      <>
        <img src={reason.icon} alt="" />
        <p className="reason-name">{reason.name}</p>
        <p className="reason-description">{reason.description}</p>
      </>
    );
  };
  return (
    <div className="out-reputation">
      <p className="out-reputation-title">Our Reputation</p>
      <div className="reasons">
        {dataReasons.map((reason: ReasonType, index: number): ReactElement => {
          return (
            <div className="reason" key={index}>
              <Reason {...reason} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OutReputation;
