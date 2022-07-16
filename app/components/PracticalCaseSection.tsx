import React, { useRef } from 'react';
import useInView from '../utils/useInView';
import IconArrowLeft from '@icons/icon-arrow-left.svg'
import IconArrowRight from '@icons/icon-arrow-right.svg'
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { prefix } from '@utils/prefix';

type IPraticalCase = { id: string, imgPath: string, description: string };
// interface IRenderPraticalCaseProp extends IPraticalCase { index: number, active: number }

const practicalCaseImgList: IPraticalCase[] = [{
    id: 'partical-case-div-01',
    imgPath: '/images/practical-case-01.jpg',
    description: '貨櫃化設備實況'
}, {
    id: 'partical-case-div-02',
    imgPath: '/images/practical-case-02.jpg',
    description: '可燃氣燃燒實況'
}, {
    id: 'partical-case-div-03',
    imgPath: '/images/practical-case-03.jpg',
    description: '貨櫃化設備實況'
}, {
    id: 'partical-case-div-04',
    imgPath: '/images/practical-case-04.jpg',
    description: '示範設備實況'
}, {
    id: 'partical-case-div-05',
    imgPath: '/images/practical-case-05.jpg',
    description: '示範設備處理廢棄物種類'
}];

const practicalCaseIdList = practicalCaseImgList.map(p => p.id);

export default function PracticalCaseSection() {
    const pageRef = useRef({} as HTMLDivElement);
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

    const handleSetPage = (ind: number, way: 'left' | 'right'): number => {
        let nextId = way === 'left' ? ind - 1 : ind + 1;
        try {
            handlePageChange(nextId);
            if (nextId > practicalCaseImgList.length) { nextId = 1 } 
            else if (nextId < 1) { nextId = practicalCaseImgList.length };

            const refCur = pageRef.current
            if (refCur) { refCur.innerText = `${nextId}/${practicalCaseImgList.length}` };
        } catch (err) {
            console.log(err)
        }
        return nextId
    };

    const handleOnClickLeft = () => {
        const refCur = pageRef.current
        try {
            if (refCur) {
                const page = Number(refCur.innerHTML.slice(0, refCur.innerHTML.indexOf('/')));
                handleSetPage(page, 'left');
            };
        } catch (err) {
            console.log(err)
        };
    };

    const handleOnClickRight = () => {
        const refCur = pageRef.current
        try {
            if (refCur) {
                const page = Number(refCur.innerHTML.slice(0, refCur.innerHTML.indexOf('/')));
                handleSetPage(page, 'right');
            };
        } catch (err) {
            console.log(err)
        };
    };

    const handlePageChange = (page: number) => {
        practicalCaseIdList.map((pcid, index) => {
            const ele = document.querySelector(`#${pcid}`) as HTMLElement;
            if (!ele) { return; }
            if (index < page - 1) {
                return ele.classList.add('shrink')
            } else {
                return ele.classList.remove('shrink')
            }
        })
    }
    
    const RenderPraticalCaseImg = React.memo(({id, imgPath, description}: IPraticalCase ) => (
        <Box id={id} mr={2.5} height='300px' width='400px' sx={{'&.shrink': {width: '0', mr: 0}, transition: 'all 0.7s ease'}}>
            <img width='400px' height='100%' style={{objectFit: 'cover'}} src={`${prefix}${imgPath}`} alt={description} srcSet="" />
        </Box>
    ));

    return (
        <Grid id='showcase' container justifyContent='center' alignItems='center' ref={inviewRef}
            sx={{
                perspective: '100px',
                '&.visible': {
                }
            }}
            overflow='hidden'
        >
            <Grid item xs={12} bgcolor='#050607' mb={41}>
                <Grid container justifyContent='center'>
                    <Grid item maxWidth='xl' width='100%' my='auto' sx={{
                        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${prefix}/images/service-04.jpg)`,
                        height: '800px',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}>
                        <Grid container maxWidth='lg' pt={10} mx='auto' position='relative'>
                            <Grid item xs={9}>
                                <Typography variant='h2' color='info.main' mb={2.5}>案例實績</Typography>
                                <Typography variant='h5' color='common.white' mb={2.5}>花蓮實證示範廠</Typography>
                                <Typography variant='subtitle2' color='common.white' mb={4}>
                                該廠位於壽豐鄉奇萊美地有機農場，成立宗旨為解決農業廢棄物去化問題，透過適當分離、乾燥等前處理程序後，經過氣化產熱、產電及生物碳等，將廢棄物去化處理做最適當能資源轉換。 花蓮實證示範廠建置，也配合東華大學進行花蓮縣壽豐鄉稻稈能源化之循環利用試驗計畫，案廠現況如影片所示。
                                </Typography>
                            </Grid>
                            <Grid item position='absolute' sx={{top: 388, left: 0, width: '100%', height: '100%'}}>
                                <video controls width='100%'>
									<source src="http://www.tgrtservice.com/video/20201207_花蓮環保局稻稈計畫.mp4" type="video/mp4" />
								</video>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} bgcolor='#07451A' mb={33.5}>
                <Grid container maxWidth='lg' mx='auto'>
                    <Grid item xs={3} py={10}>
                        <Typography variant='h5' color='info.main' mb={5}>
                        案場現況<br />氣化設備實體
                        </Typography>
                        <Box display='flex' sx={{alignItems: 'center'}}>
                            <IconButton onClick={handleOnClickLeft} >
                                <IconArrowLeft/>
                            </IconButton>
                            <Typography ref={pageRef} variant='h5' mx={3} color='info.main' component='span'>1/{practicalCaseImgList.length}</Typography>
                            <IconButton onClick={handleOnClickRight} >
                                <IconArrowRight />
                            </IconButton>
                        </Box>
                    </Grid>
                    <Grid item xs={9} position='relative'>
                        <Box position='absolute' display='flex' sx={{top: 80, left: 0}} >
                            {practicalCaseImgList.map((p, i) => i + 1 === practicalCaseImgList.length && <RenderPraticalCaseImg key={p.id + '-redundant'} {...p} />)}
                            {practicalCaseImgList.map((p, i) => <RenderPraticalCaseImg key={p.id} {...p} />)}
                            {practicalCaseImgList.map((p, i) => i + 1 < practicalCaseImgList.length && <RenderPraticalCaseImg key={p.id + '-redundant'} {...p} />)}
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};