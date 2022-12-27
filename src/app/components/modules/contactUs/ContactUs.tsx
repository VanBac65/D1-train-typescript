import { FC, ReactElement } from "react";
import ContactUsLeft from "app/components/modules/contactUs/contactUsLeft/ContactUsLeft";
import ContactUsRight from "app/components/modules/contactUs/contactUsRight/ContactUsRight";
import "app/styles/ContactUs.css"

const ContactUs: FC = (): ReactElement => {
    return (
        <div className="contact-us">
            <ContactUsLeft />
            <ContactUsRight />
        </div>
    )
}

export default ContactUs;