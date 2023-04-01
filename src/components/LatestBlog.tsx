import { FunctionComponent } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import BlogCard from './BlogCard';

const LatestBlog: FunctionComponent = () => {
    return (
        <Box sx={{my: 8}}>
            <Typography variant='h4' sx={{
                textAlign: 'center',
                fontFamily: "'Stylish', sans-serif",
                color: '#fff'
            }}><span className='scratch'>Latest From Our Blog</span></Typography>
            <Grid container justifyContent='center' spacing={8} sx={{mt: 4}}>
                <BlogCard
                    imgUrl='P'
                    author='SAE IIT Mandi'
                    title='First Post of the Day by SAE'
                    excerpt='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas eum accusantium molestias, sint eius error sit suscipit obcaecati ex soluta laboriosam maiores illum beatae tempore, sunt earum eaque, nam libero?'
                    date='Mar 4'
                    minRead={2}
                />
                <BlogCard
                    imgUrl='R'
                    author='Rishav Raj'
                    title='Stay Updated and Lets Rock Together Stay Updated and Lets Rock Together'
                    excerpt='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas eum accusantium molestias, sint eius error sit suscipit obcaecati ex soluta laboriosam maiores illum beatae tempore, sunt earum eaque, nam libero?'
                    date='April 29'
                    minRead={5}
                />
                <BlogCard
                    imgUrl='P'
                    author='SAE IIT Mandi'
                    title='First Post of the Day by SAE'
                    excerpt='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas eum accusantium molestias, sint eius error sit suscipit obcaecati ex soluta laboriosam maiores illum beatae tempore, sunt earum eaque, nam libero?'
                    date='Mar 4'
                    minRead={2}
                />
            </Grid>
        </Box>
    );
};

export default LatestBlog;