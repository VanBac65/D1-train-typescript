import { FC, ReactElement } from "react";
import dataServices from "app/const/services";
import { ServicesType } from "app/types/dataType";
import Service from "app/components/elements/Service";
import "app/styles/modules/Services.css";

type ServicesProps = ServicesType;

const Services: FC = (): ReactElement => {
  return (
    <div className="services">
      <h1>Services</h1>
      {dataServices.map(
        (service: ServicesProps, index: number): ReactElement => {
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
