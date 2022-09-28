/** @jsxImportSource theme-ui */
import { Link } from 'gatsby';
import { Box, Flex } from 'theme-ui';
import { FC } from 'react';

const NavBar: FC = () => {
    const linkCSS = { fontSize: 2, color: 'primary', margin: 2 };

    return (
        <Box sx={{ width: 250 }}>
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
    );
};

export default NavBar;