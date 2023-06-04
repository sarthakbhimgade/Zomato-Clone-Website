import React from 'react'
import "./topBrands.css"
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import Slider from 'react-slick';

const topBrandsList=[
    {
       id:1,
       cover:"https://b.zmtcdn.com/data/brand_creatives/logos/0b281ddf8faa5b9deb37c3653efd348f_1569404048.png",   
       time:"24 min"
    },
    {
        id:2,
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1521807200.png",
        time:"25 min"
    },
    {
        id:3,
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676521351.png",
        time:"21 min"
    },
    {
        id:4,
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/cc2c35f94cf6591b652ac5330a3d1352_1576656123.png",
        time:"27 min"
    },
    {
        id:5,
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/baad5111c5e0df102315ef575cff5dfe_1670388218.png",
        time:"24 min"
    },
    {
        id:6,
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/556d819c25314c7657b0af1e6d86530c_1506621423.png",
        time:"22 min"
    },
    {
        id:7,
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/11f0a050068db77b5b959dd97cc11965_1644900886.png",
        time:"10min"
    }
];

const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
  };

const TopBrands = () => {
  return (
    <div className='top-brands max-width'>
      <div className='collection-title'>Top brands for you</div>
      <Slider {...settings}>
        {topBrandsList.map((brand)=>{
            return <div>
                <div className='top-brands-cover'>
                    <img src={brand.cover} 
                    className='top-brands-image'
                     alt={brand.time} />
                </div>
            </div>
        })}
      </Slider>
    </div>
  )
}

export default TopBrands
