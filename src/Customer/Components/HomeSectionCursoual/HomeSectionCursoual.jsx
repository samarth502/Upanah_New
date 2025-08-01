import AliceCarousel from "react-alice-carousel";
import HomeCardSection from "../HomeSectionCard.jsx/HomeSectionCard";

// This is the main carousel component, which uses the HomeCardSection.
const HomeSectionCursoual = () => {
  // Sample data for shoes to display in the carousel.
  const shoeData = [
    { id: 1, brand: 'Nike', name: 'Air Max 270', price: '$150', imageUrl: '/fashion-shoes-sneakers.jpg' },
    { id: 2, brand: 'Adidas', name: 'Ultraboost 22', price: '$180', imageUrl: '/shoes.jpg' },
    { id: 3, brand: 'Puma', name: 'Suede Classic', price: '$75', imageUrl: '/sport-running-shoes.jpg' },
    { id: 4, brand: 'New Balance', name: '550 White', price: '$130', imageUrl: '/fashion-shoes-sneakers.jpg' },
    { id: 5, brand: 'Reebok', name: 'Classic Leather', price: '$85', imageUrl: '/shoes.jpg' },
    { id: 6, brand: 'Converse', name: 'Chuck Taylor All Star', price: '$60', imageUrl: '/sport-running-shoes.jpg' },
  ];

  // Maps the shoe data to the carousel items, using the HomeCardSection component.
  const items = shoeData.map((shoe) => (
    <div key={shoe.id} className="p-4">
      <HomeCardSection product={shoe} />
    </div>
  ));

  // Defines the carousel's responsiveness for different screen sizes.
  const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
    1280: { items: 4 },
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col justify-center items-center py-5 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="w-full  mx-auto">
       
        
        <div className="relative">
          <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
            disableDotsControls={false}
            disableButtonsControls={false}
            autoPlay={true}
            autoPlayInterval={2000}
            infinite={true}
            animationDuration={500}
            renderPrevButton={() => (
              <button className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-md z-10 transition-transform duration-300 hover:scale-110 hidden lg:block">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              </button>
            )}
            renderNextButton={() => (
              <button className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-md z-10 transition-transform duration-300 hover:scale-110 hidden lg:block">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCursoual;