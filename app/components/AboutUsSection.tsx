import React, { useRef } from 'react';
import useInView from '../utils/useInView'
import { Box, Grid, styled, Typography } from "@mui/material";

const StyledBox = styled(Box)({
    width: '100%',
    height: '320px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 90px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
});

export default function AboutUsSection() {
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
            id='aboutUs'
        >
            <Grid item maxWidth='lg' width='100%'>
                <Grid container spacing={6}>
                    <Grid item xs={5}>
                        <StyledBox
                            sx={{
                                backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(/images/about_us_1.jpg)',
                            }}
                        >
                            <Typography variant='h5' color='info.main' mb={2.5}>再生能源</Typography>
                            <Typography variant='body1' color='common.white'>
                            指原材料可以再生的能源，特性為用之不竭 ，不受能源短缺的影響，可促使未來家園與環境永續共生。
                            </Typography>
                        </StyledBox>

                        <StyledBox
                            sx={{
                                backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(/images/about_us_2.jpg)',
                            }}
                        >
                            <Typography variant='h5' color='info.main' mb={2.5}>回收利用</Typography>
                            <Typography variant='body1' color='common.white'>
                            運用專業技術及客製化服務，將廢棄有機資材轉化發電，進而達到轉廢為能資源循環。
                            </Typography>
                        </StyledBox>

                        <StyledBox
                            sx={{
                                backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(/images/about_us_3.jpg)',
                            }}
                        >
                            <Typography variant='h5' color='info.main' mb={2.5}>循環經濟</Typography>
                            <Typography variant='body1' color='common.white'>
                            高溫氣化反應是比直接燃燒更清潔的處理方式，可解決環境現況，轉變人類產業活動，創造農業廢棄物新價值。
                            </Typography>
                        </StyledBox>
                        
                    </Grid>
                    <Grid item xs={7} my='auto'>
                        <Typography variant='h2' color='secondary.main' mb={2.5}>關於我們</Typography>
                        <Typography variant='subtitle2' color='common.black' mb={7.5}>
                        佳瑪環能利用高溫氣化熱裂解技術，將可燃性廢棄物轉化為類生物質能，不僅能提供穩定再生能源發電，還能改善溫室效應，以循環經濟的模式，讓自然生態系統與產業文明的發展，取得和諧與永續的平衡點。
                        </Typography>
                        <Typography variant='h5' color='secondary.main' mb={2.5}>
                        生物質能為地球最大的資源之一<br />生質能源循環能兼顧環保與永續
                        </Typography>
                        <Typography variant='subtitle2' color='common.black'>
                        利用大氣、水、土壤（微生物）等透過光合作用而產生的各種有機體，即一切有生命的、可以生長的有機物質通稱為生物質。而所謂的生質能源指的就是「由生物質(biomass)轉換而生的能源」。
                        <br /><br />
                        生質能源最大的價值在於「循環」，例如：利用植物行光合作用將空氣中的二氧化碳固定下來後，透過各種方法轉化為生質燃料，利用燃料的過程中又將二氧化碳釋放回空氣中；透過這樣的循環，能避免釋放額外的二氧化碳到空氣裡，所以不會加重溫室效應，同時也是唯一一種可再生的碳源，這也是一種兼顧環保與永續經營的能源型態。
                        <br /><br />
                        響應我國再生能源政策，增加綠色能源發電比例為永續發展目標，促進台灣能源多元化，實現分散式電網的理想，並改善現在與未來台灣所必須面對的環境廢棄物所衍生的環保問題。
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};