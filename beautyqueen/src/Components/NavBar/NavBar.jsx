import Navdar from "../My_Account/Navdar"
import Topnavbar from "../My_Account/Topnavbar"
import { BottomNav } from "./Bottom_nav"
import { MiddleLogoDiv } from "./Middle_logo_div"
import { TopImageDiv } from "./Top_image"

export const Navbar = () => {
    return (
        <>
           <Topnavbar/>
            <Navdar/>
            <BottomNav></BottomNav>
        </>
    )
}