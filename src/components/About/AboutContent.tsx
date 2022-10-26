/** @jsxImportSource theme-ui */
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Box, Flex, Text } from 'theme-ui';
import AboutParagraph from './AboutParagraph';

const AboutContent = () => {
    const linkCSS = {
        color: 'primary',
        '&.active': {
            color: 'primary',
        },
    }

    return (
        <Box sx={{ width: '70%', position: 'absolute', left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto' }}>
            <Flex sx={{ flexDirection: 'row' }}>
                <Box sx={{ width: '60%', textAlign: 'center', marginRight: 4 }}>
                    <StaticImage src={"../../images/abouterin.png"} alt={"About Erin"} width={600} />
                    <Text sx={{ fontWeight: 'bold', fontSize: 3 }}>hello@erinyoo.com</Text>
                    <Box>
                        <Link to="https://dribbble.com/erinyoo" activeClassName="active" sx={linkCSS}>
                            <StaticImage sx={{ margin: 2 }} src={"../../images/Dribbble.png"} alt={"Dribbble"} width={24} />
                        </Link>
                        <Link to="https://www.linkedin.com/in/erinyoo/" activeClassName="active" sx={linkCSS}>
                            <StaticImage sx={{ margin: 2 }} src={"../../assets/LinkedIn.svg"} alt={"LinkedIn"} width={22} />
                        </Link>
                    </Box>
                </Box>
                <Box sx={{ fontSize: 2, width: '100%' }}>
                    <AboutParagraph />

                    <Box sx={{ width: '30%', marginBottom: 6 }}></Box><StaticImage src={"../../images/erinandeevee.png"} alt={"Erin and Eevee"} width={700} />
                </Box>
            </Flex>
        </Box>
    )
}

export default AboutContent
