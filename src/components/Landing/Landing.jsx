import React, { useState } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Landing() {
  const [Klik, setKlik] = useState(false)
  const navigate = useNavigate()
  const Klikaku = () => {
    setKlik(!Klik)
    setTimeout(() => {
      navigate('/showcase')
      setKlik(false)
    }, 500)
  }

  const { theme, heroImage } = useTheme()
  return (
    <main className="flex md:flex-row justify-center flex-col-reverse w-full h-auto md:mx-8 md:mt-10 mt-5">
      <div className="md:py-[75px] my-[10px] flex md:mx-14px w-[50%]  flex-col h-auto ">
        <div className=" md:text-[50px] text-[25px] md:mt-0 mt-5 font-extrabold text-left w-screen">
          <h1 className=" dark:text-[#ffff] text-[#1B2430]">
            Wasap Bro,{' '}
            <span className=" dark:text-[#9153F4] text-[#810CA8]">
              Bingung
              <br />
              Cari{' '}
            </span>
            Refrensi?
          </h1>
          <p className=" dark:text-[#ffff] text-[#1B2430]  md:text-[20px] text-[12px] font-normal mt-[10px] md:mt-[22px]">
            ShowcaseYuk, Menjadi Platform yang menyediakan <br />
            tempat buat kita kita anak muda shearing serta <br />
            flexing project kita.
          </p>
          <button
            onClick={Klikaku}
            className={
              Klik
                ? ' cursor-pointer flex justify-center items-center md:rounded-xl rounded-md z-20 md:w-[250px] md:h-[55px] w-[200px] h-[40px] text-[20px] font-bold translate-x-1 -translate-y-1 transition scale-100 dark:hover:bg-[#9153F4] dark:bg-[#9153F4]  duration-300 hover:bg-primeColor bg-primeColor md:mt-[40px] mt-[20px] border-none  text-white'
                : ` cursor-pointer flex justify-center items-center md:rounded-xl rounded-md z-20 md:w-[250px] md:h-[55px] w-[110px] h-[30px] md:text-[20px] text-[10px] font-bold mt-10px dark:bg-[#9153F4] dark:hover:bg-[#9153F4] bg-primeColor transition ease-in-out md:mt-[40px] shadow-2xl dark:shadow-[#9153F4] shadow-primeColor mt-[20px] border-none text-white hover:bg-primeColor `
            }
          >
            Cek Showcase Yuk
          </button>
        </div>
      </div>
      <div className="md:w-[50%]  w-screen h-[250px] md:h-auto -ml-6  md:-ml-[80px] md:-mt-[50px] flex justify-center  ">
        <img src={heroImage} alt="" className="overflow-hidden object-cover " />
      </div>
    </main>
  )
}

export default Landing
