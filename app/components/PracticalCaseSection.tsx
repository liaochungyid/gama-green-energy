import React from 'react';
import { Box, Grid, Typography } from "@mui/material";
import YouTube from 'react-youtube';
import { IPracticalCaseSection } from 'types';

interface StyledHoverBoxType {title: string};

const StyledHoverBox = ({title}: StyledHoverBoxType) => (
    <Box position='absolute' display='flex' sx={{
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        transition: 'all 0.3s ease-in-out',
        '& h5': {
            transition: 'all 0.3s linear',
            transform: 'translateY(100%)',
            opacity: 0,
        },
        '& ::after': {
            transition: 'all 0.3s linear',
            transform: 'scaleX(0)'
        },
        ':hover': {
            background: 'rgba(0, 0, 0, 0.7)',
            '& h5': {
                transform: 'translateY(50%)',
                opacity: 1,
            },
            '& ::after': {
                transform: 'scaleX(1)'
            }
        }
    }}>
        <Typography variant='h5' color='info.main' position='relative' sx={{
            paddingBottom: '10px',
            overflow: 'hidden',
            paddingX: 3,
            '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '1px',
                overflow: 'hidden',
                backgroundColor: '#51FE28'
            }
        }}>{title}</Typography>
    </Box>
);

export default function PracticalCaseSection({ CPracticalCaseSection }: {CPracticalCaseSection: IPracticalCaseSection}) {
    const {
        title,
        subtitleFirst,
        contentFirst,
        subtitleSecond,
        contentSecond,
        subtitleThird,
        contentThird,
        picGridSubtitle
    } = CPracticalCaseSection;

    return (
        <Grid id='showcase' container justifyContent='center' alignItems='center' overflow='hidden' >
            <Grid item xs={12} bgcolor='#050607' mb={10} data-aos="fade-up">
                <Grid container justifyContent='center' mx='auto' maxWidth='xl' sx={{
                        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(/images/service-04.jpg)`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }} >
                    <Grid item xs={10} sm={8} md={6} display='flex' py={10} sx={{
                        backgroundSize: 'cover',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Typography variant='h2' color='info.main' mb={2.5}>{title}</Typography>
                        <Typography variant='h5' color='common.white' mb={2.5}>{subtitleFirst}</Typography>
                        <Typography variant='subtitle2' color='common.white'>
                        {contentFirst}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} mb={10}>
                <Grid container maxWidth='xl' mx='auto' justifyContent='center'>
                    <Grid item xs={10} height='0' pb='46.875%' position='relative'>
                        <Box position='absolute' sx={{top: 0, bottom: 0, left: 0, right: 0}}>
                            <YouTube videoId='STVhhP6pmms' title='環保局稻稈計畫' style={{width: '100%', height: '100%'}} opts={{width: '100%', height: '100%', playerVars: {rel: 0, modestbranding: 1}}}/>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} mb={22.5} py={10} px={{xs: 1, sm: 2, md: 4, lg: 8}} bgcolor='#F3F3F3' data-aos="fade-up">
                <Grid container maxWidth='xl' mx='auto' alignItems='center'>
                    <Grid item xs={6} display={{xs: 'none', sm: 'block'}}>
                        <img width='100%' height='100%' style={{objectFit: 'contain'}} src={`/images/gama_3d.jpg`} alt="佳瑪外觀3D圖" srcSet="" />
                    </Grid>
                    <Grid item xs={12} sm={5} ml='auto'>
                        <Typography variant='h5' color='secondary.dark' mb={2.5}>{subtitleSecond}</Typography>
                        <Box display={{xs: 'block', sm: 'none'}} pb={2}>
                            <img width='100%' height='100%' style={{objectFit: 'contain'}} src={`/images/gama_3d.jpg`} alt="佳瑪外觀3D圖" srcSet="" />
                        </Box>
                        <Typography variant='subtitle2' color='common.black'>
                        {contentSecond[0]}
                        <br /><br />
                        {contentSecond[1]}
                        </Typography>
                    </Grid>

                </Grid>
            </Grid>

            <Grid item xs={12} mb={{xs: 6, sm: 12, md: 18, lg: 22.5}} data-aos="fade-up">
                <Grid container maxWidth='xl' mx='auto' px={{xs: 1, sm: 2, md: 4, lg: 8}}>
                    <Grid item xs={12} pb={5}>
                        <Typography variant='h2' color='secondary.main' mb={2.5}>{subtitleThird}</Typography>
                        <Typography variant='h5' color='common.black'>{contentThird}</Typography>
                    </Grid>
                    <Grid item xs={6} md={4} p={1.5}>
                        <Box position='relative'>
                            <img src={`/images/device-3.jpg`} width='100%' alt={picGridSubtitle[0]} />
                            <StyledHoverBox title={picGridSubtitle[0]} />
                        </Box>
                        <Box position='relative' py={3} display={{xs: 'block', md: 'none'}}>
                            <img src={`/images/device-5.jpg`} width='100%' alt={picGridSubtitle[4]} />
                            <StyledHoverBox title={picGridSubtitle[4]} />
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={8}>
                        <Grid container>
                            <Grid item xs={12} md={6} p={1.5}>
                                <Box position='relative'>
                                    <img src={`/images/device-1.jpg`} width='100%' alt={picGridSubtitle[1]} />
                                    <StyledHoverBox title={picGridSubtitle[1]} />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6} p={1.5}>
                                <Box position='relative'>
                                    <img src={`/images/device-4.jpg`} width='100%' alt={picGridSubtitle[2]} />
                                    <StyledHoverBox title={picGridSubtitle[2]} />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6} p={1.5}>
                                <Box position='relative'>
                                    <img src={`/images/device-2.jpg`} width='100%' alt={picGridSubtitle[3]} />
                                    <StyledHoverBox title={picGridSubtitle[3]} />
                                </Box>
                            </Grid>
                            <Grid item md={6} p={1.5} display={{xs: 'none', md: 'block'}}>
                                <Box position='relative'>
                                    <img src={`/images/device-5.jpg`} width='100%' alt={picGridSubtitle[4]} />
                                    <StyledHoverBox title={picGridSubtitle[4]} />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                
            </Grid>

        </Grid>
    )
};