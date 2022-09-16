import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IFaqSection } from 'types';

interface IFaq {q: string, a: string};
interface IQAList {bgcolor: string; title: string; qaList: IFaq[]};

const RenderFaq = ({q, a}: IFaq) => (
    <Grid item xs={12} mb={2}>
        <Accordion sx={{boxShadow: '0px 3px 16px rgba(0, 0, 0, 0.11)'}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ '& .MuiAccordionSummary-content': {marginY: '0 !important', paddingX: '20px !important'} }}>
                <Typography variant='subtitle1' color='secondary.main' my={3}>{q}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{backgroundColor: '#F3F3F3', padding: '24px 40px'}}>
                <Typography variant='body1'>{a}</Typography>
            </AccordionDetails>
        </Accordion>
    </Grid>
);

const QAList = ({bgcolor, title, qaList}: IQAList ) => (
    <Grid container justifyContent='center' columnSpacing={3}>
        <Grid item xs={2} md={1} pb={2}>
            <Box bgcolor={bgcolor} ml='auto' height='100%' width={{xs: '100%'}} display='flex' sx={{alignItems: 'center', justifyContent: 'center'}}>
                <Typography variant='subtitle1' color='common.white' sx={{writingMode: 'vertical-rl', textOrientation: 'mixed'}}>{title}</Typography>
            </Box>
        </Grid>
        <Grid item xs={10} sm={9} md={8} lg={7}>
            {qaList.map(f => <RenderFaq key={f.q} {...f} />)}
        </Grid>
    </Grid>
);

export default function FaqSection({ CFaqSection }: {CFaqSection: IFaqSection}) {
    const {
        title,
        subtitleFuel,
        qaFuel,
        subtitleTechnology,
        qaTechnology,
        subtitlePowGen,
        qaPowGen,
        subtitleApplication,
        qaApplication
    } = CFaqSection;

    return (
        <Grid id='faq' container justifyContent='center' alignItems='center' mb={{xs: 6, sm: 12, md: 18, lg: 22.5}} data-aos="fade-up">
            <Grid item xs={12} mb={10} sx={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(/images/qa_bg.jpg)`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}>
                <Typography variant='h2' color='info.main' textAlign='center' py={10}>{title}</Typography>
            </Grid>

            <Grid item xs={12} maxWidth='xl' px={{xs: 1, sm: 2, md: 4, lg: 8}}>
                <QAList bgcolor='#0A5822' title={subtitleFuel} qaList={qaFuel} />
                <QAList bgcolor='#13702F' title={subtitleTechnology} qaList={qaTechnology} />
                <QAList bgcolor='#1F8940' title={subtitlePowGen} qaList={qaPowGen} />
                <QAList bgcolor='#2DA351' title={subtitleApplication} qaList={qaApplication} />
            </Grid>
        </Grid>
    )
};