import { FC, ReactElement } from "react";
import { StatsType } from "app/types/DataType";
import "app/components/modules/contactUs/contactUsLeft/stat/Stat.css"

const Stat: FC<StatsType> = (props): ReactElement => {
    return (
        <>
            <h1>{props.number}</h1>
            <div></div><p>{props.name}</p>
            <img src={props.icon} alt="" />
        </>
    )
}

export default Stat;