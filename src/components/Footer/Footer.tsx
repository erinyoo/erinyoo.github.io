/** @jsxImportSource theme-ui */
import { FC } from 'react'
import { Text } from 'theme-ui';

const Footer: FC = () => {
    return (
        <Text sx={{ position: 'absolute', bottom: -200, fontSize: 2, color: 'text', fontWeight: 'titles', textDecorationLine: 'none' }}>
            Made with Gatsby & React
        </Text>
    );
};

export default Footer;