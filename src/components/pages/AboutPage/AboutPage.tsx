import React from 'react'
import Header from '../../features/Header/Header'
import Banner from '../../features/Banner/Banner'
import History from '../../features/History/History'
import RoomsCharacteristics from '../../features/RoomsCharacteristics/RoomsCharacteristics'
import Footer from '../../features/Footer/Footer'

function AboutPage() {
  return (
    <div>
        <Header/>
        <Banner/>
        <History/>
        <RoomsCharacteristics/>
        <Footer/>
    </div>
  )
}

export default AboutPage