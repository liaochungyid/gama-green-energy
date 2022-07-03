import React, { useRef } from 'react';
import useInView from '../utils/useInView';
import { Grid, Typography } from "@mui/material";

export default function LocaleServiceSection() {
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
        <Grid id='localeService' container justifyContent='center' alignItems='center' ref={inviewRef} mb={22.5}
            sx={{
                perspective: '100px',
                '&.visible': {
                }
            }}
            bgcolor='#F3F3F3'
            p={10}
        >
            <Grid item maxWidth='xl' width='100%'>
                <Typography variant='h2' color='secondary.main' textAlign='center' mb={7.5}>區域服務</Typography>

                <Grid container spacing={2.5} mb={7.5}>
                    <Grid item xs={7}>
                        <img width='100%' height='100%' style={{objectFit: 'contain'}} src="/images/gama_3d.jpg" alt="佳瑪外觀3D圖" srcSet="" />
                    </Grid>
                    <Grid item xs={4} display='flex' sx={{flexDirection: 'column', justifyContent: 'center'}}>
                        <Typography variant='h5' mb={1.25}>台灣第一座合法標準廠</Typography>
                        <Typography variant='body1' mb={7.5}>
                        佳瑪環能於桃園市大園區配合桃園市環保局「高熱值家戶廢棄物產製衍生性燃料標案」，為台灣第一座合法標準廠建置，將取得廢棄物再利用資格及台電併網，為首座微型能資源處理中心，協助桃園政府解決廢棄物問題。
                        </Typography>
                        <Typography variant='h5' mb={1.25}>廠房設置</Typography>
                        <Typography variant='body1'>
                        佳瑪環能初期經營目標完成桃園大觀場第一期400kw發電量之建置，處理流程設計概念主要以廢塑膠、廢木材等高熱值廢棄物為原料，透過完善的破碎篩分系統完成物料前處理，經過適當物料配比後進入氣化爐產生可燃氣，再使用燃氣渦輪發電機燃燒可燃氣發電，發電後之餘熱尚可經過溴冷機產生冷氣，供應全廠使用。
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container maxWidth='lg' mx='auto' spacing={2.5}>
                            <Grid item xs={4} display='flex' sx={{flexDirection: 'column', justifyContent: 'center'}}>
                                <Typography variant='h5' mb={1.25}>大觀廠</Typography>
                                <Typography variant='body1' color='common.black'>
                                廠址：桃園市大園區大觀路256號<br />
                                土地面積(m²)：3680.85<br />
                                樓地板面積(m²)：2189.74
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <img width='100%' height='100%' style={{objectFit: 'contain'}} src="/images/gama_appearance.jpg" alt="佳瑪外觀圖" srcSet="" />
                            </Grid>
                            <Grid item xs={4}>
                                <img width='100%' height='100%' style={{objectFit: 'contain'}} src="/images/gama_map.jpg" alt="佳瑪地圖" srcSet="" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    )
};