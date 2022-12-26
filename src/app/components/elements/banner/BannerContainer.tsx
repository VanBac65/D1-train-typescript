import { ReactElement } from "react";
import backGroundImage from "../../../../public/images/banner/Hero.png"
import "./BannerContainer.css"

export const Banner = ():ReactElement => {
    return (
        <div className="banner">
            <img src={backGroundImage} alt=""/>
        </div>
    )
}