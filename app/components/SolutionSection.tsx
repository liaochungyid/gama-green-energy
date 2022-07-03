import React, { useRef } from 'react';
import useInView from '../utils/useInView'
import IconPower from '@icons/icon-subway_power.svg'
import IconWater from '@icons/icon-ion_water.svg'
import IconLeaf from '@icons/icon-leaf_solid.svg'
import { Grid, Typography } from "@mui/material";

export default function SolutionSection() {
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
            <Grid item width='100%' bgcolor='#050607'  mb={7.5}>
                <Grid container justifyContent='center'>
                    <Grid item maxWidth='xl' width='100%' my='auto' sx={{
                        backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(/images/solution_bg.jpg)',
                        height: '276px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}>
                        <Typography variant='h2' color='info.main' mb={2.5}>解決方案</Typography>
                        <Typography variant='subtitle2' color='common.white' mb={4}>
                        首創微型高溫氣化技術轉化能源 有效解決垃圾焚化問題及穩定供電
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item maxWidth='lg' mb={7.5}>
                <Grid container spacing={[1.5, 7.5]}>
                    <Grid item xs={10} mx='auto'>
                        <Typography variant='subtitle2' color='common.black'>
                        一直以來，垃圾處理就是各國各城市的一個大議題，而目前台灣計有二十四座焚化爐，不單是採用三、四十年前的焚化技術，每日平均處理約一千噸混雜垃圾，大量體設備系統運作對於環境的衝擊性相對較大外，加上一般焚化廠正常使用年限二十年，隨著台灣多數垃圾焚化廠使用年限即將屆滿，屆時又要面對廢棄物去化的問題。
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <img width='100%' height='100%' style={{objectFit: 'contain'}} src="/images/service-01.jpg" alt="設備流程" srcSet="" />
                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant='subtitle2' color='common.black'>
                        綜觀台灣所面臨的廢棄物處理狀況，佳瑪環能依據歐盟生質能中心規範，規劃廢棄物能資源轉換系統設備，藉由高溫氣化裂解及氣體純化技術，將廢棄物直接轉換成乾淨的合成氣(syngas，主要氣體成分為CO、H2、CH4)，供給微型渦輪機發電及製冷(熱)系統轉換供冷(熱)，提昇能源綜合使用效率，製程介面的碳、灰份、工業醋酸(或木醋)等，亦可提供工(農)業再利用，達成資源化的目標。
                        <br /><br />
                        由於佳瑪環能擁有廢棄物能資源系統整合技術，採用高溫氣化(gasification)技術將廢棄物轉換成合成氣(syngas)，再透過微型燃氣渦輪發電機將合成氣轉換成電力，建置區域型微型發電廠。因能有別於傳統常見的固態廢棄物衍生燃料，利用區域型分散式微型高溫氣化及燃氣渦輪發電整合技術，將區域內廢棄物轉換成冷、熱、電等能源產品，能源轉換效率高，也能提供穩定的再生能源。
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <img width='100%' height='100%' style={{objectFit: 'contain'}} src="/images/service-03.jpg" alt="廢棄物處理流程" srcSet="" />
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
                        <img width='100%' height='100%' style={{objectFit: 'contain'}} src="/images/service-02.jpg" alt="去中心化" srcSet="" />
                    </Grid>
                </Grid>
            </Grid>


            <Grid item width='100%' bgcolor='#050607'  mb={7.5}>
                <Grid container justifyContent='center'>
                    <Grid item maxWidth='xl' width='100%' my='auto' sx={{
                        backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(/images/service-04.jpg)',
                        height: '276px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}>
                        <Typography variant='h5' color='info.main' mb={2.5}>生質能技術整合RDF-7</Typography>
                        <Grid container spacing={4.5} justifyContent='center'>
                            <Grid item xs={3} display='flex' sx={{flexWrap: 'nowrap', alignItems: 'center'}}>
                                <IconPower />
                                <Typography ml={2} variant='subtitle2' color='common.white'>廢棄物能源化：氣化爐技術及脱焦油系統</Typography>
                            </Grid>
                            <Grid item xs={3} display='flex' sx={{flexWrap: 'nowrap', alignItems: 'center'}}>
                                <IconWater />
                                <Typography ml={2} variant='subtitle2' color='common.white'>醫療廢棄物(有機物)：水離子裂解碳化技術</Typography>
                            </Grid>
                            <Grid item xs={3} display='flex' sx={{flexWrap: 'nowrap', alignItems: 'center'}}>
                                <IconLeaf />
                                <Typography ml={2} variant='subtitle2' color='common.white'>農業廢棄物轉換土壤改良生物資材：快速發酵系統</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item maxWidth='lg' mb={7.5}>
                <Grid container spacing={[1.5, 7.5]}>
                    <Grid item xs={6}>
                        <Typography variant='subtitle2' color='common.black'>
                        佳瑪環能擁有廢棄物能資源技術，能以高溫氣化(gasification)技術將廢棄物轉換成合成氣(syngas，又稱可燃氣)，再透過燃氣渦輪發電機將合成氣轉換成電力。有別於傳統常見的固態廢棄物衍生燃料 RDF-5，此技術屬於 RDF-7。將廢棄物加工成合成氣體後再作為燃料使用，燃料等級與能源轉換效率更高。
                        <br /><br />
                        廢棄物氣化的原理如影片所示，將可燃性廢棄物經由主要流程：乾燥、裂解、 氧化、還原四個階段，分解為氫氣及一氧化碳等合成燃氣，即為 RDF-7；佳瑪環能使用順流固定床氣化爐，爐體包括一個含碳之生質物燃料固定床，並具有水蒸氣、氧氣、空氣等氣化媒介，氣化媒介的氣體與燃料以同方向流動(向下)的方式流過含碳之生質物燃料固定床，因此又稱為下吸式氣化爐。
                        </Typography>
                    </Grid>
                    <Grid item xs={6} display='flex' alignItems='center'>
                        <video controls width='100%'>
                            <source src="http://www.tgrtservice.com/video/生質氣化流程影片.mp4" type="video/mp4" />
                        </video>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h5' textAlign='center' color='secondary.main'>
                        此氣化流程具有下列的優點
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={4} height={200} bgcolor='#07451A' p={3}>
                                <Typography variant='h2' color='info.main'>01.</Typography>
                                <Typography variant='subtitle2' color='common.white'>
                                合成燃氣在燃燒前加以淨化，可完全燃燒，燃燒後不會產生煙道氣
                                </Typography>
                            </Grid>
                            <Grid item xs={4} height={200} bgcolor='#10692B' p={3}>
                                <Typography variant='h2' color='info.main'>02.</Typography>
                                <Typography variant='subtitle2' color='common.white'>
                                合成然氣可以在燃氣渦輪機中產生電力，相較一般焚化爐以汽電共生方式發電，更便宜更有效率
                                </Typography>
                            </Grid>
                            <Grid item xs={4} height={200} bgcolor='#07451A' p={3}>
                                <Typography variant='h2' color='info.main'>03.</Typography>
                                <Typography variant='subtitle2' color='common.white'>
                                聚焦下吸式結構，讓氣化更完全
                                </Typography>
                            </Grid>
                            <Grid item xs={4} height={200} bgcolor='#10692B' p={3}>
                                <Typography variant='h2' color='info.main'>04.</Typography>
                                <Typography variant='subtitle2' color='common.white'>
                                熱裂解過程中所產生之焦油必須通過熱焦炭床，因此焦油含量低
                                </Typography>
                            </Grid>
                            <Grid item xs={4} height={200} bgcolor='#07451A' p={3}>
                                <Typography variant='h2' color='info.main'>05.</Typography>
                                <Typography variant='subtitle2' color='common.white'>
                                使用濕式多級迴圈循環淨化冷凝降溫方式，冷凝水迴圈循環利用
                                </Typography>
                            </Grid>
                            <Grid item xs={4} height={200} bgcolor='#10692B' p={3}>
                                <Typography variant='h2' color='info.main'>06.</Typography>
                                <Typography variant='subtitle2' color='common.white'>
                                自動化操作，界面簡易，僅 1~2 人可操作整個系統
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={6}>
                        <img width='100%' height='100%' style={{objectFit: 'contain'}} src="/images/service-05.jpg" alt="設備貨櫃化展示" srcSet="" />
                    </Grid>
                    <Grid item xs={6} display='flex' alignItems='center'>
                        <Typography variant='subtitle2' color='common.black'>
                        佳瑪環能所採用的氣化技術與焚化爐(燃燒)有著定義上的不同，是一個精準控制的熱裂解技術，氣化空氣量越高，操作溫度越高;空氣係數超過 1 時將變成焚化，氣化處理操作必須非常謹慎，氣化處理反應溫度對於氣化產物的影響大，反應溫度 越高，可降低焦油及焦炭等副產物，但是合成氣熱值會降低，減少利用率，因此我們所掌握的關鍵技術，能將廢棄物有效地轉化為能源與資源。
                        </Typography>
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
                        <img width='100%' height='100%' style={{objectFit: 'contain'}} src="/images/aurelia_device_A400.jpg" alt="Aurelia A400" srcSet="" />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};