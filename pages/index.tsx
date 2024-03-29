import Context from '@context/zh';
import AboutUsSection from '@components/AboutUsSection'
import CostEffectivenessSection from '@components/CostEffectivenessSection'
import FaqSection from '@components/FaqSection'
import FooterSection from '@components/FooterSection'
import HeroSection from '@components/HeroSection'
import NavgationBar from '@components/NavgationBar'
import OurStrengthSection from '@components/OurStrengthSection'
import PartnerSection from '@components/PartnerSection'
import PracticalCaseSection from '@components/PracticalCaseSection'
import SolutionSection from '@components/SolutionSection'
import type { NextPage } from 'next'
import React from 'react'
import AOS from 'aos';
import IPageProps from 'types';
import Head from 'next/head';

const Home: NextPage<IPageProps> = ({
  NavgationBar: CNavgationBar, 
  HeroSection: CHeroSection,
  AboutUsSection: CAboutUsSection,
  SolutionSection: CSolutionSection,
  CostEffectivenessSection: CCostEffectivenessSection,
  PracticalCaseSection: CPracticalCaseSection,
  OurStrengthSection: COurStrengthSection,
  FaqSection: CFaqSection,
  PartnerSection: CPartnerSection,
  FooterSection: CFooterSection
}) => {
  const aosRefresh = React.useCallback(() => AOS.refresh(), []);

  React.useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out',
      offset: 60,
    });
    document.addEventListener('resize', aosRefresh);
    return () => removeEventListener('resize', aosRefresh);
  }, [])

  return (
    <>
      <Head>
        <title>佳瑪環能科技 | Gama Green Engergy</title>
        <meta name="description" content="佳瑪環能運用特殊氣化(Gasification)技術，將有機廢棄資源轉化為廢棄物衍生燃料(RDF)中具有較高能源轉換效率的RDF-7合成氣(syngas)，再透過微型渦輪發電機(MTG)轉換成電力提供穩定的再生能源" />
        <meta name="author" content="FE Lyle, DESIGN Chloe" />
        <meta property="og:url" content="index.html" />
        <meta property="og:site_name" content="佳瑪環能科技 | Gama Green Engergy" />
        <meta property="og:title" content="佳瑪環能科技 | Gama Green Engergy" />
        <meta property="og:description" content="佳瑪環能運用特殊氣化(Gasification)技術，將有機廢棄資源轉化為廢棄物衍生燃料(RDF)中具有較高能源轉換效率的RDF-7合成氣(syngas)，再透過微型渦輪發電機(MTG)轉換成電力提供穩定的再生能源" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/leaf.jpg" />
        <meta property="og:locale" content="zh_tw" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="佳瑪環能科技 | Gama Green Engergy" />
        <meta name="twitter:description" content="佳瑪環能運用特殊氣化(Gasification)技術，將有機廢棄資源轉化為廢棄物衍生燃料(RDF)中具有較高能源轉換效率的RDF-7合成氣(syngas)，再透過微型渦輪發電機(MTG)轉換成電力提供穩定的再生能源" />
        <meta name="twitter:image" content="/images/leaf.jpg" />
        <meta name="twitter:image:alt" content="佳瑪環能科技 | Gama Green Engergy" />
      </Head>
      <NavgationBar CNavgationBar={CNavgationBar} />
      <HeroSection CHeroSection={CHeroSection} />
      <AboutUsSection CAboutUsSection={CAboutUsSection} />
      <SolutionSection CSolutionSection={CSolutionSection} />
      <CostEffectivenessSection CCostEffectivenessSection={CCostEffectivenessSection} />
      <PracticalCaseSection CPracticalCaseSection={CPracticalCaseSection} />
      <OurStrengthSection COurStrengthSection={COurStrengthSection} />
      <FaqSection CFaqSection={CFaqSection} />
      <PartnerSection CPartnerSection={CPartnerSection} />
      <FooterSection CFooterSection={CFooterSection} />
    </>
  )
}

export default Home

export const getStaticProps = () => {
  return {
    props: Context
  };
};