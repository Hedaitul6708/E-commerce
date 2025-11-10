import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Categorys from '../Components/Categorys'
import PromoSection from '../Components/PromoSection'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Categorys></Categorys>
      <PromoSection></PromoSection>
    </div>
  )
}

export default Home
