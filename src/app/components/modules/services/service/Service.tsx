import { FC, ReactElement } from "react";
import underline from "public/images/services/Rectangle 18.png"
import { ServicesType } from "app/types/DataType";
import "app/styles/Service.css"

const Service: FC<ServicesType> = (service: ServicesType): ReactElement => {
    return (
        <>
            <img className="service-icon" src={service.icon} alt="" />
            <img className="service-underline" src={underline} alt="" />
            <h6>{service.name}</h6>
        </>
    )
}

export default Service;