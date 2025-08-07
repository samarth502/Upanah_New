import React from 'react'
import MainCaursel from '../Components/HomeCursoual/MainCaursel'
import HomeSectionCursoual from '../Components/HomeSectionCursoual/HomeSectionCursoual'
// Men's Sneakers
import fashionShoesSneakers from '../../assets/mensImages/fashion-shoes-sneakers.jpg';
import shoes from '../../assets/mensImages/shoes.jpg';
import sportRunningShoes from '../../assets/mensImages/sport-running-shoes.jpg';

// Women's Shoes
import womenShoe1 from '../../assets/Women-Casual-Shoes/close-up-canvas-shoes-footpath.jpg';
import womenShoe2 from '../../assets/Women-Casual-Shoes/front-view-social-distance-concept.jpg';
import womenShoe3 from '../../assets/Women-Casual-Shoes/shoes-sand.jpg';
import womenShoe4 from '../../assets/Women-Casual-Shoes/woman-shoes (1).jpg';
import womenShoe5 from '../../assets/Women-Casual-Shoes/woman-shoes (2).jpg';
import womenShoe6 from '../../assets/Women-Casual-Shoes/young-beautiful-stylish-hipster-woman-pink-leather-jacket.jpg';

// Best Sellers
import best1 from '../../assets/Best_seller/adult-background-beauty-buy-beautiful.jpg';
import best2 from '../../assets/Best_seller/adult-woman-shopping-shoes-city-center-autumn.jpg';
import best3 from '../../assets/Best_seller/blonde-girl-holding-shopping-bags-posing.jpg';
import best4 from '../../assets/Best_seller/brunette-blogger-showing-heel-camera.jpg';
import best5 from '../../assets/Best_seller/pairs-mens-womens-shoes-with-red-heart.jpg';
import best6 from '../../assets/Best_seller/portrait-cute-woman-with-pair-heels-looking-camera.jpg';


const HomePages = () => {

const mensSneakers = [
  { id: 1, brand: 'Gucci', name: 'Air Max 270', price: '$150', imageUrl: fashionShoesSneakers },
  { id: 2, brand: 'Zara', name: 'Ultraboost 22', price: '$180', imageUrl: shoes },
  { id: 3, brand: 'Tommy Hilfiger', name: 'Suede Classic', price: '$75', imageUrl: sportRunningShoes },
  { id: 4, brand: 'Louis Vuitton', name: '550 White', price: '$130', imageUrl: fashionShoesSneakers },
  { id: 5, brand: 'Chanel', name: 'Classic Leather', price: '$85', imageUrl: shoes },
  { id: 6, brand: 'H&M', name: 'Chuck Taylor All Star', price: '$60', imageUrl: sportRunningShoes },
];

const Women_Shoes = [
  { id: 1, brand: 'Nike', name: 'Air Max 270', price: '$150', imageUrl: womenShoe1 },
  { id: 2, brand: 'Adidas', name: 'Ultraboost 22', price: '$180', imageUrl: womenShoe2 },
  { id: 3, brand: 'Puma', name: 'Suede Classic', price: '$75', imageUrl: womenShoe3 },
  { id: 4, brand: 'New Balance', name: '550 White', price: '$130', imageUrl: womenShoe4 },
  { id: 5, brand: 'Reebok', name: 'Classic Leather', price: '$85', imageUrl: womenShoe5 },
  { id: 6, brand: 'Converse', name: 'Chuck Taylor All Star', price: '$60', imageUrl: womenShoe6 },
];

const bestSellers = [
  { id: 1, brand: 'Zara', name: 'Air Max 270', price: '$150', imageUrl: best1 },
  { id: 2, brand: 'H&M', name: 'Ultraboost 22', price: '$180', imageUrl: best2 },
  { id: 3, brand: 'Gucci', name: 'Suede Classic', price: '$75', imageUrl: best3 },
  { id: 4, brand: 'Louis Vuitton', name: '550 White', price: '$130', imageUrl: best4 },
  { id: 5, brand: 'Gap', name: 'Classic Leather', price: '$85', imageUrl: best5 },
  { id: 6, brand: 'Chanel', name: 'Chuck Taylor All Star', price: '$60', imageUrl: best6 },
];



  return (
    <div>

        <MainCaursel/>

        <div>
            <HomeSectionCursoual data={Women_Shoes} sectionName = "Women's Casual Shoes" />
            <HomeSectionCursoual data={mensSneakers} sectionName="Men's Sneakers"/>
            <HomeSectionCursoual data={bestSellers}  sectionName="Best Sellers" />
           



            

        </div>
      
    </div>
  )
}

export default HomePages



