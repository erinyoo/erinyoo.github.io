/** @jsxImportSource theme-ui */
import { Box } from 'theme-ui';
import DBSAContent from '../components/DBSA/DBSAContent';
import DBSAContentNarrow from '../components/DBSA/DBSAContentNarrow';
import NavBar from '../components/NavBar';
import Moweb from '../components/ResponsiveViews/Moweb';
import Narrow from '../components/ResponsiveViews/Narrow';
import Wide from '../components/ResponsiveViews/Wide';

const DBSAPage = () => {

    return (
        <>
            <meta name="viewport" content="width=400, initial-scale=.65" />
            <Wide>
                <Box sx={{ position: 'absolute', zIndex: 3, marginLeft: 'auto', marginRight: 'auto', left: 0, right: 0, width: 1200 }}>
                    <NavBar />
                    <DBSAContent />
                </Box>
            </Wide>
            <Narrow>
                <Box sx={{ position: 'absolute', marginLeft: 'auto', marginRight: 'auto', left: 0, right: 0, width: 700 }}>
                    <NavBar />
                    <DBSAContentNarrow />
                </Box>
            </Narrow>
            <Moweb>
                <Box sx={{ position: 'absolute', marginLeft: 'auto', marginRight: 'auto', left: 0, right: 0, width: 650 }}>
                    <NavBar />
                    <DBSAContentNarrow />
                </Box>
            </Moweb>
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