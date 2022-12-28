import { FC, ReactElement } from "react";
import dataStats from "app/const/stats";
import Button from "app/components/elements/Button";
import { StatsType } from "app/types/dataType";
import ContactUsStat from "../elements/ContactUsStat";
import "app/styles/modules/ContactUs.css";

type StatsProps = StatsType;

const ContactUs: FC = (): ReactElement => {
  return (
    <div className="contact-us">
      <div className="contact-us-left">
        {dataStats.map((stat: StatsProps, index: number): ReactElement => {
          return (
            <div className="stat" key={index}>
              <ContactUsStat {...stat} />
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
        <Button title="Contact Us" />
      </div>
    </div>
  );
};

export default ContactUs;
