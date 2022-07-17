import React, { useRef } from 'react';
import useInView from '../utils/useInView';
import { Box, Button, Grid, Typography } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import IconFax from '@icons/icon-fax.svg';
import IconMapLocation from '@icons/icon-map_location_dot.svg'
import FactoryIcon from '@mui/icons-material/Factory';
import IconArrowRight from '@icons/icons-arrow-left.svg';
import { AppContext } from '@context/index';
import { prefix } from '@utils/prefix';

export default function FooterSection() {
    const { FooterSection } = React.useContext(AppContext);
    const {
        title,
        office,
        plant,
        phone,
        fax,
        workHour,
        email,
        cta
    } = FooterSection;

    const inviewRef = useRef({} as HTMLDivElement);

    const options = {
        root : 'root',
        rootMargin : '0px',
        threshold : 0.5
    };

    function onEntry(entry: any) {
        inviewRef.current.classList.add('visible');
        // console.log('in: ', entry.intersectionRatio)
    };
  
    function onExit(entry: any) {
        inviewRef.current.classList.remove('visible');
        // console.log('out: ', entry.intersectionRatio)
    };

    useInView(inviewRef, options, onEntry, onExit);

    const openInNewTab = (url: string) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    };

    return (
        <React.Fragment>
            <Grid id='contactUs' container justifyContent='center' alignItems='center' ref={inviewRef}
                sx={{
                    perspective: '100px',
                    '&.visible': {
                    }
                }}
                bgcolor='#07451A'
            >
                <Grid item maxWidth='xl' xs={12} sx={{
                    backgroundImage: `url(${prefix}/images/footer-map.png)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}>
                    <Grid container maxWidth='lg' mx='auto' py={15}>
                        <Grid item xs={6} padding={7.5} sx={{background: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(7px)'}}>
                            <Typography variant='h2' color='common.white' mb={3.75}>{title || '聯繫我們'}</Typography>
                            <Typography variant='subtitle1' color='common.white' display='flex' sx={{alignItems: 'center'}} mb={2}>
                                <IconMapLocation />
                                <Typography variant='inherit' ml={3} component='span'>{office || '桃園市中壢區青峰路一段35號4樓'}</Typography>
                            </Typography>
                            <Typography variant='subtitle1' color='common.white' display='flex' sx={{alignItems: 'center'}} mb={2}>
                                <FactoryIcon />
                                <Typography variant='inherit' ml={3} component='span'>{plant || '桃園市大園區大觀路256號1樓'}</Typography>
                            </Typography>
                            <Typography variant='subtitle1' color='common.white' display='flex' sx={{alignItems: 'center'}} mb={2}>
                                <PhoneIcon />
                                <Typography variant='inherit' ml={3} component='span'>{phone || '(03) 381-9840'}</Typography>
                            </Typography>
                            <Typography variant='subtitle1' color='common.white' display='flex' sx={{alignItems: 'center'}} mb={2}>
                                <IconFax />
                                <Typography variant='inherit' ml={3} component='span'>{fax || '(03) 280-4423'}</Typography>
                            </Typography>
                            <Typography variant='subtitle1' color='common.white' display='flex' sx={{alignItems: 'center'}} mb={2}>
                                <WatchLaterIcon />
                                <Typography variant='inherit' ml={3} component='span'>{workHour || '09:00 - 18:00'}</Typography>
                            </Typography>
                            <Typography variant='subtitle1' color='common.white' display='flex' sx={{alignItems: 'center'}}>
                                <EmailIcon />
                                <Typography variant='inherit' ml={3} component='span'>{email|| 'service@gama-green.com.tw'}</Typography>
                            </Typography>
                        </Grid>
                        <Grid item xs={6} display='flex' sx={{flexDirection: 'column', }}>
                            <Box mx='auto' mt='auto' sx={{
                                color: '#51FE28',
                                position: 'relative',
                                display: 'block',
                                fontSize: 0,
                                width: '96px',
                                height: '96px',
                                '& div': {
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '96px',
                                    height: '96px',
                                    borderRadius: '100%',
                                    opacity: 0,
                                    boxSizing: 'border-box',
                                    display: 'inline-block',
                                    float: 'none',
                                    backgroundColor: 'currentcolor',
                                    border: '0 solid currentcolor',
                                    animation: 'ball-scale-multiple 1s 0s linear infinite'
                                },
                                '& div:nth-of-type(2)': {
                                    animationDelay: '.2s'
                                },
                                '& div:nth-of-type(3)': {
                                    animationDelay: '.4s'
                                },
                                '@keyframes ball-scale-multiple': {
                                    '0%': {
                                        opacity: 0,
                                        transform: 'scale(0)',
                                    },
                                    '5%': {
                                        opacity: .75,
                                    },
                                    '100%': {
                                        opacity: 0,
                                        transform: 'scale(1)',
                                    }
                                },
                            }} onClick={() => openInNewTab('https://goo.gl/maps/sMFdpi6QEi2pxMwB9')}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </Box>
                            <Button variant='contained' color='success' 
                                sx={{fontSize: '24px', padding: '10px 24px', marginX: 'auto', marginTop: 6.875, marginBottom: 7.5}} 
                                onClick={() => openInNewTab('mailto:service@gama-green.com.tw?subject=Hello&body=what you wanna ask us')} 
                                endIcon={<IconArrowRight />}
                            >{cta || '使用電子郵件與我們聯繫'}</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item maxWidth='xl' xs={12} pt={3} pb={2}>
                    <Typography variant='body1' color='common.white' textAlign='center'>Copyright © 2019 GAMA Green-Energy Technology Co., Ltd., All Right Reserved.</Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    )
};