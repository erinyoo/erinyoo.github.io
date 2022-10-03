/** @jsxImportSource theme-ui */
import { FC } from 'react'
import { Box, Text } from 'theme-ui';

const Header: FC = () => {
    return (
        <Box sx={{ ml: 11, flex: 'auto', marginTop: 2 }}>
            <Text sx={{ fontSize: 9, color: 'text', fontWeight: 'header', textDecorationLine: 'none' }}>
                Hi, I'm Erin
            </Text>
        </Box>
    );
};

export default Header;