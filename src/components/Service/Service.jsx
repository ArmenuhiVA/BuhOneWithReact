import React, { Component } from 'react'

import Rectangle2 from "../../assets/Rectangle2.png"

import  './Service.css'

import ServiceIteem from './ServiceItem/ServiceIteem'

export default class Service extends Component {
  render() {
    return (
        <div className="service">
            <div className="text">
            <p>Наши услуги</p>
            <h2>Мы специализируемся</h2>
            </div>
            <div className="img1">
                <ServiceIteem/>
                <ServiceIteem/>
                <ServiceIteem/>
            </div>
            <div className="img2">
                <ServiceIteem/>
                <ServiceIteem/>
                <ServiceIteem/>
            </div>
       </div>
    )
  }
}
