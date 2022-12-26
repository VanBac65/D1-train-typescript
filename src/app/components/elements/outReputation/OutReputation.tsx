import { ReactElement } from "react";
import { Reasons } from "./reasons/Reasons";
import "./OutReputation.css"

export const OutReputation = ():ReactElement => {
    return (
        <div className="out-reputation">
            <p className="out-reputation-title">Our Reputation</p>
            <Reasons />
        </div>
    )
}