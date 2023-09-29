/** @jsxImportSource theme-ui */
import { FC } from "react";
import "../../theme/styles.scss"
import NavLink from "../NavLink/NavLink"

interface NavBarProps {
    readonly currentPage: string;
}

const NavBar: FC<NavBarProps> = ({ currentPage }) => {

    return (
        <div className="navbar">
            <div className="navright">
                <NavLink isActive={currentPage === "home"} label="Home" to="/" />
                <NavLink isActive={currentPage === "contact"} label="Contact" to="mailto:hello@erinyoo.com" />
                <NavLink isActive={currentPage === "resume"} label="Resume" to="https://drive.google.com/file/d/1V3lsY2jwbWkCeVdtrhm9W79c-kbngArO/view?usp=sharing" newTab={true} />
            </div>
        </div>
    )
}

export default NavBar
