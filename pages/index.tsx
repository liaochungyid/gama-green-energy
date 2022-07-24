import { AppContext, AppState } from '@context/index';
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
import axios from 'axios'
import React from 'react'
import GlobalStyle from 'theme/GlobalStyle';
import AOS from 'aos';

const Home: NextPage = () => {
  const [lang, setLang] = React.useState('zh');
  const [context, setContext] = React.useState({});
  const toggleLang = () => { setLang(prev => prev === 'zh' ? 'en' : 'zh'); };

  const aosRefresh = () => AOS.refresh();

  React.useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out',
      offset: 60,
    });

    document.addEventListener('resize', aosRefresh);
    if (!navigator?.languages.includes('zh')) {
      setLang('en')
    }; 

    return () => removeEventListener('resize', aosRefresh);
  }, [])

  React.useEffect(() => {
    if (lang !== 'zh') {
      axios
        .get(`/context_${lang}.json`)
        .then(({ data }) => {
          if (typeof(data) === 'object') {
            setContext(data)
          }
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      setContext({})
    }
  }, [lang]);

  return (
    <AppContext.Provider value={{...AppState, ...context, lang, toggleLang}}>
      {GlobalStyle}
      <NavgationBar />
      <HeroSection />
      <AboutUsSection />
      <SolutionSection />
      <CostEffectivenessSection />
      <PracticalCaseSection />
      <OurStrengthSection />
      {/* <NewAndMediaSection /> */}
      <FaqSection />
      <PartnerSection />
      <FooterSection />
    </AppContext.Provider>
  )
}

export default Home
