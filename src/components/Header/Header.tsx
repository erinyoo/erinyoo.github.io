/** @jsxImportSource theme-ui */
import { FC } from 'react'
import "../../theme/styles.scss"
import { StaticImage } from 'gatsby-plugin-image';

const Header: FC = () => {
    return (
        <div className="title header">
            Hello world! <StaticImage src={"../../images/handwave.PNG"} alt={"About Erin"} placeholder={'none'} height={60} /> I'm Erin, a <StaticImage src={"../../images/computer.PNG"} alt={"About Erin"} placeholder={'none'} height={60} /> frontend devotee turned <StaticImage src={"../../images/designpoint.PNG"} alt={"leftbracket"} placeholder={'none'} height={60} /> product design aficionado
        </div >
    );
};

export default Header;