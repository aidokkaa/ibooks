import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem,minusItem,clearItems } from './redux/slices/CartSlice';
export default function CartItem ({id,title,price,count,imageUrl}){
  const dispatch=useDispatch();
  const onClickPlus =()=>{
    dispatch(addItem({
        id
    }))
  }
const  onClickMinus=()=>{
 dispatch(minusItem(id))
}
const onClickClear=()=>{
  if(window.confirm('Очистить все')){
    dispatch(clearItems())
  }
}
    return(
        <>
     
        <div className="item">
          <div className="item-img">
          <img className='kartinka' src={imageUrl} />
          <h2 className='title'>{title}</h2>
          </div>
          <div className="min-plus">
          <div onClick={onClickMinus} className='minus'>-</div>
          {count}
          <div onClick={onClickPlus} className='plus1'>+</div>
          </div>
             <h4 className='price'>{price*count} тг</h4>
          
        </div>
        </>
       
    )
}