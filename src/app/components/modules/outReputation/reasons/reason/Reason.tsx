import { FC, ReactElement } from "react";
import { ReasonType } from "app/types/DataType";
import "./Reason.css"

const Reason: FC<ReasonType> = (props): ReactElement => {
    return (
        <>
            <img src={props.icon} alt="" />
            <p className="reason-name">{props.name}</p>
            <p className="reason-description">{props.description}</p>
        </>
    )
}

export default Reason;