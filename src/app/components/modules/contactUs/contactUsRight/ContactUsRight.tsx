import { FC, ReactElement } from "react";
import "app/styles/ContactUsRight.css"

const ContactUsRight: FC = (): ReactElement => {
    return (
        <div className="contact-us-right">
            <h1>30 Years Experience</h1>
            <p>Our company has been the leading provided construction services to clients throughout the USA since 1988.</p>
            <button>Contact us</button>
        </div>
    )
}

export default ContactUsRight;