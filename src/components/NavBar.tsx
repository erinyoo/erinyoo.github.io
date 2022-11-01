/** @jsxImportSource theme-ui */
import { Link } from 'gatsby';
import { Box, Flex } from 'theme-ui';
import { StaticImage } from 'gatsby-plugin-image';
import { FC } from 'react';

const NavBar: FC = () => {
    const linkCSS = {
        letterSpacing: -0.5, fontSize: 4, color: 'muted', m: 3, textDecoration: 'none', fontWeight: 'bold',
        '&.active': {
            color: 'primary',
        },
    };

    return (
        <Flex sx={{ py: 4, justifyContent: 'center', px: 3 }}>
            <Box sx={{ textAlign: 'left' }}>
                <Link to={'/'} activeClassName="active" ><StaticImage alt={"signature"} src={"../images/signature.png"} placeholder={'none'} width={95} /></Link>
            </Box>
            <Box sx={{ textAlign: 'right', alignContent: "flex-end", paddingTop: 3, marginLeft: 'auto', }}>
                <Link to="/" activeClassName="active"
                    sx={linkCSS}>
                    Home
                </Link>
                <Link to="/about" activeClassName="active"
                    sx={linkCSS}>
                    About
                </Link>
                <Link to="https://drive.google.com/file/d/1V3lsY2jwbWkCeVdtrhm9W79c-kbngArO/view?usp=sharing" activeClassName="active"
                    sx={linkCSS}>
                    Resume
                </Link>
                <Link to="mailto:hello@erinyoo.com" activeClassName="active"
                    sx={linkCSS}>
                    Contact
                </Link>
            </Box>
        </Flex>
    );
};

export default NavBar;