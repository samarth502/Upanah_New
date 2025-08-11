// import { StarIcon } from '@heroicons/react/20/solid'
// import Product from '../Product/Product'

// const product = {
//   name: 'Basic Tee 6-Pack',
//   price: '$192',
//   href: '#',
//   breadcrumbs: [
//     { id: 1, name: 'Men', href: '#' },
//     { id: 2, name: 'Clothing', href: '#' },
//   ],
//   images: [
//     {
//       src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
//       alt: 'Two each of gray, white, and black shirts laying flat.',
//     },
//     {
//       src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
//       alt: 'Model wearing plain black basic tee.',
//     },
//     {
//       src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
//       alt: 'Model wearing plain gray basic tee.',
//     },
//     {
//       src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
//       alt: 'Model wearing plain white basic tee.',
//     },
//   ],
//   colors: [
//     { id: 'white', name: 'White', classes: 'bg-white checked:outline-gray-400' },
//     { id: 'gray', name: 'Gray', classes: 'bg-gray-200 checked:outline-gray-400' },
//     { id: 'black', name: 'Black', classes: 'bg-gray-900 checked:outline-gray-900' },
//   ],
//   sizes: [
//     { name: 'XXS', inStock: false },
//     { name: 'XS', inStock: true },
//     { name: 'S', inStock: true },
//     { name: 'M', inStock: true },
//     { name: 'L', inStock: true },
//     { name: 'XL', inStock: true },
//     { name: '2XL', inStock: true },
//     { name: '3XL', inStock: true },
//   ],
//   description:
//     'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
//   highlights: [
//     'Hand cut and sewn locally',
//     'Dyed with our proprietary colors',
//     'Pre-washed & pre-shrunk',
//     'Ultra-soft 100% cotton',
//   ],
//   details:
//     'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
// }
// const reviews = { href: '#', average: 4, totalCount: 117 }

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function ProductDeatils() {
//   return (
//     <div className="bg-white">
//       <div className="pt-6">
//         <nav aria-label="Breadcrumb">
//           <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
//             {product.breadcrumbs.map((breadcrumb) => (
//               <li key={breadcrumb.id}>
//                 <div className="flex items-center">
//                   <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
//                     {breadcrumb.name}
//                   </a>
//                   <svg
//                     fill="currentColor"
//                     width={16}
//                     height={20}
//                     viewBox="0 0 16 20"
//                     aria-hidden="true"
//                     className="h-5 w-4 text-gray-300"
//                   >
//                     <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
//                   </svg>
//                 </div>
//               </li>
//             ))}
//             <li className="text-sm">
//               <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
//                 {product.name}
//               </a>
//             </li>
//           </ol>
//         </nav>

// <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10 px-4 pt-10 '>

//   {/* Image gallery */}
//         <div className="flex flex-col items-center ">
//           <img
//             alt={product.images[0].alt}
//             src={product.images[0].src}
//             className="flex flex-wrap space-x-5 justify-center"
//           />

//           <div className="mt-4 flex flex-wrap justify-center gap-3">
//     {product.images.map((item, i) => (
//       <img
//         key={i}
//         alt={item.alt}
//         src={item.src}
//         className="w-20 h-20 rounded-lg object-cover"
//       />
//     ))}
//   </div>
        
//         </div>




    
//         {/* Product info */}
//         <div className="lg:col-span-1 m-auto max-2-xl px-4 pb-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
//           <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
//             <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
//           </div>

//           {/* Options */}
//           <div className="mt-4 lg:row-span-3 lg:mt-0">
//             <h2 className="sr-only">Product information</h2>
//             <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

//             {/* Reviews */}
//             <div className="mt-6">
//               <h3 className="sr-only">Reviews</h3>
//               <div className="flex items-center">
//                 <div className="flex items-center">
//                   {[0, 1, 2, 3, 4].map((rating) => (
//                     <StarIcon
//                       key={rating}
//                       aria-hidden="true"
//                       className={classNames(
//                         reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
//                         'size-5 shrink-0',
//                       )}
//                     />
//                   ))}
//                 </div>
//                 <p className="sr-only">{reviews.average} out of 5 stars</p>
//                 <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
//                   {reviews.totalCount} reviews
//                 </a>
//               </div>
//             </div>

//             <form className="mt-10">
//               {/* Colors */}
//               <div>
//                 <h3 className="text-sm font-medium text-gray-900">Color</h3>

//                 <fieldset aria-label="Choose a color" className="mt-4">
//                   <div className="flex items-center gap-x-3">
//                     {product.colors.map((color) => (
//                       <div key={color.id} className="flex rounded-full outline -outline-offset-1 outline-black/10">
//                         <input
//                           defaultValue={color.id}
//                           defaultChecked={color === product.colors[0]}
//                           name="color"
//                           type="radio"
//                           aria-label={color.name}
//                           className={classNames(
//                             color.classes,
//                             'size-8 appearance-none rounded-full forced-color-adjust-none checked:outline-2 checked:outline-offset-2 focus-visible:outline-3 focus-visible:outline-offset-3',
//                           )}
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 </fieldset>
//               </div>

//               {/* Sizes */}
//               <div className="mt-10">
//                 <div className="flex items-center justify-between">
//                   <h3 className="text-sm font-medium text-gray-900">Size</h3>
//                   <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
//                     Size guide
//                   </a>
//                 </div>

//                 <fieldset aria-label="Choose a size" className="mt-4">
//                   <div className="grid grid-cols-4 gap-3">
//                     {product.sizes.map((size) => (
//                       <label
//                         key={size.id}
//                         aria-label={size.name}
//                         className="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
//                       >
//                         <input
//                           defaultValue={size.id}
//                           defaultChecked={size === product.sizes[2]}
//                           name="size"
//                           type="radio"
//                           disabled={!size.inStock}
//                           className="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
//                         />
//                         <span className="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
//                           {size.name}
//                         </span>
//                       </label>
//                     ))}
//                   </div>
//                 </fieldset>
//               </div>

//               <button
//                 type="submit"
//                 className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
//               >
//                 Add to bag
//               </button>
//             </form>
//           </div>

//           <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
//             {/* Description and details */}
//             <div>
//               <h3 className="sr-only">Description</h3>

//               <div className="space-y-6">
//                 <p className="text-base text-gray-900">{product.description}</p>
//               </div>
//             </div>

//             <div className="mt-10">
//               <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

//               <div className="mt-4">
//                 <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
//                   {product.highlights.map((highlight) => (
//                     <li key={highlight} className="text-gray-400">
//                       <span className="text-gray-600">{highlight}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             <div className="mt-10">
//               <h2 className="text-sm font-medium text-gray-900">Details</h2>

//               <div className="mt-4 space-y-6">
//                 <p className="text-sm text-gray-600">{product.details}</p>
//               </div>
//             </div>
//           </div>
//         </div>

// </section>

      

//       </div>
//     </div>
//   )
// }



import { useMemo, useState } from "react";
import Star from "@mui/icons-material/Star";
import StarBorder from "@mui/icons-material/StarBorder";
import LocalShipping from "@mui/icons-material/LocalShipping";
import Replay from "@mui/icons-material/Replay";
import WorkspacePremium from "@mui/icons-material/WorkspacePremium";
import CheckCircle from "@mui/icons-material/CheckCircle";
import Bolt from "@mui/icons-material/Bolt";
import Security from "@mui/icons-material/Security";
import HelpOutline from "@mui/icons-material/HelpOutline";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";

import img1 from '../../../assets/mensImages/fashion-shoes-sneakers.jpg'


const product = {
  name: "StrideMax Pro Running Shoes",
  price: "₹4,299",
  mrp: "₹5,499",
  discountLabel: "22% off",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Footwear", href: "#" },
    { id: 3, name: "Running Shoes", href: "#" },
  ],
  images: [
    {
      src: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/g/o/z/9-6202015156-9-liberty-t-blue-original-imah4zgkvfhthzwx.jpeg?q=70&crop=false",
      alt: "Front angle of the shoe in white/black.",
    },
    {
      src:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/m/p/g/9-6202015156-9-liberty-t-blue-original-imah4zgkkvmgaakn.jpeg?q=70&crop=false",
      alt: "Side profile of the shoe.",
    },
    {
      src: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/t/l/v/9-6202015156-9-liberty-t-blue-original-imah4zgkye6u7whh.jpeg?q=70&crop=false",
      alt: "Top view showing laces.",
    },
    {
      src: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/g/o/z/9-6202015156-9-liberty-t-blue-original-imah4zgkvfhthzwx.jpeg?q=70&crop=false",
      alt: "Outsole tread pattern.",
    },
  ],
  colors: [
    { id: "white-black", name: "White/Black", classes: "bg-neutral-200" },
    { id: "graphite", name: "Graphite", classes: "bg-gray-500" },
    { id: "neon", name: "Neon Green", classes: "bg-lime-400" },
  ],
  sizes: [
    { name: "UK 6", inStock: true },
    { name: "UK 7", inStock: true },
    { name: "UK 8", inStock: true },
    { name: "UK 9", inStock: true },
    { name: "UK 10", inStock: false },
    { name: "UK 11", inStock: true },
  ],
  description:
    "Engineered for daily miles. Lightweight, breathable knit upper with responsive midsole for cushioned takeoffs and smooth landings.",
  highlights: [
    "Breathable knit upper with TPU overlays",
    "Cushioned EVA midsole for impact absorption",
    "Durable rubber outsole with multi-surface grip",
    "Heel loop for easy on-off",
  ],
  details:
    "Ideal for road running and gym sessions. Neutral support. 10 mm drop. Weight ~285 g (UK 9). Care: Remove insoles and air-dry after use. Spot clean with mild soap.",
  specs: {
    "Upper Material": "Engineered Knit + TPU",
    "Sole Material": "EVA midsole + Rubber outsole",
    "Closure": "Lace-Up",
    "Arch Type": "Neutral",
    "Weight": "≈ 285 g (UK 9)",
    "Warranty": "6 months manufacturer warranty",
  },
  offers: [
    "Bank Offer: 10% Instant Discount with HDFC Cards",
    "No Cost EMI from ₹716/month",
    "Extra ₹200 off on first order",
  ],
};

