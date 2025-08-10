import React from 'react'
import AddressCard from '../AddessCard/AddressCard'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import CardItem from '../Card/CardItem'
import { Divider } from '@mui/material'
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";


const OrderSumery = () => {
     const items = 3;
     const price = 4697;
  const discount = 3419;
  const deliveryCharge = 0;

       const inr = (n) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(n);

  const total = Math.max(0, price - discount + deliveryCharge);

    const handleCheckout = () => {
    // TODO: replace with your checkout flow
    console.log("Proceed to checkout");
  };


  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
        <AddressCard/>
      </div>

       <div className="w-full mt-10">
            <div className="lg:grid grid-cols-3 relative gap-6">
              {/* LEFT: Cart items */}
         <div className="col-span-2">
        {[1, 1, 1, 1, 1].map((item, index) => (
          <CardItem key={index} />
        ))}
      </div>
      
      
              {/* RIGHT: Price Details */}
              <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
                <div className="border border-slate-200 rounded-2xl bg-white p-5 shadow-sm">
                  <p className="uppercase font-bold opacity-60 pb-4">Price details</p>
                  <Divider />
      
                  <div className="mt-4 space-y-3 text-sm">
                    <Row
                      label={`Price (${items} item${items > 1 ? "s" : ""})`}
                      value={inr(price)}
                    />
      
                    <Row
                      label={
                        <span className="inline-flex items-center gap-1 text-slate-600">
                          <LocalOfferIcon fontSize="small" />
                          Discount
                        </span>
                      }
                      value={<span className="text-emerald-600">-{inr(discount)}</span>}
                    />
      
                    <Row
                      label={
                        <span className="inline-flex items-center gap-1 text-slate-600">
                          <LocalShippingIcon fontSize="small" />
                          Delivery Charges
                        </span>
                      }
                      value={
                        deliveryCharge === 0 ? (
                          <span className="text-emerald-600 font-medium">Free</span>
                        ) : (
                          inr(deliveryCharge)
                        )
                      }
                    />
                  </div>
      
                  <div className="mt-4 border-t border-slate-200 pt-3">
                    <Row
                      label={<span className="font-semibold text-slate-800">Total Amount</span>}
                      value={<span className="font-bold text-emerald-600">{inr(total)}</span>}
                    />
                  </div>
      
                  <button
                    onClick={handleCheckout}
                    className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-3 text-sm font-semibold text-white shadow-md hover:from-violet-600 hover:to-fuchsia-600 focus:outline-none focus:ring-2 focus:ring-violet-400 active:scale-[0.99]"
                  >
                    <ShoppingCartIcon fontSize="small" />
                    CHECK OUT
                  </button>
      
                  <div className="mt-2 flex items-start gap-1 text-xs text-slate-500">
                    <InfoOutlinedIcon fontSize="inherit" />
                    <span>Taxes included where applicable.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

// small row helper
const Row = ({ label, value }) => (
  <div className="flex items-center justify-between">
    <div className="text-slate-600">{label}</div>
    <div className="font-medium text-slate-800">{value}</div>
  </div>
);

export default OrderSumery
