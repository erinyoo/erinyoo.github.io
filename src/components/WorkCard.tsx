/** @jsxImportSource theme-ui */
import { Link } from 'gatsby'
import React, { FC } from 'react'
import { Card, Text, Image } from 'theme-ui';

interface WorkCardProps {
    readonly title: string;
    readonly imagePath: string;
    readonly linkTitle: string;
    readonly linkHref: string;
}

const WorkCard: FC<WorkCardProps> = ({title, imagePath, linkTitle, linkHref}) => {
    return (
        <Card p={2} sx={{ maxWidth: 300 }}>
            <Image src={imagePath} />
            <Text>{title}</Text>
            <Link to={linkHref}>{linkTitle}</Link>
        </Card>
    );
};

export default WorkCard;