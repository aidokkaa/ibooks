import "../styles/Search.css"
import React from 'react';
import close from '../assets/img/close.png';
export default function Search ({searchValue,setSearchValue}){
   const myInp = React.useRef();
   const onClickClear=()=>{
    setSearchValue('')
    myInp.current.focus()
   }

    return(
        <>
        <div className="myInp">
            <input ref={myInp} value={searchValue} onChange={(e)=>{setSearchValue(e.target.value);}} type="text"
             placeholder="Поиск книг..." />
             {
                searchValue && 
                (  <img onClick={onClickClear} className="close" src={close} alt="" />)
             }
          
         </div>
        </>
    )
}