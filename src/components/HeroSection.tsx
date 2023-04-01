import { FunctionComponent } from 'react';
import { Box, Button, Typography } from '@mui/material';

const HeroSection: FunctionComponent = () => {
    return (
        <Box>
            <img src="/road.jpg" alt="cover" style={{
                height: '100vh',
                position: 'absolute',
                top: 0,
                width: '100%',
                left: 0,
                opacity: 0.2,
                zIndex: -100
            }} />
            <Box sx={{
                minHeight: '91vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 4
            }}>
                <Typography variant='h2' sx={{
                    fontFamily: "'Rampart One', cursive",
                    textAlign: 'center',
                    fontSize: {xs: '2.5rem', sm: '3rem',  md: '4.5rem'}
                }}>
                    SAE - IIT Mandi
                </Typography>
                <Typography variant='body2' sx={{textAlign: 'justify', fontSize: {xs: '1rem', sm: '1.2rem',  md: '1.4rem'}}}>
                SAE IIT Mandi is a enthusiastic, motivated and passionate team of engineers whose interest resides in gears, suspensions, engines, brakes etc., talking in a nutshell an automobile. The team is composed of students from different disciplines and years. Here we let our theoretical knowledge from class lectures to get transformed into practical aspects of building an automobile...
                </Typography>
                <Button variant='contained' sx={{fontFamily: 'stylish, sans-serif'}}>Read More...</Button>
            </Box>
        </Box>
    );
};

export default HeroSection;