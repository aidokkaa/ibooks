 import "../styles/Header.css"
import Search from './Search'
import logo from '../assets/img/name.jpg'
import {Link } from 'react-router-dom'
import { useSelector } from "react-redux"

export default function Header ({searchValue,setSearchValue}){
    const {items,totalPrice}= useSelector(state=>state.cart);
    const totalCount=items.reduce((sum,item)=>sum+item.count,0)
  
    return(
        <div>
            <div className="header">
                <div className="container">
                    <Link to='/'><img className="logo"  src={logo}alt="" /></Link>
                      <Search searchValue={searchValue} setSearchValue={setSearchValue}></Search>
                    <div className="contact">
                     <a href="">8 702 188 05 56</a>
                    <h2>Звоните, поможем найти</h2>
                    </div>
                   <Link to='/cart'>
                   <div className="header-cart">
                        <a href="" className="button">
                            <span>{totalPrice}тг</span>
                            <div className="button_delimiter"></div>
                            <img className="cart" src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/cart-512.png" alt="" />
                            <span>{totalCount} шт</span>
                            </a>
                        </div>
                   </Link>
                    </div>
                    <div className="container1">
                    <Link to='/'><img className="logo"  src={logo}alt="" /></Link>
                    <div className="contact">
                     <a href="">8 702 188 05 56</a>
                    <h2>Звоните, поможем найти</h2>
                    </div>
                   <Link to='/cart'>
                   <div className="header-cart">
                        <a href="" className="button">
                            <span>{totalPrice}тг</span>
                            <div className="button_delimiter"></div>
                            <img className="cart" src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/cart-512.png" alt="" />
                            <span>{totalCount} шт</span>
                            </a>
                        </div>
                   </Link>
                    </div>
                </div>
            </div>
    )
}