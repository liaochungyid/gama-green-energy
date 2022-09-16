import Context from '@context/en';
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
import GlobalStyle from 'theme/GlobalStyle';
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
        <title>Gama Green Engergy | Taiwan</title>
        <meta name="description" content="GAMA uses special gasification technology to convert organic waste resources into syngas (RDF-7) with high energy conversion efficiency in Refuse derived fuel, which is then converted into electricity through micro-turbine generators (MTG) to provide stable regeneration energy." />
        <meta name="author" content="FE Lyle, DESIGN Chloe" />
        <meta property="og:url" content="en.html" />
        <meta property="og:site_name" content="Gama Green Engergy | Taiwan" />
        <meta property="og:title" content="Gama Green Engergy | Taiwan" />
        <meta property="og:description" content="GAMA uses special gasification technology to convert organic waste resources into syngas (RDF-7) with high energy conversion efficiency in Refuse derived fuel, which is then converted into electricity through micro-turbine generators (MTG) to provide stable regeneration energy." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/leaf.jpg" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Gama Green Engergy | Taiwan" />
        <meta name="twitter:description" content="GAMA uses special gasification technology to convert organic waste resources into syngas (RDF-7) with high energy conversion efficiency in Refuse derived fuel, which is then converted into electricity through micro-turbine generators (MTG) to provide stable regeneration energy." />
        <meta name="twitter:image" content="/images/leaf.jpg" />
        <meta name="twitter:image:alt" content="Gama Green Engergy | Taiwan" />
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