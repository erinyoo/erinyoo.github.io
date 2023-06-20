/** @jsxImportSource theme-ui */
import { Box } from 'theme-ui';
import AboutNarrowContent from '../components/About/AboutNarrowContent';
import NavBar from '../components/NavBar';
import Moweb from '../components/ResponsiveViews/Moweb';
import Narrow from '../components/ResponsiveViews/Narrow';
import Wide from '../components/ResponsiveViews/Wide';
import AboutContent from '../components/About/About';

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
            <Narrow>
                <Box sx={{ position: 'absolute', marginLeft: 'auto', marginRight: 'auto', left: 0, right: 0, width: 600 }}>
                    <NavBar />
                    <AboutNarrowContent />
                </Box>
            </Narrow>
            <Moweb>
                <Box sx={{ position: 'absolute', marginLeft: 'auto', marginRight: 'auto', left: 0, right: 0, width: 500 }}>
                    <NavBar />
                    <AboutNarrowContent />
                </Box>
            </Moweb>
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