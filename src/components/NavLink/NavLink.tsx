/** @jsxImportSource theme-ui */
import "../../theme/styles.scss"
import { FC } from 'react';

interface NavLinkProps {
    readonly isActive: boolean;
    readonly label: string;
    readonly to: string;
}

const NavLinkProps: FC<NavLinkProps> = ({ isActive, label, to }) => {

    const active = isActive ? "active" : undefined;

    return (
        <div className="navlink" sx={{ fontSize: 2, fontWeight: "bold" }}>
            <a className={active} href={to}>{label}</a>
        </div>
    );
};

export default NavLinkProps;