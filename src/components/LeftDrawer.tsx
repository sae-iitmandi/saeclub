import { FunctionComponent, KeyboardEvent, MouseEvent, useState } from 'react';
import {Box, Drawer, Button, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import { useRouter } from 'next/router';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import PhotoCameraBackOutlinedIcon from '@mui/icons-material/PhotoCameraBackOutlined';

type Props = {
    mode: string;
    setMode: (mode: string) => void;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    toggleDrawer: (open: boolean) => (event: KeyboardEvent | MouseEvent) => void;
};

const LeftDrawer: FunctionComponent<Props> = ({isOpen, setIsOpen, toggleDrawer, mode, setMode}) => {
    const router = useRouter();

    const setDarkMode = () => {
        setMode('dark');
        localStorage.mode = 'dark';
    };

    const setLightMode = () => {
        setMode('light');
        localStorage.mode = 'light';
    };

    const list =  (
        <Box
            sx={{width: 250}}
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem disablePadding onClick={() => router.push('/')}>
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary='Home' />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding onClick={() => router.push('/about-us')}>
                    <ListItemButton>
                        <ListItemIcon>
                            <ArticleOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary='About Us' />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding onClick={() => router.push('/team')}>
                    <ListItemButton>
                        <ListItemIcon>
                            <GroupOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary='Team' />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding onClick={() => router.push('/gallery')}>
                    <ListItemButton>
                        <ListItemIcon>
                            <PhotoCameraBackOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary='Gallery' />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding onClick={mode==='dark' ? setLightMode : setDarkMode}>
                    <ListItemButton>
                        <ListItemIcon>
                            {mode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
                        </ListItemIcon>
                        <ListItemText primary={mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'} />
                    </ListItemButton>
                </ListItem>
            </List>

        </Box>
    );

    return (
        <Drawer anchor='left' open={isOpen} onClose={toggleDrawer(false)}>
            {list}
        </Drawer>
    );
};

export default LeftDrawer;