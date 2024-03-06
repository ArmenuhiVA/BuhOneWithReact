import React, { Component } from 'react'
import AboutCompanyComponents from './AboutCmpanyComponents/AboutCompanyComponents'

import './AboutCompany.css'

export default class AboutCompany extends Component {
  render() {
    return (
        <div class="aboutCompany">
            <div class="first1">
                <h2>О нас</h2>
                <h1>Компания ИвановПром</h1>
                <p>Lorem Ipsum - это текст-"рыба", часто используемый в 
                печати и вэб-дизайне. Lorem Ipsum является стандартной 
                "рыбой" для текстов на латинице с начала XVI века. 
                В то время некий безымянный печатник создал большую коллекцию размеров и
                форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не 
                только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный
                    дизайн.
                </p>
            </div>
        <div class="middle"></div>
        <div class="second2">
          <AboutCompanyComponents/>
          <AboutCompanyComponents/>
          <AboutCompanyComponents/>
          <AboutCompanyComponents/>
        </div>
      </div>
    )
  }
}
