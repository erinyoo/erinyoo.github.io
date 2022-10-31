/** @jsxImportSource theme-ui */
import { Text } from 'theme-ui';
import { FC } from 'react';

interface TitleProps {
    readonly title: string;
    readonly color?: string;
}

const Title: FC<TitleProps> = ({ title, color = 'text' }) => {

    return (
        <Text sx={{ fontWeight: 'titles', fontSize: 5, color }}>{title}</Text>
    );
};

export default Title;