import react from 'react';
import Header from '../components/Header'
import '../styles/HelpPages.css'
import Footer from '../../src/components/Footer'

export default function HelpPage(){
    return(
        <>
          <div className="container-help">
            <h1 className='first'>Помощь</h1>
            <h1 className='second'>Как быстро найти книгу</h1>
           <p>Чтобы найти нужную книгу, можно воспользоваться строкой поиска 
            в верхней части главной страницы. <br></br>С ее помощью можно искать книги по названию, 
            автору, аннотации, издательству, 
            серии и ISBN. <br></br>По умолчанию поиск ведётся во всех этих параметрах. </p>
          </div>
          
         
        </>
    )
}