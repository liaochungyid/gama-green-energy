import React, { useRef } from 'react';
import useInView from '../utils/useInView'
import { Box, Grid, Typography } from "@mui/material";
import { prefix } from '@utils/prefix';
import { AppContext } from '@context/index';

export default function HeroSection() {
    const { HeroSection } = React.useContext(AppContext);
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
    return (
        <Grid id='back-to-top-anchor' container justifyContent='center' alignItems='center' height='800px' ref={inviewRef} mb={8}
            sx={{
                backgroundImage: `url(${prefix}/images/BN.jpg)`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                perspective: '100px',
                '&.visible': {
                }
            }}
        >
            <Grid item maxWidth='xl' width='100%'>
                <Box pl={{xs: 2, md:4, lg: 8, xl: 16}}>
                    <Typography variant='h1' sx={{perspective: '1000px'}} color='#FFFFFF' mb={2}>{HeroSection.title || '佳瑪環能科技'}</Typography>
                    <Typography variant='h5' sx={{perspective: '1000px'}} color='#FFFFFF'>{HeroSection.subtitle || '化腐朽為能源-廢棄物轉生物質能的循環經濟再利用'}</Typography>
                </Box>
            </Grid>
        </Grid>
    )
};