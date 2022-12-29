import { FC, ReactElement } from "react";
import underline from "public/images/services/Rectangle 18.png";
import "app/styles/modules/serviceList.css";

type ServiceType = {
  icon: string;
  name: string;
};

type ServiceListProps = {
  services: ServiceType[];
};

const ServiceList: FC<ServiceListProps> = ({ services }): ReactElement => {
  return (
    <div className="services">
      <h1>Services</h1>
      {services.map((service: ServiceType, index: number): ReactElement => {
        return (
          <div
            className={`service service-${index % 2 === 0 ? "1" : "2"}`}
            key={index}
          >
            <img className="service-icon" src={service.icon} alt="" />
            <img className="service-underline" src={underline} alt="" />
            <h6>{service.name}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceList;
