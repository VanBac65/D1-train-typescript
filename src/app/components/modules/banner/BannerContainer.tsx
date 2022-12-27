import { FC, ReactElement } from "react";
import backGroundImage from "public/images/banner/Hero.png"
import "app/components/modules/banner/BannerContainer.css"

const Banner: FC = (): ReactElement => {
    return (
        <div className="banner">
            <img src={backGroundImage} alt="" />
        </div>
    )
}

export default Banner;