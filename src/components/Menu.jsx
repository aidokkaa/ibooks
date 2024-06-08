import "../styles/Menu.css"
import React from 'react';

export default function Menu(){
    return(
      <>
       <div className="content">
           <div className="categories">
           <div className="flex">
               <a href="/payment">Оплата</a>
               <a href="/courier">Доставка</a>
               <a href="/help">Помощь</a>
               <a href="">Контакты</a>
            </div>
           </div>
        </div>
      
      </>
    )
}