import AliceCarousel from "react-alice-carousel";
import HomeCardSection from "../HomeSectionCard.jsx/HomeSectionCard";

const HomeSectionCursoual = ({ Nike_shoes = [] }) => {
  const items = Nike_shoes.map((shoe) => (
    <div key={shoe.id} className="p-4">
      <HomeCardSection product={shoe} />
    </div>
  ));

  const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
    1280: { items: 4 },
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col justify-center items-center py-5 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="w-full mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-wide uppercase mb-1">
          Nike Shoes
        </h2>

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
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            renderNextButton={() => (
              <button className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-md z-10 transition-transform duration-300 hover:scale-110 hidden lg:block">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          />
        </div>
      </div>
    </div>
  );
};


export default HomeSectionCursoual;