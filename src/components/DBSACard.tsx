/** @jsxImportSource theme-ui */
import { FC } from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import { Box, Card } from 'theme-ui';

const DBSACard: FC = () => {
    return (
        <Box css={{ position: 'absolute', border: 'solid', borderRadius: 20, padding: 60, width: '85%' }}>
            <Card sx={{ marginTop: 5 }}><StaticImage src={"../images/DBSA.png"} alt={"DBSA"} width={400} /></Card>
        </Box>
    );
};

export default DBSACard;