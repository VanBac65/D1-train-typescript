import { FC, ReactElement } from "react";
import ContactUsLeft from "./contactUsLeft/ContactUsLeft";
import ContactUsRight from "./contactUsRight/ContactUsRight";
import "app/components/modules/contactUs/ContactUs.css"

const ContactUs: FC = (): ReactElement => {
    return (
        <div className="contact-us">
            <ContactUsLeft />
            <ContactUsRight />
        </div>
    )
}

export default ContactUs;