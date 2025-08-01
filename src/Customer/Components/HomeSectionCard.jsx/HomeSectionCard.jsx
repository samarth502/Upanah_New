// This component represents a single product card with stylish design and animations.
import { motion } from 'framer-motion';
const HomeCardSection = ({ product }) => {
  return (
    <motion.div
      className="flex flex-col m-2 p-5 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden cursor-pointer"
      initial={{ y: 50, opacity: 0 }} // Initial animation state
      animate={{ y: 0, opacity: 1 }} // Animation when component mounts
      whileHover={{ scale: 1.05 }} // Animation on hover
      transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth transition
    >
      <img
        src={product.imageUrl}
        alt={`${product.brand} ${product.name}`}
        className="w-full h-48 object-cover rounded-xl mb-4"
        onError={(e) => {
          e.target.src = 'https://placehold.co/400x250/EAEAEA/000000?text=Image+Unavailable';
        }}
      />
      <div className="flex-grow">
        <p className="text-sm font-semibold text-gray-400 uppercase mb-1">{product.brand}</p>
        <h2 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h2>
        <p className="text-2xl font-extrabold text-blue-600">{product.price}</p>
      </div>
      {/* <button className="mt-4 w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-blue-700 transition-colors duration-300">
        Add to Cart
      </button> */}
    </motion.div>
  );
};


export default HomeCardSection;