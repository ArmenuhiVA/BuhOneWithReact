import React, { Component } from 'react'
import Header from './components/Header/Header'
import About from './components/About/About.jsx'
import Service from './components/Service/Service.jsx'
import AboutCompany from './components/AboutCompany/AboutCompany'
import Colaboraation from './components/Colaboration/Colaboraation'
import Reviews from './components/Reviews/Reviews.jsx'

export default class App extends Component {
  render() {
    return (
        <>
          <Header/>
          <About/>
          <Service/>
          <AboutCompany/>
          <Colaboraation/>
          <Reviews/>
        </>
    )
  }
}
