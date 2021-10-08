import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'

import Logo from '../components/templates/Logo/Logo'
import Nav from '../components/templates/Nav/Nav'
import Home from '../components/Home/Home'
import Footer from '../components/templates/Footer/Footer'

export default props => 
  <div className="app">
    <Logo />
    <Nav /> 
    <Home/>
    <Footer />
  </div>