import { FC, ReactElement } from "react";
import underline from "public/images/services/Rectangle 18.png"
import { ServicesType } from "app/types/DataType";
import "app/components/modules/services/service/Service.css"

const Service: FC<ServicesType> = (props): ReactElement => {
    return (
        <>
            <img className="service-icon" src={props.icon} alt="" />
            <img className="service-underline" src={underline} alt="" />
            <h6>{props.name}</h6>
        </>
    )
}

export default Service;