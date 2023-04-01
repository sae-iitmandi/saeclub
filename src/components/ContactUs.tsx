import { FunctionComponent } from 'react';
import { Box, Typography, TextField , Button, Grid } from '@mui/material';

const ContactUs: FunctionComponent = () => {
    return (
        <Box sx={{
            py: 4
        }}>
            <Typography variant='h4' sx={{
                textAlign: 'center',
                fontFamily: "'Stylish', sans-serif",
                color: '#fff'
            }}>
                <span className='scratch'>Contact Us</span>
            </Typography>
            <Grid container spacing={4} sx={{mt: 4}}>
                <Grid item xs={12} md={6}>
                    <img src="/contact.svg" alt="contact" style={{width: '90%'}} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{
                        mt: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        gap: 4
                    }}>
                        <Typography variant='h5' sx={{textAlign: 'center'}}>Have Some Questions?</Typography>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            width: {xs: '100%', md: '90%'}
                        }}>
                            <TextField label='Full Name' variant='outlined' size='small' />
                            <TextField label='What is your email?' variant='outlined' size='small' />
                            <TextField label='Your questions...' variant='outlined' multiline maxRows={4} />
                            <Button variant='contained' sx={{width: '100%'}} size='large'>Contact Us</Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ContactUs;