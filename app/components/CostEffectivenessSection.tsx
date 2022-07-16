import React, { useRef } from 'react';
import useInView from '../utils/useInView';
import IconFire from '@icons/icon-fire_outlined.svg';
import IconSupperPowers from '@icons/icon-superpowers.svg';
import IconCO2Colud from '@icons/icon-co2_cloud_outlined.svg';
import IconBox from '@icons/icon-box.svg';
import { Grid, Typography } from "@mui/material";

export default function CostEffectivenessSection() {
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
        <Grid container justifyContent='center' alignItems='center' ref={inviewRef} mb={22.5}
            sx={{
                perspective: '100px',
                '&.visible': {
                }
            }}
        >
            <Grid item maxWidth='lg' width='100%'>
                <Grid container spacing={7.5}>
                    <Grid item xs={9} my='auto'>
                        <Typography variant='h2' color='secondary.main' mb={2.5}>成本效益</Typography>
                        <Typography variant='subtitle2' color='common.black'>
                        GAMA第一期400kW之發電設備一年最大發電量約為3504000度，依能源局最公布之109年度電力排碳係數0.502公斤CO2e換算，一年約可減少1,759公噸CO2排放，約為177公頃造林效益(3.425座大安森林公園)。此外GAMA發電是回收廢棄物中的能量，一年可以解決3,504公噸的廢棄物處理量，並收取廢棄物處理費及賺取躉售台電的收益。
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={3} height='200px' bgcolor='#07451A' display='flex' sx={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <IconFire />
                                <Typography variant='h2' color='info.main'>400 kW</Typography>
                                <Typography variant='subtitle2' color='common.white'>
                                燃氣發電
                                </Typography>
                            </Grid>
                            <Grid item xs={3} height='200px' bgcolor='#10692B' display='flex' sx={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <IconSupperPowers />
                                <Typography variant='h2' color='info.main'>3,504 kWh</Typography>
                                <Typography variant='subtitle2' color='common.white'>
                                年發電量
                                </Typography>
                            </Grid>
                            <Grid item xs={3} height='200px' bgcolor='#07451A' display='flex' sx={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <IconCO2Colud />
                                <Typography variant='h2' color='info.main'>1,759 T</Typography>
                                <Typography variant='subtitle2' color='common.white'>
                                CO2 排放減量
                                </Typography>
                            </Grid>
                            <Grid item xs={3} height='200px' bgcolor='#10692B' display='flex' sx={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <IconBox />
                                <Typography variant='h2' color='info.main'>3,504 T</Typography>
                                <Typography variant='subtitle2' color='common.white'>
                                廢棄物量體
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};