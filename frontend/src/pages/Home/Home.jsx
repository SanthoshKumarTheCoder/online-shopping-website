import React from 'react'
import Header from '../../components/Header/Header'
import Category from '../../components/Category/Category'
import Contact from '../Contact/Contact'
import Reviews from '../../components/Category/Reviews'
import Showitem from '../../components/Header/Showitem'


function Home() {
  return (
    <div>
      <Header/>
      <Showitem/>
      <Category/>
      <Contact/>
      <Reviews/>
    </div>
  )
}

export default Home
