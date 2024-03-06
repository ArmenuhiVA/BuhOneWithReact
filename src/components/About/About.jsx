import React, { Component } from 'react'

import './About.css'

import Rectangle from '../../assets/Rectangle.png'

export default class About extends Component {
  render() {
    return (
        <div className="img-container">
            <img src={Rectangle} alt="Rectangle"/>
            <h1> Бухгалтерские услуги <br/> в вашем городе </h1>
            <button>Наша презентация</button>
        </div>
    )
  }
}
