/** @jsxImportSource theme-ui */
import "../../theme/styles.scss"
import NavLink from "../NavLink/NavLink"

const NavBar = (props) => {

    return (
        <div className="navbar">
            <div className="navright">
                <NavLink isActive={true} label="Home" to="/" />
                <NavLink isActive={false} label="Contact" to="/contact" />
                <NavLink isActive={false} label="My Resume" to="/pdf" />
            </div>
        </div>
    )
}

export default NavBar
