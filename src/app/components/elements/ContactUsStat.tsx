import { FC, ReactElement } from "react";
import { StatsType } from "app/types/dataType";

type StatsProps = StatsType;

const ContactUsStat: FC<StatsProps> = (stat: StatsProps): ReactElement => {
  return (
    <>
      <h1>{stat.number}</h1>
      <span></span>
      <label>{stat.name}</label>
      <img src={stat.icon} alt="" />
    </>
  );
};

export default ContactUsStat;
