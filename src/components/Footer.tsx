import { FunctionComponent } from 'react';
import { Box, Container, Grid, Paper, Typography, styled, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';

const Footer: FunctionComponent = () => {
    return (
        <Paper sx={{
            mt: 4,
            width: '100%'
        }}>
            <Container sx={{pt: 2}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <FooterHeader variant='h5'>Society of Automative Engineers</FooterHeader>
                        <Typography variant='body2' sx={{textAlign: 'justify', fontWeight: 100}}>
                            SAE IIT Mandi is a enthusiastic, motivated and passionate team of engineers whose interest resides in gears, suspensions, engines, brakes etc., talking in a nutshell an automobile.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <FooterHeader variant='h5'>Contact Us</FooterHeader>
                        <Typography variant='h6'>IIT Mandi</Typography>
                        <Typography variant='body1'>Kamand - 175005</Typography>
                        <Typography variant='body1'>Mandi, Himachal Pradesh</Typography>
                        <Typography variant='body1'>India</Typography>
                        {/* <Divider sx={{my: 1}} /> */}
                        <Typography variant='h6'>Email Us:</Typography>
                        <Link
                            href='mailto:supra@students.iitmandi.ac.in'
                            style={{
                                color: 'inherit',
                                textDecoration: 'none'
                            }}
                        >
                            <Typography variant='body1'>supra@students.iitmandi.ac.in</Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <FooterHeader variant='h5'>Links</FooterHeader>
                        <Box>
                            <Typography variant='body1'>IIT Mandi</Typography>
                            <Typography variant='body1'>Facebook</Typography>
                            <Typography variant='body1'>Instagram</Typography>
                            <Typography variant='body1'>LinkedIn</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <FooterHeader variant='h5'>Follow Us</FooterHeader>
                        <Link href='https://www.facebook.com/SAEiitmandi/' target='_blank'>
                            <IconButton>
                                <FacebookIcon />
                            </IconButton>
                        </Link>
                        <Link href='https://www.instagram.com/sae.iitmandi/' target='_blank'>
                            <IconButton>
                                <InstagramIcon />
                            </IconButton>
                        </Link>
                        <Link href='https://twitter.com/sae_iitmandi' target='_blank'>
                            <IconButton>
                                <TwitterIcon />
                            </IconButton>
                        </Link>
                        <Link href='https://www.linkedin.com/company/sae-iitmandi/' target='_blank'>
                            <IconButton>
                                <LinkedInIcon />
                            </IconButton>
                        </Link>
                        <Link href='https://wiki.iitmandi.co.in/p/SAE' target='_blank' style={{textDecoration: 'none', color: 'inherit'}}>
                            <IconButton>
                                <Typography sx={{height: 20, width: 20, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>W</Typography>
                            </IconButton>
                        </Link>
                    </Grid>
                </Grid>
                <Divider sx={{mt: 2}} />
                <Typography variant='body2' sx={{
                    textAlign: 'center',
                    py: 2
                }}>
                    &#169; 2023 - All Rights Reserved, SAE - IIT Mandi | Created by Preetam Raj
                </Typography>
            </Container>
        </Paper>
    );
};

export default Footer;

const FooterHeader = styled(Typography)(() => ({
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
    textDecorationThickness: '1px',
    marginBottom: 10,
    fontFamily: 'stylish, sans-serif',
    fontSize: '1.8rem'
}));