/** @jsxImportSource theme-ui */
import "../../theme/styles.scss"

import { FC } from 'react'
// import { StaticImage } from 'gatsby-plugin-image';

interface DisplayCardProps {
    readonly title: string;
    readonly description: string;
    readonly img: React.FC;
}

const DisplayCard: FC<DisplayCardProps> = ({ title, description, img }) => {

    return (
        <div className="displaycard">
            <div className="displayimage">{img}</div>
            <div className="displaycontent">
                <div className="subheader2">{title}</div>
                <div className="body">{description}</div>
            </div>
        </div>
    );
};

export default DisplayCard;