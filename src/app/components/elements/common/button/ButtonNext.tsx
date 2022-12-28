import { FC, ReactElement } from "react";
import next from "public/images/button/Next.png"

const ButtonNext: FC = (): ReactElement => {
    return (
        <button>Next<img src={next} alt="" /></button>
    )
}