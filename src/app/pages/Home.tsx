import { FC, ReactElement } from "react";
import ContactUs from "app/components/modules/ContactUs";
import Footer from "app/components/modules/Footer";
import Header from "app/components/modules/HeaderContainer";
import OutReputation from "app/components/modules/OutReputation";
import ServiceList from "app/components/modules/ServiceList";
import Projects from "app/components/modules/Projects";
import dataServices from "app/const/services";
import Button from "app/components/elements/Button";
import imgPath from "public/images/aboutUs/about-us.png";
import backGroundImage from "public/images/banner/Hero.png";
import dataStats from "app/const/stats";
import dataProjects from "app/const/projects";
import dataReasons from "app/const/reasons";
import FormUser from "app/components/modules/FormUser";
import "app/styles/home/homePage.css";

const navProjects = ["All", "Commercial", "Residential", "Other"];
const navHeader = ["Home", "About Us", "Projects", "Services", "Contact Us"];
const inputPlaceholder = [
  "Your Name",
  "Email",
  "Reason for Contacting",
  "Phone",
];

const Home: FC = (): ReactElement => {
  return (
    <div className="home">
      <Header menu={navHeader} />
      <div className="banner">
        <img src={backGroundImage} alt="" />
      </div>
      <OutReputation reason={dataReasons} />
      <div className="about-us">
        <img src={imgPath} alt="" />
        <div className="about-us-description">
          <h2 className="title">About Us</h2>
          <p>
            For more than 30 years we have been delivering world-class
            construction and we’ve built many lasting relationships along the
            way.
          </p>
          <p>
            We’ve matured into an industry leader and trusted resource for those
            seeking quality, innovation and reliability when building in the
            U.S.
          </p>
          <Button>More on Our History</Button>
        </div>
      </div>
      <ServiceList services={dataServices} />
      <ContactUs statList={dataStats} />
      <Projects menu={navProjects} projects={dataProjects} />
      <FormUser items={inputPlaceholder} />
      <Footer />
    </div>
  );
};

export default Home;
