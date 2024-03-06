import React, { Component } from 'react'

import './Header.css'

import logo from '../../assets/logo.png'

export default class Header extends Component {
  render() {
    return (
        <div className="topnav" id="myTopnav">
            <div className="first">
            </div>
                <img src={logo} alt="logo"/>
                <h2>BuhOne</h2>
                <a href="#Главная" className="active">Главная</a>
                <a href="#услуги">услуги</a>
                <a href="#кейсы">кейсы</a>
                <a href="#о компании">о компании</a>
                <a href="#контакты">контакты</a>
                {/* <a href="javascript:void(0);" className="icon" onClick="myFunction()"> */}
                {/* <i className="fa fa-bars"></i> */}
            {/* </a> */}
      </div>
    )
  }
}
