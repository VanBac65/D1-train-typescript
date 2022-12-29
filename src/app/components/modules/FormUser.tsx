import { FC, ReactElement } from "react";
import Input from "app/components/elements/Input";
import Button from "app/components/elements/Button";
import "app/styles/modules/formUser.css";

type InputProps = {
  items: string[];
};

const FormUser: FC<InputProps> = ({ items }): ReactElement => {
  return (
    <div className="form-user">
      <div className="form-content">
        <h1>What can us do for you?</h1>
        <span className="form-user-title">
          We are ready to work on a project of any complexity, whether it’s
          commercial or residential.
        </span>
        <div className="form-inputs">
          {items.map((item: string, index: number): ReactElement => {
            return (
              <div className="form-input" key={index}>
                <Input placeholder={item} />
              </div>
            );
          })}
          <textarea rows={3} placeholder={"Message"} />
          <Button>Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default FormUser;
