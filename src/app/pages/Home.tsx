import { FC, ReactElement } from "react";
import AboutUs from "app/components/modules/aboutUs/AboutUs";
import Banner from "app/components/modules/banner/BannerContainer";
import ContactUs from "app/components/modules/contactUs/ContactUs";
import Footer from "app/components/modules/footer/Footer";
import Header from "app/components/modules/header/HeaderContainer";
import OutReputation from "app/components/modules/outReputation/OutReputation";
import Services from "app/components/modules/services/Services";
import Projects from "app/components/modules/projects/Projects";
import "app/styles/home/Home.css"

const Home: FC = (): ReactElement => {
    return (
        <div className="home">
            <Header />
            <Banner />
            <OutReputation />
            <AboutUs />
            <Services />
            <ContactUs />
            <Projects />
            <Footer />
        </div>
    )
}

export default Home;