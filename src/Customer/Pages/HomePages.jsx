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
import HomeSectionCarouselOne from '../Components/HomeSectionCarouselOne';
import FooterOne from '../Common/FooterOne';
import DamnGoodShoes from '../Components/DamnGoodShoes/DamnGoodShoes';
// import DamnGoodShoes from '../Components/DamnGoodShoes/DamnGoodShoes';


const HomePages = () => {

const mensSneakers = [
  { id: 1, brand: 'Gucci', name: 'Air Max 270', price: '$150', imageUrl: 'https://m.media-amazon.com/images/I/71n7zT1pu3L._SY695_.jpg' },
  { id: 2, brand: 'Zara', name: 'Ultraboost 22', price: '$180', imageUrl: 'https://m.media-amazon.com/images/I/51DZP83wBFL._AC_UL800_FMwebp_QL65_.jpg' },
  { id: 3, brand: 'Tommy Hilfiger', name: 'Suede Classic', price: '$75', imageUrl: 'https://m.media-amazon.com/images/I/61mjfWb7eKL._AC_UL800_FMwebp_QL65_.jpg' },
  { id: 4, brand: 'Louis Vuitton', name: '550 White', price: '$130', imageUrl: 'https://m.media-amazon.com/images/I/71SEfhhZ7GL._AC_UL800_FMwebp_QL65_.jpg' },
  { id: 5, brand: 'Chanel', name: 'Classic Leather', price: '$85', imageUrl: 'https://m.media-amazon.com/images/I/51LoLwn9lcL._AC_UL800_FMwebp_QL65_.jpg' },
  { id: 6, brand: 'H&M', name: 'Chuck Taylor All Star', price: '$60', imageUrl: 'https://m.media-amazon.com/images/I/81R6YbNKOzL._AC_UL800_FMwebp_QL65_.jpg' },
];

const Women_Shoes = [
  { id: 1, brand: 'Nike', name: 'Air Max 270', price: '$150', imageUrl: 'https://m.media-amazon.com/images/I/61+NqoI1MkL._SY695_.jpg' },
  { id: 2, brand: 'Adidas', name: 'Ultraboost 22', price: '$180', imageUrl: 'https://m.media-amazon.com/images/I/51EgyA1GtbL._SY695_.jpg' },
  { id: 3, brand: 'Puma', name: 'Suede Classic', price: '$75', imageUrl: 'https://m.media-amazon.com/images/I/61OkTushHbL._AC_UL800_FMwebp_QL65_.jpg' },
  { id: 4, brand: 'New Balance', name: '550 White', price: '$130', imageUrl: 'https://m.media-amazon.com/images/I/71FDG-XZwAL._AC_UL800_FMwebp_QL65_.jpg' },
  { id: 5, brand: 'Reebok', name: 'Classic Leather', price: '$85', imageUrl: 'https://m.media-amazon.com/images/I/51-CObvtVsL._AC_UL800_FMwebp_QL65_.jpg' },
  { id: 6, brand: 'Converse', name: 'Chuck Taylor All Star', price: '$60', imageUrl: 'https://m.media-amazon.com/images/I/71v6STXRsgL._AC_UL800_FMwebp_QL65_.jpg' },
];

const bestSellers = [
  { id: 1, brand: 'Zara', name: 'Air Max 270', price: '$150', imageUrl: 'https://m.media-amazon.com/images/I/615+EPM1xFL._AC_UL800_FMwebp_QL65_.jpg' },
  { id: 2, brand: 'H&M', name: 'Ultraboost 22', price: '$180', imageUrl: 'https://m.media-amazon.com/images/I/615+EPM1xFL._AC_UL800_FMwebp_QL65_.jpg' },
  { id: 3, brand: 'Gucci', name: 'Suede Classic', price: '$75', imageUrl: 'https://m.media-amazon.com/images/I/51leRtYE3ML._AC_UL800_FMwebp_QL65_.jpg' },
  { id: 4, brand: 'Louis Vuitton', name: '550 White', price: '$130', imageUrl: 'https://m.media-amazon.com/images/I/51leRtYE3ML._AC_UL800_FMwebp_QL65_.jpg' },
  { id: 5, brand: 'Gap', name: 'Classic Leather', price: '$85', imageUrl: 'https://m.media-amazon.com/images/I/71nB1PHVJWL._AC_UL800_FMwebp_QL65_.jpg' },
  { id: 6, brand: 'Chanel', name: 'Chuck Taylor All Star', price: '$60', imageUrl: 'https://m.media-amazon.com/images/I/61utX8kBDlL._AC_UL800_FMwebp_QL65_.jpg' },
];



  return (
    <div>

        <MainCaursel/>

        <div>
            <HomeSectionCursoual data={Women_Shoes} sectionName = "Women's Casual Shoes" />
            <HomeSectionCursoual data={mensSneakers} sectionName="Men's Sneakers"/>
            <HomeSectionCursoual data={bestSellers}  sectionName="Best Sellers" />
            <HomeSectionCarouselOne/>
            <DamnGoodShoes/>

            <FooterOne/>
           



            

        </div>
      
    </div>
  )
}

export default HomePages



