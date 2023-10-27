import React from 'react'
import { FaSearch } from 'react-icons/fa'

const BannerBottom = () => {
  return (
    <div className="w-full bg-white border-b-[1px] py-6 border-b-gray-200 px-4 dark:bg-slate-900 dark:border-b-gray-700">
      <div className="text-center">
        <h1 className="font-extrabold text-2xl dark:text-bgBase">
          Semua Showcase
        </h1>
      </div>
      <div className="flex justify-center my-4">
        <div className="md:flex relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-[#F5F5F3] hidden items-center gap-2 justify-center px-6 rounded-xl">
          <input
            className="md:flex hidden text-lg placeholder:text-lg flex-1 h-full outline-none bg-[#F5F5F3] placeholder:text-[#C4C4C4] placeholder:text-[14px]"
            type="text"
            placeholder="Search Showcase ⚡"
          />
          <button>
            <FaSearch className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-3">
        <button className="px-4 py-1 border-[1px] border-gray-600 bg-transparent rounded-full p-0 dark:text-bgBase">
          React JS
        </button>
        <button className="px-4 py-1 border-[1px] border-gray-600 bg-transparent rounded-full p-0 dark:text-bgBase">
          React JS
        </button>
        <button className="px-4 py-1 border-[1px] border-gray-600 bg-transparent rounded-full p-0 dark:text-bgBase">
          React JS
        </button>
        <button className="px-4 py-1 border-[1px] border-gray-600 bg-transparent rounded-full p-0 dark:text-bgBase">
          React JS
        </button>
        <button className="px-4 py-1 border-[1px] border-gray-600 bg-transparent rounded-full p-0 dark:text-bgBase">
          React JS
        </button>
        <button className="px-4 py-1 border-[1px] border-gray-600 bg-transparent rounded-full p-0 dark:text-bgBase">
          React JS
        </button>
        <button className="px-4 py-1 border-[1px] border-gray-600 bg-transparent rounded-full p-0 dark:text-bgBase">
          React JS
        </button>
        <button className="px-4 py-1 border-[1px] border-gray-600 bg-transparent rounded-full p-0 dark:text-bgBase">
          React JS
        </button>
        <button className="px-4 py-1 border-[1px] border-gray-600 bg-transparent rounded-full p-0 dark:text-bgBase">
          React JS
        </button>
      </div>
    </div>
  )
}

export default BannerBottom
