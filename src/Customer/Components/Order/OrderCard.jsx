import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderCard = ({ order, getStatusIcon }) => {

  const navigate = useNavigate();

  return (
    <div
    onClick={()=>navigate(`/account/order/${4}`)}
      className="bg-white rounded-xl shadow-lg p-4 flex flex-col sm:flex-row items-center justify-between
                 hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1"
    >
      <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
        <img
          src={order.image}
          alt={order.name}
          className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg shadow-sm mr-4"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 leading-tight">{order.name}</h3>
          <p className="text-sm text-gray-500 mt-1">Size: {order.size}</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-end sm:space-x-8 w-full sm:w-auto">
        <span className="text-xl font-bold text-gray-900 mb-2 sm:mb-0">₹{order.price}</span>
        <div className="flex items-center text-gray-600 text-sm">
          <div className="mr-2">
            {getStatusIcon(order.status)}
          </div>
          <div>
            <p className="font-semibold">Expected Delivery On {order.expectedDelivery}</p>
            {order.message && (
              <p className="text-green-600 font-medium">{order.message}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;