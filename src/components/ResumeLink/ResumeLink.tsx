/** @jsxImportSource theme-ui */
import "../../theme/styles.scss"
import { FC } from 'react';

interface ResumeLinkProps {
    readonly isActive: boolean;
    readonly label: string;
    readonly to: string;
}

const ResumeLinkProps: FC<ResumeLinkProps> = ({ isActive, label, to }) => {

    const active = isActive ? "active" : undefined;

    return (
        <div className="resumelink" sx={{ fontSize: 2, fontWeight: "bold" }}>
            <a className={active} href={to}>{label}</a>
        </div>
    );
};

export default ResumeLinkProps;