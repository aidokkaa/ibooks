import React from 'react'
import { useParams } from 'react-router-dom';
import { FaStore } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import {useSelector, useDispatch} from 'react-redux'
import { addItem } from './redux/slices/CartSlice'
import "../styles/BookItem.css"
import Footer from '../components/Footer'

export const BookItem = () => {
    const [itemBook,setItemBook] = React.useState([]);
    console.log(itemBook)
    const {id}=useParams();
    React.useEffect(()=>{
        fetch(`https://63b5fb4e58084a7af3a674cf.mockapi.io/books?id=${id}`)
        .then(res=>{
            return res.json()
        })
        .then(data=>
           setItemBook(data)
        )
    },[id]);
    const dispatch = useDispatch()
  const cartItem= useSelector(state=>state.cart.items.find(obj=>obj.id===id));

    const onClickAdd=(id,title,imageUrl,price)=>{
        const item={
            id,title,imageUrl,price
        };
        dispatch(addItem(item))
    }
  return (
    <div>
        {
            itemBook.map(item=>{
                return<>
                <div className="contBook">
                <div className="bookItem">
                        <div className="itemLeft">
                        <img className='rightImg' src={item.imageUrl} alt="" />
                        </div>
                        <div className="itemRight">
                            <h1>{item.title}</h1>
                            <h1 className='h1'>Цена: {item.price} тг</h1>
                            <h1 className='h1'>Аннотация к книге "{item.title}"</h1>
                            <p className='p'>{item.desc}</p>
                        </div>
                    </div>
                    <div className="discount">
                        <div className="inner">
                            <p><span><FaStore /></span>  В магазины, бесплатно</p>
                            <p> <span><FaLocationDot /></span>  В пункты выдачи, 1400 тг </p>
                            <p><span><TbTruckDelivery /></span>  Доставка курьером, 2250 тг</p>
                        </div>
                        <div className="btnDisc">
                        <h4 onClick={()=>onClickAdd(item.id,item.title, item.imageUrl,item.price)} style={{textAlign:'center'}}>Добавить в корзину</h4>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
                </>
                   
                
            })
        }
          
    </div>
  )
}
