import React from 'react'
import {
  SlSocialFacebook,
  SlSocialGithub,
  SlSocialLinkedin,
  SlSocialInstagram,
} from 'react-icons/sl'

function InfoProfile() {
  return (
    <div className="md:mx-10 mx-none flex md:flex-row flex-col w-full h-auto ">
      <div className="flex flex-col md:border-r-2 md:pr-40">
        <h1 className="md:text-[35px] text-[25px] font-semibold dark:text-[#9153F4] text-primeColor">
          Faiz Aflah Hafizuddin
        </h1>
        <p className="md:text-[20px] text-[20px] font-normal md:-mt-1 ">
          Front End Developer
        </p>
        <article className="md:mt-[25px] mt-[20px] md:w-[600px] w-[280px]">
          <p className="text-left md:text-[20px] text-[15px]   font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{' '}
          </p>
        </article>
      </div>

      <div className="flex w-full flex-col h-auto md:gap-1 md:ml-32 mt-10 md:-mt-3">
        <h1 className="md:ml-8 md:text-[35px] text-[25px] font-normal dark:text-[#9153F4] text-primeColor ">
          Social Media
        </h1>
        <ul className="flex flex-row md:justify-evenly md:gap-0 gap-5 md:ml-1 w-[50%] h-auto mt-1 mb-5 md:mb-10">
          <li
            className="items-center justify-center flex md:w-[40px] w-[30px] h-[30px] md:h-[40px] dark:bg-[#9153F4] bg-primeColor rounded-full 
                    transition hover:shadow-lg dark:hover:shadow-[#9153F4] hover:shadow-primeColor hover:scale-110 hover:ease-in-out duration-300 "
          >
            <SlSocialFacebook className="w-[30px] h-[18px]" />
          </li>
          <li
            className="items-center justify-center flex md:w-[40px] w-[30px] h-[30px] md:h-[40px] dark:bg-[#9153F4] bg-primeColor rounded-full 
                    transition hover:shadow-lg dark:hover:shadow-[#9153F4] hover:shadow-primeColor hover:scale-110 hover:ease-in-out duration-300"
          >
            <SlSocialInstagram className="w-[30px] h-[18px]" />
          </li>
          <li
            className="items-center justify-center flex md:w-[40px] w-[30px] h-[30px] md:h-[40px] dark:bg-[#9153F4] bg-primeColor rounded-full 
                    transition hover:shadow-lg dark:hover:shadow-[#9153F4] hover:shadow-primeColor hover:scale-110 hover:ease-in-out duration-300"
          >
            <SlSocialLinkedin className="w-[30px] h-[18px]" />
          </li>
          <li
            className="items-center justify-center flex md:w-[40px] w-[30px] h-[30px] md:h-[40px] dark:bg-[#9153F4] bg-primeColor rounded-full 
                    transition hover:shadow-lg dark:hover:shadow-[#9153F4] hover:shadow-primeColor hover:scale-110 hover:ease-in-out duration-300"
          >
            <SlSocialGithub className="w-[30px]  h-[18px]" />
          </li>
        </ul>
        <article className="md:w-[350px] font-normal md:text-[18px] text-[15px] w-[280px] md:ml-8 ">
          <p>
            Ayoo Kepoin Social Media Gua, Bukan hanya Keseharian Gua tapi juga
            Bakal ada banyak Informasi Menarik Seputar Dunia IT
          </p>
        </article>
      </div>
    </div>
  )
}

export default InfoProfile
