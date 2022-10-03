/** @jsxImportSource theme-ui */
import { Link } from 'gatsby';
import { Box, Flex } from 'theme-ui';
import { StaticImage } from 'gatsby-plugin-image';
import { FC } from 'react';

const NavBar: FC = () => {
    const linkCSS = {
        letterSpacing: -0.5, fontSize: 4, color: 'primary', m: 3, textDecoration: 'none', fontWeight: 'bold',
        '&.active': {
            color: 'active',
        },
    };

    return (
        <Flex>
            <Box sx={{ textAlign: 'left' }}><StaticImage alt={"signature"} src={"../images/signature.png"} width={105} /></Box>
            <Box sx={{ px: 11, py: 4, textAlign: 'right', }}>
                <Link to="/about" activeClassName="active"
                    sx={linkCSS}>
                    About
                </Link>
                <Link to="/work" activeClassName="active"
                    sx={linkCSS}>
                    Work
                </Link>
                <Link to="/illustrations" activeClassName="active"
                    sx={linkCSS}>
                    Illustrations
                </Link>
                <Link to="/contact" activeClassName="active"
                    sx={linkCSS}>
                    Contact
                </Link>
            </Box>
        </Flex>
    );
};

export default NavBar;