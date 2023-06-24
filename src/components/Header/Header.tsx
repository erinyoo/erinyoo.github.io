/** @jsxImportSource theme-ui */
import { FC } from 'react'
import "../../theme/styles.scss"
import { StaticImage } from 'gatsby-plugin-image';

const Header: FC = () => {
    return (
        <div className="title header">
            Hello world! I'm Erin <StaticImage src={"../../images/abouterin.png"} alt={"About Erin"} placeholder={'none'} height={50} />a frontend (dev)otee turned product design aficionado
        </div >
    );
};

export default Header;