import React, { useRef } from 'react';
import useInView from '../utils/useInView'
import IconPower from '@icons/icon-subway_power.svg'
import IconWater from '@icons/icon-ion_water.svg'
import IconLeaf from '@icons/icon-leaf_solid.svg'
import { Grid, Typography } from "@mui/material";
import { AppContext } from '@context/index';
import { prefix } from '@utils/prefix';

export default function SolutionSection() {
    const { SolutionSection } = React.useContext(AppContext);
    const {
        title,
        titleDes,
        subtitleFirst,
        contentFirst,
        subtitleSecond,
        contentSecond
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
    return (
        <Grid id='solution' container justifyContent='center' alignItems='center' ref={inviewRef}
            sx={{
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
                        <Grid container py={10}>
                            <Grid item xs={5} sx={{
                            }}>
                                <img src={`${prefix}/images/solution_title.jpg`} width='100%' alt="解決方案" />
                            </Grid>
                            <Grid item xs={6} ml='auto' display='flex' flexDirection='column' sx={{justifyContent: 'center'}}>
                                <Typography variant='h2' color='info.main' mb={2.5}>{title || '解決方案'}</Typography>
                                <Typography variant='subtitle2' color='common.white' mb={4}>
                                    {titleDes || '首創微型高溫氣化熱裂解技術可有效解決垃圾焚化及能源不足等問題'}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            
            <Grid item maxWidth='xl' mb={7.5}>
                <Grid container spacing={[1.5, 7.5]}>
                    <Grid item xs={12}>
                        <Typography variant='h5' color='secondary.main' mb={5}>
                            {subtitleFirst || '佳瑪環能的氣化技術具有下列的優點'}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={3} height={200} bgcolor='#07451A' p={3}>
                                <Typography variant='h2' color='info.main'>01.</Typography>
                                <Typography variant='subtitle2' color='common.white'>
                                合成燃氣在燃燒前加以淨化，可完全燃燒，燃燒後不會產生煙道氣
                                </Typography>
                            </Grid>
                            <Grid item xs={3} height={200} bgcolor='#10692B' p={3}>
                                <Typography variant='h2' color='info.main'>02.</Typography>
                                <Typography variant='subtitle2' color='common.white'>
                                合成然氣可以在燃氣渦輪機中產生電力，相較一般焚化爐以汽電共生方式發電，更便宜更有效率
                                </Typography>
                            </Grid>
                            <Grid item xs={3} height={200} bgcolor='#07451A' p={3}>
                                <Typography variant='h2' color='info.main'>03.</Typography>
                                <Typography variant='subtitle2' color='common.white'>
                                聚焦下吸式結構，讓氣化更完全
                                </Typography>
                            </Grid>
                            <Grid item xs={3} height={200} bgcolor='#10692B' p={3}>
                                <Typography variant='h2' color='info.main'>04.</Typography>
                                <Typography variant='subtitle2' color='common.white'>
                                熱裂解過程中所產生之焦油必須通過熱焦炭床，因此焦油含量低
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <img width='100%' height='100%' style={{objectFit: 'contain'}} src={`${prefix}/images/service-01.jpg`} alt="設備流程" srcSet="" />
                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant='subtitle2' color='common.black'>
                        綜觀台灣所面臨的廢棄物處理狀況，佳瑪環能依據歐盟生質能中心規範，規劃廢棄物能資源轉換系統設備，藉由高溫氣化裂解及氣體純化技術，將廢棄物直接轉換成乾淨的合成氣(syngas，主要氣體成分為CO、H2、CH4)，供給微型渦輪機發電及製冷(熱)系統轉換供冷(熱)，提昇能源綜合使用效率，製程介面的碳、灰份、工業醋酸(或木醋)等，亦可提供工(農)業再利用，達成資源化的目標。
                        <br /><br />
                        由於佳瑪環能擁有廢棄物能資源系統整合技術，採用高溫氣化(gasification)技術將廢棄物轉換成合成氣(syngas)，再透過微型燃氣渦輪發電機將合成氣轉換成電力，建置區域型微型發電廠。因能有別於傳統常見的固態廢棄物衍生燃料，利用區域型分散式微型高溫氣化及燃氣渦輪發電整合技術，將區域內廢棄物轉換成冷、熱、電等能源產品，能源轉換效率高，也能提供穩定的再生能源。
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <img width='100%' height='100%' style={{objectFit: 'contain'}} src={`${prefix}/images/service-03.jpg`} alt="廢棄物處理流程" srcSet="" />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item width='100%' bgcolor='#F3F3F3' py={10}>
                <Grid container maxWidth='lg' width='100%' mx='auto'>
                    <Grid item xs={6}>
                        <Typography variant='h5' color='secondary.main' mb={2.5} mt={4.5}>
                        以分散式能資源中心深化運用<br />循環經濟模式遍地開花
                        </Typography>
                        <Typography variant='subtitle2' color='common.black'>
                        TGRT的另一個優勢，在於提供區域型微型分散式能資源轉換中心的設置，讓廢棄物處理採用低環境衝擊的新型技術，不僅能分散在各鄉鎮市區域內，處理在地廢棄物去化問題，還能降低長途運送所增加的碳排放。同時，相較於以火力、核能發電場為主的集中式電網，每個微型分散式能資源中心二十四小時運作所產出的再生能源併網，又可以成為台灣電力穩定備載支撐，達成電業自由化符合區域微電網深化運用的未來。
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <img width='100%' height='100%' style={{objectFit: 'contain'}} src={`${prefix}/images/service-02.jpg`} alt="去中心化" srcSet="" />
                    </Grid>
                </Grid>
            </Grid>


            <Grid item width='100%' bgcolor='#F3F3F3' py={7.5} sx={{
                position: 'relative',
                '&::before': {
                    position: 'absolute',
                    content: '""',
                    right: '0',
                    top: '0',
                    height: '100%',
                    width: '33%',
                    backgroundColor: '#FFFFFF'
                }
            }}
            mb={22.5}
            >
                <Grid container maxWidth='lg' width='100%' mx='auto'>
                    <Grid item xs={6}>
                        <Typography variant='h5' color='secondary.main' mb={2.5}>
                        Aurelia® A400
                        </Typography>
                        <Typography variant='subtitle2' color='common.black'>
                        因應現行的產業電力需求增加、供電備轉容量吃緊和故障引起的斷電事故，佳瑪環能引進與代理Aurelia® A400，可減少興建輸配電線所需之龐大投資與阻力，是最符合市場需求之動力發電系統。
                        <br /><br />
                        這是一款新型的400 kW微型燃氣渦輪發電機，具40.2%的能量轉換效率，比市面上的其他微渦輪機效率高出約20%，是目前最高效率的微渦輪機。能夠使用包括氫氣在內的多種可再生燃料和非標準燃料，運轉時污染極低、廢熱可充分再利用及體積小運轉維修容易。為小型燃氣渦輪機及柴油發電機組外，為最具發展潛力之緊急電源及小型分散型電源。
                        </Typography>
                    </Grid>
                    <Grid item xs={5} ml='auto' zIndex={1}>
                        <img width='100%' height='100%' style={{objectFit: 'contain'}} src={`${prefix}/images/aurelia_device_A400.jpg`} alt="Aurelia A400" srcSet="" />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};