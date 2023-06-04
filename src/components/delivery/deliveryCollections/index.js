import React from 'react'
import "./deliveryCollections.css"
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import DeliveryItem from './deliveryItem';
import Slider from 'react-slick';

const deliveryItems=[
    {
      id:1,
      title:"Pizza",
      cover:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
  
    },
    {
      id:2,
      title:"Burger",
      cover:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
  
    },
    {
      id:3,
      title:"Sandwich",
      cover:"https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
  
    },
    {
      id:4,
      title:"Poha",
      cover:"https://b.zmtcdn.com/data/o2_assets/1ab6211f526df5d920d41787907d1a051632716576.png",
  
    },
    {
      id:5,
      title:"Dosa",
      cover:"https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
  
    },
    {
      id:6,
      title:"Idli",
      cover:"https://b.zmtcdn.com/data/dish_images/d9766dd91cd75416f4f65cf286ca84331634805483.png",
  
    },
    {
      id:7,
      title:"Cake",
      cover:"https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
  
    },
    {
      id:8,
      title:"Paratha",
      cover:"https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
  
    },
    {
      id:9,
      title:"Upma",
      cover:"https://b.zmtcdn.com/data/o2_assets/e7a61b8682792c4ae83cdbc75f8829331632716549.png",
  
    },
    {
      id:10,
      title:"Tea",
      cover:"https://b.zmtcdn.com/data/o2_assets/a2163bedb069e3069db0a88d7a3c848f1676534399.png",
  
    },
    
  ]
  
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
  };

  
const DeliveryCollections = () => {
  return (
    <div className='delivery-collections'>
      <div className='max-width'>
        <div className='collection-title'>Eat what makes you happy</div>
        <Slider {...settings}>
            {deliveryItems.map((item)=>{
                return <DeliveryItem item={item}/>;
            })}
        </Slider>
      </div>
    </div>
  )
}

export default DeliveryCollections
