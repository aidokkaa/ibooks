import React from 'react'
import { useSelector } from "react-redux";
import '../styles/linkOrder.css'
export const LinkOrder=()=>{
    const {items,totalPrice}= useSelector(state=>state.cart);
    const totalCount=items.reduce((sum,item)=>sum+item.count,0)
    const[name,setName]=React.useState('');
    const[address,setAddress]=React.useState('')
    const[number,setNumber]=React.useState(0)
    const[mark,setMark]=React.useState('')
    const[cause,setACause]=React.useState('');
    function sendWhatsapp(title,count){
        let phonenumber = "+77021880556";
        let url = "https://wa.me/" +phonenumber +"?text="
        +"Имя:"+ " " + name+ " "+"%0a"
        +"Адрес:"+ " "+address+""+"%0a"
        +"Телефонный номер для обратного звонка:"+" "+number+"%0a"
        +"Название книги: "+ ""+title+" "+"%0a"
        +"Количество:"+""+count+""+"%0a";
        window.open(url,'_blank')
    }
    return (
        <>
           <div className="washMash">
             <h1 className='text'>Оформить заказ</h1>   
             <div className='formDiv'>
                 <form className='form' >
                    <div className="inputs">
                    <input onChange={(e)=>setName(e.target.value)} className='input' type="text" placeholder='Ваше Имя'/>
                    <input onChange={(e)=>setAddress(e.target.value)} className='input' type="text" placeholder='Ваш адрес'/>
                    <input onChange={(e)=>setNumber(e.target.value)} className='input' type="number" placeholder='Телефонный номер' />
                {items.map(item=>{
                    return<>
                    <input onChange={(e)=>setMark(e.target.value)} className='input' type="text" placeholder={item.title}/>
                    <input onChange={(e)=>setACause(e.target.value)} className='input' type="text" value={item.count} шт  placeholder='Количество'/>
                     <div onClick={()=>sendWhatsapp(item.title,item.count)} className='btn1'>Отправить</div>
                    </>
                })}
                    </div>
                 </form>
             </div>
           </div>
           </>
        )}
