import React from 'react'

function CardUser(props) {
  return (
    <div
      className="md:w-[280px] md:h-[380px] w-[100%] h-[60vh] dark:bg-[#33106A] bg-[#eeee] rounded-[10px] flex flex-col transform transition-transform md:hover:scale-105 hover:ring-2 
          hover:shadow-primeColor hover:shadow-lg dark:hover:shadow-[#9153F4]  hover:duration-300 ease-in-out overflow-hidden"
    >
      <div className="w-full h-[55%] rounded-t-[10px] overflow-hidden">
        <img src={props.img} alt="" className="w-full h-full  object-cover" />
      </div>
      <div className="flex flex-col justify-center ml-5 mt-5">
        <h1 className="text-[16px] font-bold text-[#1B2430] dark:text-[#ffff]">
          Amal Cooding
        </h1>
        <h2 className="text-[14px] font-bold">Back End Developer</h2>
        <p className="text-[13px] text-[#1B2430] dark:text-[#ffff] mt-2">
          Amal Adalah Seorang Back End Developer Yang sudah berpengalaman.
        </p>
        <div className="mt-[14px]">
          <button className="btn btn-sm rounded-[5px] w-[110px] h-[20px] bg-primeColor border-none dark:bg-[#9153F4] dark:hover:bg-[#9153F4] hover:bg-primeColor text-white">
            Profile
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardUser
