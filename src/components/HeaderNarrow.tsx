/** @jsxImportSource theme-ui */
import { FC } from 'react'
import { Box, Text } from 'theme-ui';

const HeaderNarrow: FC = () => {
    return (
        <div sx={{
            '@media screen and (min-width:959px)': {
                display: 'none',
            }
        }} >
            <Box sx={{ px: 11, flex: 'auto', marginTop: 200 }}>
                <Text sx={{ fontSize: 9, color: 'text', fontWeight: 'header', textDecorationLine: 'none' }}>
                    Hi, I'm Erin
                </Text>
                <Box sx={{ minWidth: 400 }}>
                    <Text sx={{ fontSize: 3, color: 'secondary', textAlign: 'center' }}>
                        I'm focused on design + development harmony and devoted to creating the best possible experience for the user.
                    </Text>
                </Box>
            </Box>
        </div>
    );
};

export default HeaderNarrow;