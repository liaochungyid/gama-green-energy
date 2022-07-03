import React, { useRef } from 'react';
import useInView from '../utils/useInView';
import { Box, Button, Grid, Link, Typography } from "@mui/material";
import { prefix } from '@utils/prefix';

interface INews {title: string, time: string, content: string, link: string, imgOrVideo: React.ReactElement}

export default function NewAndMediaSection() {
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

    const veiwMoreRef = useRef({} as HTMLDivElement);

    const handleReadMore = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const target = e.target as HTMLButtonElement
        if (veiwMoreRef.current) {
            if (veiwMoreRef.current.classList.contains('visible')) {
                target.innerText = '看更多'
            } else {
                target.innerText = '收回'
            }
            veiwMoreRef.current.classList.toggle('visible')
        }
    };

    const RenderNews = ({title, time, content, link, imgOrVideo }: INews) => (
        <Grid item xs={12} p={[3, 4, 3, 2]} mb={3.75} display='flex' sx={{alignItems: 'center', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.11)'}}>
            <Box pr={4}>
                <Typography variant='h5' color='secondary.main' mb={1.5}>{title}</Typography>
                <Typography variant='body2' color='#757575' mb={1.5}>{time}</Typography>
                <Typography variant='body1' color='common.black' mb={3}>{content}</Typography>
                <Link href={link} target='_blank' variant='subtitle2' color='info.dark' underline='hover'>READ MORE</Link>
            </Box>
            <Box width={380} minHeight={236} flexGrow={0} flexShrink={0}>
                {imgOrVideo}
            </Box>
        </Grid>
    );

    const newsList: INews[] = [{
        title: '生物質能循環再生能源發電，循環經濟實踐垃圾變黃金',
        time: '2022-03-10 商周財富網',
        content: '大乃綠循環科技（TGRT）利用高溫氣化熱裂解技術，將可燃性廢棄物轉化為類生物質能，不僅能提供穩定再生能源發電，還能改善溫室效應，以循環經濟的模式，讓自然生態系統與產業文明...',
        link: 'https://wealth.businessweekly.com.tw/GArticle.aspx?id=ARTL001000865',
        imgOrVideo: <img width='100%' height='100%' style={{objectFit: 'cover'}} src={`${prefix}/images/news-1.png`} alt="生物質能循環再生能源發電，循環經濟實踐垃圾變黃金" srcSet="" />
    }, {
        title: '東臺灣新願景 農林業廢棄物轉能源',
        time: '2020-07-17 取自國立教育廣播電台',
        content: '教育部宜花東區域推動中心15日對外演示可移動式生質氣化發電技術，邀集東台灣相關領域專家、台北市七星農田水利會及產業界，針對田間、農場、林間疏伐等生物能源特性盤查、生質氣化技術原理、氣化後...',
        link: 'https://www.youtube.com/watch?v=c-Rpywy4FGw',
        imgOrVideo: <img width='100%' height='100%' style={{objectFit: 'cover'}} src={`${prefix}/images/news-3.jpg`} alt="東臺灣新願景 農林業廢棄物轉能源" srcSet="" />
    }, {
        title: '綠色組織：6都能源轉型表現與國際有差距',
        time: '2019-06-20 遠見雜誌/綠色和平',
        content: '面對全球暖化帶來的氣候危機，空污造成的健康威脅，國際間愈來愈多城市把「發展再生能源取代化石燃料」，列為城市永續的核心策略。綠色和平今天公布「都市自己綠—六都再生能源治理評比」報告...',
        link: 'https://www.youtube.com/embed/nNKLvOie87M',
        imgOrVideo: <iframe src="https://www.youtube.com/embed/nNKLvOie87M" width='100%' height='236px' style={{objectFit: 'cover'}} frameBorder="0" id="greennature-video-183175"></iframe>
    }];

    const moreNewsList: INews[] = [{
        title: '電價費率審議會決議將針對用電大戶調漲電價 平均電價漲幅為8.4％',
        time: '2022-06-27 經濟部能源局',
        content: '由於前次三月舉行的上半年審議會結論為「暫不決議」，經濟部今（27）日召開111年電價費率審議臨時會，審議上半年（４月至9月）的電價費率。本次審議會考量燃料價格居高不下，已造成台電營運的巨大壓力，應適時',
        link: 'https://www.moea.gov.tw/Mns/populace/news/News.aspx?kind=1&menu_id=40&news_id=100588',
        imgOrVideo: <img width='100%' height='100%' style={{objectFit: 'cover'}} src={`${prefix}/images/news-2.jpg`} alt="電價費率審議會決議將針對用電大戶調漲電價 平均電價漲幅為8.4％" srcSet="" />
    }, {
        title: '燒不掉的垃圾危機',
        time: '2017-03-05 公共電視-我們的島',
        content: '建農垃圾掩埋場收納全台東市的廢棄物，容量有33萬5000立方公尺，目前只剩下7.5％的掩埋量，已經接近飽和。台東縣有十三座垃圾掩埋場，幾乎都和建農垃圾掩埋場一樣有爆滿危機...',
        link: 'https://www.youtube.com/embed/-i_5bbgZNH4',
        imgOrVideo: <iframe src="https://www.youtube.com/embed/-i_5bbgZNH4" width='100%' height='236px' style={{objectFit: 'cover'}} frameBorder="0" id="greennature-video-265064"></iframe>
    }, {
        title: '廚餘再生之路',
        time: '2016-05-23 公共電視-我們的島',
        content: '十多年前，民間開始推動廚餘回收，各地方政府也跟進，廚餘回收成為民眾普遍的習慣。但根據環保署統計，台灣廚餘回收率只有10％，近幾年始終無法提升，大部分廚餘依舊被送進焚化爐...',
        link: 'https://www.youtube.com/embed/yLc_ZVHJScg',
        imgOrVideo: <iframe src="https://www.youtube.com/embed/yLc_ZVHJScg" width='100%' height='236px' style={{objectFit: 'cover'}} frameBorder="0" id="greennature-video-927865"></iframe>
    }];

    useInView(inviewRef, options, onEntry, onExit);
    return (
        <Grid id='social' container justifyContent='center' alignItems='center' ref={inviewRef} mb={22.5}
            sx={{
                perspective: '100px',
                '&.visible': {
                }
            }}
        >
            <Grid item maxWidth='lg' width='100%'>
                <Typography variant='h2' color='secondary.main' textAlign='center' mb={7.5}>媒體新聞</Typography>

                <Grid container>
                    {newsList.map(n => (<RenderNews key={n.title} {...n} />))}
                </Grid>

                <Grid container maxHeight={0} ref={veiwMoreRef} overflow='hidden' sx={{'&.visible': {maxHeight: '960px'}, transition: 'max-height 1s ease-in-out 0s'}}>
                    {moreNewsList.map(n => (<RenderNews key={n.title} {...n} />))}
                </Grid>
                <Grid container>
                    <Button variant='contained' color='success' sx={{fontSize: '24px', padding: '10px 80px', marginX: 'auto', marginTop: 2.5}} onClick={handleReadMore}>看更多</Button>
                </Grid>
            </Grid>
        </Grid>
    )
};