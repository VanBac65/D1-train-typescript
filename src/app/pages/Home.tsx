import { ReactElement } from "react";
import { AboutUs } from "../components/elements/aboutUs/AboutUs";
import { Banner } from "../components/elements/banner/BannerContainer";
import { Header } from "../components/elements/header/HeaderContainer";
import { OutReputation } from "../components/elements/outReputation/OutReputation";
import "./Home.css"

export const Home = (): ReactElement => {
    return (
        <div className="home">
            <Header />
            <Banner />
            <OutReputation />
            <AboutUs />
        </div>
    )
}