/** @jsxImportSource theme-ui */
import { FC } from 'react'
import { Box, Text } from 'theme-ui';
import HeaderNarrow from './HeaderNarrow';

const Header: FC = () => {
    return (
        <>
            <div sx={{
                '@media screen and (max-width:960px)': {
                    display: 'none',
                }
            }} >
                <Box sx={{ px: 11, flex: 'auto', marginTop: 2 }}>
                    <Text sx={{ fontSize: 9, color: 'text', fontWeight: 'header', textDecorationLine: 'none' }}>
                        Hi, I'm Erin
                    </Text>
                    <Box sx={{ width: 400 }}>
                        <Text sx={{ fontSize: 3, color: 'secondary' }}>
                            I'm focused on design + development harmony and devoted to creating the best possible experience for the user.
                        </Text>
                    </Box>
                </Box>
            </div>
            <HeaderNarrow />
        </>
    );
};

export default Header;