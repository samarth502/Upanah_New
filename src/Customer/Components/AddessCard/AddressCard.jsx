import React from "react";

const AddressCard = ({
  name = "Raam Kapoor",
  address = "Mumbai, gokul dham market, 40001",
  phoneLabel = "Phone Number",
  phone = "9167459820",
  onDeliver = () => {},
}) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h4 className="text-base font-semibold text-slate-800">{name}</h4>

      <p className="mt-1 text-sm text-slate-600">{address}</p>

      <div className="mt-4">
        <p className="text-sm font-semibold text-slate-700">{phoneLabel}</p>
        <p className="text-slate-800">{phone}</p>
      </div>

      <button
        onClick={onDeliver}
        className="mt-5 inline-flex items-center justify-center rounded-xl bg-violet-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-400 active:scale-[0.99]"
      >
        DELIVER HERE
      </button>
    </div>
  );
};

export default AddressCard;
