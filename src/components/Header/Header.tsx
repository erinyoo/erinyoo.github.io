/** @jsxImportSource theme-ui */
import { FC } from 'react'
import "../../theme/styles.scss"
import { StaticImage } from 'gatsby-plugin-image';

const Header: FC = () => {
    return (
        <div className="title header">
            Hi! I'm Erin
            <StaticImage src={"../../images/abouterin.png"} alt={"About Erin"} placeholder={'none'} width={250} />
        </div >
    );
};

export default Header;