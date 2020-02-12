import React from 'react'
import Header from '../components/Header'
import SearchArea from '../components/SearchArea'
import Results from '../components/Results'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div>
      <Header></Header>
      <SearchArea></SearchArea>
      <Results></Results>
      <Footer></Footer>
    </div>
  )
}

export default Homepage
