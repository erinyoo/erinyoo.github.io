/** @jsxImportSource theme-ui */
import { FC } from 'react'
import { Box, Text } from 'theme-ui';
import HeaderContent from './HeaderContent';

const HeaderMoweb: FC = () => {
    return (
        <Box sx={{ px: 6, position: 'absolute', marginLeft: 0, marginRight: 0, left: 0, right: 0, top: 500, width: '100%', textAlign: 'center' }}>
            <Text sx={{ fontSize: 9, color: 'text', fontWeight: 'header', textDecorationLine: 'none' }}>
                Hi, I'm Erin
            </Text>
            <Box>
                <HeaderContent />
            </Box>
        </Box>
    );
};

export default HeaderMoweb;