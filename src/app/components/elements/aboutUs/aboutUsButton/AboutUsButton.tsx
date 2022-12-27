import { FC, ReactElement } from "react";
import "app/components/elements/aboutUs/aboutUsButton/AboutUsButton.css"

const AboutUsButton: FC = (): ReactElement => {
  return (
    <button className="about-us-button">More on Our History</button>
  )
}

export default AboutUsButton;