import React from 'react'
import Navigations from '../Customer/Components/Navigations'
import { Routes, Route } from 'react-router-dom'
import HomePages from '../Customer/Pages/HomePages'
import CardMain from '../Customer/Components/Card/CardMain'
import Product from '../Customer/Components/Product/Product'
import ProductDetails from '../Customer/Components/ProductDeatils/ProductDeatils'
import CheckOut from '../Customer/Components/CheckOut/CheckOut'
import Order from '../Customer/Components/Order/Order'
import OrderDetails from '../Customer/Components/Order/OrderDeails'

const CustorRoutes = () => {
  return (
    <>
      <Navigations />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/card" element={<CardMain />} />
        <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<CardMain/>} />
        <Route path="/checkout" element={<CheckOut/>} />
        <Route path="/account/order" element={<Order/>} />
        <Route path="/account/order/:orderId" element={<OrderDetails/>} />






      </Routes>
    </>
  )
}

export default CustorRoutes
