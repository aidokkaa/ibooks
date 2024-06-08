import '../styles/Row.css'
export default function Row (){
    return(
      <>
        <div className="row">
            <div className="item">
                <img src="https://bestseller.kz/upload/iblock/e4a/e4a6e061d2d1bf8bb796b40003578ca0.png" alt="" />
                <p>Более 2500<br></br> наименований книг.</p>
            </div>
            <div className="item">
                <img src="https://bestseller.kz/upload/iblock/0c0/0c0a38b6a75f9839566e6c69f7d346d7.png" alt="" />
                <p>Доставка по всему<br></br>  Казахстану.</p>
            </div>
            <div className="item">
                <img src="https://bestseller.kz/upload/iblock/c7e/c7e98d818371009e86b7d9b7bbeddc56.png" alt="" />
                <p>Удобные способы<br></br>  доставки и оплаты.</p>
            </div>
            <div className="item">
                <img src="https://bestseller.kz/upload/iblock/a7c/a7c134de2b163d8750632724b058a24e.png" alt="" />
                <p>Накопительные скидки <br></br> 5% и 10%.</p>
            </div>
        </div>
      </>
    )
}