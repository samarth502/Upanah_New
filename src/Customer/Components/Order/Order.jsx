import React, { useState } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import OrderCard from './OrderCard';

const Order = () => {
  // State to manage the selected filters
  const [filters, setFilters] = useState({
    onTheWay: false,
    delivered: false,
    cancelled: false,
    returned: false,
  });

  // State to manage the list of orders (mock data)
  const [orders, setOrders] = useState([
    {
      id: 1,
      image: 'https://placehold.co/80x80/E0F2F7/263238?text=Jeans',
      name: 'Men Slim Mid Rise Black Jeans',
      size: 'M',
      price: 1099,
      status: 'On The Way',
      expectedDelivery: 'Mar 03',
      message: '',
    },
    {
      id: 2,
      image: 'https://placehold.co/80x80/FFF3E0/E65100?text=Dress',
      name: 'Women Bodycon Yellow Dress',
      size: 'M',
      price: 499,
      status: 'Delivered',
      expectedDelivery: 'Mar 03',
      message: 'Your Item Has Been Delivered',
    },
    {
      id: 3,
      image: 'https://placehold.co/80x80/E8F5E9/1B5E20?text=Dress',
      name: 'Women Skater Yellow Dress',
      size: 'M',
      price: 1099,
      status: 'Delivered',
      expectedDelivery: 'Mar 03',
      message: 'Your Item Has Been Delivered',
    },
    {
      id: 4,
      image: 'https://placehold.co/80x80/FCE4EC/880E4F?text=Shoe',
      name: 'Unisex Running Shoes',
      size: 'L',
      price: 1599,
      status: 'On The Way',
      expectedDelivery: 'Mar 10',
      message: '',
    },
    {
      id: 5,
      image: 'https://placehold.co/80x80/E0F7FA/006064?text=Shirt',
      name: 'Casual Cotton Shirt',
      size: 'XL',
      price: 799,
      status: 'Cancelled',
      expectedDelivery: 'Mar 01',
      message: '',
    },
    {
      id: 6,
      image: 'https://placehold.co/80x80/F3E5F5/4A148C?text=Bag',
      name: 'Leather Handbag',
      size: 'One Size',
      price: 2499,
      status: 'Returned',
      expectedDelivery: 'Feb 28',
      message: 'Item has been returned',
    },
  ]);

  // Handler for filter checkbox changes
  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.checked,
    });
  };

  // Function to filter orders based on selected checkboxes
  const getFilteredOrders = () => {
    const activeFilters = Object.keys(filters).filter((key) => filters[key]);

    if (activeFilters.length === 0) {
      return orders;
    }

    return orders.filter((order) =>
      activeFilters.some((filterKey) => {
        if (filterKey === 'onTheWay' && order.status === 'On The Way') return true;
        if (filterKey === 'delivered' && order.status === 'Delivered') return true;
        if (filterKey === 'cancelled' && order.status === 'Cancelled') return true;
        if (filterKey === 'returned' && order.status === 'Returned') return true;
        return false;
      })
    );
  };

  // Function to get the appropriate icon based on order status
  const getStatusIcon = (status) => {
    switch (status) {
      case 'Delivered':
        return <CheckCircleOutlineIcon className="text-green-500 text-xl" />;
      case 'On The Way':
        return <LocalShippingIcon className="text-blue-500 text-xl" />;
      case 'Cancelled':
        return <CancelOutlinedIcon className="text-red-500 text-xl" />;
      case 'Returned':
        return <RestoreOutlinedIcon className="text-orange-500 text-xl" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row">
      {/* Filters Section (Left Panel) */}
      <div className="w-full lg:w-1/4 bg-white rounded-xl shadow-lg p-6 mb-6 lg:mb-0 lg:mr-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Filters</h2>
        <div className="border-b border-gray-200 pb-4 mb-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">ORDER STATUS</h3>
          <div className="space-y-3">
            {Object.keys(filters).map((filterKey) => (
              <label key={filterKey} className="flex items-center text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  name={filterKey}
                  checked={filters[filterKey]}
                  onChange={handleFilterChange}
                  className="form-checkbox h-5 w-5 text-purple-600 rounded-md focus:ring-purple-500 border-gray-300 transition duration-150 ease-in-out"
                />
                <span className="ml-3 text-base capitalize">
                  {filterKey.replace(/([A-Z])/g, ' $1')}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
      
      {/* Order List Section (Right Panel) */}
      <div className="w-full lg:w-3/4">
        <div className="space-y-4">
          {getFilteredOrders().map((order) => (
            <OrderCard key={order.id} order={order} getStatusIcon={getStatusIcon} />
          ))}
          {getFilteredOrders().length === 0 && (
            <div className="text-center text-gray-600 text-lg py-10 bg-white rounded-xl shadow-lg">
              No orders found matching your filters.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;