import React, { useRef } from 'react';
import useInView from '../utils/useInView';
import IconIdea from '@icons/icon-idea.svg'
import IconIdcard from '@icons/icon-id_card.svg'
import IconFileText from '@icons/icon-file_text_filled.svg'
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { AppContext } from '@context/index';
import { prefix } from '@utils/prefix';

interface CardItemProps {imgpath: string; icon: JSX.Element; title: string; titleDes: string};

export default function OurStrengthSection() {
    const { OurStrengthSection } = React.useContext(AppContext);
    const {
        title,
        cards
    } = OurStrengthSection;
    const cardsImage = [{
        imgpath: `${prefix}/images/advantage-01.jpg`,
        icon: <IconIdea />
    }, {
        imgpath: `${prefix}/images/advantage-02.jpg`,
        icon: <IconIdcard />
    }, {
        imgpath: `${prefix}/images/advantage-03.jpg`,
        icon: <IconFileText />
    }];
    const cardList = cards.map((c, i) => ({
        ...c,
        ...cardsImage[i]
    }));

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

    const CardItem = ({imgpath, icon, title, titleDes}: CardItemProps) => (
        <Grid item xs={4}>
            <Card sx={{backgroundColor: '#07451A', borderRadius: 0, height: '100%'}}>
                <CardMedia component='img' height={230} image={imgpath} alt={title} />
                <CardContent sx={{padding: '24px 24px 48px !important'}}>
                    <>
                        {icon}
                        <Typography variant='h5' my={2.5} color='common.white'>{title}</Typography>
                        <Typography variant='body1' color='common.white'>{titleDes}</Typography>
                    </>
                </CardContent>
            </Card>
        </Grid>
    )

    return (
        <Grid id='strength' container justifyContent='center' alignItems='center' ref={inviewRef} mb={22.5}
            sx={{
                perspective: '100px',
                '&.visible': {
                }
            }}
        >
            <Grid item maxWidth='xl' width='100%'>
                <Typography variant='h2' color='secondary.main' mb={7.5}>{title || '我們的優勢'}</Typography>

                <Grid container spacing={2.5} mb={7.5}>
                    {cardList.map(c => (
                        <CardItem key={c.title} imgpath={c.imgpath} icon={c.icon}
                        title={c.title} titleDes={c.titleDes} />
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
};