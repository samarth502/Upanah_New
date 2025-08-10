// import { Button, Grid } from "@mui/material";
// import AddressCard from "../AddessCard/AddressCard";

// const DeliveryAddress = () => {
//   return (
//     <div>
//       <Grid container spacing={4}>
//         <Grid className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
//           <div className="p-5 py-7 border-b cursor-pointer">
//             <AddressCard />
//             <Button
//               sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
//               size="large"
//               variant="contained"
//             >
//               Deliver Here
//             </Button>
//           </div>
//         </Grid>

//         <Grid>

//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default DeliveryAddress;

import React, { useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import MarkunreadMailboxOutlinedIcon from "@mui/icons-material/MarkunreadMailboxOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";

import AddressCard from "../AddessCard/AddressCard";

const DeliveryAddress = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleDeliverHere = () => {
    // TODO: left-side address selection logic
    console.log("Deliver to selected address");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: submit form to backend
    console.log("Submitting address:", form);
  };

  const inputClasses =
    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200";
  const labelClasses =
    "absolute top-3 left-10 text-gray-400 text-sm pointer-events-none transition-all duration-200";

  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:space-x-4 lg:px-16">
        {/* LEFT: Saved Address + CTA */}
        <div className="w-full lg:w-5/12 mb-4 lg:mb-0">
          <div className="border border-gray-200 rounded-2xl shadow-md h-[30.5rem] overflow-y-scroll">
            <div className="p-5 py-7 border-b border-gray-200 cursor-pointer">
              <AddressCard />
              {/* <button
                onClick={handleDeliverHere}
                className="mt-4 w-full p-3 font-semibold text-white rounded-lg shadow-md transition duration-300 ease-in-out
                           bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
              >
                Deliver Here
              </button> */}
            </div>
            {/* You can map multiple AddressCard entries here if needed */}
          </div>
        </div>

        {/* RIGHT: Delivery Form */}
        <div className="w-full lg:w-7/12">
          <div className="bg-white rounded-2xl shadow-md">
            <div className="p-5 pb-2">
              <h2 className="text-sm font-bold text-gray-600">DELIVERY DETAILS</h2>
            </div>
            <hr className="my-2 mx-5 border-gray-200" />

            <form onSubmit={handleSubmit} className="p-5 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* First Name */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                    <PersonOutlineIcon />
                  </div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name *"
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>

                {/* Last Name */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                    <PersonOutlineIcon />
                  </div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name *"
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>

                {/* Address */}
                <div className="sm:col-span-2 relative">
                  <div className="absolute top-3 left-3 flex items-center pointer-events-none text-gray-400">
                    <HomeOutlinedIcon />
                  </div>
                  <textarea
                    name="address"
                    placeholder="Address *"
                    value={form.address}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    rows="3"
                    required
                  ></textarea>
                </div>

                {/* City */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                    <LocationCityOutlinedIcon />
                  </div>
                  <input
                    type="text"
                    name="city"
                    placeholder="City *"
                    value={form.city}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>

                {/* State/Province/Region */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                    <PublicOutlinedIcon />
                  </div>
                  <input
                    type="text"
                    name="state"
                    placeholder="State/Province/Region *"
                    value={form.state}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>

                {/* Zip / Postal code */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                    <MarkunreadMailboxOutlinedIcon />
                  </div>
                  <input
                    type="text"
                    name="zip"
                    placeholder="Zip / Postal code *"
                    value={form.zip}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                    inputMode="numeric"
                    pattern="[0-9]*"
                  />
                </div>

                {/* Phone Number */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                    <PhoneIphoneOutlinedIcon />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                    maxLength="15"
                  />
                </div>

                {/* Submit Button */}
                <div className="sm:col-span-2 mt-2">
                  <button
                    type="submit"
                    className="w-full py-4 font-bold text-white rounded-lg shadow-md transition duration-300 ease-in-out
                               bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600
                               tracking-wider uppercase"
                  >
                    Delivered Here
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAddress;