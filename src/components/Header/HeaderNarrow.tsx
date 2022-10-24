/** @jsxImportSource theme-ui */
import { FC } from 'react'
import { Box, Text } from 'theme-ui';

const Header: FC = () => {
    return (
        <Box sx={{ flex: 'auto', marginTop: 2 }}>
            <Text sx={{ fontSize: 9, color: 'text', fontWeight: 'header', textDecorationLine: 'none' }}>
                Hi, I'm Erin
            </Text>
            <Box sx={{ maxWidth: 350 }}>
                <Text sx={{ fontSize: 3, color: 'secondary' }}>
                    I'm focused on design + development harmony and devoted to creating the best possible experience for the user.
                </Text>
            </Box>
        </Box>
    );
};

export default Header;