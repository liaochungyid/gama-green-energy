import React from 'react';
import { Box, Grid, Typography } from "@mui/material";
import { prefix } from '@utils/prefix';
import { AppContext } from '@context/index';

export default function HeroSection() {
    const { HeroSection } = React.useContext(AppContext);

    return (
        <Grid data-aos="fade-up" data-aos-mirror='false' id='back-to-top-anchor' container justifyContent='center' alignItems='center' height={{xs: '500px', sm: '560px', md: '640px', lg: '720px' , xl: '800px'}} mb={8}
            px={{xs: 1, sm: 2, md: 4, lg: 8}}
            sx={{
                backgroundImage: `url(${prefix}/images/BN.jpg)`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        >
            <Grid item maxWidth='xl' width='100%'>
                <Box data-aos="fade-up" data-aos-delay="200">
                    <Typography variant='h1' sx={{perspective: '1000px'}} color='#FFFFFF' mb={2}>{HeroSection.title || '佳瑪環能科技'}</Typography>
                    <Typography variant='h5' sx={{perspective: '1000px'}} color='#FFFFFF'>{HeroSection.subtitle || '化腐朽為能源-廢棄物轉生物質能的循環經濟再利用'}</Typography>
                </Box>
            </Grid>
        </Grid>
    )
};