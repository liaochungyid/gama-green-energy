import React from 'react';
import { Box, Grid, Typography } from "@mui/material";
import { IHeroSection } from 'types';

export default function HeroSection({ CHeroSection }: {CHeroSection: IHeroSection}) {
    const { title, subtitle } = CHeroSection;

    return (
        <Grid data-aos="fade-up" id='back-to-top-anchor' container justifyContent='center' alignItems='center' height={{xs: '500px', sm: '560px', md: '640px', lg: '720px' , xl: '800px'}} mb={8}
            px={{xs: 1, sm: 2, md: 4, lg: 8}}
            sx={{
                backgroundImage: `url(/images/BN.jpg)`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        >
            <Grid item maxWidth='xl' width='100%'>
                <Box data-aos="fade-up" data-aos-mirror='true' data-aos-delay="200">
                    <Typography variant='h1' sx={{perspective: '1000px'}} color='#FFFFFF' mb={2}>{title}</Typography>
                    <Typography variant='h5' sx={{perspective: '1000px'}} color='#FFFFFF'>{subtitle}</Typography>
                </Box>
            </Grid>
        </Grid>
    )
};