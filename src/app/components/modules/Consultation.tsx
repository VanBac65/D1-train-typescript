import { FC, ReactElement } from "react";
import Button from "app/components/elements/Button";
import "app/styles/modules/consultation.css";

const Consultation: FC = (): ReactElement => {
  return (
    <div className="consultation">
      <div className="consultation-text">
        <h1>Free consultation with exceptional quality</h1>
        <label>Just one call away: +84 1102 2703</label>
      </div>
      <Button>Get your consultation</Button>
    </div>
  );
};

export default Consultation;
