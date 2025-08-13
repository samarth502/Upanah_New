import React from 'react';

// Main App component for the campus website
const DamnGoodShoes = () => {
  // Define data for your video cards - अपने वीडियो कार्ड के लिए डेटा परिभाषित करें
  const videoCardsData = [
    {
      videoSrc: "/ShoesVideo/0_Brown_Shoe_Loafer_3840x2160.mp4", // GIF URL को वास्तविक वीडियो URL से बदलें (Replace GIF URL with actual video URL)
    },
    {
      videoSrc: "/ShoesVideo/991134_Shop_Store_1920x1080.mov", // Replace with your actual footwear video URL for Card 2
    },
    {
      videoSrc: "/ShoesVideo/4934063_Person_People_3840x2160.mp4", // Replace with your actual footwear video URL for Card 3
    },
    {
      videoSrc: "/ShoesVideo/0_Demonstration_Diverse_3840x2160.mp4", // Replace with your actual footwear video URL for Card 4
    },
    // You can add more cards here for the next row or more rows
    // आप अगली पंक्ति या अधिक पंक्तियों के लिए यहां और कार्ड जोड़ सकते हैं
    {
      videoSrc: "/ShoesVideo/0_Orthopedic_Shoes_Medical_Shoes_3840x2160.mp4", // Example for a second row
    },
    {
      videoSrc: "/ShoesVideo/4934063_Person_People_3840x2160.mp4", // Example for a second row
    },
    {
      videoSrc: "/ShoesVideo/0_White_Person_3840x2160.mp4", // Example for a second row
    },
    {
      videoSrc: "/ShoesVideo/7183796_Woman_Lacing_3840x2160.mp4", // Example for a second row
    },
  ];

  return (
    <>
      {/* Background Video Section (Main Hero) - बैकग्राउंड वीडियो सेक्शन (मुख्य हीरो) */}
      <div className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/ShoesVideo/5572992_Coll_wavebreak_People_3840x2160.mp4" // इस URL को अपने फुटवियर या शूज से संबंधित बड़े वीडियो से बदलें! (Replace this URL with your main footwear or shoes related video!)
          autoPlay
          loop
          muted
          playsInline
        >
     Your browser does not support the video tag.
        </video>

        {/* Dark Overlay for better text readability - टेक्स्ट की बेहतर पठनीयता के लिए डार्क ओवरले */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>

        {/* Content Overlay - कंटेंट ओवरले */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white p-4 text-center">
          {/* Main Heading - मुख्य शीर्षक */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg leading-tight">
           Campus Shoes: Where Style Meets Comfort
          </h1>
          {/* Slogan/Tagline - स्लोगन/टैगलाइन */}
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl drop-shadow-md">
            Step out with confidence and style in every stride
          </p>
          {/* Call to Action Button - कॉल टू एक्शन बटन */}
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105
                       focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={() => console.log('एक्सप्लोर प्रोडक्ट्स बटन क्लिक किया गया! (Explore Products button clicked!)')}
          >
            Explore Products
          </button>
        </div>
      </div>

      {/* Video Cards Grid Section - वीडियो कार्ड्स ग्रिड सेक्शन */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="uppercase text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12 text-center">
          Our Popular Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {videoCardsData.map((card, index) => (
              <div key={index} className="relative bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 group h-80"> {/* Increased height for better video display */}
                {/* Video Background for Card - कार्ड के लिए वीडियो बैकग्राउंड */}
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover z-0"
                  src={card.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>

                {/* Dark Overlay for better text readability on card - कार्ड पर टेक्स्ट की बेहतर पठनीयता के लिए डार्क ओवरले */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10 group-hover:opacity-70 transition-opacity duration-300"></div>

                {/* No content overlay here as requested - अनुरोध के अनुसार यहाँ कोई कंटेंट ओवरले नहीं है */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DamnGoodShoes;
