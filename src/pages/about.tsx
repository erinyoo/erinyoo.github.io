/** @jsxImportSource theme-ui */
import { Box } from 'theme-ui';
import AboutContent from '../components/AboutContent';
import NavBar from '../components/NavBar';
import Wide from '../components/ResponsiveViews/Wide';

const AboutPage = () => {

    return (
        <>
            <meta name="viewport" content="width=400, initial-scale=.65" />
            <Wide>
                <Box sx={{ position: 'absolute', zIndex: 3, marginLeft: 'auto', marginRight: 'auto', left: 0, right: 0, width: 1200 }}>
                    <NavBar />
                    <AboutContent />
                </Box>
            </Wide>
        </>
    )
}

export default AboutPage

export const Head = () => {
    return (
        <>
            <title>About Me</title>
        </>
    );
};