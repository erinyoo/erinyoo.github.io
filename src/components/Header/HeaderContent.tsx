/** @jsxImportSource theme-ui */
import { FC } from 'react'
import { Box, Text } from 'theme-ui';

const HeaderContent: FC = () => {
    return (
        <>
            <Box sx={{ marginBottom: 2 }}>
                <Text sx={{ fontSize: 3, color: '#CDC8C7', fontWeight: 'body' }}>
                    Product Design @ Microsoft
                </Text>
            </Box>
            <Text sx={{ fontSize: 3, color: 'text', fontWeight: 'body' }}>
                I'm passionate about cultivating design & development harmony and determined to discover the best possible user experience.
            </Text>
        </>
    );
};

export default HeaderContent;