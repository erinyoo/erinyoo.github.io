/** @jsxImportSource theme-ui */
import { FC } from 'react'
import { StaticImage } from 'gatsby-plugin-image';

const LandingImagesMoweb: FC = () => {
    return (
        <>
            <div style={{ position: 'absolute', textAlign: 'center', top: 150, left: 20 }}>
                <StaticImage alt={"erin"} src={"../../images/erin.png"} width={350} />
            </div>
        </>
    );
};

export default LandingImagesMoweb;