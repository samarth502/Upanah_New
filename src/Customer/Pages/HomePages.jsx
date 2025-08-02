import React from 'react'
import MainCaursel from '../Components/HomeCursoual/MainCaursel'
import HomeCardSection from '../Components/HomeSectionCard.jsx/HomeSectionCard'
import HomeSectionCursoual from '../Components/HomeSectionCursoual/HomeSectionCursoual'

const HomePages = () => {

   const Nike_shoes= [
    { id: 1, brand: 'Nike', name: 'Air Max 270', price: '$150', imageUrl: '/fashion-shoes-sneakers.jpg' },
    { id: 2, brand: 'Adidas', name: 'Ultraboost 22', price: '$180', imageUrl: '/shoes.jpg' },
    { id: 3, brand: 'Puma', name: 'Suede Classic', price: '$75', imageUrl: '/sport-running-shoes.jpg' },
    { id: 4, brand: 'New Balance', name: '550 White', price: '$130', imageUrl: '/fashion-shoes-sneakers.jpg' },
    { id: 5, brand: 'Reebok', name: 'Classic Leather', price: '$85', imageUrl: '/shoes.jpg' },
    { id: 6, brand: 'Converse', name: 'Chuck Taylor All Star', price: '$60', imageUrl: '/sport-running-shoes.jpg' },
  ];
  return (
    <div>

        <MainCaursel/>

        <div>
            <HomeSectionCursoual Nike_shoes={Nike_shoes} />
            <HomeSectionCursoual Nike_shoes={Nike_shoes} />
            <HomeSectionCursoual Nike_shoes={Nike_shoes} />
            <HomeSectionCursoual Nike_shoes={Nike_shoes} />
            <HomeSectionCursoual Nike_shoes={Nike_shoes} />



            

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
//     const mensSneakers = [
//         // ... data for men's sneakers
//     ];

//     const womensCasualShoes = [
//         // ... data for women's casual shoes
//     ];

//     const bestSellers = [
//         // ... data for best-selling items
//     ];

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