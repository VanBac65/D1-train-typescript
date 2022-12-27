import { FC, ReactElement } from "react";
import { dataServices } from "app/const/services";
import Service from "app/components/modules/services/service/Service";
import { ServicesType } from "app/types/DataType";
import "app/components/modules/services/Services.css"

const Services: FC = (): ReactElement => {
  return (
    <div className="services">
      <h1>Services</h1>
      {
        dataServices.map((service: ServicesType, index: number): ReactElement => {
          return (
            <div className={`service service-${index % 2 === 0 ? "1" : "2"}`} key={index}>
              <Service {...service} />
            </div>
          )
        })
      }
    </div>
  )
}

export default Services;