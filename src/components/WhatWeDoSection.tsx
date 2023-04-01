import { Box, Grid, Typography } from '@mui/material';
import { FunctionComponent } from 'react';
import WhatWeDoItem from './WhatWeDoItem';

const whatWeDoArray = [
    {
        id: 1,
        title: 'What We Do 1',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt perferendis ad dolore facilis eos quibusdam aliquid repudiandae natus eligendi, excepturi alias ratione, vel, perspiciatis praesentium est suscipit ea ab velit?',
        imgUrl: 'https://cdn.pixabay.com/photo/2023/02/14/18/55/flowers-7790227_960_720.jpg'
    },
    {
        id: 2,
        title: 'What We Do 2',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt perferendis ad dolore facilis eos quibusdam aliquid repudiandae natus eligendi, excepturi alias ratione, vel, perspiciatis praesentium est suscipit ea ab velit?',
        imgUrl: 'https://cdn.pixabay.com/photo/2023/02/06/01/14/superb-fairywren-7770904_960_720.jpg'
    },
    {
        id: 3,
        title: 'What We Do 3',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt perferendis ad dolore facilis eos quibusdam aliquid repudiandae natus eligendi, excepturi alias ratione, vel, perspiciatis praesentium est suscipit ea ab velit?',
        imgUrl: 'https://cdn.pixabay.com/photo/2013/08/28/12/03/plumage-176723_960_720.jpg'
    },
    {
        id: 4,
        title: 'What We Do 4',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt perferendis ad dolore facilis eos quibusdam aliquid repudiandae natus eligendi, excepturi alias ratione, vel, perspiciatis praesentium est suscipit ea ab velit?',
        imgUrl: 'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228_960_720.jpg'
    },
    // {
    //     id: 5,
    //     title: 'What We Do 5',
    //     content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt perferendis ad dolore facilis eos quibusdam aliquid repudiandae natus eligendi, excepturi alias ratione, vel, perspiciatis praesentium est suscipit ea ab velit?',
    //     imgUrl: 'https://cdn.pixabay.com/photo/2023/01/27/06/17/pheasant-7747830_960_720.jpg'
    // },
    // {
    //     id: 6,
    //     title: 'What We Do 6',
    //     content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt perferendis ad dolore facilis eos quibusdam aliquid repudiandae natus eligendi, excepturi alias ratione, vel, perspiciatis praesentium est suscipit ea ab velit?',
    //     imgUrl: 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg'
    // }
];

const WhatWeDoSection: FunctionComponent = () => {
    return (
        <Box sx={{
            my: 8
        }}>
            <Typography variant='h4' sx={{
                textAlign: 'center',
                fontFamily: "'Stylish', sans-serif",
                color: '#fff'
            }}><span className='scratch'>What We Do</span></Typography>
            <Box sx={{
                py: 4,
                display: 'flex',
                flexDirection: 'column',
                gap: 2
            }}>
                {whatWeDoArray.map((item, index) => (
                    <WhatWeDoItem
                        key={item.id}
                        title={item.title}
                        content={item.content}
                        imgUrl={item.imgUrl}
                        index={index}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default WhatWeDoSection;