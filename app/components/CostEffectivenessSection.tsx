import React from 'react';
import IconFire from '@icons/icon-fire_outlined.svg';
import IconSupperPowers from '@icons/icon-superpowers.svg';
import IconCO2Colud from '@icons/icon-co2_cloud_outlined.svg';
import IconBox from '@icons/icon-box.svg';
import { Grid, Typography } from "@mui/material";
import { ICostEffectivenessSection } from 'types';

export default function CostEffectivenessSection({ CCostEffectivenessSection }: {CCostEffectivenessSection: ICostEffectivenessSection}) {
    const {
        title,
        titleDes,
        stage,
        listDescription
    } = CCostEffectivenessSection;

    return (
        <Grid container justifyContent='center' alignItems='center' mb={{xs: 6, sm: 12, md: 18, lg: 22.5}}>
            <Grid item maxWidth='xl' width='100%'>
                <Grid container spacing={7.5}>
                    <Grid item xs={12} sm={10} md={8} my='auto' mx={{xs: 1, sm: 2, md: 4, lg: 8}} data-aos="fade-up">
                        <Typography variant='h2' color='secondary.main' mb={2.5}>{title}</Typography>
                        <Typography variant='subtitle2' color='common.black'>{titleDes}</Typography>
                    </Grid>
                    <Grid item xs={12} data-aos="fade-up">
                        <Typography variant='h5' textAlign='center' color='secondary.main' mb={2.5}>{stage[0]}</Typography>
                        <Grid container>
                            <Grid item xs={3} height='200px' bgcolor='#07451A' display='flex' sx={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <IconFire />
                                <Typography variant='h2' color='info.main'>400 kW</Typography>
                                <Typography variant='subtitle2' color='common.white'>{listDescription[0]}</Typography>
                            </Grid>
                            <Grid item xs={3} height='200px' bgcolor='#10692B' display='flex' sx={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <IconSupperPowers />
                                <Typography variant='h2' color='info.main' whiteSpace='nowrap'>3.2 GWh</Typography>
                                <Typography variant='subtitle2' color='common.white'>{listDescription[1]}</Typography>
                            </Grid>
                            <Grid item xs={3} height='200px' bgcolor='#07451A' display='flex' sx={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <IconCO2Colud />
                                <Typography variant='h2' color='info.main'>1,600 T</Typography>
                                <Typography variant='subtitle2' color='common.white'>{listDescription[2]}</Typography>
                            </Grid>
                            <Grid item xs={3} height='200px' bgcolor='#10692B' display='flex' sx={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <IconBox />
                                <Typography variant='h2' color='info.main'>2,000 T</Typography>
                                <Typography variant='subtitle2' color='common.white'>{listDescription[3]}</Typography>
                            </Grid>
                        </Grid>
                        <Typography variant='h5' textAlign='center' color='secondary.main' mt={5} mb={2.5}>{stage[1]}</Typography>
                        <Grid container>
                            <Grid item xs={3} height='200px' bgcolor='#07451A' display='flex' sx={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <IconFire />
                                <Typography variant='h2' color='info.main'>1.2 MW</Typography>
                                <Typography variant='subtitle2' color='common.white'>{listDescription[0]}</Typography>
                            </Grid>
                            <Grid item xs={3} height='200px' bgcolor='#10692B' display='flex' sx={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <IconSupperPowers />
                                <Typography variant='h2' color='info.main' whiteSpace='nowrap'>9.6 GWh</Typography>
                                <Typography variant='subtitle2' color='common.white'>{listDescription[1]}</Typography>
                            </Grid>
                            <Grid item xs={3} height='200px' bgcolor='#07451A' display='flex' sx={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <IconCO2Colud />
                                <Typography variant='h2' color='info.main'>4,800 T</Typography>
                                <Typography variant='subtitle2' color='common.white'>{listDescription[2]}</Typography>
                            </Grid>
                            <Grid item xs={3} height='200px' bgcolor='#10692B' display='flex' sx={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <IconBox />
                                <Typography variant='h2' color='info.main'>6,000 T</Typography>
                                <Typography variant='subtitle2' color='common.white'>{listDescription[3]}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};