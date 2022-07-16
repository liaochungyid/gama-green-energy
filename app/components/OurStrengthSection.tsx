import React, { useRef } from 'react';
import useInView from '../utils/useInView';
import IconIdea from '@icons/icon-idea.svg'
import IconIdcard from '@icons/icon-id_card.svg'
import IconFileText from '@icons/icon-file_text_filled.svg'
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { prefix } from '@utils/prefix';

export default function OurStrengthSection() {
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
        <Grid id='strength' container justifyContent='center' alignItems='center' ref={inviewRef} mb={22.5}
            sx={{
                perspective: '100px',
                '&.visible': {
                }
            }}
        >
            <Grid item maxWidth='lg' width='100%'>
                <Typography variant='h2' color='secondary.main' textAlign='center' mb={7.5}>我們的優勢</Typography>

                <Grid container spacing={2.5} mb={7.5}>
                    <Grid item xs={4}>
                        <Card sx={{borderRadius: 0, height: '100%'}}>
                            <CardMedia component='img' height={230} image={`${prefix}/images/advantage-01.jpg`} alt='再生能源發電設備' />
                            <CardContent sx={{backgroundColor: '#07451A', padding: '24px 24px 48px', height: 'calc(100% - 230px)'}}>
                                <IconIdea />
                                <Typography variant='h5' my={2.5} color='common.white'>再生能源發電設備</Typography>
                                <Typography variant='body1' color='common.white'>佳瑪環能系統規劃發電效率達26%~30% 綠電售電收入為 NT$38,850,288元/年</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{borderRadius: 0, height: '100%'}}>
                            <CardMedia component='img' height={230} image={`${prefix}/images/advantage-02.jpg`} alt='再生能源發電設備' />
                            <CardContent sx={{backgroundColor: '#07451A', padding: '24px 24px 48px !important'}}>
                                <IconIdcard />
                                <Typography variant='h5' my={2.5} color='common.white'>廢棄物再利用資格</Typography>
                                <Typography variant='body1' color='common.white'>行政院環境保護署「共通性事業廢棄物再利用管理辦法」 經濟部「事業廢棄物再利用管理辦法」 經申請再利用檢核後取得再利用機構資格收取處理費，並做為微渦輪發電氣體燃料</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{borderRadius: 0, height: '100%'}}>
                            <CardMedia component='img' height={230} image={`${prefix}/images/advantage-03.jpg`} alt='再生能源發電設備' />
                            <CardContent sx={{backgroundColor: '#07451A', padding: '24px 24px 48px', height: 'calc(100% - 230px)'}}>
                                <IconFileText />
                                <Typography variant='h5' my={2.5} color='common.white'>固定汙染源申報</Typography>
                                <Typography variant='body1' color='common.white'>行政院環境保護署「電力設施空氣污染物排放標準」之氣渦輪機組定義 可符合空氣污染管制要求，包括：粒狀污染物(10mg/Nm3)、硫氧化物(8ppm)、氮氧化物(10ppm)</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <Grid item xs={12} mb={7.5}>
                    <Typography variant='subtitle2' px={7.5} py={10}>
                    因應未來趨勢與潮流，佳瑪環能將導入ERP、虛擬主機及雲端管理系統，並整合各分散式微型能資源轉換中心的即時運轉數據及資料庫，進行智能化營運管理及產業大數據整合運用，以利系統效能優化，這樣的經驗及運作模式，也將複製到其它國際市場，特別是同樣面對嚴重廢棄物處理的東南亞市場，也與策略夥伴Charterprime Group合作，期望以MIT品牌，為當前的全球的環境災難找出解決方案，也協助更多國家及城市以循環經濟模式，讓自然生態系統與產業文明的發展，取得和諧與永續的平衡點。
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <img width='100%' height='100%' style={{objectFit: 'contain'}} src={`${prefix}/images/leaf.jpg`} alt="計畫全局圖" srcSet="" />
                </Grid>
            </Grid>
        </Grid>
    )
};