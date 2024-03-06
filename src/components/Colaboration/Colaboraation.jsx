import React, { Component } from 'react'

import Microsoft from '../../assets/Rectangle2.2.png'

import './Colaboration.css'

export default class Colaboraation extends Component {
  render() {
    return (
      <div class="colaboration">
        <div class="companies">
          <h2>Наши клиенты</h2>
          <h1>С нами работают</h1>
          <img src={Microsoft} alt="Microsoft"/>
          <img src={Microsoft} alt="Microsoft"/>
          <img src={Microsoft} alt="Microsoft"/>
          <img src={Microsoft} alt="Microsoft"/>
        </div>
      </div>
    )
  }
}
