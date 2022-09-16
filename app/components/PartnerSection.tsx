import React from 'react';
import { Box, Grid, Typography } from "@mui/material";
import { IPartnerSection } from 'types'

interface IPartner {imgPath: string, alt: string, ratio: number};

const RenderPartnerLogo = ({imgPath, alt, ratio}: IPartner) => (
    <Box width={120 * ratio} height={120} display='inline-block' mx='12px'>
        <img width='100%' height='100%' style={{objectFit: 'contain'}} src={imgPath} alt={alt} srcSet="" />
    </Box>
);

export default function PartnerSection({ CPartnerSection }: {CPartnerSection: IPartnerSection}) {
    const {
        title,
        titleDes
    } = CPartnerSection;

    const partnerList: IPartner[] = [{
        imgPath: '/images/logo-01.png',
        alt: 'TGRT',
        ratio: 1
    }, {
        imgPath: '/images/logo-13.png',
        alt: '三生農機',
        ratio: 1
    }, {
        imgPath: '/images/logo-03.png',
        alt: 'SunForce',
        ratio: 1
    }, {
        imgPath: '/images/logo-07.png',
        alt: 'HUAHUA SHIN',
        ratio: 1
    }, {
        imgPath: '/images/logo-08.png',
        alt: 'iisi',
        ratio: 1
    }, {
        imgPath: '/images/logo-11.png',
        alt: '昇泰能源',
        ratio: 1
    }, {
        imgPath: '/images/logo-12.png',
        alt: '綠美地',
        ratio: 1
    }, {
        imgPath: '/images/logo-09.png',
        alt: '金茂榮',
        ratio: 1
    }, {
        imgPath: '/images/logo-10.png',
        alt: '科泰豐',
        ratio: 1
    }];
    
    const partnerList2: IPartner[] = [{
        imgPath: '/images/logo-04.png',
        alt: 'adicomp',
        ratio: 1
    }, {
        imgPath: '/images/logo-06.png',
        alt: 'EPICOR',
        ratio: 1
    }, {
        imgPath: '/images/logo-05.png',
        alt: 'AcroRed Technologies, Inc',
        ratio: 1
    }, {
        imgPath: '/images/logo-02.png',
        alt: 'Aurelia',
        ratio: 1
    }, {
        imgPath: '/images/logo-14.png',
        alt: '頌欣機械',
        ratio: 2
    }, {
        imgPath: '/images/logo-16.jpg',
        alt: 'AIREM ENERGY',
        ratio: 2
    }, {
        imgPath: '/images/logo-15.jpg',
        alt: 'OPRA',
        ratio: 2
    }];

    const partnerListWidth = 120 * partnerList.reduce((a, c) => a + c.ratio, 0) + 24 * partnerList.length;
    const partnerList2Width = 120 * partnerList2.reduce((a, c) => a + c.ratio, 0) + 24 * partnerList2.length;
    const sliderRef = React.useRef({} as HTMLDivElement);
    const sliderRef2 = React.useRef({} as HTMLDivElement);

    const handleSlider = React.useCallback(() => {
        if (sliderRef.current) {
            const prev = Number(sliderRef.current.style.left.replace('px', ''));
            if (prev <= -partnerListWidth) {
                sliderRef.current.style.left = '0px'            
            } else {
                sliderRef.current.style.left = `${prev - 1}px`            
            }
        }
    }, []);

    const handleSlider2 = React.useCallback(() => {
        if (sliderRef2.current) {
            const prev = Number(sliderRef2.current.style.left.replace('px', ''));
            if (prev >= 0) {
                sliderRef2.current.style.left = `${-partnerList2Width}px`
            } else {
                sliderRef2.current.style.left = `${prev + 1}px`            
            }
        }
    }, []);
    
    React.useEffect(() => {
        const silederInterval = setInterval(() => { handleSlider() }, 20);
        const silederInterval2 = setInterval(() => { handleSlider2() }, 20);
        return () => {
            clearInterval(silederInterval);
            clearInterval(silederInterval2);
        }
    }, []);


    return (
        <React.Fragment>
            <Grid container justifyContent='center' alignItems='center' mb={7.5} bgcolor='#07451A'>
                <Grid item maxWidth='xl' width='100%'>
                    <Grid container pl={{xs: 2, sm: 4, md: 8, lg: 15}} pr={{xs: 2, sm: 0}} spacing={{xs: 0, sm: 2, md: 4 ,lg: 7.25}}>
                        <Grid item xs={12} sm={6} display='flex' sx={{flexDirection: 'column', justifyContent: 'center'}}>
                            <Typography variant='h2' color='info.main' my={2.5}>{title}</Typography>
                            <Typography variant='subtitle2' color='common.white' mb={2.5}>
                            {titleDes}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} display={{xs: 'none', sm: 'block'}}>
                            <img width='100%' height='100%' style={{objectFit: 'cover'}} src={`/images/team.jpg`} alt="合作夥伴" srcSet="" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justifyContent='center' alignItems='center' mb={15}>
                <Grid item maxWidth='xl' width='100%' position='relative' overflow='hidden' height={240}>
                    <Box ref={sliderRef} position='absolute' sx={{top: 0, left: 0}} width={2 * partnerListWidth} overflow='hidden'>
                        {partnerList.map(p => <RenderPartnerLogo key={p.alt} {...p} />)}
                        {partnerList.map(p => <RenderPartnerLogo key={p.imgPath} {...p} />)}
                    </Box>
                    <Box ref={sliderRef2} position='absolute' sx={{top: 120, left: -partnerList2Width}} width={2 * partnerList2Width} overflow='hidden'>
                        {partnerList2.map(p => <RenderPartnerLogo key={p.alt} {...p} />)}
                        {partnerList2.map(p => <RenderPartnerLogo key={p.imgPath} {...p} />)}
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    )
};