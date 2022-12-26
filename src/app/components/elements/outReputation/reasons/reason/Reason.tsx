import { FC, ReactElement } from "react";
import { ReasonType } from "../../../../../types/DataType";
import "./Reason.css"

export const Reason: FC<ReasonType> = (props): ReactElement => {
    return (
        <div className="reason">
            <img src={props.icon} alt="" />
            <p className="reason-name">{props.name}</p>
            <p className="reason-description">{props.description}</p>
        </div>
    )
}