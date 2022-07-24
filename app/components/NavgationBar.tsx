import { AppBar, Box, Button, Drawer, Grid, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Slide, useScrollTrigger, Zoom } from "@mui/material";
import GamaLogo from '@icons/gama-logo.svg';
import IconScrollToTop from '@icons/icon-scroll_to_top.svg';
import LangZh from '@icons/lang_zh.svg';
import LangEn from '@icons/lang_en.svg';
import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { AppContext } from '@context/index';
import router from "next/router";

export default function NavgationBar() {
    const [drawerState, setDrawerState] = React.useState(false);
    const { NavgationBar, lang, toggleLang } = React.useContext(AppContext)

    const trigger = useScrollTrigger({
        disableHysteresis: false,
        threshold: 100
    });

    const handleClick = (anchorId: string) => {
        const anchor = document.querySelector(anchorId);
    
        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setDrawerState(prev => !prev);
    };
    

    return (
        <React.Fragment>
            <Slide appear={false} direction="down" in={!trigger}>
                <AppBar elevation={0} position='sticky' color='default' sx={{alignItems: 'center', backgroundColor: '#FFF', boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.07)'}}>
                    <Box maxWidth="xl" width='100%'  px={{xs: 1, sm: 2, md: 4, lg: 8}} sx={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <Box flexGrow={0} onClick={() => router.push('/')} sx={{cursor: 'pointer'}}>
                            {GamaLogo && <GamaLogo />}
                        </Box>

                        <Box mr={1}>
                            <Grid container alignItems='center' height='100%' sx={{ display: { xs: 'none', md: 'flex' } }}>
                                {NavgationBar.pages.map((page) => (
                                    <Grid item key={page.name}>
                                        <Button variant='text' key={page.name} sx={{
                                                borderRadius: 0,
                                                transitionDuration: '0.5s',
                                                '&:hover': {
                                                    backgroundColor: '#07451A',
                                                    opacity: 1,
                                                    color: 'common.white'
                                                }
                                            }}
                                            onClick={() => handleClick(page.pathName)}
                                        >
                                            {page.name}
                                        </Button>
                                    </Grid>
                                ))}
                                <Grid item>
                                    <IconButton onClick={toggleLang}>
                                        {lang === 'zh' ? <LangEn /> : <LangZh /> }
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Grid container alignItems='center' spacing={1} height='100%' sx={{ display: { xs: 'flex', md: 'none' } }}>
                                <Grid item>
                                    <IconButton onClick={toggleLang}>
                                        {lang === 'zh' ? <LangZh /> : <LangEn /> }
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton onClick={toggleDrawer}>
                                        <MenuIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Box>

                    </Box>
                </AppBar>
            </Slide>

            <Drawer
                anchor='left'
                open={drawerState}
                onClose={toggleDrawer}
            >
                {NavgationBar.pages.map(page => (
                    <ListItem key={page.name} disablePadding>
                        <ListItemButton onClick={() => handleClick(page.pathName)}>
                            <ListItemIcon>
                                <LabelImportantIcon />
                            </ListItemIcon>
                            <ListItemText primary={page.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </Drawer>
            
            <Zoom in={trigger}>
                <Box
                    onClick={() => handleClick('#back-to-top-anchor')}
                    role="presentation"
                    sx={{ position: 'fixed', bottom: 32, right: 16, zIndex:999 }}
                >
                    <IconButton>
                        <IconScrollToTop />
                    </IconButton>
                </Box>
            </Zoom>
        </React.Fragment>
    );
};
