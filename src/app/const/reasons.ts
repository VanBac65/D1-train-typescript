import iconServicesTeam from "public/images/reasons/Vector.png"
import iconDesigns from "public/images/reasons/Vector (1).png"
import { ReasonType } from "app/types/DataType"

export const dataReasons: ReasonType[] = [
    {
        icon: iconServicesTeam,
        name: "Best Services",
        description: "Nullam senectus porttitor in eget. Eget rutrum leo interdum."
    }, {
        icon: iconServicesTeam,
        name: "Best Team",
        description: "Cursus semper tellus volutpat aliquet lacus."
    }, {
        icon: iconDesigns,
        name: "Best Designs",
        description: "Ultricies at ipsum nunc, tristique nam lectus."
    }]