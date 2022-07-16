import { AppContext, AppState } from '@context/index';
import AboutUsSection from '@components/AboutUsSection'
import CostEffectivenessSection from '@components/CostEffectivenessSection'
import FaqSection from '@components/FaqSection'
import FooterSection from '@components/FooterSection'
import HeroSection from '@components/HeroSection'
import LocaleServiceSection from '@components/LocaleServiceSection'
import NavgationBar from '@components/NavgationBar'
import NewAndMediaSection from '@components/NewAndMediaSection'
import OurStrengthSection from '@components/OurStrengthSection'
import PartnerSection from '@components/PartnerSection'
import PracticalCaseSection from '@components/PracticalCaseSection'
import SolutionSection from '@components/SolutionSection'
import type { NextPage } from 'next'
import axios from 'axios'
import React from 'react'

const Home: NextPage = () => {
  const [lang, setLang] = React.useState('zh');
  const [context, setContext] = React.useState({});
  const toggleLang = () => { setLang(prev => prev === 'zh' ? 'en' : 'zh'); };

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
  }, [lang])

  return (
    <AppContext.Provider value={{...AppState, ...context, toggleLang}}>
      <NavgationBar />
      <HeroSection />
      <AboutUsSection />
      <SolutionSection />
      <CostEffectivenessSection />
      <PracticalCaseSection />
      <OurStrengthSection />
      <LocaleServiceSection />
      {/* <NewAndMediaSection /> */}
      <FaqSection />
      <PartnerSection />
      <FooterSection />
    </AppContext.Provider>
  )
}

export default Home
