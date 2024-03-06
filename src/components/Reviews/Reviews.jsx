import React, { Component } from 'react'

import './Reviews.css'

export default class Reviews extends Component {
  render() {
    return (
        <div class="reviews">
         <div class="thanks">
          <h2>Отзывы</h2>
          <h1>Ваши благодарности</h1>
          <div class="text">
            <div>
            <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. 
              Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
               В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, 
               используя Lorem Ipsum для распечатки образцов. 
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
            </p>
           </div>
          </div>
        </div>
      </div>
    )
  }
}
