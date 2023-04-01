import { FunctionComponent } from 'react';
import { Button, Grid, Paper, Typography, Box, styled } from '@mui/material';

type Props = {
    title: string;
    content: string;
    imgUrl: string;
    index: number
};

const WhatWeDoItem: FunctionComponent<Props> = ({title, content, imgUrl, index}) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: {xs: 'column', sm: index%2 === 1 ? 'row-reverse' : 'row'},
            alignItems: 'center',
            gap: 2
        }}>
            <StyledImage src={imgUrl} alt="Image" sx={{maxWidth: {xs: '100%', sm: '350px', md: '450px'}}} />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                p: {xs: 2, sm: 4, md: 10, lg: 16}
            }}>
                <Typography variant='h5'>{title}</Typography>
                <Typography variant='body2'>{content}</Typography>
                <Button variant='contained' sx={{width: '100%', my: 1, fontFamily: 'stylish, sans-serif'}}>Read More...</Button>
            </Box>
        </Box>
    );
};

export default WhatWeDoItem;

const StyledImage = styled('img')(() => ({
    aspectRatio: '3/2',
    objectFit: 'cover',
    borderRadius: '10px'
}));