import React from 'react';
import '../styles/Cart.css'
import cart from '../assets/img/cart.png'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem'
import { clearItems } from './redux/slices/CartSlice';
import remove from '../assets/img/delete-128.webp'
import CartEmpty from './CartEmpty'


export default function Cart (){
  const dispatch = useDispatch()
  const {totalPrice,items}= useSelector(state=>state.cart);
  const totalCount=items.reduce((sum,item)=>sum+item.count,0)


  const onClickClear=()=>{
    if(window.confirm('Очистить корзину?')){
      dispatch(clearItems())
    }
  }

  if(!totalPrice){
    return <CartEmpty/>
  }
    return(
        <>
           <div className="container-cart">
              <div className="cart-tema">
                <div className="corzina">
                  <img src={cart} alt="" />
                  <h1>Корзина</h1>
                </div>
                <div onClick={onClickClear} className="clear-items">
                <img src={remove} alt="" />
                  <h1>Очистить корзину</h1>
                </div>
              </div>
               <div className="cart-item">
                  {
                    items.map((item)=>(
                      <CartItem key={item.id}{...item}/>
                    ))
                  }
               </div>
               <div className="sum">
                <h4>Всего книг:{totalCount} шт</h4>
                <h4>Сумма заказа:{totalPrice} тг</h4>
               <Link to ='/order'><button><h3>Оформить заказ</h3></button></Link>
               </div>
              
           </div>
        </>
    )
}