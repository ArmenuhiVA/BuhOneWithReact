import React, { Component } from 'react'

import Rectangle2 from '../../../assets/Rectangle2.png'

import './ServiceItem.css'

export default class ServiceIteem extends Component {
  render() {
    return (
        <div className="div1">
            <img src={Rectangle2} alt="Rectangle2"/>
            <p>Бухгалтерское обслуживание </p>
        </div>
    )
  }
}
