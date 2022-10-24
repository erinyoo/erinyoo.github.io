/** @jsxImportSource theme-ui */
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import { FC } from 'react'
import { Box, Card, Flex, Text } from 'theme-ui';

const DBSACardMoweb: FC = () => {
    return (
        <motion.div sx={{
            position: 'absolute', marginRight: 'auto', marginLeft: 'auto', left: 0, right: 0, top: 700,
            background: 'linear-gradient(135deg, rgba(155,212,247,0.26514355742296913) 54%, rgba(255,254,252,0.30155812324929976) 95%)',
            backgroundColor: '#b3e3fc', borderRadius: 20, padding: 30, width: '90%',
            boxShadow: 'rgba(149, 157, 165, 0.1) 0px 8px 24px',
        }} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200, damping: 30 }}>
            <Card sx={{ padding: 2 }}>
                <Flex sx={{ flexDirection: 'column' }}>
                    <Box sx={{ flexGrow: 1 }} >
                        <Flex sx={{ flexDirection: 'column', justifyContent: 'space-between', height: 100, paddingLeft: 4, color: '#007cd4' }}>
                            <Text sx={{ fontSize: 6, fontWeight: 'titles', textDecorationLine: 'none' }}>
                                DBSA Wellness
                            </Text>
                            <Box sx={{ fontSize: 3, paddingTop: 1, fontWeight: 500, opacity: .5 }}>
                                Girls in Tech SF Hackathon
                            </Box>
                            <Box sx={{ fontSize: 3, paddingTop: 1, zIndex: 2, width: 320, }}>
                                Making self-managing mental health with DBSA's resources easier and more accessible for everyone.
                            </Box>
                        </Flex>
                    </Box>
                    <Box sx={{ width: '90%', alignSelf: 'center', zIndex: 1, marginTop: 6, marginBottom: -5 }}>
                        <StaticImage src={"../../images/DBSAPreview.png"} alt={"DBSA"} height={1500} />
                    </Box>
                </Flex>
            </Card>
        </motion.div>
    );
};

export default DBSACardMoweb;