import React from 'react'
import MainCaursel from '../Components/HomeCursoual/MainCaursel'
import HomeCardSection from '../Components/HomeSectionCard.jsx/HomeSectionCard'
import HomeSectionCursoual from '../Components/HomeSectionCursoual/HomeSectionCursoual'

const HomePages = () => {

  const mensSneakers = [
    { id: 1, brand: 'Gucci', name: 'Air Max 270', price: '$150', imageUrl: '/fashion-shoes-sneakers.jpg' },
    { id: 2, brand: 'Zara', name: 'Ultraboost 22', price: '$180', imageUrl: '/shoes.jpg' },
    { id: 3, brand: 'Tommy Hilfiger', name: 'Suede Classic', price: '$75', imageUrl: '/sport-running-shoes.jpg' },
    { id: 4, brand: 'Louis Vuitton', name: '550 White', price: '$130', imageUrl: '/fashion-shoes-sneakers.jpg' },
    { id: 5, brand: 'Chanel', name: 'Classic Leather', price: '$85', imageUrl: '/shoes.jpg' },
    { id: 6, brand: 'H&M', name: 'Chuck Taylor All Star', price: '$60', imageUrl: '/sport-running-shoes.jpg' },
];

  const Women_Shoes = [
     { id: 1, brand: 'Nike', name: 'Air Max 270', price: '$150', imageUrl: '/Women-Casual-Shoes/close-up-canvas-shoes-footpath.jpg' },
    { id: 2, brand: 'Adidas', name: 'Ultraboost 22', price: '$180', imageUrl: '/Women-Casual-Shoes/front-view-social-distance-concept.jpg' },
    { id: 3, brand: 'Puma', name: 'Suede Classic', price: '$75', imageUrl: '/Women-Casual-Shoes/shoes-sand.jpg' },
    { id: 4, brand: 'New Balance', name: '550 White', price: '$130', imageUrl: '/Women-Casual-Shoes/woman-shoes (1).jpg' },
    { id: 5, brand: 'Reebok', name: 'Classic Leather', price: '$85', imageUrl: '/Women-Casual-Shoes/woman-shoes (2).jpg' },
    { id: 6, brand: 'Converse', name: 'Chuck Taylor All Star', price: '$60', imageUrl: '/Women-Casual-Shoes/young-beautiful-stylish-hipster-woman-pink-leather-jacket.jpg' },
  ]




const bestSellers = [
  { id: 1, brand: 'Zara', name: 'Air Max 270', price: '$150', imageUrl: '/Best_seller/adult-background-beauty-buy-beautiful.jpg' },
  { id: 2, brand: 'H&M', name: 'Ultraboost 22', price: '$180', imageUrl: '/Best_seller/adult-woman-shopping-shoes-city-center-autumn.jpg' },
  { id: 3, brand: 'Gucci', name: 'Suede Classic', price: '$75', imageUrl: '/Best_seller/blonde-girl-holding-shopping-bags-posing.jpg' },
  { id: 4, brand: 'Louis Vuitton', name: '550 White', price: '$130', imageUrl: '/Best_seller/brunette-blogger-showing-heel-camera.jpg' },
  { id: 5, brand: 'Gap', name: 'Classic Leather', price: '$85', imageUrl: '/Best_seller/pairs-mens-womens-shoes-with-red-heart' },
  { id: 6, brand: 'Chanel', name: 'Chuck Taylor All Star', price: '$60', imageUrl: '/Best_seller/portrait-cute-woman-with-pair-heels-looking-camera.jpg' },
];
  // This file contains sample e-commerce data for a footwear website.
// The data is structured into three categories: men's sneakers, women's casual shoes, and best sellers.
// Each item has properties for brand, name, price, and an image URL.

// const mensSneakers = [
//     {
//         brand: "Nike",
//         name: "Air Max 270",
//         price: 150.00,
//         image: "https://placehold.co/400x400/08588E/ffffff?text=Nike+Air+Max"
//     },
//     {
//         brand: "Adidas",
//         name: "Ultraboost 22",
//         price: 180.00,
//         image: "https://placehold.co/400x400/29A09D/ffffff?text=Adidas+Ultraboost"
//     },
//     {
//         brand: "New Balance",
//         name: "574 Core",
//         price: 85.00,
//         image: "https://placehold.co/400x400/94A2B2/ffffff?text=New+Balance+574"
//     },
//     {
//         brand: "Puma",
//         name: "Suede Classic",
//         price: 70.00,
//         image: "https://placehold.co/400x400/970F13/ffffff?text=Puma+Suede"
//     }
// ];

const womensCasualShoes = [
    {
        brand: "Converse",
        name: "Chuck Taylor All Star",
        price: 60.00,
        image: "https://placehold.co/400x400/94425C/ffffff?text=Converse+Chuck+Taylor"
    },
    {
        brand: "Vans",
        name: "Classic Slip-On",
        price: 55.00,
        image: "https://placehold.co/400x400/CD4E5E/ffffff?text=Vans+Slip-On"
    },
    {
        brand: "Dr. Martens",
        name: "1460 Smooth Leather Boot",
        price: 160.00,
        image: "https://placehold.co/400x400/3A3A3A/ffffff?text=Dr+Martens+Boot"
    }
];

// The best-sellers list can contain a mix of shoes from the other categories.
// This is a common practice on e-commerce sites.


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







// import React from 'react';
// import MainCaursel from '../Components/HomeCursoual/MainCaursel';
// import HomeSectionCursoual from '../Components/HomeSectionCursoual/HomeSectionCursoual';

// const HomePages = () => {
//     // Define your different product lists here
    // const mensSneakers = [
    //     // ... data for men's sneakers
    // ];

    // const womensCasualShoes = [
    //     // ... data for women's casual shoes
    // ];

    // const bestSellers = [
    //     // ... data for best-selling items
    // ];

//     return (
//         <div>
//             <MainCaursel/>
//             <div>
//                 {/* Use a heading to label each carousel section */}                                                                                            
//                 <h2>Men's Sneakers</h2>                                  
//                 <HomeSectionCursoual products={mensSneakers} />     

//                 <h2>Women's Casual Shoes</h2>                       
//                 <HomeSectionCursoual products={womensCasualShoes} />

//                 <h2>Best Sellers</h2>
//                 <HomeSectionCursoual products={bestSellers} />

//                 {/* You can add more sections as needed */}
//             </div>
//         </div>
//     );
// };

// export default HomePages;