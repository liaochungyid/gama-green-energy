import React from 'react';
import { Box, Grid, Link, Tooltip, Typography } from "@mui/material";
import { IPartnerSection } from 'types'

interface IPartner { imgPath: string; alt: string; ratio: number; link: string; };

const RenderPartnerLogo = ({ imgPath, alt, ratio, link }: IPartner) => (
    <Tooltip title={alt}>
        <Link width={120 * ratio} height={120} display='inline-block' mx='12px' underline='none' href={link} target='_blank'>
            <img width='100%' height='100%' style={{ objectFit: 'contain' }} src={imgPath} alt={alt} srcSet="" />
        </Link>
    </Tooltip>
);

export default function PartnerSection({ CPartnerSection }: { CPartnerSection: IPartnerSection }) {
    const {
        title,
        titleDes
    } = CPartnerSection;

    const partnerList: IPartner[] = [{
        imgPath: '/images/logo-sunforce.png',
        alt: '晟福科技 - Sunforce Technologies',
        ratio: 2.8,
        link: 'https://www.sunforce.com.tw/',
    }, {
        imgPath: '/images/logo-green-earth-eco.jpg',
        alt: '綠美地環保資源 - Green Earth Eco',
        ratio: 1.3,
        link: 'https://www.104.com.tw/company/1a2x6bkweb',
    }, {
        imgPath: '/images/logo-sunghsing.png    ',
        alt: '頌欣機械 - Sung-Hsing Enterprise',
        ratio: 2.6,
        link: 'https://www.hocom.tw/h/index?key=8277077768',
    }, {
        imgPath: '/images/logo-sunshen-am.png',
        alt: '三生農機- San-Shen Agricultural Machinery',
        ratio: 1,
        link: 'http://www.sanshen-am.com.tw/zh-tw',
    }, {
        imgPath: '/images/logo-green-prosperity.png',
        alt: '金茂榮環境工程 - Green Prosperity Eco-Awareness',
        ratio: 3,
        link: 'https://www.greenprosperity.com.tw/',
    }];

    const partnerList2: IPartner[] = [{
        imgPath: '/images/logo-airmen-energy.jpg',
        alt: 'Airem Energy - Driving the World’s Energy Transition',
        ratio: 4,
        link: 'https://airemenergy.com/',
    }, {
        imgPath: '/images/logo-adicomp.png',
        alt: 'Adicomp S.r.l. - Advanced air and gas solutions',
        ratio: 2.1,
        link: 'https://www.adicomp.com/',
    }, {
        imgPath: '/images/logo-OPRA-Turbines.jpg',
        alt: 'OPRA Turbines - An Airem Energy Company',
        ratio: 1.8,
        link: 'https://www.opra.energy/zh/',
    }, {
        imgPath: '/images/logo-DPCleanTech.png',
        alt: 'DPClean Tech',
        ratio: 2.9,
        link: 'https://www.dpcleantech.com/',
    }, {
        imgPath: '/images/logo-aurelia.png',
        alt: 'Aurelia - Aurelia Turbines Oy',
        ratio: 1,
        link: 'https://aureliaturbines.com/',
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
                    <Grid container pl={{ xs: 2, sm: 4, md: 8, lg: 15 }} pr={{ xs: 2, sm: 0 }} spacing={{ xs: 0, sm: 2, md: 4, lg: 7.25 }}>
                        <Grid item xs={12} sm={6} display='flex' sx={{ flexDirection: 'column', justifyContent: 'center' }}>
                            <Typography variant='h2' color='info.main' my={2.5}>{title}</Typography>
                            <Typography variant='subtitle2' color='common.white' mb={2.5}>
                                {titleDes}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} display={{ xs: 'none', sm: 'block' }}>
                            <img width='100%' height='100%' style={{ objectFit: 'cover' }} src={`/images/team.jpg`} alt="合作夥伴" srcSet="" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justifyContent='center' alignItems='center' mb={15}>
                <Grid item maxWidth='xl' width='100%' position='relative' overflow='hidden' height={240}>
                    <Box ref={sliderRef} position='absolute' sx={{ top: 0, left: 0 }} width={2 * partnerListWidth} overflow='hidden'>
                        {partnerList.map(p => <RenderPartnerLogo key={p.alt} {...p} />)}
                        {partnerList.map(p => <RenderPartnerLogo key={p.imgPath} {...p} />)}
                    </Box>
                    <Box ref={sliderRef2} position='absolute' sx={{ top: 120, left: -partnerList2Width }} width={2 * partnerList2Width} overflow='hidden'>
                        {partnerList2.map(p => <RenderPartnerLogo key={p.alt} {...p} />)}
                        {partnerList2.map(p => <RenderPartnerLogo key={p.imgPath} {...p} />)}
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    )
};