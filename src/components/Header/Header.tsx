/** @jsxImportSource theme-ui */
import { FC } from 'react'
import "../../theme/styles.scss"
import { StaticImage } from 'gatsby-plugin-image';

const Header: FC = () => {
    return (
        <div className="title header">
            Hello world! <StaticImage src={"../../images/hand.png"} alt={"About Erin"} placeholder={'none'} height={60} /> I'm Erin, a <StaticImage className="code" src={"../../images/code.png"} alt={"About Erin"} placeholder={'none'} height={35} /> frontend devotee turned <StaticImage src={"../../images/pentool.png"} alt={"leftbracket"} placeholder={'none'} height={55} /> product design aficionado
        </div >
    );
};

export default Header;