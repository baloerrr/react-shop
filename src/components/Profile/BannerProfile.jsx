import React from 'react'
import { nodejs, IamRifai } from '../../assets/images'
function BannerProfile() {
  return (
    <div className="flex flex-col w-full md:h-[400px] h-[300px]">
      <div className="flex justify-center w-full md:h-[300px] h-[200px] bg-black">
        <img src={IamRifai} alt="" className="object-cover" />
      </div>
      <div className=" md:w-[150px] bg-gray-300 w-[100px] h-auto absolute md:top-[300px] top-[230px] md:left-[100px] left-[50px] md:ring-8 ring-4 dark:ring-slate-900 ring-white rounded-full">
        <img src={nodejs} alt="" className="rounded-full object-fill " />
      </div>
    </div>
  )
}

export default BannerProfile
