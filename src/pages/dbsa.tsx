/** @jsxImportSource theme-ui */
import { Box } from 'theme-ui';
import AboutContent from '../components/About/AboutContent';
import NavBar from '../components/NavBar';
import Wide from '../components/ResponsiveViews/Wide';

const DBSAPage = () => {

    return (
        <>
            <meta name="viewport" content="width=400, initial-scale=.65" />
            <Wide>
                <Box sx={{ position: 'absolute', zIndex: 3, marginLeft: 'auto', marginRight: 'auto', left: 0, right: 0, width: 1200 }}>
                    <NavBar />
                    <Box sx={{ fontSize: 5, fontWeight: 'header' }}></Box>
                </Box>
            </Wide>
        </>
    )
}

export default DBSAPage

export const Head = () => {
    return (
        <>
            <title>DBSA Wellness</title>
        </>
    );
};