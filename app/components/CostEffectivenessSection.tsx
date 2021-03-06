import React from 'react';
import IconFire from '@icons/icon-fire_outlined.svg';
import IconSupperPowers from '@icons/icon-superpowers.svg';
import IconCO2Colud from '@icons/icon-co2_cloud_outlined.svg';
import IconBox from '@icons/icon-box.svg';
import { AppContext } from '@context/index';
import { Grid, Typography } from "@mui/material";

export default function CostEffectivenessSection() {
    const { CostEffectivenessSection } = React.useContext(AppContext);
    const {
        title,
        titleDes,
        listDescription
    } = CostEffectivenessSection;

    return (
        <Grid container justifyContent='center' alignItems='center' mb={{xs: 6, sm: 12, md: 18, lg: 22.5}}>
            <Grid item maxWidth='xl' width='100%'>
                <Grid container spacing={7.5}>
                    <Grid item xs={12} sm={10} md={8} my='auto' mx={{xs: 1, sm: 2, md: 4, lg: 8}} data-aos="fade-up">
                        <Typography variant='h2' color='secondary.main' mb={2.5}>{title || '成本效益'}</Typography>
                        <Typography variant='subtitle2' color='common.black'>{titleDes || 'GAMA 佳瑪環能第一期將建置 400kW之發電設備一年最大發電量約為320萬度，依能源局最公布之109年度電力排碳係數0.502公斤CO2e換算，一年約可減少1,600公噸CO2排放，約為160公頃造林效益(6.25座大安森林公園)。此外GAMA佳瑪環能發電是採用回收生質廢棄物中的能量，第一期估算可以協助處理約2,000公噸/年的廢棄物，並由收取廢棄物處理費及躉售台電獲得收益。'}</Typography>
                    </Grid>
                    <Grid item xs={12} data-aos="fade-up">
                        <Typography variant='h5' textAlign='center' color='secondary.main' mb={2.5}>{'第一期' || '第一期'}</Typography>
                        <Grid container>
                            <Grid item xs={3} height='200px' bgcolor='#07451A' display='flex' sx={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <IconFire />
                                <Typography variant='h2' color='info.main'>400 kW</Typography>
                                <Typography variant='subtitle2' color='common.white'>{listDescription[0] || '燃氣發電'}</Typography>
                            </Grid>
                            <Grid item xs={3} height='200px' bgcolor='#10692B' display='flex' sx={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <IconSupperPowers />
                                <Typography variant='h2' color='info.main' whiteSpace='nowrap'>3.2 GWh</Typography>
                                <Typography variant='subtitle2' color='common.white'>{listDescription[1] || '年發電量'}</Typography>
                            </Grid>
                            <Grid item xs={3} height='200px' bgcolor='#07451A' display='flex' sx={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <IconCO2Colud />
                                <Typography variant='h2' color='info.main'>1,600 T</Typography>
                                <Typography variant='subtitle2' color='common.white'>{listDescription[2] || 'CO2 排放減量'}</Typography>
                            </Grid>
                            <Grid item xs={3} height='200px' bgcolor='#10692B' display='flex' sx={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <IconBox />
                                <Typography variant='h2' color='info.main'>2,000 T</Typography>
                                <Typography variant='subtitle2' color='common.white'>{listDescription[3] || '廢棄物量體'}</Typography>
                            </Grid>
                        </Grid>
                        <Typography variant='h5' textAlign='center' color='secondary.main' mt={5} mb={2.5}>{'第二期' || '第二期'}</Typography>
                        <Grid container>
                            <Grid item xs={3} height='200px' bgcolor='#07451A' display='flex' sx={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <IconFire />
                                <Typography variant='h2' color='info.main'>1.2 MW</Typography>
                                <Typography variant='subtitle2' color='common.white'>{listDescription[0] || '燃氣發電'}</Typography>
                            </Grid>
                            <Grid item xs={3} height='200px' bgcolor='#10692B' display='flex' sx={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <IconSupperPowers />
                                <Typography variant='h2' color='info.main' whiteSpace='nowrap'>9.6 GWh</Typography>
                                <Typography variant='subtitle2' color='common.white'>{listDescription[1] || '年發電量'}</Typography>
                            </Grid>
                            <Grid item xs={3} height='200px' bgcolor='#07451A' display='flex' sx={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <IconCO2Colud />
                                <Typography variant='h2' color='info.main'>4,800 T</Typography>
                                <Typography variant='subtitle2' color='common.white'>{listDescription[2] || 'CO2 排放減量'}</Typography>
                            </Grid>
                            <Grid item xs={3} height='200px' bgcolor='#10692B' display='flex' sx={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <IconBox />
                                <Typography variant='h2' color='info.main'>6,000 T</Typography>
                                <Typography variant='subtitle2' color='common.white'>{listDescription[3] || '廢棄物量體'}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};