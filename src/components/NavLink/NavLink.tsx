/** @jsxImportSource theme-ui */
import "../../theme/styles.scss"
import { FC } from 'react';

interface NavLinkProps {
    readonly isActive: boolean;
    readonly label: string;
    readonly to: string;
}

const NavLink: FC<NavLinkProps> = ({ isActive, label, to }) => {

    const active = isActive ? "active" : undefined;

    return (
        <div className="navlink buttontext">
            <a className={active} href={to}>{label}</a>
        </div>
    );
};

export default NavLink;