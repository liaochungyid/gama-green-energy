import React, { useRef } from 'react';
import useInView from '../utils/useInView';
import { Box, Grid, Typography } from "@mui/material";
import { AppContext } from '@context/index';
import { prefix } from '@utils/prefix';
import YouTube from 'react-youtube';

interface StyledHoverBoxType {title: string};

export default function PracticalCaseSection() {
    const { PracticalCaseSection } = React.useContext(AppContext);
    const {
        title,
        subtitleFirst,
        contentFirst,
        subtitleSecond,
        contentSecond,
        subtitleThird,
        contentThird,
        picGridSubtitle
    } = PracticalCaseSection;

    const inviewRef = useRef({} as HTMLDivElement);

    const options = {
        root : 'root',
        rootMargin : '0px',
        threshold : 0.5
    };

    function onEntry(entry: any) {
        // inviewRef.current.classList.add('visible');
        // console.log('in: ', entry.intersectionRatio)
    };
  
    function onExit(entry: any) {
        // inviewRef.current.classList.remove('visible');
        // console.log('out: ', entry.intersectionRatio)
    };

    useInView(inviewRef, options, onEntry, onExit);

    const StyledHoverBox = ({title}: StyledHoverBoxType) => (
        <Box position='absolute' display='flex' sx={{
            justifyContent: 'center',
            alignItems: 'center',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            transition: 'all 0.3s ease-in-out',
            '& h5': {
                transition: 'all 0.3s linear',
                transform: 'translateY(100%)',
                opacity: 0,
            },
            '& ::after': {
                transition: 'all 0.3s linear',
                transform: 'scaleX(0)'
            },
            ':hover': {
                background: 'rgba(0, 0, 0, 0.7)',
                '& h5': {
                    transform: 'translateY(50%)',
                    opacity: 1,
                },
                '& ::after': {
                    transform: 'scaleX(1)'
                }
            }
        }}>
            <Typography variant='h5' color='info.main' position='relative' sx={{
                paddingBottom: '10px',
                overflow: 'hidden',
                paddingX: 3,
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '1px',
                    overflow: 'hidden',
                    backgroundColor: '#51FE28'
                }
            }}>{title}</Typography>
        </Box>
    )


    return (
        <Grid id='showcase' container justifyContent='center' alignItems='center' ref={inviewRef}
            sx={{
                perspective: '100px',
                '&.visible': {
                }
            }}
            overflow='hidden'
        >
            <Grid item xs={12} bgcolor='#050607' mb={10}>
                <Grid container justifyContent='center' mx='auto' maxWidth='xl' sx={{
                        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${prefix}/images/service-04.jpg)`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }} >
                    <Grid item xs={10} sm={8} md={6} display='flex' py={10} sx={{
                        backgroundSize: 'cover',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Typography variant='h2' color='info.main' mb={2.5}>{title || '案例實績'}</Typography>
                        <Typography variant='h5' color='common.white' mb={2.5}>{subtitleFirst || '實證示範廠'}</Typography>
                        <Typography variant='subtitle2' color='common.white'>
                        {contentFirst || '曾於花蓮壽豐鄉有機農場設立實驗基地解決農業廢棄物去化問題。原料透過適當分離、乾燥等前處理程序後，進行氣化產熱、產電等轉換，此實驗證明對農業廢棄物能做適當能資源轉換及去化處理。'}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} mb={10}>
                <Grid container maxWidth='xl' mx='auto' justifyContent='center'>
                    <Grid item xs={10} height='0' pb='56.25%' position='relative'>
                        <Box position='absolute' sx={{top: 0, bottom: 0, left: 0, right: 0}}>
                            <YouTube videoId='ZCs2cxPf8WA' title='生質能源循環' style={{width: '100%', height: '100%'}} opts={{width: '100%', height: '100%'}}/>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} mb={22.5} py={10} px={{xs: 1, sm: 2, md: 4, lg: 8}} bgcolor='#F3F3F3'>
                <Grid container maxWidth='xl' mx='auto' alignItems='center'>
                    <Grid item xs={6} display={{xs: 'none', sm: 'block'}}>
                        <img width='100%' height='100%' style={{objectFit: 'contain'}} src={`${prefix}/images/gama_3d.jpg`} alt="佳瑪外觀3D圖" srcSet="" />
                    </Grid>
                    <Grid item xs={12} sm={5} ml='auto'>
                        <Typography variant='h5' color='secondary.dark' mb={2.5}>{subtitleSecond || '台灣第一座合法標準廠'}</Typography>
                        <Box display={{xs: 'block', sm: 'none'}} pb={2}>
                            <img width='100%' height='100%' style={{objectFit: 'contain'}} src={`${prefix}/images/gama_3d.jpg`} alt="佳瑪外觀3D圖" srcSet="" />
                        </Box>
                        <Typography variant='subtitle2' color='common.black'>
                        {contentSecond[0] || '佳瑪環能初期經營目標為完成桃園市大園區大觀路256號第一期400Kw發電量之設備建置，未來將以1,200Kw 為目標並以桃園首座微型能資源處理中心，協助解決生質廢棄物及電力不足問題。'}
                        <br /><br />
                        {contentSecond[1] || '廢棄物處理流程主要以廢塑膠、廢木材等廢棄物為原料，透過破碎篩分系統完成前處理，經過適當物料配比後進入氣化爐產生合成氣，供給微渦輪機燃燒可燃氣發電，發電後之餘熱尚可經過溴冷機產生冷氣，供應全廠使用。'}
                        </Typography>
                    </Grid>

                </Grid>
            </Grid>

            <Grid item xs={12} mb={20}>
                <Grid container maxWidth='xl' mx='auto' px={{xs: 1, sm: 2, md: 4, lg: 8}}>
                    <Grid item xs={12} pb={5}>
                        <Typography variant='h2' color='secondary.main' mb={2.5}>{subtitleThird || '案場現況'}</Typography>
                        <Typography variant='h5' color='common.black'>{contentThird || '佳瑪環能氣化廠設備實績'}</Typography>
                    </Grid>
                    <Grid item xs={6} md={4} p={1.5}>
                        <Box position='relative'>
                            <img src={`${prefix}/images/device-3.jpg`} width='100%' alt={picGridSubtitle[0]} />
                            <StyledHoverBox title={picGridSubtitle[0]} />
                        </Box>
                        <Box position='relative' py={3} display={{xs: 'block', md: 'none'}}>
                            <img src={`${prefix}/images/device-5.jpg`} width='100%' alt={picGridSubtitle[4]} />
                            <StyledHoverBox title={picGridSubtitle[4]} />
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={8}>
                        <Grid container>
                            <Grid item xs={12} md={6} p={1.5}>
                                <Box position='relative'>
                                    <img src={`${prefix}/images/device-1.jpg`} width='100%' alt={picGridSubtitle[1]} />
                                    <StyledHoverBox title={picGridSubtitle[1]} />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6} p={1.5}>
                                <Box position='relative'>
                                    <img src={`${prefix}/images/device-4.jpg`} width='100%' alt={picGridSubtitle[2]} />
                                    <StyledHoverBox title={picGridSubtitle[2]} />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6} p={1.5}>
                                <Box position='relative'>
                                    <img src={`${prefix}/images/device-2.jpg`} width='100%' alt={picGridSubtitle[3]} />
                                    <StyledHoverBox title={picGridSubtitle[3]} />
                                </Box>
                            </Grid>
                            <Grid item md={6} p={1.5} display={{xs: 'none', md: 'block'}}>
                                <Box position='relative'>
                                    <img src={`${prefix}/images/device-5.jpg`} width='100%' alt={picGridSubtitle[4]} />
                                    <StyledHoverBox title={picGridSubtitle[4]} />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                
            </Grid>

        </Grid>
    )
};