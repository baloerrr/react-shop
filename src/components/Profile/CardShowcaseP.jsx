import React, { useState } from 'react'
import ShowcaseCard from '../../components/home/Showcase/ShowcaseCard'

function CardShowcaseP() {
  const [Klik, setKlik] = useState(false)
  const Klikaku = () => {
    setKlik(!Klik)

    setTimeout(() => {
      setKlik(false)
    }, 300)
  }
  return (
    <div className="flex flex-col md:mx-10 w-full h-auto mt-[50px]  md:mt-[125px]  ">
      <div className="flex flex-row gap-10">
        <h1 className="md:text-[40px] text-[25px] text-primeColor font-semibold">
          My Showcase{' '}
        </h1>
        <div className="w-[40px] h-auto">
          <button
            onClick={Klikaku}
            className={
              Klik
                ? '-translate-y-5 md:w-full md:h-[40px] w-[20px] h-[20px] flex justify-center items-center bg-slate-500 text-white rounded-full md:text-[30px] text-[15px] mt-2  transition hover:bg-primeColor hover:scale-110 hover:shadow-lg  hover:shadow-primeColor hover:duration-300 hover:ease-in-out ease-in-out '
                : 'md:w-full md:h-[40px] w-[20px] h-[20px] flex justify-center items-center bg-slate-500 text-white rounded-full md:text-[30px] text-[15px] mt-2 transition hover:bg-primeColor hover:scale-110 hover:shadow-lg  hover:shadow-primeColor hover:duration-300 hover:ease-in-out ease-in-out '
            }
          >
            {' '}
            +
          </button>
        </div>
      </div>
      <div className="w-[100%] flex flex-wrap overflow-hidden justify-start gap-5 md:my-[50px] my-[20px] w-[88%] h-[500px] overflow-y-scroll">
        <div className=" flex flex-wrap  gap-x-5 mt-5 gap-y-16 mr-4">
          <ShowcaseCard />
        </div>
      </div>
    </div>
  )
}

export default CardShowcaseP
