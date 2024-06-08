import React from 'react'
import RightEdge from "../components/RightEdge";
import Slider from "../components/Slider";
import LeftEdge from "../components/LeftEdge";
import Row from "../components/Row";
import Trands from "../components/Trands";
import Sceleton from '../components/Trands/Sceleton';
import Footer from "../components/Footer";
import Menu from '../components/Menu';
import Block from '../components/Block';
import {useDispatch, useSelector} from 'react-redux';
import {setTrand} from '../components/redux/slices/FilterSlice'
import '../styles/Home.css'

export default function Home ({searchValue,setSearchValue}){

  const trand= useSelector(state=>state.filter.trand);
  const dispatch = useDispatch();
const[items,setItems]=React.useState([]);
const [isLoading,setisLoading]=React.useState(true);
const block= React.useRef();

React.useEffect(() => {
  document.body.addEventListener('click', (event) => {
    console.log(event.path || (event.composedPath && event.composedPath()));
    if(!event.composedPath().includes(block.current)){
      setSearchValue('')
          }
  });
}, []);


React.useEffect(()=>{
  setisLoading(true)
  const trands = trand>0 ? `category=${trand}`:'';
  const search = searchValue ? `&search=${searchValue}`: '';

    fetch(`https://63b5fb4e58084a7af3a674cf.mockapi.io/books?${trands}${search}`)
    .then((res)=>{
    return res.json()
  })
  .then((json)=>{
    setItems(json)
    setisLoading(false)
  })
  
}, [trand,searchValue])

    const containerStyles={
        width:'100%',
        height:'470px',
      };
      const slider = [
        {url:"https://ndc.book24.ru/resize/2200x640/iblock/a82/a82b543cb8cb7dc65e12439a5c83cb3b/b02d96ffe10bc7f2c6b04a556dbd3929.jpg", title:'City'},
        {url:"https://ndc.book24.ru/resize/2200x640/iblock/66d/66d313238041c895d57dbcf6aaf5db85/d16af31ddba5506985d6ec0afb49ad0b.jpg", title:'City'},
        {url:"https://ndc.book24.ru/resize/2200x640/iblock/d06/d0661ba03950f122c4854554ca0f6761/4076fe4ffe3adc63ce9fd59ff7d7d7aa.jpg", title:'City'},
      ]

     
      const arr=['Хиты','Новинки'];
    
    const onChangeTrand=(i)=>{
      dispatch(setTrand(i))
    }
    return(
     <> 
     <Menu></Menu>
    {
      searchValue && (
        <div ref={block} className="block">
        {
            items.map((obj)=>
            <Block key={obj.id} {...obj}/>)
        }
        </div>
      )
    }
       <div className="container_home">
        <div style={containerStyles}>
         <Slider slider={slider}></Slider>
         </div>
         <LeftEdge></LeftEdge>
       </div>
       <Row></Row>
       <div className="text">
        {
          arr.map((books,i)=><h4 onClick={()=>onChangeTrand(i)} className={trand===i ? 'active' : ''}>{books}</h4>)
        }
       </div>
       <div className="books">
        {
          isLoading
          ?
          [...new Array(10)].map((_,index)=><Sceleton key={index}/>)
          : items.map((obj)=>
            <Trands key={obj.id} {...obj}/>
          )
        }
       </div>
       <Footer></Footer>
     </>
    )
}