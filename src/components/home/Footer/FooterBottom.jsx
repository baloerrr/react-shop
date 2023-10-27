import React from 'react'
import { AiOutlineCopyright } from 'react-icons/ai'

const FooterBottom = () => {
  return (
    <div className="w-full bg-[#F5F5F3] group dark:bg-slate-900 dark:text-bgBase">
      <div className="max-w-container mx-auto border-t-[1px] py-10">
        <p className="text-titleFont font-normal text-center flex md:items-center justify-center text-lightText duration-200 text-sm">
          <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
            <AiOutlineCopyright />
          </span>
          Copyright 2022 | ShowcaseYuk. | All Rights Reserved |
          <a
            href="https://www.instagram.com/studioitproduction/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="ml-1 font-medium group-hover:text-primeColor">
              Powered by SIT Production
            </span>
          </a>
        </p>
      </div>
    </div>
  )
}

export default FooterBottom
