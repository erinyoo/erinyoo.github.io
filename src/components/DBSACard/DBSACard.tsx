/** @jsxImportSource theme-ui */
import { FC } from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import { Box, Card, Text, Flex } from 'theme-ui';

const DBSACard: FC = () => {
    return (
        <Box css={{ position: 'absolute', border: 'solid', borderRadius: 20, padding: 30, width: '100%', marginRight: 'auto', marginLeft: 'auto', left: 0, right: 0, top: 800 }}>
            <Card sx={{ marginTop: 5 }}>
                <Flex dir={'row'}>
                    <Text sx={{ paddingLeft: 5, flexGrow: 1, fontSize: 6, color: 'text', fontWeight: 'titles', textDecorationLine: 'none' }}>
                        DBSA Wellness
                    </Text>
                    <Box css={{ border: 'solid', borderRadius: 100, width: 120, height: 40, textAlign: 'center' }}>Case Study</Box>
                    <Box sx={{ alignSelf: 'flex-end', paddingTop: 2 }}>
                        <StaticImage src={"../../images/DBSA.png"} alt={"DBSA"} width={300} />
                    </Box>
                </Flex>
            </Card>
        </Box>
    );
};

export default DBSACard;