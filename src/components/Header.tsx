/** @jsxImportSource theme-ui */
import { FC } from 'react'
import { Box } from 'theme-ui';
import { Link } from 'gatsby'

interface HeaderProps {
    title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
    return (
        <Box sx={{ marginLeft: 3, flex: 'auto', marginTop: 2 }}>
            <Link to="/" activeClassName="active" 
                sx={{ fontSize: 9, color: 'text', fontWeight: 'header', textDecorationLine: 'none' }}>
                {title}
            </Link>
        </Box>
    );
};

export default Header;