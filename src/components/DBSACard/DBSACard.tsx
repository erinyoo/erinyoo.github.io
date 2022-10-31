/** @jsxImportSource theme-ui */
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FC } from 'react'
import { Box, Card, Flex, Text } from 'theme-ui';
import Arrow from "../../assets/Arrow.svg";

const DBSACard: FC = () => {
    return (
        <Link to={'/dbsa'}>
            <motion.div sx={{
                position: 'absolute', marginRight: 'auto', marginLeft: 'auto', left: 0, right: 0, top: 790,
                background: 'linear-gradient(150deg, rgba(155,212,247,0.26514355742296913) 54%, rgba(255,254,252,0.30155812324929976) 95%)', borderRadius: 20, padding: 30, width: '90%',
                boxShadow: 'rgba(149, 157, 165, 0.1) 0px 8px 24px',
            }} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200, damping: 30 }}>
                <Card sx={{ marginTop: 5 }}>
                    <Flex sx={{ flexDirection: 'column' }}>
                        <Box sx={{ flexGrow: 1 }} >
                            <Flex sx={{ flexDirection: 'column', justifyContent: 'space-between', height: 100, paddingLeft: 4, color: '#007cd4' }}>
                                <Text sx={{ fontSize: 6, fontWeight: 'titles', textDecorationLine: 'none', fill: '#007cd4', }}>
                                    DBSA Wellness
                                    <Arrow style={{ marginLeft: 15 }} />
                                </Text>
                                <Box sx={{ fontSize: 3, paddingTop: 1, fontWeight: 500, opacity: .5 }}>
                                    Girls in Tech SF Hackathon
                                </Box>
                                <Box sx={{ fontSize: 3, paddingTop: 1, zIndex: 2, width: 400, }}>
                                    Making self-managing mental health with DBSA's resources easier and more accessible for everyone.
                                </Box>
                            </Flex>
                        </Box>
                        <Box sx={{ width: '70%', alignSelf: 'flex-end', zIndex: 1, marginTop: -30, marginBottom: -30 }}>
                            <StaticImage src={"../../images/DBSAPreview.png"} alt={"DBSA"} height={1500} />
                        </Box>
                    </Flex>
                </Card>
            </motion.div>
        </Link>
    );
};

export default DBSACard;