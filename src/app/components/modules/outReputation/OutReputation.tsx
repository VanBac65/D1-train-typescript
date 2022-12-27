import { FC, ReactElement } from "react";
import Reasons from "app/components/modules/outReputation/reasons/Reasons";
import "app/styles/OutReputation.css"

const OutReputation: FC = (): ReactElement => {
    return (
        <div className="out-reputation">
            <p className="out-reputation-title">Our Reputation</p>
            <Reasons />
        </div>
    )
}

export default OutReputation;