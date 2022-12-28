import { FC, ReactElement } from "react";
import dataServices from "app/const/services";
import underline from "public/images/services/Rectangle 18.png";
import "app/styles/modules/Services.css";

type ServicesType = {
  icon: string;
  name: string;
};

const Services: FC = (): ReactElement => {
  const Service: FC<ServicesType> = (service: ServicesType): ReactElement => {
    return (
      <>
        <img className="service-icon" src={service.icon} alt="" />
        <img className="service-underline" src={underline} alt="" />
        <h6>{service.name}</h6>
      </>
    );
  };

  return (
    <div className="services">
      <h1>Services</h1>
      {dataServices.map(
        (service: ServicesType, index: number): ReactElement => {
          return (
            <div
              className={`service service-${index % 2 === 0 ? "1" : "2"}`}
              key={index}
            >
              <Service {...service} />
            </div>
          );
        }
      )}
    </div>
  );
};

export default Services;
