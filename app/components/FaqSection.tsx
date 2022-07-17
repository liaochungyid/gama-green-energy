import React, { useRef } from 'react';
import useInView from '../utils/useInView';
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography } from "@mui/material";
import { AppContext } from '@context/index';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { prefix } from '@utils/prefix';

interface IFaq {q: string, a: string};
interface IQAList {bgcolor: string; title: string; qaList: IFaq[]}

export default function FaqSection() {
    const { FaqSection } = React.useContext(AppContext);
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
    } = FaqSection;

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
            <Grid item xs={1} pb={2}>
                <Box bgcolor={bgcolor} ml='auto' height='100%' width='50%' display='flex' sx={{alignItems: 'center', justifyContent: 'center'}}>
                    <Typography variant='subtitle1' color='common.white'>{title}</Typography>
                </Box>
            </Grid>
            <Grid item xs={7}>
                {qaList.map(f => <RenderFaq key={f.q} {...f} />)}
            </Grid>
        </Grid>
    );

    useInView(inviewRef, options, onEntry, onExit);
    return (
        <Grid id='faq' container justifyContent='center' alignItems='center' ref={inviewRef} mb={22.5}
            sx={{
                perspective: '100px',
                '&.visible': {
                }
            }}
        >
            <Grid item xs={12} mb={10} sx={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${prefix}/images/qa_bg.jpg)`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}>
                <Typography variant='h2' color='info.main' textAlign='center' py={10}>{title || '相關問答'}</Typography>
            </Grid>

            <Grid item xs={12} maxWidth='xl'>
                <QAList bgcolor='#0A5822' title={subtitleFuel || '燃料'} qaList={qaFuel} />
                <QAList bgcolor='#13702F' title={subtitleTechnology || '技術'} qaList={qaTechnology} />
                <QAList bgcolor='#1F8940' title={subtitlePowGen || '發電'} qaList={qaPowGen} />
                <QAList bgcolor='#2DA351' title={subtitleApplication || '應用'} qaList={qaApplication} />
            </Grid>
        </Grid>
    )
};