import React, { Component } from 'react'

export default class Last extends Component {
  render() {
    return (
        <div class="last">
            <img src="Rectangle.png" alt=""/>
                <div class="contacts">
                <h2>Связь с нами</h2>
                <p>У вас остались вопросы? Напишите нам - мы ответим в ближайшее время!</p>
                </div>
            <div class="fillformat">
                <p>Имя</p>
                <input type="name" placeholder="Имя"/>
                <p>Фамилия</p>
                <input type="surname" placeholder="Фамилия"/>
                <p>Сообщение</p>
                <input type="surname" placeholder="Ваше сообщение"/>
                <button>Отправить сообщение</button>
            </div>
        </div>
    )
  }
}
