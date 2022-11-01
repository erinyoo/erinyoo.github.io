/** @jsxImportSource theme-ui */
import { FC } from 'react'
import { StaticImage } from 'gatsby-plugin-image';

const LandingImagesNarrow: FC = () => {
    return (
        <>
            <div style={{ position: 'absolute', top: 180, right: -30 }}>
                <StaticImage alt={"erin"} src={"../../images/erin.png"} placeholder={'none'} width={400} />
            </div>
        </>
    );
};

export default LandingImagesNarrow;