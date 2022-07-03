import React, { useRef } from 'react';
import useInView from '../utils/useInView'
import { Grid, Typography } from "@mui/material";

export default function HeroSection() {
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
                backgroundImage: "url(/images/BN.jpg)",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                perspective: '100px',
                '&.visible': {
                }
            }}
        >
            <Grid item maxWidth='lg' width='100%'>
                <Typography variant='h1' sx={{perspective: '1000px'}} color='#FFFFFF' mb={2}>佳瑪環能科技</Typography>
                <Typography variant='h5' sx={{perspective: '1000px'}} color='#FFFFFF'>生物質能循環再生能源發電，循環經濟實踐垃圾變黃金</Typography>
            </Grid>
        </Grid>
    )
};