import React from 'react'
import Hero from "../components/Hero"
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import MyPolicy from '../components/MyPolicy'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div>
        <Hero/>
        <LatestCollection/>
        <BestSeller/>
        <MyPolicy/>
        <Newsletter/>
    </div>
  )
}

export default Home