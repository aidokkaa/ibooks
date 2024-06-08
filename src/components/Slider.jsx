import React from 'react'
export default function Slider ({slider}){
  const bgImage = {
    url:"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-right-128.png"
  }
  const [currentIndex,setCurrentIndex]=React.useState(0)
  const slideStyles={
    position:"relative",
    height:'100%'
  }
  const sliderStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundImage: `url(${slider[currentIndex].url})`,
    backgroundPosition:'center',
    backgroundSize:'cover'
  }
  const leftArrow={
    position: 'absolute',
    left:'32px',
    top:'50%',
    fontSize:'45px',
    cursor:'pointer',
  }
  const rightArrow={
    position: 'absolute',
    top:'50%',
    fontSize:'45px',
    right:"32px",
   padding:'6px 3px',
    cursor:'pointer',
  }
  function goToPrevious(){
    const isFirstSlide=currentIndex===0
    const newIndex=isFirstSlide?slider.length-1:currentIndex-1
    setCurrentIndex(newIndex)
  }
  function goToNext(){
    const islastSlide=currentIndex===slider.length-1
    const newIndex=islastSlide?0:currentIndex+1
    setCurrentIndex(newIndex)
  }
  const dotsContainerStyles={
    display: 'flex',
    justifyContent: 'center'
  }
  const dotsStyles={
    margin:'25px 3px',
    cursor:'pointer'
  }
  function goToSlide(slideIndex){
    setCurrentIndex(slideIndex)
  }
    return(
        <>
          <div style={slideStyles}>
            <div  style={leftArrow} onClick={goToPrevious}>&#9001;</div>
            <div style={rightArrow} onClick={goToNext}>	&#9002;</div>
          <div style={sliderStyles}></div>
          <div style={dotsContainerStyles}>{slider.map((slide,slideIndex)=>(
            <div key={slideIndex} style={dotsStyles} onClick={()=>goToSlide(slideIndex)}>&#9899;</div>
          ))}</div>
          </div>
        </>
    )
}