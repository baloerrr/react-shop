import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { MdClose } from 'react-icons/md'
import { HiMenuAlt2 } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { navBarList } from '../../../constants'
import Flex from '../../designLayouts/Flex'
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import Logo from '../../Logo/Logo'
import Toggle from '../../Toggle/Toggle'

const Header = () => {
  const products = useSelector((state) => state.orebiReducer.products)

  const [showMenu, setShowMenu] = useState(true)
  const [sidenav, setSidenav] = useState(false)
  const [category, setCategory] = useState(false)
  const [brand, setBrand] = useState(false)

  const [searchQuery, setSearchQuery] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])
  const [showSearchBar, setShowSearchBar] = useState(false)
  const [showUser, setShowUser] = useState(false)
  const [showSearchInput, setShowSearchInput] = useState(false)

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleSearchInput = () => {
    setShowSearchInput(!showSearchInput)
  }

  const location = useLocation()

  useEffect(() => {
    let ResponsiveMenu = () => {
      if (window.innerWidth < 667) {
        setShowMenu(false)
      } else {
        setShowMenu(true)
      }
    }
    ResponsiveMenu()
    window.addEventListener('resize', ResponsiveMenu)
  }, [])

  return (
    <div className="w-full h-20 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-100 dark:bg-slate-900 dark:border-b-gray-700">
      <nav className="h-full px-4 max-w-container mx-auto relative">
        <Flex className="flex items-center md:justify-between md:mx-14 mx-5 justify-between h-full">
          {/* Logo */}
          <Logo />

          {/* Search Mobile */}
          {showSearchInput ? (
            <div className="md:hidden relative flex w-full h-full text-base text-primeColor bg-[#F5F5F3] rounded-xl">
              <input
                className="md:flex absolute h-full outline-none bg-[#F5F5F3] placeholder:text-[#C4C4C4] placeholder:text-[14px]"
                type="text"
                onChange={handleSearch}
                value={searchQuery}
                placeholder="Search your products here"
              />
              {searchQuery && (
                <div
                  className={`w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
                >
                  {searchQuery &&
                    filteredProducts.map((item) => (
                      <div
                        onClick={() =>
                          navigate(
                            `/product/${item.productName
                              .toLowerCase()
                              .split(' ')
                              .join('')}`,
                            {
                              state: {
                                item: item,
                              },
                            },
                          ) &
                          setShowSearchBar(true) &
                          setSearchQuery('')
                        }
                        key={item._id}
                        className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
                      >
                        <img className="w-24" src={item.img} alt="productImg" />
                        <div className="flex flex-col gap-1">
                          <p className="font-semibold text-lg">
                            {item.productName}
                          </p>
                          <p className="text-xs">{item.des}</p>
                          <p className="text-sm">
                            Price:{' '}
                            <span className="text-primeColor font-semibold">
                              ${item.price}
                            </span>
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          ) : (
            ''
          )}

          {/* Navigation */}
          <div>
            {showMenu && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center w-auto z-50 p-0 gap-2"
              >
                <>
                  {navBarList.map(({ _id, title, link }) => (
                    <div className="flex items-center gap-2" key={_id}>
                      <NavLink
                        to={link}
                        state={{ data: location.pathname.split('/')[1] }}
                        className={`navActiveEffect tracking-[1px] text-[15px] font-extrabold text-black hover:text-primeColor dark:text-bgBase dark:hover:text-primeColor`}
                      >
                        {title}
                      </NavLink>
                      <li className="text-gray-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          stroke="currentColor"
                          class="w-4 h-4 current-fill"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                          />
                        </svg>
                      </li>
                    </div>
                  ))}

                  <Toggle />
                </>
              </motion.ul>
            )}
            <div className="md:hidden mr-10">
              <Toggle />
            </div>
            <HiMenuAlt2
              onClick={() => setSidenav(!sidenav)}
              className="inline-block md:hidden cursor-pointer w-8 h-6 absolute top-6 right-4"
            />

            {/* Sidenav mobile */}
            {sidenav && (
              <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50">
                <motion.div
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-[80%] h-full relative"
                >
                  <div className="w-full h-full bg-primeColor p-6">
                    W
                    <ul className="text-gray-200 flex flex-col gap-2">
                      {navBarList.map((item) => (
                        <li
                          className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                          key={item._id}
                        >
                          <NavLink
                            to={item.link}
                            state={{ data: location.pathname.split('/')[1] }}
                            onClick={() => setSidenav(false)}
                          >
                            {item.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <h1
                        onClick={() => setCategory(!category)}
                        className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                      >
                        Shop by Category{' '}
                        <span className="text-lg">{category ? '-' : '+'}</span>
                      </h1>
                      {category && (
                        <motion.ul
                          initial={{ y: 15, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          className="text-sm flex flex-col gap-1"
                        >
                          <li className="headerSedenavLi">New Arrivals</li>
                          <li className="headerSedenavLi">Gudgets</li>
                          <li className="headerSedenavLi">Accessories</li>
                          <li className="headerSedenavLi">Electronics</li>
                          <li className="headerSedenavLi">Others</li>
                        </motion.ul>
                      )}
                    </div>
                    <div className="mt-4">
                      <h1
                        onClick={() => setBrand(!brand)}
                        className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                      >
                        Shop by Brand
                        <span className="text-lg">{brand ? '-' : '+'}</span>
                      </h1>
                      {brand && (
                        <motion.ul
                          initial={{ y: 15, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          className="text-sm flex flex-col gap-1"
                        >
                          <li className="headerSedenavLi">New Arrivals</li>
                          <li className="headerSedenavLi">Gudgets</li>
                          <li className="headerSedenavLi">Accessories</li>
                          <li className="headerSedenavLi">Electronics</li>
                          <li className="headerSedenavLi">Others</li>
                        </motion.ul>
                      )}
                    </div>
                  </div>
                  <span
                    onClick={() => setSidenav(false)}
                    className="w-8 h-8 border-[1px] border-gray-300 absolute top-2 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
                  >
                    <MdClose />
                  </span>
                </motion.div>
              </div>
            )}
          </div>
        </Flex>
      </nav>
    </div>
  )
}

export default Header
