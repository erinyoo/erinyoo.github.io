/** @jsxImportSource theme-ui */
import "../../theme/styles.scss"
import NavLink from "../NavLink/NavLink"
import { StaticImage } from 'gatsby-plugin-image';
import ResumeLink from "../ResumeLink/ResumeLink"

const NavBar = (props) => {

    return (
        <div className="navbar">
            <StaticImage src={'../../images/signature.png'} alt={"work item image"} placeholder={'none'} width={72} />

            <div className="navright">
                <NavLink isActive={true} label="Home" to="/" />
                <NavLink isActive={false} label="Contact" to="/contact" />
                <ResumeLink isActive={false} label="My Resume" to="gmail.com" />
            </div>
        </div>
    )
}

export default NavBar
