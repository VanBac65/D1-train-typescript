import { FC, ReactElement } from "react";
import Button from "app/components/elements/Button";
import "app/styles/modules/contactUs.css";

type StatsType = {
  icon: string;
  number: number;
  name: string;
};

type ContactProps = {
  statList: StatsType[];
};

const ContactUs: FC<ContactProps> = ({ statList }): ReactElement => {
  return (
    <div className="contact-us">
      <div className="contact-us-left">
        {statList.map((stat: StatsType, index: number): ReactElement => {
          return (
            <div className="stat" key={index}>
              <h1>{stat.number}</h1>
              <span></span>
              <label>{stat.name}</label>
              <img src={stat.icon} alt="" />
            </div>
          );
        })}
      </div>
      <div className="contact-us-right">
        <h1>30 Years Experience</h1>
        <p>
          Our company has been the leading provided construction services to
          clients throughout the USA since 1988.
        </p>
        <Button>Contact Us</Button>
      </div>
    </div>
  );
};

export default ContactUs;
