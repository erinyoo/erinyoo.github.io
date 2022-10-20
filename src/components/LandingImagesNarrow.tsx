/** @jsxImportSource theme-ui */
import { FC } from 'react'
import { StaticImage } from 'gatsby-plugin-image';

const LandingImagesNarrow: FC = () => {
    return (
        <>
            <div sx={{
                '@media screen and (min-width:1449px), (max-width:1078px)': {
                    display: 'none',
                }
            }}>
                <div style={{ position: 'absolute', top: 200, right: 200 }}>
                    <StaticImage alt={"greenpaint"} src={"../images/greenpaint.png"} width={350} />
                </div>
                <div style={{ position: 'absolute', top: 300, right: 200 }}>
                    <StaticImage alt={"erin"} src={"../images/erin.png"} width={400} />
                </div>
            </div>

            <div sx={{
                '@media screen and (min-width:1077px), (max-width:960px)': {
                    display: 'none',
                }
            }}>
                <div style={{ position: 'absolute', top: 300, right: 100 }}>
                    <StaticImage alt={"erin"} src={"../images/erin.png"} width={350} />
                </div>
            </div>

            <div sx={{
                '@media screen and (min-width:960px)': {
                    display: 'none',
                }
            }}>
                <div style={{ position: 'absolute', top: 150, left: 0, right: 0, textAlign: 'center' }}>
                    <StaticImage alt={"erin"} src={"../images/erin.png"} width={350} />
                </div>
            </div>
        </>
    );
};

export default LandingImagesNarrow;