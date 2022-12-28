import { FC, ReactElement } from "react";
import { ReasonType } from "app/types/DataType";
import "app/styles/Reason.css"

const Reason: FC<ReasonType> = (reason: ReasonType): ReactElement => {
    return (
        <>
            <img src={reason.icon} alt="" />
            <p className="reason-name">{reason.name}</p>
            <p className="reason-description">{reason.description}</p>
        </>
    )
}

export default Reason;