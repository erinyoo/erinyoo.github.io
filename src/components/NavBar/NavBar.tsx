/** @jsxImportSource theme-ui */
import "../../theme/styles.scss"
import NavLink from "../NavLink/NavLink"

const NavBar = (props) => {

    return (
        <div className="navbar">
            <div className="navright">
                <NavLink isActive={true} label="Home" to="/" />
                <NavLink isActive={false} label="Contact" to="mailto:hello@erinyoo.com" />
                <NavLink isActive={false} label="Resume" to="https://drive.google.com/file/d/1V3lsY2jwbWkCeVdtrhm9W79c-kbngArO/view?usp=sharing" newTab={true} />
            </div>
        </div>
    )
}

export default NavBar
