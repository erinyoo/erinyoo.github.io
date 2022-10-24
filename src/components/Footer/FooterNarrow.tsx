/** @jsxImportSource theme-ui */
import { StaticImage } from 'gatsby-plugin-image';
import { FC } from 'react'
import { Link } from 'gatsby';
import { Box, Flex, Text } from 'theme-ui';

const Footer: FC = () => {
    const linkCSS = {
        letterSpacing: -0.5, color: 'primary', textDecoration: 'none', fontWeight: 'bold',
        '&.active': {
            color: 'active',
        },
    };

    return (
        <Flex sx={{
            flexDirection: 'column', justifyItems: 'center', justifyContent: 'center', position: 'absolute', height: 150, display: 'center', textAlign: 'center',
            backgroundColor: '#faf7f0', left: 0, right: 0, marginLeft: 'auto', width: '100%', marginRight: 'auto', bottom: -100
        }}>
            <Box sx={{ alignSelf: 'center', width: 200, paddingTop: 4 }}>
                <Box sx={{ width: 200 }}>
                    <Text sx={{ fontSize: 1, color: 'text', fontWeight: 'titles', textDecorationLine: 'none' }}>
                        This website was built with Gatsby & React.
                    </Text>
                </Box>
                <Box sx={{ width: 200, paddingTop: 2, }}>
                    <Link to="mailto:hello@erinyoo.com" activeClassName="active" sx={linkCSS}>
                        <StaticImage sx={{ margin: 2 }} src={"../../images/Mail.png"} alt={"Mail"} width={26} />
                    </Link>
                    <Link to="https://dribbble.com/erinyoo" activeClassName="active" sx={linkCSS}>
                        <StaticImage sx={{ margin: 2 }} src={"../../images/Dribbble.png"} alt={"Dribbble"} width={24} />
                    </Link>
                    <Link to="https://www.linkedin.com/in/erinyoo/" activeClassName="active" sx={linkCSS}>
                        <StaticImage sx={{ margin: 2 }} src={"../../assets/LinkedIn.svg"} alt={"LinkedIn"} width={22} />
                    </Link>
                </Box>
            </Box>
        </Flex>
    );
};

export default Footer;