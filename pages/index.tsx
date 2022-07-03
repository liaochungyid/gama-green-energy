import AboutUsSection from '@components/AboutUsSection'
import CostEffectivenessSection from '@components/CostEffectivenessSection'
import FaqSection from '@components/FaqSection'
import FooterSection from '@components/FooterSection'
import HeroSection from '@components/HeroSection'
import LocaleServiceSection from '@components/LocaleServiceSection'
import NavgationBar from '@components/NavgationBar'
import NewAndMediaSection from '@components/NewAndMediaSection'
import OurGoalSection from '@components/OurGoalSection'
import OurStrengthSection from '@components/OurStrengthSection'
import PartnerSection from '@components/PartnerSection'
import PracticalCaseSection from '@components/PracticalCaseSection'
import SolutionSection from '@components/SolutionSection'
import type { NextPage } from 'next'
import React from 'react'

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <NavgationBar />
      <HeroSection />
      <AboutUsSection />
      <OurGoalSection />
      <SolutionSection />
      <CostEffectivenessSection />
      <PracticalCaseSection />
      <OurStrengthSection />
      <LocaleServiceSection />
      <NewAndMediaSection />
      <FaqSection />
      <PartnerSection />
      <FooterSection />
    </React.Fragment>
  )
}

export default Home
