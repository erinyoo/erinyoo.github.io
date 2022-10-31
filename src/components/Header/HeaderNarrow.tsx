/** @jsxImportSource theme-ui */
import { FC } from 'react'
import { Box, Text } from 'theme-ui';
import HeaderContent from './HeaderContent';

const Header: FC = () => {
    return (
        <Box sx={{ flex: 'auto', marginTop: 2 }}>
            <Text sx={{ fontSize: 9, color: 'text', fontWeight: 'header', textDecorationLine: 'none' }}>
                Hi, I'm Erin
            </Text>
            <Box sx={{ maxWidth: 350 }}>
                <HeaderContent />
            </Box>
        </Box>
    );
};

export default Header;