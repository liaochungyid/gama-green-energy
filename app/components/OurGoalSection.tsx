import React, { useRef } from 'react';
import useInView from '../utils/useInView';
import IconCity from '@icons/icon-city.svg';
import IconPower from '@icons/icon-power.svg';
import IconTree from '@icons/icon-tree.svg';
import IconClimate from '@icons/icon-climate.svg';
import IconGlobal from '@icons/icon-global.svg';
import { Box, Button, Grid, styled, Typography } from "@mui/material";
import { prefix } from '@utils/prefix';

interface IGoal { id: string, imgLink: string, icon: any, title: string, subtitle: string };

const StyleButton = styled(Button)({
    boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.25);',
    marginRight: '8px',
    padding: '6px 10px',
    borderRadius: 0,
    '&.inactive': {
        background: '#FFFFFF',
        boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.11);',
        color: '#343434',
    }
});


export default function OurGoalSection() {
    const onMouseEnter: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        const target = e.target as Element;
        const btnUnderDiv = Array.from(document.querySelectorAll('#our-goal-btn-div button'));
        const imgUnderDiv = Array.from(document.querySelectorAll('#our-goal-img-div div'));
        const boxId = target.id.replace('-btn', '');
        const imgInBox = document.querySelector(`#${boxId}`);
        imgUnderDiv.map(i => i.classList.add('invisible'));
        if (imgInBox) { imgInBox.classList.remove('invisible'); };
        btnUnderDiv.map(b => b.classList.add('inactive'))
        target.classList.remove('inactive');

    };

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

    const RenderGoal = ({id, imgLink, icon, title, subtitle}: IGoal) => (
        <Box id={id} position='absolute' className={id.includes('01') ? '' : 'invisible'}
            sx={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${prefix + imgLink})`,
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                top: 0,
                left: 0,
                transition: 'all 0.4s ease-in-out',
                '&.invisible': {
                    transform: 'translate(-10%,-10%)',
                    opacity: 0,
                },
            }}
        >{icon}
            <Typography variant='h5' color='info.main' my={1.5}>{title}</Typography>
            <Typography variant='body1' color='common.white'>{subtitle}</Typography>
        </Box>
    );

    const goalList: IGoal[] = [{
        id: 'our_goal-01',
        imgLink: '/images/our_goal-01.jpg',
        icon: <IconCity />,
        title: '永續城市',
        subtitle: '為城市廢棄物及能源安全提供最佳解'
    }, {
        id: 'our_goal-02',
        imgLink: '/images/our_goal-02.jpg',
        icon: <IconPower />,
        title: '可負擔能源',
        subtitle: '生活/農業/事業廢棄物能資源化系統技術'
    }, {
        id: 'our_goal-03',
        imgLink: '/images/our_goal-03.jpg',
        icon: <IconTree />,
        title: '陸地生態',
        subtitle: '創造生活/農業/事業廢棄物新價值'
    }, {
        id: 'our_goal-04',
        imgLink: '/images/our_goal-04.jpg',
        icon: <IconClimate />,
        title: '氣候行動',
        subtitle: '建立能資源中心實踐再生能源系統'
    }, {
        id: 'our_goal-05',
        imgLink: '/images/our_goal-05.jpg',
        icon: <IconGlobal />,
        title: '全球夥伴',
        subtitle: '國際區域專案技術服務'
    }];

    useInView(inviewRef, options, onEntry, onExit);
    return (
        <Grid container justifyContent='center' alignItems='center' ref={inviewRef} mb={21}
            sx={{
                perspective: '100px',
                '&.visible': {
                }
            }}
        >
            <Grid item maxWidth='lg' width='100%'>
                <Grid container spacing={6}>
                    <Grid id='our-goal-btn-div' item xs={6} my='auto'>
                        <Typography variant='h2' color='secondary.main' mb={2.5}>我們的目標</Typography>
                        <Typography variant='subtitle2' color='common.black' mb={4}>
                        呼應2020年世界經濟論壇風險報告所提全球未來10年的前五大風險及聯合國永續發展目標(SDGs)17大目標，佳瑪環能產業推動的核心願景及目標，將可回應可負擔能源、永續城市、氣候行動、陸地生態及全球夥伴等5個目標。
                        </Typography>
                        <StyleButton id='our_goal-01-btn' variant='contained' color='success' onMouseEnter={onMouseEnter}>永續城市</StyleButton>
                        <StyleButton id='our_goal-02-btn' className='inactive' variant='contained' color='success' onMouseEnter={onMouseEnter}>可負擔能源</StyleButton>
                        <StyleButton id='our_goal-03-btn' className='inactive' variant='contained' color='success' onMouseEnter={onMouseEnter}>陸地生態</StyleButton>
                        <StyleButton id='our_goal-04-btn' className='inactive' variant='contained' color='success' onMouseEnter={onMouseEnter}>氣候行動</StyleButton>
                        <StyleButton id='our_goal-05-btn' className='inactive' variant='contained' color='success' onMouseEnter={onMouseEnter}>全球夥伴</StyleButton>
                    </Grid>
                    <Grid item xs={5}>
                        <Box position='relative'
                            sx={{
                                width: '100%',
                                height: '420px',
                            }}
                            id='our-goal-img-div'
                        >
                            {goalList.map(g => <RenderGoal key={g.id} {...g} />)}
                        </Box>

                    </Grid>
                    <Grid item xs={8} mx='auto'>
                        <Typography variant='subtitle2' color='common.black' pt={0.75}>
                        佳瑪環能科技產業推動的核心目標，係將不同類型廢棄物資材轉換成不同的能源型態，舉凡一般生活廢棄物、工業廢棄物、已掩埋廢棄物的活化、以及農林業廢棄物，都是我們所關注的寶貴資源。其可應用的能源型態多樣，例如發電、烘乾稻米與果物、供應鍋爐、製冷使用；與此同時，佳瑪環能更加注重對於廢棄物能源化製程中可能產生的污染控制，汙染控制符合國家環保規範，避免二次環境汙染。
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};