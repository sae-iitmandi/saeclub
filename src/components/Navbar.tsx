import { FunctionComponent, useEffect, useState, KeyboardEvent, MouseEvent } from 'react';
import { AppBar, Box, Container, Toolbar, Typography, styled } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Link from 'next/link';
import { useRouter } from 'next/router';
import IconButton from '@mui/material/IconButton';

type Props = {
    mode: string;
    setMode: (mode: string) => void;
    toggleDrawer: (open: boolean) => (event: KeyboardEvent | MouseEvent) => void;
};

const Navbar: FunctionComponent<Props> = ({mode, setMode, toggleDrawer}) => {
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const handleScroll = () => {
        if(window.scrollY > 0) setIsScrolled(true);
        else if(window.screenY === 0) setIsScrolled(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });
    
    const setDarkMode = () => {
        setMode('dark');
        localStorage.mode = 'dark';
    }
    const setLightMode = () => {
        setMode('light');
        localStorage.mode = 'light';
    };

    return (
        <AppBar
            color='transparent'
            elevation={isScrolled ? 4 : 0}
            enableColorOnDark
            position='sticky'
            sx={{backdropFilter: isScrolled ? 'blur(20px)' : 'blur(0)'}}
        >
            <Toolbar>
                <Container>
                    <NavBox>
                        <Link href='/'>
                            <img
                                src="https://mostlyaman.github.io/sae/images/SAE1_no_bg-03.png"
                                alt="SAE - IIT Mandi"
                                style={{height: '70px'}}
                            />
                        </Link>
                        <MenuBox sx={{
                            display: {xs: 'none', md: 'flex'}
                        }}>
                            <NavLink className={router.pathname==='/' ? 'active' : ''} href='/'>Home</NavLink>
                            <NavLink className={router.pathname==='/about-us' ? 'active' : ''} href='/about-us'>About Us</NavLink>
                            <NavLink className={router.pathname==='/team' ? 'active' : ''} href='/team'>Team</NavLink>
                            <NavLink className={router.pathname==='/gallery' ? 'active' : ''} href='/gallery'>Gallery</NavLink>
                            {mode==='light' ? (
                                <IconButton onClick={setDarkMode}>
                                    <DarkModeOutlinedIcon />
                                </IconButton>
                            ): (
                                <IconButton onClick={setLightMode}>
                                    <LightModeOutlinedIcon />
                                </IconButton>
                            )}
                        </MenuBox>
                        <MenuOutlinedIcon
                            sx={{height: 30, cursor: 'pointer', display: {xs: 'block', md: 'none'}}}
                            onClick={toggleDrawer(true)}
                        />
                    </NavBox>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

const NavBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}));

const MenuBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    fontSize: '1.4rem'
}));

const NavLink = styled(Link)(({theme}) => ({
    textDecoration: 'none',
    color: 'inherit',
    fontFamily: "'stylish', sans-serif",
    '&.active': {
        color: theme.palette.mode === 'dark' ? '#fff' : '#000',
        textDecoration: 'underline',
        textUnderlineOffset: '4px'
    }
}));