import React, { useState } from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

// Corrected import path. Ensure this path is valid for your project structure.
import best1 from '../../../assets/Women-Casual-Shoes/front-view-social-distance-concept.jpg'; 

const CardItem = () => {
  // Hardcoded item data within the component's state
  const [item, setItem] = useState({
    id: 1,
    name: 'Men Slim Mid Rise Black Jeans',
    size: 'L',
    color: 'White',
    seller: 'Crishtaliyo 2fashion',
    price: 199,
    originalPrice: 211,
    image: best1, // <-- CORRECTED: Use the imported variable directly
    quantity: 3,
  });

  const handleIncrement = () => {
    setItem(prevItem => ({
      ...prevItem,
      quantity: prevItem.quantity + 1,
    }));
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      setItem(prevItem => ({
        ...prevItem,
        quantity: prevItem.quantity - 1,
      }));
    }
  };

  const handleRemove = () => {
    console.log(`Item with ID ${item.id} would be removed.`);
    // To simulate removal, you could do: setItem(null);
  };

  // If the item has been "removed", don't render anything
  if (!item) {
    return null;
  }

  return (
    <div className="flex items-center bg-white p-4 rounded-lg shadow-md mb-4">
      {/* Product Image */}
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-cover rounded-md mr-4"
      />

      {/* Product Details */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
        <p className="text-sm text-gray-500">{item.size}, {item.color}</p>
        <p className="text-sm text-gray-500 mt-1">Seller: {item.seller}</p>

        {/* Price and Discount */}
        <div className="flex items-center mt-2">
          <span className="text-xl font-bold text-gray-900">₹{item.price}</span>
          <span className="ml-2 text-sm text-gray-500 line-through">₹{item.originalPrice}</span>
          <span className="ml-2 text-xs font-medium text-green-600">
            {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% Off
          </span>
        </div>
      </div>

      {/* Quantity Controls and Remove Button */}
      <div className="flex flex-col items-end">
        <div className="flex items-center space-x-2">
          <button
            onClick={handleDecrement}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            <RemoveCircleOutlineIcon />
          </button>
          <span className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium">
            {item.quantity}
          </span>
          <button
            onClick={handleIncrement}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            <AddCircleOutlineIcon />
          </button>
        </div>
        <button
          onClick={handleRemove}
          className="mt-4 text-purple-600 hover:text-purple-800 font-medium text-sm"
        >
          REMOVE
        </button>
      </div>
    </div>
  );
};

export default CardItem;