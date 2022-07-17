import React, { useRef } from 'react';
import useInView from '../utils/useInView'
import { Box, Grid, Typography } from "@mui/material";
import { AppContext } from '@context/index';
import { prefix } from '@utils/prefix';
import theme from 'theme';

interface AdvantageCardProps {title: string; description: string}

export default function SolutionSection() {
    const { SolutionSection } = React.useContext(AppContext);
    const {
        title,
        titleDes,
        subtitleFirst,
        contentFirst,
        subtitleSecond,
        contentSecond,
        subtitleThird,
        contentThird
    } = SolutionSection;
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

    const AdvantageCard = ({title, description}: AdvantageCardProps) => (
        <Grid item xs={4} sm={3} minHeight={{xs: 150, sm: 180, md: 200}} bgcolor='#F3F3F3' mb={4} py={{xs: 2, sm: 3}} pl={4} pr={2} position='relative' sx={{
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

    return (
        <Grid id='solution' container justifyContent='center' alignItems='center' ref={inviewRef}
            sx={{
                overflow: 'hidden',
                perspective: '100px',
                '&.visible': {
                }
            }}
        >
            <Grid item width='100%' bgcolor='#050607' mb={7.5}>
                <Grid container justifyContent='center'>
                    <Grid item maxWidth='xl' width='100%' my='auto' sx={{
                        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${prefix}/images/solution_bg.jpg)`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}>
                        <Grid container py={{xs: 4, sm: 6, md: 8, lg: 10}}  px={{xs: 1, sm: 2, md: 4, lg: 8}}>
                            <Grid item display={{xs: 'none', sm: 'block'}} sm={5} mx='auto'>
                                <img src={`${prefix}/images/solution_title.jpg`} width='100%' alt="解決方案" />
                            </Grid>
                            <Grid item xs={10} sm={5} mx='auto' display='flex' flexDirection='column' sx={{justifyContent: 'center'}}>
                                <Typography variant='h2' color='info.main' mb={2.5}>{title || '解決方案'}</Typography>
                                <Typography variant='h5' color='common.white'>
                                    {titleDes || '首創微型高溫氣化熱裂解技術可有效解決垃圾焚化及能源不足等問題'}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            
            <Grid item maxWidth='xl' mb={7.5}>
                <Grid container>
                    <Grid item xs={12} px={{xs: 1, sm: 2, md: 4, lg: 8}}>
                        <Typography variant='h5' color='secondary.main' mb={5}>
                            {subtitleFirst || '佳瑪環能的氣化技術具有下列的優點'}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} position='relative'>
                        <Grid container justifyContent='flex-end'>
                            {contentFirst.map((c, i) => <AdvantageCard key={c} title={`0${i+1}.`} description={c} />)}
                        </Grid>
                        <Box position='absolute' width='100%' height='126px' sx={{
                            bottom: 0,
                            left: 0,
                            zIndex: -1,
                            backgroundImage: `url(${prefix}/images/gama_watermark.svg)`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPositionX: 'left',
                            backgroundSize: 'contain',
                            transform: 'translateX(calc(-50vw + 50%))',
                            marginBottom: 8,
                        }} />
                    </Grid>

                    <Grid item xs={12} mb={10} px={{xs: 1, sm: 2, md: 4, lg: 8}}>
                        <Grid container alignItems='center' flexDirection={{xs: 'column', sm: 'row'}}>
                            <Grid item xs={12} sm={5} md={4}>
                                <Typography variant='h5' color='secondary.main' mb={2.5}>{subtitleSecond || '以分散式能資源中心深化運用循環經濟模式遍地開花'}</Typography>
                                <Typography variant='subtitle2' color='common.black'>{contentSecond[0] || '垃圾處理一直是各城市的大議題，目前台灣的焚化爐大多採用三、四十年前的焚化技術，每日處理約一千噸混雜垃圾，對於環境的衝擊性相對大。加上一般焚化廠使用年限為二十年，隨著台灣多數垃圾焚化廠使用年限屆滿，須面對廢棄物的去化。'}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={7} md={8}>
                                <img width='100%' height='100%' style={{objectFit: 'contain'}} src={`${prefix}/images/service-01.jpg`} alt="設備流程" srcSet="" />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} mb={10} px={{xs: 1, sm: 2, md: 4, lg: 8}}>
                        <Grid container alignItems='center' flexDirection={{xs: 'column-reverse', sm: 'row'}}>
                            <Grid item xs={12} sm={5} py={{xs: 2, sm: 0}} px={{xs: 6, sm: 2, md: 0}}>
                                <img width='100%' height='100%' style={{objectFit: 'contain'}} src={`${prefix}/images/service-03.jpg`} alt="廢棄物處理流程" srcSet="" />
                            </Grid>
                            <Grid item xs={12} sm={7} md={6} ml='auto'>
                                <Typography variant='subtitle2' color='common.black'>
                                {contentSecond[1] || '綜觀台灣所面臨的廢棄物處理狀況，佳瑪環能所設計的廢棄物資源轉換系統，不僅可高效再利用有機廢棄物，也可將廢熱回收用來供熱CHP或製冷CCHP，能源轉換效率相對高。而能量轉換過程中的產生的碳黑、灰份、工業醋酸(木醋液)等，亦可提供工(農)業再利用，達成廢棄物皆資源化的目標。'}
                                <br /><br />
                                {contentSecond[2] || '佳瑪環能擁有廢棄物能資源系統整合經驗及固定污染源處理執照 ; 在建置區域型微型發電廠方面採用特殊氣化技術將廢棄物轉換成RDF-7廢棄物衍生燃料供給高效率的微渦輪機發電，可24小時運轉且容量因素可達80-90，並將廢熱回收用來供暖或製冷，有別於其他使用固態廢棄物衍生燃料(Solid recovered fuel, SRF) 的電廠，則須先消耗能量將廢棄物製成SRF。'}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} mb={10}>
                        <Grid container alignItems='center'>
                            <Grid item xs={12} sm={6} py={{xs: 4, sm: 6, md: 8, lg: 10}} pl={{xs: 1, sm: 2, md: 4, lg: 8}} pr={{xs: 2, sm: 4, md: 8, lg: 15}} bgcolor='#07451A' position='relative' sx={{
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
                                <Box display={{xs: 'block', sm: 'none'}} px={3}>
                                    <img width='100%' height='100%' style={{objectFit: 'contain'}} src={`${prefix}/images/service-02.jpg`} alt="去中心化" srcSet="" />
                                </Box>
                                <Typography variant='subtitle2' color='common.white'>
                                {contentSecond[3] || '相較於以火力、核能發電場為主的集中式電網，佳瑪環能的優勢在於設置微型分散式能資源轉換中心，可以協助成為台灣電力穩定備載支撐，還能就近處理生質廢棄物的去化，並減少長途運送的碳排放。'}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} display={{xs: 'none', sm: 'block'}} ml='auto'>
                                <img width='100%' height='100%' style={{objectFit: 'contain'}} src={`${prefix}/images/service-02.jpg`} alt="去中心化" srcSet="" />
                            </Grid>
                        </Grid>
                    </Grid>


                </Grid>
            </Grid>

            <Grid item width='100%' bgcolor='#F3F3F3' py={7.5} mb={22.5} sx={{
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
                <Grid container maxWidth='xl' px={{xs: 1, sm: 2, md: 4, lg: 8}} width='100%' mx='auto'>
                    <Grid item xs={12} sm={6}>
                        <Typography variant='h5' color='secondary.main' mb={2.5}>{subtitleThird || 'Aurelia® A400'}</Typography>
                        <Box display={{xs: 'block', sm: 'none'}} px={4}>
                            <img width='100%' height='100%' style={{objectFit: 'contain'}} src={`${prefix}/images/aurelia_device_A400.jpg`} alt="Aurelia A400" srcSet="" />
                        </Box>
                        <Typography variant='subtitle2' color='common.black'>
                        {contentThird[0] || '因應現行的產業電力需求增加、供電備轉容量吃緊和故障引起的斷電事故，佳瑪環能引進與代理Aurelia® A400，可減少興建輸配電線所需之龐大投資與阻力，是最符合市場需求之動力發電系統。'}
                        <br /><br />
                        {contentThird[1] || '這是一款新型的400 kW微型燃氣渦輪發電機，具40.2%的能量轉換效率，比市面上的其他微渦輪機效率高出約20%，是目前最高效率的微渦輪機。能夠使用包括氫氣在內的多種可再生燃料和非標準燃料，運轉時污染極低、廢熱可充分再利用及體積小運轉維修容易。為小型燃氣渦輪機及柴油發電機組外，為最具發展潛力之緊急電源及小型分散型電源。'}
                        </Typography>
                    </Grid>
                    <Grid item xs={5} display={{xs: 'none', sm: 'block'}} ml='auto' zIndex={1}>
                        <img width='100%' height='100%' style={{objectFit: 'contain'}} src={`${prefix}/images/aurelia_device_A400.jpg`} alt="Aurelia A400" srcSet="" />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};