const reviews = {
  average: 4.3,
  totalCount: 117,
  breakdown: { 5: 62, 4: 34, 3: 13, 2: 5, 1: 3 },
  list: [
    {
      id: 1,
      name: "Rahul S.",
      rating: 5,
      date: "June 18, 2025",
      title: "Great cushioning for long runs",
      text: "Did a 12k without any hot spots. Grip is solid even on wet roads.",
      verified: true,
    },
    {
      id: 2,
      name: "Neha K.",
      rating: 4,
      date: "May 29, 2025",
      title: "Comfortable & light",
      text: "True to size (UK 7). Breathability is good for summer.",
      verified: true,
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function RatingStars({ value, size = "20px" }) {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((n) =>
        value >= n ? (
          <Star key={n} sx={{ fontSize: size }} className="text-amber-500" />
        ) : value > n - 1 ? (
          // crude half handling by filling then border (optional)
          <Star key={n} sx={{ fontSize: size }} className="text-amber-300" />
        ) : (
          <StarBorder key={n} sx={{ fontSize: size }} className="text-gray-300" />
        )
      )}
    </div>
  );
}

function Bar({ pct }) {
  return (
    <div className="h-2 w-full rounded bg-gray-200">
      <div className="h-2 rounded bg-amber-500" style={{ width: `${pct}%` }} />
    </div>
  );
}

export default function ProductDetails() {
  const [activeImg, setActiveImg] = useState(0);
  const [color, setColor] = useState(product.colors[0].id);
  const [size, setSize] = useState(product.sizes.find((s) => s.inStock)?.name || "");
  const [pincode, setPincode] = useState("");
  const [deliveryMsg, setDeliveryMsg] = useState("");

  const navigate = useNavigate();

  const totalRatings = useMemo(
    () => Object.values(reviews.breakdown).reduce((a, b) => a + b, 0),
    []
  );

  const pct = (n) => Math.round((n / totalRatings) * 100);

  const checkDelivery = (e) => {
    e.preventDefault();
    if (/^\d{6}$/.test(pincode)) {
      setDeliveryMsg("Delivery available in 2–4 days. COD eligible.");
    } else {
      setDeliveryMsg("Please enter a valid 6-digit pincode.");
    }
  };



  const handleAddToCard = ()=>{
        navigate('/cart')

  }
  
  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((b) => (
              <li key={b.id}>
                <div className="flex items-center">
                  <a href={b.href} className="mr-2 text-sm font-medium text-gray-900">
                    {b.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <img
              alt={product.images[activeImg]?.alt || "Product image"}
              src={product.images[activeImg]?.src}
              className="w-full max-w-xl rounded-lg object-cover"
            />
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {product.images.map((img, i) => (
                <img
                  key={i}
                  alt={img.alt}
                  src={img.src}
                  onClick={() => setActiveImg(i)}
                  className={classNames(
                    "w-20 h-20 rounded-lg object-cover cursor-pointer ring-1",
                    i === activeImg ? "ring-amber-500" : "ring-gray-200"
                  )}
                />
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:col-span-1 m-auto max-2-xl px-4 pb-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24 w-full">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.name}
              </h1>
            </div>

            {/* Price & reviews */}
            <div className="mt-3 flex items-end gap-3">
              <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>
              <p className="text-lg line-through text-gray-400">{product.mrp}</p>
              <span className="text-sm font-medium text-green-600">{product.discountLabel}</span>
            </div>

            <div className="mt-2 flex items-center gap-2">
              <RatingStars value={reviews.average} />
              <span className="text-sm text-gray-600">
                {reviews.average.toFixed(1)} • {reviews.totalCount} ratings
              </span>
              <a href="#reviews" className="text-sm text-indigo-600 hover:text-indigo-500">
                Read all
              </a>
            </div>

            {/* Offers */}
            <div className="mt-4 rounded-md border border-amber-200 bg-amber-50 p-3">
              <div className="mb-2 flex items-center gap-2 text-amber-700 font-medium">
                <Bolt fontSize="small" /> Offers & EMI
              </div>
              <ul className="list-disc pl-5 text-sm text-amber-800 space-y-1">
                {product.offers.map((o, i) => (
                  <li key={i}>{o}</li>
                ))}
              </ul>
            </div>

            {/* Options */}
            <div className="mt-6">
              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>
                <fieldset aria-label="Choose a color" className="mt-3">
                  <div className="flex items-center gap-3">
                    {product.colors.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setColor(c.id)}
                        aria-label={c.name}
                        className={classNames(
                          "size-8 rounded-full ring-2 ring-offset-2",
                          c.classes,
                          color === c.id ? "ring-amber-500" : "ring-gray-300"
                        )}
                        title={c.name}
                      />
                    ))}
                  </div>
                </fieldset>
              </div>

              {/* Sizes (UK) */}
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size (UK)</h3>
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Size guide
                  </a>
                </div>

                <fieldset aria-label="Choose a size" className="mt-3">
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {product.sizes.map((s) => {
                      const selected = size === s.name;
                      return (
                        <button
                          key={s.name}
                          type="button"
                          disabled={!s.inStock}
                          onClick={() => s.inStock && setSize(s.name)}
                          className={classNames(
                            "p-3 text-sm rounded-md border transition",
                            s.inStock
                              ? selected
                                ? "border-amber-600 bg-amber-600 text-white"
                                : "border-gray-300 hover:border-amber-600"
                              : "border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed"
                          )}
                          aria-pressed={selected}
                        >
                          {s.name}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>
              </div>

              {/* Pincode checker */}
              <form onSubmit={checkDelivery} className="mt-6 flex gap-3">
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  placeholder="Enter pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value.replace(/\D/g, ""))}
                  className="w-40 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-amber-600 focus:ring-amber-600"
                />
                <button
                  type="submit"
                  className="rounded-md bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700"
                >
                  Check
                </button>
              </form>
              {deliveryMsg && <p className="mt-2 text-sm text-gray-700">{deliveryMsg}</p>}

              {/* CTA */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleAddToCard}
                  className="flex-1 rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white hover:bg-indigo-700"
                >
                  Add to Cart
                </button>
                <button
                  type="button"
                  className="flex-1 rounded-md border border-indigo-600 px-6 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-50"
                >
                  Buy Now
                </button>
                <button
                  type="button"
                  className="rounded-md border px-4 py-3 text-gray-700 hover:bg-gray-50"
                  title="Add to wishlist"
                >
                  <FavoriteBorder />
                </button>
              </div>

              {/* Service bullets */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <LocalShipping className="text-gray-600" fontSize="small" />
                  <span>Free delivery over ₹999</span>
                </div>
                <div className="flex items-center gap-2">
                  <Replay className="text-gray-600" fontSize="small" />
                  <span>7‑day easy returns</span>
                </div>
                <div className="flex items-center gap-2">
                  <WorkspacePremium className="text-gray-600" fontSize="small" />
                  <span>6‑month warranty</span>
                </div>
              </div>
            </div>

            {/* Description & highlights */}
            <div className="py-8 lg:border-t lg:border-gray-200 lg:mt-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Description</h3>
                <p className="text-gray-700">{product.description}</p>
              </div>

              <div className="mt-8">
                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
                  {product.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>

              {/* Specs */}
              <div className="mt-8">
                <h3 className="text-sm font-medium text-gray-900">Specifications</h3>
                <dl className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {Object.entries(product.specs).map(([k, v]) => (
                    <div key={k} className="flex">
                      <dt className="w-40 text-sm text-gray-500">{k}</dt>
                      <dd className="text-sm text-gray-900">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Assurances */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Security className="text-gray-600" fontSize="small" />
                  <span>100% Original Products</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-gray-600" fontSize="small" />
                  <span>Quality Checked</span>
                </div>
                <div className="flex items-center gap-2">
                  <HelpOutline className="text-gray-600" fontSize="small" />
                  <span>Need help? Chat now</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Summary */}
            <div className="lg:col-span-1">
              <h2 className="text-lg font-semibold">Ratings & Reviews</h2>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-3xl font-bold">{reviews.average.toFixed(1)}</span>
                <RatingStars value={reviews.average} size="24px" />
              </div>
              <p className="text-sm text-gray-600 mt-1">{reviews.totalCount} ratings</p>

              <div className="mt-4 space-y-2">
                {[5, 4, 3, 2, 1].map((r) => (
                  <div key={r} className="flex items-center gap-3">
                    <span className="w-6 text-sm text-gray-700">{r}</span>
                    <Bar pct={pct(reviews.breakdown[r] || 0)} />
                    <span className="w-10 text-right text-sm text-gray-600">
                      {pct(reviews.breakdown[r] || 0)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* List */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-medium">Top reviews</h3>
                <select className="rounded-md border border-gray-300 px-3 py-2 text-sm">
                  <option>Most recent</option>
                  <option>Highest rating</option>
                  <option>Lowest rating</option>
                </select>
              </div>

              <ul className="mt-4 space-y-6">
                {reviews.list.map((r) => (
                  <li key={r.id} className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <RatingStars value={r.rating} />
                          <span className="text-sm text-gray-700 font-medium">{r.title}</span>
                        </div>
                        <p className="mt-1 text-sm text-gray-600">
                          {r.name} • {r.date} {r.verified && <span className="text-green-600">• Verified Purchase</span>}
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 text-gray-800 text-sm">{r.text}</p>
                  </li>
                ))}
              </ul>

              {/* Add a review (mock) */}
              <div className="mt-8 rounded-lg border p-4">
                <h4 className="font-medium mb-3">Write a review</h4>
                <div className="grid gap-3 sm:grid-cols-2">
                  <input className="rounded-md border px-3 py-2 text-sm" placeholder="Your name" />
                  <input className="rounded-md border px-3 py-2 text-sm" placeholder="Title (e.g., Great cushioning)" />
                </div>
                <textarea
                  className="mt-3 w-full rounded-md border px-3 py-2 text-sm"
                  placeholder="Share details about comfort, fit, grip, durability…"
                  rows={4}
                />
                <div className="mt-3 flex items-center gap-3">
                  <span className="text-sm">Your rating:</span>
                  <RatingStars value={5} />
                </div>
                <button className="mt-4 rounded-md bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700">
                  Submit review
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
