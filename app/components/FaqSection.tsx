import React, { useRef } from 'react';
import useInView from '../utils/useInView';
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface IFaq {q: string, a: string};

export default function FaqSection() {
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
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ '& .MuiAccordionSummary-content': {marginY: 0, paddingX: 2.375}, '& .Mui-expanded': {marginY: 0, paddingX: 2.375}}}>
                    <Typography variant='subtitle1' color='secondary.main' my={3}>{q}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{backgroundColor: '#F3F3F3', padding: '24px 40px'}}>
                    <Typography variant='body1'>{a}</Typography>
                </AccordionDetails>
            </Accordion>
        </Grid>
    );

    const faqList: IFaq[] = [{
        q: '氣化技術(gasification technology)',
        a: '是一種把煤炭、石油、生質物等含碳的原料，在控制氧氣量及高溫的條件下，轉換成甲烷、一氧化碳和氫氣的方法。GAMA通過控制物料在高於1000度的溫度下不完全燃燒，並與受控量的氧氣和/或水蒸氣發生反應，氣化過程中所產生的混合氣體稱為合成氣(syngas，又稱可燃氣)，其本身是一種廢棄物衍生燃料 RDF-7。'
    }, {
        q: '固體再生燃料(Solid recovered fuel, SRF)',
        a: '指以具適燃性之廢棄物做為燃料，並須符合固體再生燃料品質標準者，稱為 SRF(Solid recovered fuel)，中文亦可稱為固體回收燃料、固體再利用燃料或固體再生燃料。'
    }, {
        q: '廢棄物衍生燃料(refuse derived fuel, RDF',
        a: '指利用物理或熱化學等方法把將都市垃圾、一般事業廢棄物及農業廢棄物等廢棄物，藉由破碎、分選、乾燥、裂解、氣化及均質化等處理，轉化成性質均一的燃料 。依據廢棄物處理程序的不同，分為RDF-1~7個種類等級，燃料的種類等級越高，代表能量利用的效率愈高。'
    }, {
        q: '熱電聯產 (Cogeneration, combined heat and power, CHP)',
        a: '在大多數單獨的電力生產中，不可能將所有的熱能轉換成電能，略多於一半的熱量將會成為廢熱，並通過冷卻塔或煙道氣等方式排放到自然環境中。'
    }, {
        q: '冷熱電聯產 (Combined Cooling Heating and Power, CCHP)',
        a: 'GAMA運用能量梯級利用的概念，將發電過程、製冷及制熱一體化，其特點是將溫度較高具有較多可用熱能的廢熱用來發電，溫度較低具較少熱能的廢熱用來供熱或是製冷'
    }];

    useInView(inviewRef, options, onEntry, onExit);
    return (
        <Grid id='faq' container justifyContent='center' alignItems='center' ref={inviewRef} mb={22.5}
            sx={{
                perspective: '100px',
                '&.visible': {
                }
            }}
        >
            <Grid item maxWidth='lg' width='100%'>
                <Typography variant='h2' color='secondary.main' textAlign='center' mb={7.5}>相關問答</Typography>

                {faqList.map(f => <RenderFaq key={f.q} {...f} />)}

            </Grid>
        </Grid>
    )
};