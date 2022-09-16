import React from 'react';
import { Box, Grid, styled, Typography } from "@mui/material";
import YouTube from 'react-youtube';
import theme from 'theme';
import { IAboutUsSection } from 'types';

const StyledBox = styled(Box)({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px 72px',
    [theme.breakpoints.down('xl')]: {
        padding: '40px 56px'
    },
    [theme.breakpoints.down('lg')]: {
        padding: '32px 40px'
    },
    [theme.breakpoints.down('md')]: {
        padding: '28px 32px'
    },
    [theme.breakpoints.down('sm')]: {
        padding: '20px 16px'
    },
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
});

export default function AboutUsSection({ CAboutUsSection }: {CAboutUsSection: IAboutUsSection}) {
    const { imagePart, descriptionPart } = CAboutUsSection;
    const [imgPart1, imgPart2, imgPart3] = imagePart;
    const {
        title,
        titileDes,
        subtitleFirstLine,
        subtitleSecondLine,
        contentFirstPara,
        contentSecondPara
    } = descriptionPart;

    return (
        <Grid data-aos="fade-up" container justifyContent='center' alignItems='center' mb={{xs: 6, sm: 12, md: 18, lg: 22.5}} id='aboutUs'>
            <Grid item maxWidth='xl' width='100%' px={{xs: 1, sm: 2, md: 4, lg: 8}}>
                <Grid container columnSpacing={6} justifyContent='center'>
                    <Grid item xs={12} sm={5} md={4} display={{xs: 'flex', sm: 'block'}} mb={{xs: 5, sm: 0}}>
                        <StyledBox
                            sx={{
                                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(/images/about_us_1.jpg)`,
                            }}
                        >
                            <Typography variant='h5' color='info.main' mb={2.5}>{imgPart1.title}</Typography>
                            <Typography variant='body1' color='common.white'>
                            {imgPart1.description}
                            </Typography>
                        </StyledBox>

                        <StyledBox
                            sx={{
                                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(/images/about_us_2.jpg)`,
                            }}
                        >
                            <Typography variant='h5' color='info.main' mb={2.5}>{imgPart2.title}</Typography>
                            <Typography variant='body1' color='common.white'>
                            {imgPart2.description}
                            </Typography>
                        </StyledBox>

                        <StyledBox
                            sx={{
                                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(/images/about_us_3.jpg)`,
                            }}
                        >
                            <Typography variant='h5' color='info.main' mb={2.5}>{imgPart3.title}</Typography>
                            <Typography variant='body1' color='common.white'>
                            {imgPart3.description}
                            </Typography>
                        </StyledBox>
                        
                    </Grid>
                    <Grid item xs={12} sm={7} ml='auto' display='flex' sx={{flexDirection: 'column', justifyContent: 'center'}}>
                        <Typography variant='h2' color='secondary.main' mb={2.5}>{title}</Typography>
                        <Typography variant='subtitle2' color='common.black' mb={{xs: 4, sm: 7.5}}>
                            {titileDes}
                        </Typography>
                        <Typography variant='h5' color='secondary.main' mb={2.5}>
                            {subtitleFirstLine}
                            <br />
                            {subtitleSecondLine}
                        </Typography>
                        <Typography variant='subtitle2' color='common.black'>
                            {contentFirstPara}
                            <br /><br />
                            {contentSecondPara}
                        </Typography>
                    </Grid>

                    <Grid item xs={10} mt={10} ml={6} height='0' pb='46.875%' position='relative' overflow='hidden'>
                        <Box position='absolute' sx={{top: 0, bottom: 0, left: 0, right: 0}}>
                            <YouTube videoId='L88JGeg-XXo' title='生質能源循環' style={{width: '100%', height: '100%'}} opts={{width: '100%', height: '100%', playerVars: {rel: 0, modestbranding: 1}}}/>
                        </Box>
                        <Box position='absolute' width='100%' height='160px' sx={{
                            top: 0,
                            right: 0,
                            backgroundImage: `url(/images/gama_watermark.svg)`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPositionX: 'right',
                            transform: 'translate(calc(50vw - 50%),-100%)',
                        }} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};