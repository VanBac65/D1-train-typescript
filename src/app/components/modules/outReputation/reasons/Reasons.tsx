import { FC, ReactElement } from "react";
import Reason from "app/components/modules/outReputation/reasons/reason/Reason";
import { dataReasons } from "app/const/reasons";
import { ReasonType } from "app/types/DataType";
import "app/components/modules/outReputation/reasons/Reasons.css"

const Reasons: FC = (): ReactElement => {
    return (
        <div className="reasons">
            {
                dataReasons.map((reason: ReasonType, index: number): ReactElement => {
                    return (
                        <div className="reason" key={index}>
                            <Reason {...reason} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Reasons;