import { FC, ReactElement } from "react";
import { StatsType } from "app/types/DataType";
import "app/styles/Stat.css"

const Stat: FC<StatsType> = (stat: StatsType): ReactElement => {
    return (
        <>
            <h1>{stat.number}</h1>
            <div></div><p>{stat.name}</p>
            <img src={stat.icon} alt="" />
        </>
    )
}

export default Stat;