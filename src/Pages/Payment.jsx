import React from 'react';
import payment from '../assets/img/pay.png';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

import { Link } from 'react-router-dom';
import '../styles/Payment.css'
export default function Payment (){
    return(
        <>
        <Menu></Menu>
           <div className="cont-pay">
           <div className="pay-flex">
             <h1 className='pay'>Способы оплаты</h1>
             <div className="pay-flex1">
               <p>Платеж карточкой</p>
             </div>
           </div>
           <img className='imgPay' src={payment} alt="" />
           <p>Возможность оплатить наличными при получении посылки имеется в следующих случаях: <br></br>
- при получении посылки через курьерскую доставку, передав деньги курьеру; возможно в следующих городах: Актау, Актобе, Алматы, Астана, Атырау, Караганда,<br></br> Кокшетау, Костанай, Кызылорда, Павлодар, Петропавловск, Семей, Талдыкорган, Тараз, Уральск, Усть-Каменогорск, Шымкент, Экибастуз;

<br></br>- при получении посылки через постаматы MyPost;

<br></br>- при получении заказа в пункте выдачи.</p>
           </div>
           <Footer></Footer>
        </>
    )
}