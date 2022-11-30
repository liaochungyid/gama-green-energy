import React from 'react';
import { Box, Grid, Typography } from "@mui/material";
import theme from 'theme';
import YouTube from 'react-youtube';
import { ISolutionSection } from 'types';

interface AdvantageCardProps { title: string; description: string }

const AdvantageCard = ({ title, description }: AdvantageCardProps) => (
    <Grid item xs={4} sm={3} data-aos="fade-left" minHeight={{ xs: 150, sm: 180, md: 200 }} bgcolor='#F3F3F3' mb={4} py={{ xs: 2, sm: 3 }} pl={4} pr={2} position='relative' sx={{
        '&::before': {
            content: '""',
            position: 'absolute',
            right: 0,
            top: '35%',
            height: '30%',
            width: '2px',
            backgroundColor: '#86D800'
        }
    }}>
        <Typography variant='h2' color='info.light'>{title}</Typography>
        <Typography variant='subtitle2' color='common.black'>{description}</Typography>
        {(title === '07.' || title === '04.') && <Box sx={{
            backgroundColor: '#F3F3F3',
            position: 'absolute',
            left: '100%',
            top: 0,
            width: '50vw',
            height: '100%',
        }} />}
    </Grid>
);

export default function SolutionSection({ CSolutionSection }: { CSolutionSection: ISolutionSection }) {
    const {
        title,
        titleDes,
        subtitleFirst,
        contentFirst,
        subtitleSecond,
        contentSecond,
        subtitleThird,
        contentThird
    } = CSolutionSection;

    return (
        <Grid id='solution' container justifyContent='center' alignItems='center' overflow='hidden'>
            <Grid item width='100%' bgcolor='#050607' data-aos="fade-up" mb={7.5}>
                <Grid container justifyContent='center'>
                    <Grid item maxWidth='xl' width='100%' my='auto' sx={{
                        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(/images/solution_bg.jpg)`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}>
                        <Grid container py={{ xs: 4, sm: 6, md: 8, lg: 10 }} px={{ xs: 1, sm: 2, md: 4, lg: 8 }}>
                            <Grid item display={{ xs: 'none', sm: 'block' }} sm={5} mx='auto'>
                                <img src={`/images/solution_title.jpg`} width='100%' alt="解決方案" />
                            </Grid>
                            <Grid item xs={10} sm={5} mx='auto' display='flex' flexDirection='column' sx={{ justifyContent: 'center' }}>
                                <Typography variant='h2' color='info.main' mb={2.5}>{title}</Typography>
                                <Typography variant='h5' color='common.white'>
                                    {titleDes}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item maxWidth='xl' mb={7.5}>
                <Grid container>
                    <Grid item xs={12} px={{ xs: 1, sm: 2, md: 4, lg: 8 }} data-aos="fade-up">
                        <Typography variant='h5' color='secondary.main' mb={5}>
                            {subtitleFirst}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} position='relative' data-aos="fade-up">
                        <Grid container justifyContent='flex-end'>
                            {contentFirst.map((c, i) => <AdvantageCard key={c} title={`0${i + 1}.`} description={c} />)}
                        </Grid>
                        <Box position='absolute' width='100%' height='126px' sx={{
                            bottom: 0,
                            left: 0,
                            zIndex: -1,
                            backgroundImage: `url(/images/gama_watermark.svg)`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPositionX: 'left',
                            backgroundSize: 'contain',
                            transform: 'translateX(calc(-50vw + 50%))',
                            marginBottom: 8,
                        }} />
                    </Grid>

                    <Grid item xs={12} mb={{ xs: 5, sm: 6, md: 8, lg: 10 }} px={{ xs: 1, sm: 2, md: 4, lg: 8 }} data-aos="fade-up">
                        <Grid container alignItems='center' flexDirection={{ xs: 'column', sm: 'row' }}>
                            <Grid item xs={12}>
                                <Typography variant='h5' color='secondary.main' mb={2.5}>
                                    {subtitleSecond[0]}<br />
                                    {subtitleSecond[1]}
                                </Typography>
                                <Typography variant='subtitle2' color='common.black'>{contentSecond[0]}
                                    <br /><br />
                                    {contentSecond[1]}
                                    <br /><br />
                                    {contentSecond[2]}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* <Grid item xs={12} mb={{ xs: 5, sm: 6, md: 8, lg: 10 }} px={{ xs: 1, sm: 2, md: 4, lg: 8 }} data-aos="fade-up">
                        <Grid container alignItems='center' flexDirection={{ xs: 'column-reverse', sm: 'row' }}>
                            <Grid item xs={12} sm={5} py={{ xs: 2, sm: 0 }} px={{ xs: 6, sm: 2, md: 0 }}>
                                <img width='100%' height='100%' style={{ objectFit: 'contain' }} src={`/images/service-03.jpg`} alt="廢棄物處理流程" srcSet="" />
                            </Grid>
                            <Grid item xs={12} sm={7} md={6} ml='auto'>
                                <Grid item xs={12} sm={7} md={6} ml='auto'>
                                <Typography variant='subtitle2' color='common.black'>
                                    {contentSecond[1]}
                                    <br /><br />
                                    {contentSecond[2]}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid> */}

                    <Grid item xs={12} mb={{ xs: 5, sm: 6, md: 8, lg: 10 }} data-aos="fade-up">
                        <Grid container alignItems='center'>
                            <Grid item xs={12} sm={6} py={{ xs: 4, sm: 6, md: 8, lg: 10 }} pl={{ xs: 1, sm: 2, md: 4, lg: 8 }} pr={{ xs: 2, sm: 4, md: 8, lg: 15 }} bgcolor='#07451A' position='relative' sx={{
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    width: '50vw',
                                    height: '100%',
                                    top: 0,
                                    left: 0,
                                    zIndex: -1,
                                    backgroundColor: '#07451A',
                                    transform: 'translateX(calc(-50vw + 50%))'
                                }
                            }}>
                                <Box display={{ xs: 'block', sm: 'none' }} px={3}>
                                    <img width='100%' height='100%' style={{ objectFit: 'contain' }} src={`/images/service-02.jpg`} alt="去中心化" srcSet="" />
                                </Box>
                                <Typography variant='subtitle2' color='common.white'>
                                    {contentSecond[3]}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} display={{ xs: 'none', sm: 'block' }} ml='auto'>
                                <img width='100%' height='100%' style={{ objectFit: 'contain' }} src={`/images/service-02.jpg`} alt="去中心化" srcSet="" />
                            </Grid>
                        </Grid>
                    </Grid>


                </Grid>
            </Grid>

            <Grid data-aos="fade-up" item width='100%' bgcolor='#F3F3F3' py={7.5} mb={{ xs: 6, sm: 12, md: 18, lg: 22.5 }} sx={{
                position: 'relative',
                '&::before': {
                    [theme.breakpoints.down('sm')]: {
                        display: 'none'
                    },
                    position: 'absolute',
                    content: '""',
                    right: '0',
                    top: '0',
                    height: '100%',
                    width: '33%',
                    backgroundColor: '#FFFFFF'
                }
            }}>
                <Grid container maxWidth='xl' px={{ xs: 1, sm: 2, md: 4, lg: 8 }} width='100%' mx='auto'>
                    <Grid item xs={12} sm={6}>
                        <Typography variant='h5' color='secondary.main' mb={2.5}>{subtitleThird}</Typography>
                        <Box display={{ xs: 'block', sm: 'none' }} px={4}>
                            <img width='100%' height='100%' style={{ objectFit: 'contain' }} src={`/images/aurelia_device_A400.png`} alt="Aurelia A400" srcSet="" />
                        </Box>
                        <Typography variant='subtitle2' color='common.black'>
                            {contentThird[0]}
                            <br /><br />
                            {contentThird[1]}
                        </Typography>
                    </Grid>
                    <Grid item xs={5} display={{ xs: 'none', sm: 'block' }} ml='auto' zIndex={1}>
                        <img width='100%' height='100%' style={{ objectFit: 'contain' }} src={`/images/aurelia_device_A400.png`} alt="Aurelia A400" srcSet="" />
                    </Grid>
                </Grid>

                <Grid item xs={12} mt={6}>
                    <Grid container mx='auto' justifyContent='center'>
                        <Grid item xs={10} height='0' pb='56.25%' position='relative'>
                            <Box position='absolute' sx={{ top: 0, bottom: 0, left: 0, right: 0 }}>
                                <YouTube videoId='O-lvJtYNPXM' title='Aurelia Turbines introduction of the new turbine' style={{ width: '100%', height: '100%' }} opts={{ width: '100%', height: '100%', playerVars: { rel: 0, modestbranding: 1 } }} />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};