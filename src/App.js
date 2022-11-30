import React from 'react'
import './App.css'
import Brand from './components/brand/Brand'
import CTA from './components/cta/CTA'
import Navbar from './components/navbar/Navbar'
import Features from './container/features/Features'
import Blog from './container/blog/Blog'
import Footer from './container/footer/Footer'
import WhatGPT3 from './container/whatGPT3/WhatGPT3'
import Posibility from './container/possibility/Posibility'
import Header from './container/header/header'

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        {/* <Header/> */}
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Posibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App