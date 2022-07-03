import { AppBar, Box, Button, Grid, IconButton, Slide, useScrollTrigger, Zoom } from "@mui/material";
import LanguageIcon from '@material-ui/icons/Language';
import GamaLogo from '@icons/gama-logo.svg';
import IconScrollToTop from '@icons/icon-scroll_to_top.svg';
import React from "react";

interface IHeaderPages {
    name: string,
    pathName: string,
};

export default function NavgationBar() {

    const trigger = useScrollTrigger({
        disableHysteresis: true,
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
    
    const pages: IHeaderPages[] = [{
        name: '關於我們',
        pathName: '#aboutUs'
    }, {
        name: '解決方案',
        pathName: '#solution'
    }, {
        name: '案例實績',
        pathName: '#showcase'
    }, {
        name: '我們的優勢',
        pathName: '#strength'
    }, {
        name: '區域服務',
        pathName: '#localeService'
    }, {
        name: '媒體新聞',
        pathName: '#social'
    }, {
        name: '相關問答',
        pathName: '#faq'
    }, {
        name: '聯絡我們',
        pathName: '#contactUs'
    }];

    return (
        <React.Fragment>
            <Slide appear={false} direction="down" in={!trigger}>
                <AppBar elevation={0} position='sticky' color='default' sx={{alignItems: 'center', backgroundColor: '#FFF', boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.07)'}}>
                    <Box maxWidth="xl" width='100%' sx={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <Box flexGrow={0} ml={1}>
                            {GamaLogo && <GamaLogo />}
                        </Box>

                        <Box mr={1}>
                            <Grid container alignItems='center' spacing={1} height='100%' sx={{ display: { xs: 'none', md: 'flex' } }}>
                                {pages.map((page) => (
                                    <Grid item key={page.name}>
                                        <Button variant='text' key={page.name} sx={{
                                                borderRadius: 0,
                                                paddingY: 2,
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
                                    <IconButton>
                                        <LanguageIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Box>

                    </Box>
                </AppBar>
            </Slide>
            
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
