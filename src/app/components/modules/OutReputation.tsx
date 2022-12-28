import { FC, ReactElement } from "react";
import dataReasons from "app/const/reasons";
import { ReasonType } from "app/types/dataType";
import Reason from "app/components/elements/Reason";
import "app/styles/modules/OutReputation.css";

type ReasonProps = ReasonType;

const OutReputation: FC = (): ReactElement => {
  return (
    <div className="out-reputation">
      <p className="out-reputation-title">Our Reputation</p>
      <div className="reasons">
        {dataReasons.map((reason: ReasonProps, index: number): ReactElement => {
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
