import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * Renders a stylish product card with hard-coded data.
 */
const ProductCard = ({product}) => {
  const navigate = useNavigate();

  return (
    <div
    onClick={()=>navigate(`/product/${3}`)}
      className="m-2 p-4 bg-white rounded-2xl shadow-lg transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between h-full w-64"
    >
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img
          src={product.imageUrl}
          alt="Casual Puff Sleeves Solid Women White Top"
          className="w-full h-64 object-cover object-center transition-transform duration-300"
          onError={(e) => {
            e.target.src = 'https://placehold.co/600x400/EAEAEA/000000?text=Image+Unavailable';
          }}
        />
      </div>

      <div
        className="flex-grow flex flex-col"
      >
        <p className="text-sm font-semibold text-gray-500 uppercase mb-1">
          Universaloutfit
        </p>
        <h2 className="text-xl font-bold text-gray-900 mb-2 truncate">
          Casual Puff Sleeves Solid Women White Top
        </h2>
        <div className="mt-auto flex items-end">
          <p className="text-2xl font-extrabold text-blue-600 mr-2">
            ₹199
          </p>
          <p className="text-sm text-gray-400 line-through">
            ₹1999
          </p>
          <p className="text-sm font-bold text-green-500 ml-auto">
            70% off
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
