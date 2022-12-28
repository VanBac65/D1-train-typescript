import { FC, ReactElement } from "react";
import dataStats from "app/const/stats";
import "app/styles/modules/ContactUs.css";
import Button from "../elements/Button";

type StatsType = {
  icon: string;
  number: number;
  name: string;
};

const ContactUs: FC = (): ReactElement => {
  const Stat: FC<StatsType> = (stat: StatsType): ReactElement => {
    return (
      <>
        <h1>{stat.number}</h1>
        <span></span>
        <label>{stat.name}</label>
        <img src={stat.icon} alt="" />
      </>
    );
  };

  return (
    <div className="contact-us">
      <div className="contact-us-left">
        {dataStats.map((stat: StatsType, index: number): ReactElement => {
          return (
            <div className="stat" key={index}>
              <Stat {...stat} />
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
