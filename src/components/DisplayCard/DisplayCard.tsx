/** @jsxImportSource theme-ui */
import { StaticImage } from "gatsby-plugin-image";
import "../../theme/styles.scss"

import { FC } from 'react'

interface DisplayCardProps {
    readonly title: string;
    readonly description: string;
    readonly img: React.FC;
    readonly linkTo: string;
}

const DisplayCard: FC<DisplayCardProps> = ({ title, description, img, linkTo }) => {

    return (
        <div className="displaycard">
            <div className="displayimage">{img}</div>
            <div className="displaycontent">
                <div className="subheader2">{title}</div>
                <div className="body">{description}</div>
            </div>
            <div className="dchyper">
                <a href={linkTo}>See the case study ↗</a>
            </div>
            {/* <StaticImage className={"displayarrow"} width={100} layout="constrained" src={'../../images/arrow.png'} alt={"go to"} placeholder={'none'} /> */}
        </div>
    );
};

export default DisplayCard;