/** @jsxImportSource theme-ui */
import { FC } from 'react'
import { Box, Text } from 'theme-ui';

const HeaderMoweb: FC = () => {
    return (
        <Box sx={{ px: 6, position: 'absolute', marginLeft: 0, marginRight: 0, left: 0, right: 0, top: 500, width: '100%', textAlign: 'center' }}>
            <Text sx={{ fontSize: 9, color: 'text', fontWeight: 'header', textDecorationLine: 'none' }}>
                Hi, I'm Erin
            </Text>
            <Box>
                <Text sx={{ fontSize: 3, color: 'text', fontWeight: 'body' }}>
                    I'm focused on design + development harmony and devoted to creating the best possible experience for the user.
                </Text>
            </Box>
        </Box>
    );
};

export default HeaderMoweb;