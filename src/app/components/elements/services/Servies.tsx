import { ReactElement } from "react";
import { ServicesType } from "../../../types/DataType";
import icon1 from "../../../../public/images/services/icon.png"
import icon2 from "../../../../public/images/services/icon (1).png"
import icon3 from "../../../../public/images/services/icon (2).png"
import icon4 from "../../../../public/images/services/icon (3).png"
import icon5 from "../../../../public/images/services/icon (4).png"
import icon6 from "../../../../public/images/services/icon (5).png"

const dataServices:ServicesType[] = [
  {
    icon : icon1,
    name : "Construction"
  },
  {
    icon : icon2,
    name : "Renovation"
  },
  {
    icon : icon3,
    name : "Consultation"
  },
  {
    icon : icon4,
    name : "Repair Services"
  },
  {
    icon : icon5,
    name : "Architecture"
  },
  {
    icon : icon6,
    name : "Electric"
  },
] 

export const Services = (): ReactElement => {
  return (
    <>

    </>
  )
}