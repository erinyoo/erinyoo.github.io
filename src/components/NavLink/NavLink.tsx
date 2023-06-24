/** @jsxImportSource theme-ui */
import "../../theme/styles.scss"
import { FC } from 'react';

interface NavLinkProps {
    readonly isActive: boolean;
    readonly label: string;
    readonly to: string;
    readonly newTab?: boolean;
}

const NavLink: FC<NavLinkProps> = ({ isActive, label, to, newTab }) => {

    const active = isActive ? "active" : undefined;
    const targetBlank = newTab ? "_blank" : undefined;

    return (
        <div className="navlink buttontext">
            <a className={active} href={to} target={targetBlank}>{label}</a>
        </div>
    );
};

export default NavLink;