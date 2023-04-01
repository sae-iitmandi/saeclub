import { FunctionComponent } from 'react';
import Link from 'next/link';
import { Grid, Box, Avatar, Typography, Divider } from '@mui/material';

type Props = {
    imgUrl: string;
    author: string;
    title: string;
    excerpt: string;
    date: string;
    minRead: number;
};

const BlogCard: FunctionComponent<Props> = ({
    imgUrl,
    author,
    title,
    excerpt,
    date,
    minRead
}) => {
    return (
        <Grid item xs={12} md={4}>
            <Link href='#' style={{textDecoration: 'none', color: 'inherit'}}>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: 1, '&:hover': {transform: 'scale(1.1)', transition: 'ease 0.5s'}}}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                        <Avatar sx={{height: 25, width: 25}}>{imgUrl}</Avatar>
                        <Typography variant='body2' sx={{fontSize: '0.8rem'}}>{author}</Typography>
                    </Box>
                    <Typography variant='h6'>{title}</Typography>
                    <Typography variant='body2' textAlign='justify' fontWeight={100}>{excerpt}</Typography>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Typography sx={{fontSize: '0.7rem', fontWeight: 100}}>{date} | {minRead} min read</Typography>
                    </Box>
                </Box>
            </Link>
        </Grid>
    );
};

export default BlogCard;