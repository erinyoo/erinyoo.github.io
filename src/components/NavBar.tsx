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
        <Flex sx={{ py: 4, justifyContent: 'center' }}>
            <Box sx={{ textAlign: 'left' }}>
                <StaticImage alt={"signature"} src={"../images/signature.png"} width={95} />
            </Box>
            <Box sx={{ textAlign: 'right', alignContent: "flex-end", paddingTop: 3, marginLeft: 'auto', }}>
                <Link to="/about" activeClassName="active"
                    sx={linkCSS}>
                    About
                </Link>
                <Link to="/resume" activeClassName="active"
                    sx={linkCSS}>
                    Resume
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