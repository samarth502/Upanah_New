import React from 'react';

const HomeSectionCarouselOne = () => {
  const products = [
    { id: 1, name: 'Air Max 270', price: '$150', imageUrl: 'https://m.media-amazon.com/images/I/51ZE5wHoOgL._SY695_.jpg' },
    { id: 2, name: 'Ultraboost 22', price: '$180', imageUrl: 'https://m.media-amazon.com/images/I/71VRS+c9kjL._SX695_.jpg' },
    { id: 3, name: 'Suede Classic', price: '$75', imageUrl: 'https://m.media-amazon.com/images/I/719UWOUWRgL._SX695_.jpg' },
    { id: 4, name: '550 White', price: '$130', imageUrl: 'https://m.media-amazon.com/images/I/51ZE5wHoOgL._SY695_.jpg' },
    { id: 5, name: 'Classic Leather', price: '$85', imageUrl: 'https://m.media-amazon.com/images/I/51ZE5wHoOgL._SY695_.jpg' },
    { id: 6, name: 'Chuck Taylor', price: '$60', imageUrl: 'https://m.media-amazon.com/images/I/719UWOUWRgL._SX695_.jpg' },
  ];

  return (
    <div className="py-10 bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 tracking-wide uppercase mb-6 text-center">Shop Now</h2>
        <div className="grid grid-cols-2 gap-8">
          {/* First Row: Two Items */}
          <div className="relative group">
            <img className="w-full h-80 object-cover rounded-lg" src={products[0].imageUrl} alt={products[0].name} />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white p-4">
              <div className="text-center">
                <h3 className="text-lg font-semibold">{products[0].name}</h3>
                <p className="text-xl mt-2">{products[0].price}</p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img className="w-full h-80 object-cover rounded-lg" src={products[1].imageUrl} alt={products[1].name} />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white p-4">
              <div className="text-center">
                <h3 className="text-lg font-semibold">{products[1].name}</h3>
                <p className="text-xl mt-2">{products[1].price}</p>
              </div>
            </div>
          </div>

          {/* Second Row: One Item */}
          <div className="relative group col-span-2">
            <img className="w-full h-80 object-cover rounded-lg" src={products[2].imageUrl} alt={products[2].name} />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white p-4">
              <div className="text-center">
                <h3 className="text-lg font-semibold">{products[2].name}</h3>
                <p className="text-xl mt-2">{products[2].price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCarouselOne;
