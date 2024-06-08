import React from 'react';
import empty from '../assets/img/empty.webp';
import '../styles/CartEmpty.css';
import { Link } from 'react-router-dom';

export default function CartEmpty (){
    return(
        <>
          <img className='empty' src={empty} alt="" />
          <span className='cart1'><b>Ваша корзина пуста </b><br></br>
          <br></br>
        Вероятней всего вы еще не заказывали книжку</span>

          <Link to='/'>
          <div className="button">
            Вернуться назад
          </div>
          </Link>
        </>
    )
}