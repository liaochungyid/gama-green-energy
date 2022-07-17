import React, { useRef } from 'react';
import useInView from '../utils/useInView'
import { Box, Grid, styled, Typography } from "@mui/material";
import { AppContext } from '@context/index';
import { prefix } from '@utils/prefix';
import YouTube from 'react-youtube';
import theme from 'theme';

const StyledBox = styled(Box)({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px 90px',
    [theme.breakpoints.down('xl')]: {
        padding: '40px 72px'
    },
    [theme.breakpoints.down('lg')]: {
        padding: '32px 56px'
    },
    [theme.breakpoints.down('md')]: {
        padding: '28px 40px'
    },
    [theme.breakpoints.down('sm')]: {
        padding: '20px 20px'
    },
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
});

export default function AboutUsSection() {
    const { AboutUsSection } = React.useContext(AppContext);
    const [imgPart1, imgPart2, imgPart3] = AboutUsSection.imagePart;
    const {
        title,
        titileDes,
        subtitleFirstLine,
        subtitleSecondLine,
        contentFirstPara,
        contentSecondPara
    } = AboutUsSection.descriptionPart;
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
            <Grid item maxWidth='xl' width='100%' px={{xs: 1, sm: 2, md: 4, lg: 8}}>
                <Grid container columnSpacing={6}>
                    <Grid item xs={12} sm={5} md={4} display={{xs: 'flex', sm: 'block'}} mb={{xs: 5, sm: 0}}>
                        <StyledBox
                            sx={{
                                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${prefix}/images/about_us_1.jpg)`,
                            }}
                        >
                            <Typography variant='h5' color='info.main' mb={2.5}>{imgPart1.title || '再生能源'}</Typography>
                            <Typography variant='body1' color='common.white'>
                            {imgPart1.description || '原材料可以再被利用生成能源，特性為用之不竭，不受能源短缺的影響，可促使未來家園與環境永續共生。'}
                            </Typography>
                        </StyledBox>

                        <StyledBox
                            sx={{
                                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${prefix}/images/about_us_2.jpg)`,
                            }}
                        >
                            <Typography variant='h5' color='info.main' mb={2.5}>{imgPart2.title || '回收利用'}</Typography>
                            <Typography variant='body1' color='common.white'>
                            {imgPart2.description || '運用專業技術及客製化服務，將廢棄有機資材轉化發電，進而達到轉廢為能資源循環最新氣化技術。'}
                            </Typography>
                        </StyledBox>

                        <StyledBox
                            sx={{
                                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${prefix}/images/about_us_3.jpg)`,
                            }}
                        >
                            <Typography variant='h5' color='info.main' mb={2.5}>{imgPart3.title || '循環經濟'}</Typography>
                            <Typography variant='body1' color='common.white'>
                            {imgPart3.description || '提升資源利用效率，減少生質廢棄物的產生，重視資源的再利用，創造廢棄物的新價值。'}
                            </Typography>
                        </StyledBox>
                        
                    </Grid>
                    <Grid item xs={12} sm={7} ml='auto' display='flex' sx={{flexDirection: 'column', justifyContent: 'center'}}>
                        <Typography variant='h2' color='secondary.main' mb={2.5}>{title || '關於我們'}</Typography>
                        <Typography variant='subtitle2' color='common.black' mb={{xs: 4, sm: 7.5}}>
                            {titileDes || '佳瑪環能運用特殊氣化(Gasification)技術，將有機廢棄資源轉化為廢棄物衍生燃料(Refuse derived fuel, RDF)中具有較高能源轉換效率的RDF-7合成氣(syngas)，再透過微型渦輪發電機(Micro Gas Turbine Generator, MTG)轉換成電力提供穩定的再生能源。'}
                        </Typography>
                        <Typography variant='h5' color='secondary.main' mb={2.5}>
                            {subtitleFirstLine || '生物質能為地球最大的資源之一'}
                            <br />
                            {subtitleSecondLine || 'subtitleSecondLine'}
                        </Typography>
                        <Typography variant='subtitle2' color='common.black'>
                            {contentFirstPara || '生質能源最大的價值在於「循環」，植物行光合作用會將空氣中的二氧化碳固定下來，可透過各種方法轉化為生質燃料，使用生物質燃料可將二氧化碳釋放回空氣中的友善循環。'}
                            <br /><br />
                            {contentSecondPara || '佳瑪環能的核心目標，係將廢棄物資材轉換成能源，舉凡一般生活、工業、及農業等生質廢棄物，都是我們關注的可用資源。此外佳瑪環能相當注重生質廢棄物能源化過程中所產生的污染是否符合環保規範。'}
                        </Typography>
                    </Grid>

                    <Grid item xs={12} mt={10} ml={6} height='0' pb='56.25%' position='relative'>
                        <Box position='absolute' sx={{top: 0, bottom: 0, left: 0, right: 0}}>
                            <YouTube videoId='ZCs2cxPf8WA' title='生質能源循環' style={{width: '100%', height: '100%'}} opts={{width: '100%', height: '100%'}}/>
                        </Box>
                        <Box position='absolute' width='100%' height='160px' sx={{
                            top: 0,
                            right: 0,
                            backgroundImage: `url(${prefix}/images/gama_watermark.svg)`,
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