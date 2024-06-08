import React from "react";
import '../styles/Block.css';

 
export default function Block ({imageUrl,title,price}){

    return(
        <>
              <div  className="items">
                  <img className="img2" src={imageUrl} alt="" />
                  <h3>{title}</h3>
                  <h5>{price} тг</h5>
               </div>
                
               
           
        </>
    )
}