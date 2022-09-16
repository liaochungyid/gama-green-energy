import React from 'react';
import IconIdea from '@icons/icon-idea.svg'
import IconIdcard from '@icons/icon-id_card.svg'
import IconFileText from '@icons/icon-file_text_filled.svg'
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { IOurStrengthSection } from 'types';

interface CardItemProps {imgpath: string; icon: JSX.Element; title: string; titleDes: string};

const CardItem = ({imgpath, icon, title, titleDes}: CardItemProps) => (
    <Grid item xs={12} sm={4}>
        <Card sx={{backgroundColor: '#07451A', borderRadius: 0, height: '100%'}}>
            <CardMedia component='img' height={230} image={imgpath} alt={title} />
            <CardContent sx={{padding: '24px 24px 48px !important'}}>
                {icon}
                <Typography variant='h5' my={2.5} color='common.white'>{title}</Typography>
                <Typography variant='body1' color='common.white'>{titleDes}</Typography>
            </CardContent>
        </Card>
    </Grid>
);

export default function OurStrengthSection({ COurStrengthSection }: {COurStrengthSection: IOurStrengthSection}) {
    const {
        title,
        cards
    } = COurStrengthSection;

    const ci = [{
        imgpath: `/images/advantage-01.jpg`,
        icon: <IconIdea />
    }, {
        imgpath: `/images/advantage-02.jpg`,
        icon: <IconIdcard />
    }, {
        imgpath: `/images/advantage-03.jpg`,
        icon: <IconFileText />
    }];

    return (
        <Grid id='strength' container justifyContent='center' alignItems='center' mb={{xs: 6, sm: 12, md: 18, lg: 22.5}}>
            <Grid item maxWidth='xl' width='100%' px={{xs: 1, sm: 2, md: 4, lg: 8}} data-aos="fade-up">
                <Typography variant='h2' color='secondary.main' mb={7.5}>{title}</Typography>

                <Grid container spacing={2.5} mb={7.5}>
                    {cards.map((c, i) => (
                        <CardItem key={c.title} imgpath={ci[i].imgpath} icon={ci[i].icon}
                        title={c.title} titleDes={c.titleDes} />
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
};