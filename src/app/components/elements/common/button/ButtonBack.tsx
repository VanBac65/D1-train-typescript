import { FC, ReactElement } from "react";
import back from "public/images/button/Back.png"

const ButtonBack: FC = (): ReactElement => {
    return (
        <button><img src={back} alt="" />Back</button>
    )
}