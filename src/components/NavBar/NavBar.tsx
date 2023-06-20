/** @jsxImportSource theme-ui */
import "../../theme/styles.scss"
import NavLink from "../NavLink/NavLink"
import ResumeLink from "../ResumeLink/ResumeLink"

const NavBar = (props) => {

    return (
        <div className="navbar">
            <NavLink isActive={true} label="Home" to="/" />
            <NavLink isActive={false} label="Contact" to="/contact" />
            <ResumeLink isActive={false} label="My Resume" to="gmail.com" />
        </div>
    )
}

export default NavBar
