import { FC, ReactElement } from "react";
import AboutUs from "app/components/modules/AboutUs";
import Banner from "app/components/modules/BannerContainer";
import ContactUs from "app/components/modules/ContactUs";
import Footer from "app/components/modules/Footer";
import Header from "app/components/modules/HeaderContainer";
import OutReputation from "app/components/modules/OutReputation";
import Services from "app/components/modules/Services";
import Projects from "app/components/modules/Projects";
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