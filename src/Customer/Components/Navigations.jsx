'use client'

import { Fragment, useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'




const navigation = {
  categories: [
    {
      id: 'footwear',
      name: 'Footwear',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://placehold.co/300x200/ADD8E6/000000?text=New+Shoes',
          imageAlt: 'Stylish new sneakers on display.',
        },
        {
          name: 'Best Sellers',
          href: '#',
          imageSrc: 'https://placehold.co/300x200/90EE90/000000?text=Popular+Footwear',
          imageAlt: 'Collection of popular formal shoes and casual sneakers.',
        },
      ],
      sections: [
        {
          id: 'shoes-types',
          name: 'Shoes Types',
          items: [
            { name: 'Sports', id: 'sports' },
            { name: 'Formal', id: 'formal' },
            { name: 'Bellies / Loafers', id: 'bellies-loafers' },
            { name: 'Flats', id: 'flats' },
            { name: 'Heel', id: 'heel' },
            { name: 'Party', id: 'party' },
            { name: 'Sandals', id: 'sandals' },
            { name: 'Slippers', id: 'slippers' },
            { name: 'All Footwear', id: 'all-footwear' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Nike', id: 'nike' },
            { name: 'Adidas', id: 'adidas' },
            { name: 'Puma', id: 'puma' },
            { name: 'Bata', id: 'bata' },
            { name: 'Crocs', id: 'crocs' },
            { name: 'Woodland', id: 'woodland' },
          ],
        },
        {
          id: 'collections',
          name: 'Collections',
          items: [
            { name: 'Running Shoes', id: 'running-shoes' },
            { name: 'Casual Wear', id: 'casual-wear' },
            { name: 'Winter Boots', id: 'winter-boots' },
            { name: 'Summer Sandals', id: 'summer-sandals' },
            { name: 'Kids Footwear', id: 'kids-footwear' },
          ],
        },
      ],
    },
    {
      id: 'accessories',
      name: 'Accessories',
      featured: [
        {
          name: 'Shoe Care Kits',
          href: '#',
          imageSrc: 'https://placehold.co/300x200/DDA0DD/000000?text=Shoe+Care',
          imageAlt: 'Various shoe cleaning and polishing products.',
        },
        {
          name: 'Socks & Insoles',
          href: '#',
          imageSrc: 'https://placehold.co/300x200/FFD700/000000?text=Socks+Insoles',
          imageAlt: 'Comfortable socks and orthopedic insoles.',
        },
      ],
      sections: [
        {
          id: 'shoe-accessories',
          name: 'Shoe Accessories',
          items: [
            { name: 'Socks', id: 'socks' },
            { name: 'Insoles', id: 'insoles' },
            { name: 'Shoe Laces', id: 'shoe-laces' },
            { name: 'Shoe Polish', id: 'shoe-polish' },
            { name: 'Shoe Horns', id: 'shoe-horns' },
          ],
        },
        {
          id: 'other-accessories',
          name: 'Other Accessories',
          items: [
            { name: 'Bags', id: 'bags' },
            { name: 'Wallets', id: 'wallets' },
            { name: 'Belts', id: 'belts' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'About Us', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Sale', href: '#' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigations() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()




    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const handleProfileClick = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };

    const handleLogout = () => {
        // Implement your logout logic here
        console.log("User logged out");
        // Example: navigate('/login');
    };

    const handleMyOrdersClick = () => {
        // Navigate to the user's orders page
        navigate('/account/order');
        setIsProfileDropdownOpen(false);
    };

    const handleProfilePageClick = () => {
        // Navigate to the user's profile page
        navigate('/profile');
        setIsProfileDropdownOpen(false);
    };
  // The 'close' function is now optional, as we handle mobile separately.
  const handleCategoryClicked = (category, section, item, close = () => {}) => {
    console.log(category.id, section, item, "Navigation click");
    // Ensure item has an ID before navigating
    if (item.id) {
      navigate(`/${category.id}/${section.id}/${item.id}`);
    } else {
      // Fallback for items without IDs, e.g., using item.name
      navigate(`/${category.id}/${section.id}/${item.name.toLowerCase().replace(/\s+/g, '-')}`);
    }
    
    close(); // Close the popover (desktop) or dialog (mobile)
  };

  return (
    <div className="bg-white font-inter">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links for mobile */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900 data-selected:border-indigo-600 data-selected:text-indigo-600"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel key={category.name} className="space-y-10 px-4 pt-10 pb-8">
                    <div className="grid grid-cols-2 gap-x-4">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x200/CCCCCC/000000?text=Image+Error"; }}
                          />
                          <a href={item.href} className="mt-6 block font-medium text-gray-900">
                            <span aria-hidden="true" className="absolute inset-0 z-10" />
                            {item.name}
                          </a>
                          <p aria-hidden="true" className="mt-1">
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <a 
                                href={item.href} 
                                onClick={() => {
                                    handleCategoryClicked(category, section, item);
                                    setOpen(false); // Close the mobile menu after clicking
                                }}
                                className="-m-2 block p-2 text-gray-500"
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

        

          
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#" className="flex items-center">
                  <span className="sr-only">Your Company</span>
                  <img
                    onClick={()=>navigate('/')}
                    alt="Company Logo"
                    src="https://upanah.com/wp-content/uploads/2024/10/Upanah-Logo.png"
                    className="h-14 w-14 rounded-full object-cover ring-2 ring-indigo-500 ring-offset-2"
                  />
                  <span className="ml-2 text-2xl font-extrabold text-gray-900 tracking-tight">FootLux</span>
                </a>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      <div className="relative flex">
                        <PopoverButton className="group relative flex items-center justify-center text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-open:text-indigo-600">
                          {category.name}
                          <span
                            aria-hidden="true"
                            className="absolute inset-x-0 -bottom-px z-30 h-0.5 transition duration-200 ease-out group-data-open:bg-indigo-600"
                          />
                        </PopoverButton>
                      </div>
                      <PopoverPanel
                        transition
                        className="absolute inset-x-0 top-full z-20 w-full bg-white text-sm text-gray-500 transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                      >
                        {/* The PopoverPanel child must be a function that receives the state, including `close` */}
                        {({ close }) => (
                            <>
                                <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow-sm" />
                                <div className="relative bg-white">
                                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                            <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                                {category.featured.map((item) => (
                                                    <div key={item.name} className="group relative text-base sm:text-sm">
                                                        <img
                                                            alt={item.imageAlt}
                                                            src={item.imageSrc}
                                                            className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                                                            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x200/CCCCCC/000000?text=Image+Error"; }}
                                                        />
                                                        <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                                            <span aria-hidden="true" className="absolute inset-0 z-10" />
                                                            {item.name}
                                                        </a>
                                                        <p aria-hidden="true" className="mt-1">
                                                            Shop now
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                                {category.sections.map((section) => (
                                                    <div key={section.name}>
                                                        <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                                            {section.name}
                                                        </p>
                                                        <ul
                                                            role="list"
                                                            aria-labelledby={`${section.name}-heading`}
                                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                        >
                                                            {section.items.map((item) => (
                                                                <li key={item.name} className="flex">
                                                                    <a 
                                                                        href={item.href} 
                                                                        className="hover:text-gray-800"
                                                                        onClick={() => handleCategoryClicked(category, section, item, close)}
                                                                    >
                                                                        {item.name}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                      </PopoverPanel>
                    </Popover>
                  ))}
                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center">
            {/* ... Other parts of your navigation bar ... */}

            {/* Search */}
            <div className="flex lg:ml-6">
                <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                </a>
            </div>

            {/* Profile Icon with Dropdown */}
            <div className="relative">
                <button
                    onClick={handleProfileClick}
                    className="p-2 text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                    <span className="sr-only">User Profile</span>
                    <UserIcon className="size-6" aria-hidden="true" />
                </button>

                {/* Dropdown Menu */}
                {isProfileDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
                            <button
                                onClick={handleProfilePageClick}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                role="menuitem"
                            >
                                Profile
                            </button>
                            <button
                                onClick={handleMyOrdersClick}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                role="menuitem"
                            >
                                My Orders
                            </button>
                            <button
                                onClick={handleLogout}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                role="menuitem"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Cart */}
            <div className="ml-4 flow-root lg:ml-6">
                <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                        aria-hidden="true"
                        className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                </a>
            </div>
        </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}