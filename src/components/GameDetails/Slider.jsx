import React, { useEffect } from 'react'
import Slider from "react-slick";

function SliderDetails({ game }) {
  
 
 
    const settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
         <Slider {...settings}>
             {game?.screenshots?.map((img,index)=>(<div key={index}>
                    <img src={img.image} className='w-100' />
                </div>
                ))
                } 
            </Slider> 
        </>
    )
}

export default SliderDetails