import "../styles/Footer.css"
 export default function Footer (){
    return(
        <>
        <div className="contacts">
            <div className="info">
                <h2>Информация</h2>
                <h2>Условия оплаты</h2>
                <h2>Условия доставки</h2>
            </div>
            <div className="help">
                <h3>Помощь</h3>
                <h3>Вопросы-ответы</h3>
            </div>
          <div className="our-contact">
              <h3>Наши контакты</h3>
              <div className="tel">
                <img src="https://cdn4.iconfinder.com/data/icons/48-bubbles/48/27.Phone-128.png" alt="" />
                <h3>87021880556</h3>
              </div>
              <div className="icons">
                <img src="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_3-instagram-128.png" alt="" />
                <img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Whatsapp2_colored_svg-128.png" alt="" />
              </div>
            <p>  С 10:00 до 19:00</p>
          </div>
        </div>
        </>
    )
 }