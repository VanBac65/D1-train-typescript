import { FC, ReactElement } from "react";
import AboutUsButton from "app/components/elements/aboutUs/aboutUsButton/AboutUsButton";
import "app/styles/AboutUsDescription.css"

const AboutUsDescription: FC = (): ReactElement => {
  return (
    <div className="about-us-description">
      <h2 className="title">About Us</h2  >
      <p>
        For more than 30 years we have been delivering world-class construction
        and we’ve built many lasting relationships along the way.
      </p>
      <p>
        We’ve matured into an industry leader and trusted resource for
        those seeking quality, innovation and reliability when building in the U.S.
      </p>
      <AboutUsButton />
    </div>
  )
}

export default AboutUsDescription;