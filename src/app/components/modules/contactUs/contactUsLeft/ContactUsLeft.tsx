import { FC, ReactElement } from "react";
import dataStats from "app/const/stats";
import Stat from "app/components/modules/contactUs/contactUsLeft/stat/Stat";
import { StatsType } from "app/types/DataType";
import "app/styles/contactUs/ContactUsLeft.css"

const ContactUsLeft: FC = (): ReactElement => {
    return (
        <div className="contact-us-left">
            {
                dataStats.map((stat: StatsType, index: number): ReactElement => {
                    return (
                        <div className="stat" key={index}>
                            <Stat {...stat} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ContactUsLeft;