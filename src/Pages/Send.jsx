import '../styles/Send.css';
import {Link} from 'react-router-dom'
export default function Send (){
    return(
        <>
        <h1>Способы доставки</h1>
        <div className="cont-send">
           <Link to ='/courier'>Курьерская доставка</Link>
           <Link to = '/postomat'>Постоматы MyPost</Link>
           <Link to = '/pochta'>Почтовая доставка</Link>
           <Link to = '/kaz'>Постоматы КазПочты</Link>
        </div>
        </>
    )
}