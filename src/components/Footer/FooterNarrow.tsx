/** @jsxImportSource theme-ui */
import { FC } from 'react'
import { Text } from 'theme-ui';

const Footer: FC = () => {
    return (
        <Text sx={{ position: 'absolute', bottom: -200, fontSize: 3, color: 'text', fontWeight: 'header', textDecorationLine: 'none', width: 600 }}>
            Made with Gatsby & React
        </Text>
    );
};

export default Footer;