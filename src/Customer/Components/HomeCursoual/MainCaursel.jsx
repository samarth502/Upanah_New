import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'; // Ensure this is imported for basic carousel styles
import bannerImage1 from '../../../assets/BannerImages/1877.jpg';
import bannerImage2 from '../../../assets/BannerImages/becfaaac-3067-4b53-ae98-69fdae9303da.jpg';
import bannerImage3 from '../../../assets/BannerImages/Black-Friday_web_banner_12.jpg';



// Tailwind CSS is assumed to be available in the environment.
// No direct import needed for Tailwind classes.

const responsive = {
    0: { items: 1 },    // On small screens, show 1 item
    568: { items: 1 },  // On medium screens, still show 1 item (as per your request for fixed size)
    1024: { items: 1 }, // On large screens, show 1 item
};

// Array of image data (using placeholder images for demonstration)
// You can replace these URLs with your actual image URLs.
const imageData = [
    
     { src: bannerImage1, alt: 'Placeholder Image 1', value: '1' },
  { src: bannerImage2, alt: 'Placeholder Image 2', value: '2' },
  { src: bannerImage3, alt: 'Placeholder Image 3', value: '3' },
];

const items = imageData.map((img, index) => (
    <div
        key={img.value} // Use a unique key for each item
        className="item flex justify-center items-center p-4" // Centering the image within its container
        data-value={img.value}
    >
        <img
            src={img.src}
            alt={img.alt}
            // Tailwind classes for fixed width and height
            // w-full ensures it takes the full width of its parent div (item)
            // h-96 sets a fixed height of 24rem (384px)
            // object-cover ensures the image covers the area without distortion, cropping if necessary
            // rounded-lg adds nice rounded corners
            className="w-full h-96 object-cover rounded-lg shadow-lg"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x400/CCCCCC/000000?text=Image+Load+Error"; }} // Fallback for broken images
        />
    </div>
));

const MainCarousel = () => (
    <div className="flex justify-center items-center  bg-gray-100 p-2">
        <div className="w-full  bg-white rounded-xl shadow-2xl overflow-hidden p-1">
            {/* <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Our Featured Images</h2> */}
            <AliceCarousel
                
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
                disableDotsControls={false} // Show pagination dots
                disableButtonsControls={false} // Show navigation buttons z
                autoPlay={true} // Enable auto-play
                autoPlayInterval={3000} // Set auto-play interval to 3 seconds
                infinite={true} // Loop the carousel infinitely
                animationDuration={500} // Smooth animation duration z
                // Custom navigation buttons for a nicer look
                renderPrevButton={() => (
                    <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full shadow-lg z-10 ml-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                )}
                renderNextButton={() => (
                    <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full shadow-lg z-10 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                )}
            />
        </div>
    </div>
);

export default MainCarousel;

