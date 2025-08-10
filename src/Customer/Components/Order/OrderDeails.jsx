import React from 'react';
import AddressCard from '../AddessCard/AddressCard';
import OrderTraker from './OrderTracker';
// import AdressCard from '../../AdressCard/AdressCard';
import StarIcon from '@mui/icons-material/Star'; // Using Material-UI icon for the star


const OrderDetails = () => {
     // Mock data for the product
  const product = {
    image: 'https://placehold.co/80x80/000000/FFFFFF?text=Jeans', // Placeholder image for black jeans
    name: 'Men Slim Mid Rise Black Jeans',
    color: 'pink',
    size: 'M',
    seller: 'linaria',
    price: 1099,
  };
  return (
    <div className='px:5 lg:px-20'>
      <div>
        <h1 className='font-bold text-xl py-7'>Delivery Address</h1>

        <AddressCard/>
     
      </div>

      <div className='py-20'>
        <OrderTraker activeStep={0}/>
      </div>


        <div className=" my-8 p-6 bg-white rounded-2xl shadow-xl border border-gray-100
                    transform hover:scale-[1.01] transition-all duration-300 ease-in-out cursor-pointer">
      <div className="flex items-center justify-between">
        {/* Product Details Section */}
        <div className="flex items-center">
          {/* Product Image */}
          <div className="w-24 h-24 flex-shrink-0 mr-5">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Text Details */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-0.5">
              Color: <span className="capitalize">{product.color}</span>, Size: {product.size}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Seller: <span className="font-semibold">{product.seller}</span>
            </p>
            <p className="text-2xl font-extrabold text-gray-900">₹{product.price}</p>
          </div>
        </div>

        {/* Rate & Review Button/Link */}
        <button
          className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white
                     rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out
                     transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          <StarIcon className="text-yellow-300 mr-2 text-xl" />
          <span className="font-semibold text-lg whitespace-nowrap">Rate & Review Product</span>
        </button>
      </div>
    </div>
    </div>
  );
};

export default OrderDetails;