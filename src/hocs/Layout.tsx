import { FunctionComponent, ReactNode, useEffect, useState, KeyboardEvent, MouseEvent } from 'react';
import Head from 'next/head';
import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material';
import Navbar from '@/components/Navbar';
import { darkTheme } from '@/themes/darkTheme';
import { lightTheme } from '@/themes/lightTheme';
import Footer from '@/components/Footer';
import LeftDrawer from '@/components/LeftDrawer';

export interface LayoutProps {
    children: ReactNode;
    title?: string;
    content?: string;
};

const Layout: FunctionComponent<LayoutProps> = ({
    children,
    title = 'SAE - IIT Mandi',
    content = 'SAE - IIT Mandi'
}) => {
    let localStorageMode;
    if(typeof window !== 'undefined') localStorageMode = localStorage.mode ?? 'dark';
    const [mode, setMode] = useState(localStorageMode);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [webTheme, setWebTheme] = useState(darkTheme);

    useEffect(() => {
        if(mode === 'dark') setWebTheme(darkTheme);
        else setWebTheme(lightTheme);
    }, [mode]);

    const toggleDrawer = (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
        if(event.type === 'keydown' && ((event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift')) return;
        setIsOpen(open);
    };

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta content={content} />
            </Head>
            <ThemeProvider theme={webTheme}>
                <CssBaseline />
                <Box>
                    <Navbar mode={mode} setMode={setMode} toggleDrawer={toggleDrawer} />
                    <LeftDrawer isOpen={isOpen} setIsOpen={setIsOpen} toggleDrawer={toggleDrawer} mode={mode} setMode={setMode}/>
                    <Container>
                        {children}
                    </Container>
                    <Footer />
                </Box>
            </ThemeProvider>
            <svg xmlns="//www.w3.org/2000/svg" version="1.1" className="svg-filters" style={{display: 'none'}}>
                <defs>
                    <filter id="marker-shape">
                    <feTurbulence type="fractalNoise" baseFrequency="0 0.15" numOctaves="1" result="warp" />
                    <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warp" />
                    </filter>
                </defs>
            </svg>
        </>
    );
};

export default Layout;